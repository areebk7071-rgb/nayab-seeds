import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-charcoal-800 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-sage-100 dark:border-charcoal-700">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-mint-600" />
                <h2 className="text-lg font-bold text-charcoal-900 dark:text-warm-100">Your Cart</h2>
                {totalItems > 0 && (
                  <span className="px-2 py-0.5 bg-mint-100 dark:bg-mint-400/20 text-mint-700 dark:text-mint-400 text-xs font-semibold rounded-full">{totalItems}</span>
                )}
              </div>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-sage-100 dark:hover:bg-charcoal-700 transition-colors">
                <X className="w-5 h-5 text-charcoal-600 dark:text-charcoal-300" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6">
                <div className="w-20 h-20 bg-sage-100 dark:bg-charcoal-700 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 text-sage-400 dark:text-charcoal-500" />
                </div>
                <p className="text-charcoal-500 dark:text-charcoal-400 font-medium">Your cart is empty</p>
                <p className="text-sm text-charcoal-400 dark:text-charcoal-500">Add some seeds to start growing!</p>
                <button onClick={onClose} className="btn-primary mt-2">Browse Seeds</button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {items.map(item => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4 p-3 rounded-xl bg-sage-50/50 dark:bg-charcoal-700/50"
                    >
                      <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm text-charcoal-900 dark:text-warm-100 truncate">{item.product.name}</h3>
                        <p className="text-xs text-charcoal-500 dark:text-charcoal-400">Rs. {item.product.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-lg bg-white dark:bg-charcoal-600 border border-sage-200 dark:border-charcoal-600 flex items-center justify-center hover:border-mint-400 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-6 text-center text-charcoal-900 dark:text-warm-100">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-lg bg-white dark:bg-charcoal-600 border border-sage-200 dark:border-charcoal-600 flex items-center justify-center hover:border-mint-400 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="ml-auto p-1.5 rounded-lg text-terracotta-500 hover:bg-terracotta-50 dark:hover:bg-terracotta-500/10 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm text-charcoal-900 dark:text-warm-100">Rs. {item.product.price * item.quantity}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="p-6 border-t border-sage-100 dark:border-charcoal-700 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-600 dark:text-charcoal-300">Subtotal</span>
                    <span className="font-bold text-lg text-charcoal-900 dark:text-warm-100">Rs. {totalPrice}</span>
                  </div>
                  <p className="text-xs text-charcoal-400 dark:text-charcoal-500">Shipping & taxes calculated at checkout. COD available across Karachi.</p>
                  <button className="btn-primary w-full">Proceed to Checkout</button>
                  <button onClick={clearCart} className="w-full text-center text-sm text-terracotta-600 dark:text-terracotta-400 hover:underline">Clear Cart</button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
