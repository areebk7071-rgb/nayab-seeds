import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Sun, Moon, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/quiz', label: 'Take Plant Quiz' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ cartOpen, setCartOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const { isDark, toggle } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed z-50 transition-all duration-500 pt-safe-top ${
          scrolled ? 'top-0 left-2 right-2 sm:top-2 sm:left-4 sm:right-4' : 'top-0 left-2 right-2 sm:top-3 sm:left-4 sm:right-4 md:left-6 md:right-6'
        }`}
      >
        <div className="max-w-7xl mx-auto bg-white/90 dark:bg-[#202227]/90 backdrop-blur-lg border border-white/50 dark:border-[#2e3037]/50 shadow-md shadow-black/5 rounded-[16px] sm:rounded-[22px] px-3 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-[72px]">
            <Link to="/" className="flex items-center gap-2.5 group min-w-0 shrink">
              <img
                src="/logo.png"
                alt="Nayab Seeds"
                className="h-9 w-9 sm:h-11 sm:w-11 rounded-lg object-cover shrink-0 shadow-sm"
                width={44}
                height={44}
              />
              <span className="text-base sm:text-xl font-extrabold text-charcoal-900 dark:text-warm-50 font-display whitespace-nowrap">
                Nayab Seeds
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? 'text-[#2b8663] dark:text-[#61c69d]'
                        : 'text-charcoal-700 dark:text-charcoal-300 hover:text-[#2b8663]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={toggle}
                className="touch-target p-2 sm:p-2.5 rounded-xl text-charcoal-600 dark:text-charcoal-300 hover:bg-sage-100 dark:hover:bg-sage-800/50"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                type="button"
                onClick={() => setCartOpen(!cartOpen)}
                className="relative touch-target p-2 sm:p-2.5 rounded-xl text-charcoal-600 dark:text-charcoal-300 hover:bg-sage-100 dark:hover:bg-sage-800/50"
                aria-label="Open cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-terracotta-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden touch-target p-2 rounded-xl text-charcoal-600"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-[min(100%,300px)] bg-white dark:bg-charcoal-800 shadow-2xl p-6 pt-[calc(4.5rem+env(safe-area-inset-top))] pb-safe-bottom overflow-y-auto"
            >
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `px-4 py-3.5 min-h-[48px] flex items-center rounded-xl text-base font-medium ${
                        isActive
                          ? 'text-mint-700 bg-mint-50 dark:bg-mint-400/10'
                          : 'text-charcoal-600 dark:text-charcoal-300'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link to="/native-karachi" className="px-4 py-3 text-sm text-charcoal-400">
                  Native Karachi (soon)
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
