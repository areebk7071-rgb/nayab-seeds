import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import type { Product, CartItem } from '../types';
import { isShopifyConfigured } from '../lib/shopify/client';
import {
  getCheckoutUrl,
  createShopifyCart,
  addToShopifyCart,
} from '../lib/shopify/cart';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isInCart: (productId: string) => boolean;
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  checkout: () => Promise<void>;
  isCheckingOut: boolean;
  useShopify: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const useShopify = isShopifyConfigured();

  const addToCart = useCallback((product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.product.id !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const isInCart = useCallback(
    (productId: string) => items.some((item) => item.product.id === productId),
    [items]
  );

  const toggleWishlist = useCallback((product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      return exists ? prev.filter((p) => p.id !== product.id) : [...prev, product];
    });
  }, []);

  const isInWishlist = useCallback(
    (productId: string) => wishlist.some((p) => p.id === productId),
    [wishlist]
  );

  /**
   * Checkout flow:
   * - If Shopify is configured, create a Shopify cart with the first item,
   *   then add any remaining items, and finally redirect to the checkout URL.
   * - If Shopify is not configured, fall back to a WhatsApp order message.
   */
  const checkout = useCallback(async () => {
    if (items.length === 0) return;

    if (useShopify) {
      // Filter out items that lack a Shopify variantId
      const shopItems = items.filter((i) => i.product.variantId);
      if (shopItems.length === 0) {
        console.warn('No Shopify variant IDs available for checkout.');
        return;
      }

      setIsCheckingOut(true);
      try {
        // Create cart with the first item
        const first = shopItems[0];
        const cart = await createShopifyCart(first.product.variantId!, first.quantity);
        let checkoutUrl = cart.checkoutUrl;

        // Add remaining items to the same cart
        for (let i = 1; i < shopItems.length; i++) {
          const it = shopItems[i];
          const updatedCart = await addToShopifyCart(
            cart.id,
            it.product.variantId!,
            it.quantity
          );
          checkoutUrl = updatedCart.checkoutUrl;
        }

        // Redirect to Shopify checkout
        window.location.href = checkoutUrl;
        return;
      } catch (e) {
        console.error('Shopify checkout failed', e);
      } finally {
        setIsCheckingOut(false);
      }
    }

    // Fallback: WhatsApp order message
    const lines = items
      .map((i) => `${i.product.name} x${i.quantity}`)
      .join('\n');
    const message = encodeURIComponent(
      `Assalam-o-Alaikum! I'd like to order:\n\n${lines}\n\nTotal: Rs. ${totalPrice}\n\nPayment: COD / Easypaisa / JazzCash`
    );
    const wa = import.meta.env.VITE_WHATSAPP_NUMBER || '923001234567';
    window.open(`https://wa.me/${wa}?text=${message}`, '_blank');
  }, [items, totalPrice, useShopify]);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isInCart,
        wishlist,
        toggleWishlist,
        isInWishlist,
        checkout,
        isCheckingOut,
        useShopify,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
