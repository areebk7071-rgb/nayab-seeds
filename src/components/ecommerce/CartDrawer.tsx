import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, Loader2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice, totalItems, checkout, isCheckingOut, useShopify } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60]"
          role="dialog"
          aria-label="Shopping cart"
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full sm:max-w-md bg-white dark:bg-charcoal-800 shadow-2xl flex flex-col pb-safe-bottom"
          >
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-sage-100 dark:border-charcoal-700">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-mint-600" />
                <h2 className="text-lg font-bold text-charcoal-900 dark:text-warm-100">Your Cart</h2>
                {totalItems > 0 && (
                  <span className="px-2 py-0.5 bg-mint-100 dark:bg-mint-400/20 text-mint-700 dark:text-mint-400 text-xs font-semibold rounded-full">
                    {totalItems}
                  </span>
                )}
              </div>
              <button type="button" onClick={onClose} className="p-2 rounded-lg hover:bg-sage-100 dark:hover:bg-charcoal-700" aria-label="Close cart">
                <X className="w-5 h-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6">
                <ShoppingBag className="w-12 h-12 text-sage-300" />
                <p className="text-charcoal-500 font-medium">Your cart is empty</p>
                <Link to="/shop" onClick={onClose} className="btn-primary">
                  Browse Seeds
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3 p-3 rounded-xl bg-sage-50/50 dark:bg-charcoal-700/50">
                      <img src={item.product.image} alt="" className="w-16 h-16 rounded-lg object-cover shrink-0" loading="lazy" />
                      <div className="flex-1 min-w-0">
                        <Link to={`/product/${item.product.handle}`} onClick={onClose} className="font-semibold text-sm text-charcoal-900 dark:text-warm-100 hover:text-mint-600 truncate block">
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-charcoal-500">Rs. {item.product.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button type="button" onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 rounded-lg border flex items-center justify-center" aria-label="Decrease">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                          <button type="button" onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 rounded-lg border flex items-center justify-center" aria-label="Increase">
                            <Plus className="w-3 h-3" />
                          </button>
                          <button type="button" onClick={() => removeFromCart(item.product.id)} className="ml-auto text-terracotta-500 p-1" aria-label="Remove">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="font-semibold text-sm shrink-0">Rs. {item.product.price * item.quantity}</p>
                    </div>
                  ))}
                </div>

                <div className="p-5 border-t border-sage-100 dark:border-charcoal-700 space-y-3 sticky bottom-0 bg-white dark:bg-charcoal-800 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                  <div className="flex justify-between">
                    <span className="text-charcoal-600">Subtotal</span>
                    <span className="font-bold text-lg">Rs. {totalPrice}</span>
                  </div>
                  <p className="text-xs text-charcoal-400">
                    {useShopify
                      ? 'Secure Shopify checkout. COD & local payments at checkout.'
                      : 'Checkout via WhatsApp. COD, Easypaisa & JazzCash accepted across Karachi.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => checkout()}
                    disabled={isCheckingOut}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isCheckingOut ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                    {useShopify ? 'Proceed to Checkout' : 'Order via WhatsApp'}
                  </button>
                  <button type="button" onClick={clearCart} className="w-full text-center text-sm text-terracotta-600 hover:underline">
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
