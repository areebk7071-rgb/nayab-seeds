import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import type { Product, CartItem } from '../types';
import { isShopifyConfigured } from '../lib/shopify/client';
import { getCheckoutUrl } from '../lib/shopify/cart';

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
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

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

  const checkout = useCallback(async () => {
    if (items.length === 0) return;

    if (useShopify && items[0].product.variantId) {
      setIsCheckingOut(true);
      try {
        let url = '';
        for (const item of items) {
          if (!item.product.variantId) continue;
          url = await getCheckoutUrl(item.product.variantId, item.quantity);
        }
        if (url) {
          window.location.href = url;
          return;
        }
      } catch (e) {
        console.error('Shopify checkout failed', e);
      } finally {
        setIsCheckingOut(false);
      }
    }

    const lines = items.map((i) => `${i.product.name} x${i.quantity}`).join('\n');
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
