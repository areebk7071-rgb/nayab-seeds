import { shopifyFetch, isShopifyConfigured } from './client';
import { CART_CREATE_MUTATION, CART_LINES_ADD_MUTATION } from './queries';

const CART_ID_KEY = 'nayab_shopify_cart_id';

export function getStoredCartId(): string | null {
  return localStorage.getItem(CART_ID_KEY);
}

export function storeCartId(id: string) {
  localStorage.setItem(CART_ID_KEY, id);
}

interface CartResult {
  cart: {
    id: string;
    checkoutUrl: string;
    totalQuantity: number;
  };
}

export async function createShopifyCart(variantId: string, quantity: number): Promise<CartResult['cart']> {
  const data = await shopifyFetch<{ cartCreate: { cart: CartResult['cart']; userErrors: { message: string }[] } }>(
    CART_CREATE_MUTATION,
    { lines: [{ merchandiseId: variantId, quantity }] }
  );

  if (data.cartCreate.userErrors?.length) {
    throw new Error(data.cartCreate.userErrors[0].message);
  }

  storeCartId(data.cartCreate.cart.id);
  return data.cartCreate.cart;
}

export async function addToShopifyCart(
  cartId: string,
  variantId: string,
  quantity: number
): Promise<CartResult['cart']> {
  const data = await shopifyFetch<{ cartLinesAdd: { cart: CartResult['cart']; userErrors: { message: string }[] } }>(
    CART_LINES_ADD_MUTATION,
    { cartId, lines: [{ merchandiseId: variantId, quantity }] }
  );

  if (data.cartLinesAdd.userErrors?.length) {
    throw new Error(data.cartLinesAdd.userErrors[0].message);
  }

  return data.cartLinesAdd.cart;
}

export async function getCheckoutUrl(variantId: string, quantity: number): Promise<string> {
  if (!isShopifyConfigured()) {
    throw new Error('Shopify checkout unavailable');
  }

  const existingId = getStoredCartId();

  if (existingId) {
    try {
      const cart = await addToShopifyCart(existingId, variantId, quantity);
      return cart.checkoutUrl;
    } catch {
      localStorage.removeItem(CART_ID_KEY);
    }
  }

  const cart = await createShopifyCart(variantId, quantity);
  return cart.checkoutUrl;
}
