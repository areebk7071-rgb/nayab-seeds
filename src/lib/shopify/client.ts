const domain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
const token = import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const apiVersion = import.meta.env.VITE_SHOPIFY_API_VERSION || '2024-10';

export function isShopifyConfigured(): boolean {
  return Boolean(domain && token);
}

export async function shopifyFetch<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  if (!isShopifyConfigured()) {
    throw new Error('Shopify is not configured');
  }

  const response = await fetch(
    `https://${domain}/api/${apiVersion}/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': token!,
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  const json = await response.json();

  if (json.errors?.length) {
    throw new Error(json.errors[0]?.message || 'Shopify API error');
  }

  return json.data as T;
}
