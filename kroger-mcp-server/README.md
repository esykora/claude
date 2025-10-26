# Kroger MCP Server

A Model Context Protocol (MCP) server that provides tools to interact with the Kroger public products API. This server enables AI assistants like Claude to search for products, get pricing information, and access product details from Kroger stores.

## Features

- **Product Search**: Search for products by keyword with optional filters
- **Product Details**: Get detailed information about specific products
- **Price Information**: Access regular and promotional pricing
- **Location-Aware**: Support for store-specific pricing and availability
- **Automatic Authentication**: OAuth 2.0 token management with automatic refresh

## Prerequisites

- Node.js 18.0.0 or higher
- Kroger Developer API credentials

## Getting Kroger API Credentials

1. Visit [Kroger Developer Portal](https://developer.kroger.com)
2. Create an account or sign in
3. Register a new application
4. Copy your Client ID and Client Secret

## Installation

1. Clone or download this repository

2. Install dependencies:
```bash
cd kroger-mcp-server
npm install
```

3. Create a `.env` file with your credentials:
```bash
cp .env.example .env
```

4. Edit `.env` and add your Kroger API credentials:
```
KROGER_CLIENT_ID=your_actual_client_id
KROGER_CLIENT_SECRET=your_actual_client_secret
```

5. Build the server:
```bash
npm run build
```

## Usage with Claude Desktop

To use this MCP server with Claude Desktop, add it to your Claude configuration file:

### macOS/Linux
Edit `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "kroger": {
      "command": "node",
      "args": ["/absolute/path/to/kroger-mcp-server/dist/index.js"],
      "env": {
        "KROGER_CLIENT_ID": "your_client_id",
        "KROGER_CLIENT_SECRET": "your_client_secret"
      }
    }
  }
}
```

### Windows
Edit `%APPDATA%\Claude\claude_desktop_config.json` with the same structure.

**Important**: Replace `/absolute/path/to/kroger-mcp-server` with the actual full path to where you installed the server.

## Available Tools

### search_products

Search for products in Kroger stores.

**Parameters:**
- `searchTerm` (required): The search keyword (e.g., "organic milk", "bread")
- `limit` (optional): Number of results to return (1-50, default: 10)
- `locationId` (optional): Kroger store location ID for location-specific pricing
- `brand` (optional): Filter by brand name

**Example usage in Claude:**
```
Can you search for organic apples at Kroger?
```

**Example response:**
```markdown
# Kroger Product Search Results
Search Term: "organic apples"
Found: 10 product(s)

## Product 1
Name: Organic Gala Apples
Brand: Simple Truth Organic
Product ID: 0001111234567
Price: Regular: $4.99, Promo: $3.99
Size: 3 lb bag
Categories: Produce, Organic, Apples
```

### get_product

Get detailed information about a specific product.

**Parameters:**
- `productId` (required): The Kroger product ID
- `locationId` (optional): Store location ID for pricing

**Example usage in Claude:**
```
Get details for Kroger product ID 0001111234567
```

## Available Resources

### kroger://api-status

View the current authentication status and token information.

**Example usage in Claude:**
```
Check the Kroger API status
```

## Development

### Running in development mode
```bash
npm run dev
```

### Building
```bash
npm run build
```

### Project Structure
```
kroger-mcp-server/
├── src/
│   ├── index.ts              # Main MCP server
│   ├── kroger-client.ts      # Kroger API client
│   ├── tools/
│   │   └── search-products.ts # Search tool implementation
│   └── types/
│       └── kroger.ts         # TypeScript type definitions
├── package.json
├── tsconfig.json
└── README.md
```

## API Limits and Best Practices

- The Kroger API uses OAuth 2.0 authentication
- Access tokens expire after 30 minutes (1800 seconds)
- The server automatically refreshes tokens before expiry
- Maximum 50 results per search request
- Be mindful of API rate limits (specific limits not publicly documented)

## Troubleshooting

### Authentication Errors
- Verify your Client ID and Client Secret are correct
- Ensure credentials are properly set in environment variables
- Check that your application is registered at developer.kroger.com

### No Results Found
- Try broader search terms
- Check spelling of product names
- Some products may not be available in all locations

### Server Not Starting
- Ensure Node.js version 18 or higher is installed
- Run `npm install` to install dependencies
- Run `npm run build` to compile TypeScript
- Check that environment variables are set correctly

## Example Queries

Here are some example queries you can ask Claude once the server is configured:

1. "Search for organic milk at Kroger"
2. "Find whole wheat bread products"
3. "Look up bananas and show me the prices"
4. "Search for Kroger brand cereal"
5. "What's the status of the Kroger API connection?"

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## Related Links

- [Kroger Developer Portal](https://developer.kroger.com)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
