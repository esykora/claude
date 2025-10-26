#!/usr/bin/env node

/**
 * Kroger MCP Server
 * Model Context Protocol server for interacting with Kroger's public products API
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import { KrogerClient } from './kroger-client.js';
import { searchProducts, SearchProductsArgs } from './tools/search-products.js';

// Get credentials from environment variables
const KROGER_CLIENT_ID = process.env.KROGER_CLIENT_ID;
const KROGER_CLIENT_SECRET = process.env.KROGER_CLIENT_SECRET;

if (!KROGER_CLIENT_ID || !KROGER_CLIENT_SECRET) {
  console.error('Error: KROGER_CLIENT_ID and KROGER_CLIENT_SECRET environment variables are required');
  console.error('Please set these variables before running the server.');
  process.exit(1);
}

// Initialize Kroger client
const krogerClient = new KrogerClient(KROGER_CLIENT_ID, KROGER_CLIENT_SECRET);

// Create MCP server
const server = new Server(
  {
    name: 'kroger-mcp-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
      resources: {},
    },
  }
);

/**
 * List available tools
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'search_products',
        description: 'Search for products in Kroger stores. Returns product information including name, brand, price, description, images, and availability.',
        inputSchema: {
          type: 'object',
          properties: {
            searchTerm: {
              type: 'string',
              description: 'The search term to find products (e.g., "organic milk", "bread", "apples")',
            },
            limit: {
              type: 'number',
              description: 'Maximum number of results to return (1-50, default: 10)',
              minimum: 1,
              maximum: 50,
            },
            locationId: {
              type: 'string',
              description: 'Optional Kroger store location ID to get location-specific pricing and availability',
            },
            brand: {
              type: 'string',
              description: 'Optional brand name to filter results',
            },
          },
          required: ['searchTerm'],
        },
      },
      {
        name: 'get_product',
        description: 'Get detailed information about a specific product by its product ID',
        inputSchema: {
          type: 'object',
          properties: {
            productId: {
              type: 'string',
              description: 'The Kroger product ID',
            },
            locationId: {
              type: 'string',
              description: 'Optional Kroger store location ID to get location-specific pricing',
            },
          },
          required: ['productId'],
        },
      },
    ],
  };
});

/**
 * Handle tool calls
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'search_products': {
        const searchArgs = args as unknown as SearchProductsArgs;
        const result = await searchProducts(krogerClient, searchArgs);
        return {
          content: [
            {
              type: 'text',
              text: result,
            },
          ],
        };
      }

      case 'get_product': {
        const { productId, locationId } = args as unknown as { productId: string; locationId?: string };
        if (!productId) {
          return {
            content: [
              {
                type: 'text',
                text: 'Error: productId is required',
              },
            ],
            isError: true,
          };
        }

        const response = await krogerClient.getProduct(productId, locationId);

        if (!response.data || response.data.length === 0) {
          return {
            content: [
              {
                type: 'text',
                text: `Product not found: ${productId}`,
              },
            ],
          };
        }

        const product = response.data[0];
        const formatted = await searchProducts(krogerClient, { searchTerm: product.name || productId, limit: 1 });

        return {
          content: [
            {
              type: 'text',
              text: formatted,
            },
          ],
        };
      }

      default:
        return {
          content: [
            {
              type: 'text',
              text: `Unknown tool: ${name}`,
            },
          ],
          isError: true,
        };
    }
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: `Error executing tool ${name}: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
      isError: true,
    };
  }
});

/**
 * List available resources
 */
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: 'kroger://api-status',
        name: 'Kroger API Status',
        description: 'Current authentication status and connection information for the Kroger API',
        mimeType: 'text/plain',
      },
    ],
  };
});

/**
 * Handle resource reads
 */
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const { uri } = request.params;

  if (uri === 'kroger://api-status') {
    const status = krogerClient.getAuthStatus();
    const statusText = `Kroger API Status
==================

Authenticated: ${status.authenticated ? 'Yes' : 'No'}
Token Expires In: ${status.expiresIn !== null ? `${status.expiresIn} seconds` : 'N/A'}

${status.authenticated ? 'The server is connected and ready to handle requests.' : 'The server will authenticate on the first API request.'}
`;

    return {
      contents: [
        {
          uri,
          mimeType: 'text/plain',
          text: statusText,
        },
      ],
    };
  }

  return {
    contents: [],
  };
});

/**
 * Start the server
 */
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Kroger MCP Server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
