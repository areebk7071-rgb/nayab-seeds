import type { Product } from '../types';
import { localProducts } from '../data/products';
import { isShopifyConfigured, shopifyFetch } from './shopify/client';
import { PRODUCTS_QUERY, PRODUCT_BY_HANDLE_QUERY } from './shopify/queries';
import { mapShopifyProduct } from './shopify/mappers';

interface ProductsResponse {
  products: { edges: { node: Parameters<typeof mapShopifyProduct>[0] }[] };
}

interface ProductResponse {
  product: Parameters<typeof mapShopifyProduct>[0] | null;
}

let cachedProducts: Product[] | null = null;

export async function getProducts(): Promise<Product[]> {
  if (cachedProducts) return cachedProducts;

  if (!isShopifyConfigured()) {
    cachedProducts = localProducts;
    return localProducts;
  }

  try {
    const data = await shopifyFetch<ProductsResponse>(PRODUCTS_QUERY, { first: 50 });
    const mapped = data.products.edges.map((e) => mapShopifyProduct(e.node));
    cachedProducts = mapped.length ? mapped : localProducts;
    return cachedProducts;
  } catch {
    cachedProducts = localProducts;
    return localProducts;
  }
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const local = localProducts.find((p) => p.handle === handle);
  if (!isShopifyConfigured()) return local ?? null;

  try {
    const data = await shopifyFetch<ProductResponse>(PRODUCT_BY_HANDLE_QUERY, { handle });
    if (!data.product) return local ?? null;
    return mapShopifyProduct(data.product);
  } catch {
    return local ?? null;
  }
}

export function getProductByHandleSync(handle: string): Product | undefined {
  return localProducts.find((p) => p.handle === handle);
}

export function clearProductCache() {
  cachedProducts = null;
}
