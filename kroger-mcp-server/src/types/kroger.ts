/**
 * Kroger API Type Definitions
 */

export interface KrogerAuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
}

export interface KrogerProduct {
  productId: string;
  upc?: string;
  name?: string;
  brand?: string;
  description?: string;
  categories?: string[];
  images?: Array<{
    perspective: string;
    size: string;
    url: string;
  }>;
  items?: Array<{
    itemId: string;
    price?: {
      regular?: number;
      promo?: number;
      regularPerUnitEstimate?: number;
      promoPerUnitEstimate?: number;
    };
    size?: string;
    soldBy?: string;
  }>;
  temperature?: {
    indicator: string;
    heatSensitive: boolean;
  };
  aisleLocations?: Array<{
    bayNumber: string;
    description: string;
    number: string;
    numberOfFacings: string;
    sequenceNumber: string;
    side: string;
    shelfNumber: string;
    shelfPositionInBay: string;
  }>;
}

export interface KrogerProductsResponse {
  data: KrogerProduct[];
  meta: {
    pagination: {
      start: number;
      limit: number;
      total?: number;
    };
  };
}

export interface KrogerLocation {
  locationId: string;
  name?: string;
  address?: {
    addressLine1?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    county?: string;
  };
  geolocation?: {
    latitude: number;
    longitude: number;
  };
  phone?: string;
  departments?: Array<{
    departmentId: string;
    name: string;
    hours?: Record<string, string>;
  }>;
}

export interface KrogerLocationsResponse {
  data: KrogerLocation[];
  meta?: {
    pagination?: {
      start: number;
      limit: number;
      total?: number;
    };
  };
}

export interface SearchProductsParams {
  searchTerm: string;
  limit?: number;
  start?: number;
  locationId?: string;
  brand?: string;
}

export interface KrogerAPIError {
  code: string;
  message: string;
  details?: unknown;
}
