import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Sun, Moon, Menu, X, Leaf, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onNavigate: (section: string) => void;
  currentSection: string;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

export default function Navbar({ onNavigate, currentSection, cartOpen, setCartOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'categories', label: 'Categories' },
    { id: 'products', label: 'Products' },
    { id: 'ai', label: 'AI Assistant' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 z-50 transition-all duration-500`}
      >
        <div className="max-w-7xl mx-auto bg-white/85 dark:bg-[#202227]/85 backdrop-blur-lg border border-white/50 dark:border-[#2e3037]/50 shadow-md shadow-black/5 rounded-[22px] px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-[#5fc693] fill-[#5fc693]/20" />
              <span className="text-xl sm:text-2xl font-extrabold text-charcoal-900 dark:text-warm-50 font-display">
                Nayab Seeds
              </span>
            </motion.button>

            <div className="hidden lg:flex items-center gap-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    currentSection === item.id
                      ? 'text-[#2b8663] dark:text-[#61c69d]'
                      : 'text-charcoal-700 dark:text-charcoal-300 hover:text-[#2b8663] dark:hover:text-[#61c69d]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggle}
                className="p-2.5 rounded-xl text-charcoal-600 dark:text-charcoal-300 hover:bg-sage-100 dark:hover:bg-sage-800/50 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-xl text-charcoal-600 dark:text-charcoal-300 hover:bg-sage-100 dark:hover:bg-sage-800/50 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-xl text-charcoal-600 dark:text-charcoal-300 hover:bg-sage-100 dark:hover:bg-sage-800/50 transition-colors"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCartOpen(!cartOpen)}
                className="relative p-2.5 rounded-xl text-charcoal-600 dark:text-charcoal-300 hover:bg-sage-100 dark:hover:bg-sage-800/50 transition-colors"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-terracotta-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </motion.button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl text-charcoal-600 dark:text-charcoal-300 hover:bg-sage-100 dark:hover:bg-sage-800/50 transition-colors"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-white dark:bg-charcoal-800 shadow-2xl p-6 pt-20"
            >
              <div className="flex flex-col gap-2">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
                    className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      currentSection === item.id
                        ? 'text-mint-700 dark:text-mint-400 bg-mint-50 dark:bg-mint-400/10'
                        : 'text-charcoal-600 dark:text-charcoal-300 hover:bg-sage-50 dark:hover:bg-sage-800/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
