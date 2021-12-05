import {FetchProductsParams, Product} from './types';
import {API_URL} from 'constants/globals';

export const fetchProducts = async (queryParams?: FetchProductsParams): Promise<Product[]> => {
  try {
    // Old browsers do not support URLSearchParams. Add polyfill if needed
    const params = new URLSearchParams(queryParams).toString();
    const response = await fetch(`${API_URL}/products?${params}`);
    return await response.json();
  } catch {
    throw new Error("Couldn't fetch products");
  }
};
