/**
 * Kroger API Client
 * Handles authentication and API requests to Kroger's public API
 */

import {
  KrogerAuthResponse,
  KrogerProductsResponse,
  SearchProductsParams,
  KrogerAPIError,
} from './types/kroger.js';

export class KrogerClient {
  private clientId: string;
  private clientSecret: string;
  private baseUrl = 'https://api.kroger.com/v1';
  private authUrl = 'https://api.kroger.com/v1/connect/oauth2/token';
  private accessToken: string | null = null;
  private tokenExpiry: number | null = null;

  constructor(clientId: string, clientSecret: string) {
    if (!clientId || !clientSecret) {
      throw new Error('Kroger API credentials are required');
    }
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  /**
   * Authenticate with Kroger API using OAuth 2.0 Client Credentials flow
   */
  private async authenticate(): Promise<void> {
    const credentials = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64');

    try {
      const response = await fetch(this.authUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          scope: 'product.compact',
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Authentication failed: ${response.status} ${errorText}`);
      }

      const data: KrogerAuthResponse = await response.json();
      this.accessToken = data.access_token;
      // Set expiry to 5 minutes before actual expiry for safety
      this.tokenExpiry = Date.now() + (data.expires_in - 300) * 1000;
    } catch (error) {
      throw new Error(`Failed to authenticate with Kroger API: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Check if token is valid and refresh if needed
   */
  private async ensureValidToken(): Promise<void> {
    if (!this.accessToken || !this.tokenExpiry || Date.now() >= this.tokenExpiry) {
      await this.authenticate();
    }
  }

  /**
   * Make authenticated request to Kroger API
   */
  private async makeRequest<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    await this.ensureValidToken();

    const url = new URL(`${this.baseUrl}${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    try {
      const response = await fetch(url.toString(), {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `API request failed: ${response.status}`;

        try {
          const errorData = JSON.parse(errorText);
          errorMessage += ` - ${errorData.message || errorText}`;
        } catch {
          errorMessage += ` - ${errorText}`;
        }

        throw new Error(errorMessage);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Request failed: ${String(error)}`);
    }
  }

  /**
   * Search for products
   */
  async searchProducts(params: SearchProductsParams): Promise<KrogerProductsResponse> {
    const queryParams: Record<string, string> = {
      'filter.term': params.searchTerm,
      'filter.limit': String(params.limit || 10),
    };

    if (params.start) {
      queryParams['filter.start'] = String(params.start);
    }

    if (params.locationId) {
      queryParams['filter.locationId'] = params.locationId;
    }

    if (params.brand) {
      queryParams['filter.brand'] = params.brand;
    }

    return await this.makeRequest<KrogerProductsResponse>('/products', queryParams);
  }

  /**
   * Get product by ID
   */
  async getProduct(productId: string, locationId?: string): Promise<KrogerProductsResponse> {
    const queryParams: Record<string, string> = {};

    if (locationId) {
      queryParams['filter.locationId'] = locationId;
    }

    return await this.makeRequest<KrogerProductsResponse>(`/products/${productId}`, queryParams);
  }

  /**
   * Get current authentication status
   */
  getAuthStatus(): { authenticated: boolean; expiresIn: number | null } {
    if (!this.accessToken || !this.tokenExpiry) {
      return { authenticated: false, expiresIn: null };
    }

    const expiresIn = Math.max(0, Math.floor((this.tokenExpiry - Date.now()) / 1000));
    return {
      authenticated: expiresIn > 0,
      expiresIn,
    };
  }
}
