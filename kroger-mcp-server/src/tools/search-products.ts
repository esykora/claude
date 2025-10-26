/**
 * Search Products Tool
 * MCP tool for searching Kroger products
 */

import { KrogerClient } from '../kroger-client.js';
import { KrogerProduct } from '../types/kroger.js';

export interface SearchProductsArgs {
  searchTerm: string;
  limit?: number;
  locationId?: string;
  brand?: string;
}

export async function searchProducts(
  client: KrogerClient,
  args: SearchProductsArgs
): Promise<string> {
  try {
    // Validate inputs
    if (!args.searchTerm || args.searchTerm.trim().length === 0) {
      return 'Error: searchTerm is required and cannot be empty';
    }

    const limit = Math.min(Math.max(args.limit || 10, 1), 50);

    // Search for products
    const response = await client.searchProducts({
      searchTerm: args.searchTerm,
      limit,
      locationId: args.locationId,
      brand: args.brand,
    });

    // Format response
    if (!response.data || response.data.length === 0) {
      return `No products found for search term: "${args.searchTerm}"`;
    }

    const products = response.data;
    const formattedProducts = products.map((product: KrogerProduct, index: number) => {
      const parts: string[] = [];

      // Product number
      parts.push(`\n## Product ${index + 1}`);

      // Basic info
      if (product.name) parts.push(`**Name:** ${product.name}`);
      if (product.brand) parts.push(`**Brand:** ${product.brand}`);
      if (product.productId) parts.push(`**Product ID:** ${product.productId}`);
      if (product.upc) parts.push(`**UPC:** ${product.upc}`);

      // Description
      if (product.description) {
        parts.push(`**Description:** ${product.description}`);
      }

      // Price information
      if (product.items && product.items.length > 0) {
        const item = product.items[0];
        if (item.price) {
          const priceInfo: string[] = [];
          if (item.price.regular !== undefined) {
            priceInfo.push(`Regular: $${item.price.regular.toFixed(2)}`);
          }
          if (item.price.promo !== undefined) {
            priceInfo.push(`Promo: $${item.price.promo.toFixed(2)}`);
          }
          if (priceInfo.length > 0) {
            parts.push(`**Price:** ${priceInfo.join(', ')}`);
          }
        }
        if (item.size) {
          parts.push(`**Size:** ${item.size}`);
        }
        if (item.soldBy) {
          parts.push(`**Sold By:** ${item.soldBy}`);
        }
      }

      // Categories
      if (product.categories && product.categories.length > 0) {
        parts.push(`**Categories:** ${product.categories.join(', ')}`);
      }

      // Images
      if (product.images && product.images.length > 0) {
        const imageUrls = product.images
          .filter(img => img.perspective === 'front' || img.perspective === 'default')
          .map(img => img.url);
        if (imageUrls.length > 0) {
          parts.push(`**Image:** ${imageUrls[0]}`);
        }
      }

      // Aisle location
      if (product.aisleLocations && product.aisleLocations.length > 0) {
        const location = product.aisleLocations[0];
        const locParts: string[] = [];
        if (location.description) locParts.push(location.description);
        if (location.number) locParts.push(`Aisle ${location.number}`);
        if (locParts.length > 0) {
          parts.push(`**Location:** ${locParts.join(', ')}`);
        }
      }

      return parts.join('\n');
    });

    let result = `# Kroger Product Search Results\n`;
    result += `**Search Term:** "${args.searchTerm}"\n`;
    result += `**Found:** ${products.length} product(s)\n`;

    if (response.meta?.pagination?.total) {
      result += `**Total Available:** ${response.meta.pagination.total}\n`;
    }

    result += formattedProducts.join('\n---\n');

    return result;
  } catch (error) {
    return `Error searching products: ${error instanceof Error ? error.message : String(error)}`;
  }
}
