// src/components/layout/Navbar.tsx
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import logo from '/Logo.png';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Categories', href: '#categories' },
  { name: 'Products', href: '#products' },
  { name: 'AI Assistant', href: '#ai' },
  { name: 'About', href: '#about' },
];

type NavbarProps = {
  onCartClick?: () => void;
};

export default function Navbar({ onCartClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems } = useCart();
  const prefersReducedMotion = usePrefersReducedMotion();

  const leftLinks = useMemo(() => navLinks.slice(0, 2), []);
  const rightLinks = useMemo(() => navLinks.slice(2), []);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 px-3 sm:px-5 lg:px-8">
        <motion.nav
          initial={prefersReducedMotion ? false : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mx-auto w-full max-w-7xl rounded-[2rem] border border-white/70 bg-white/90 px-4 pb-4 pt-3 shadow-[0_18px_50px_-24px_rgba(16,70,56,0.45)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/80"
          aria-label="Primary navigation"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-0 h-20 rounded-[2rem] bg-gradient-to-r from-mint-100/35 via-sage-100/20 to-mint-100/35"
          />
          <div className="relative flex items-center justify-between md:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="touch-target inline-flex items-center justify-center rounded-full border border-mint-200/70 bg-white/70 text-green-900 transition hover:bg-mint-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <span className="pl-5 text-base font-semibold tracking-[0.18em] text-green-900">NAYAB SEEDS</span>
            <button
              type="button"
              onClick={onCartClick}
              className="touch-target relative inline-flex items-center justify-center rounded-full border border-mint-200/70 bg-white/70 text-green-900 transition hover:bg-mint-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 ? (
                <span className="absolute -right-0.5 -top-0.5 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-mint-600 px-1.5 text-[10px] font-semibold text-white">
                  {totalItems}
                </span>
              ) : null}
            </button>
          </div>

          <div className="relative hidden items-center justify-between px-2 pt-1 md:flex">
            <div className="flex w-2/5 items-center justify-end gap-7 pr-16 lg:gap-9">
              {leftLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-green-900/85 transition hover:text-mint-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="w-1/5" />

            <div className="flex w-2/5 items-center gap-7 pl-16 lg:gap-9">
              {rightLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-green-900/85 transition hover:text-mint-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2"
                >
                  {link.name}
                </a>
              ))}
              <button
                type="button"
                onClick={onCartClick}
                className="touch-target relative ml-auto inline-flex items-center justify-center rounded-full border border-mint-200/70 bg-white/75 text-green-900 transition hover:bg-mint-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2"
                aria-label="Open cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 ? (
                  <span className="absolute -right-0.5 -top-0.5 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-mint-600 px-1.5 text-[10px] font-semibold text-white shadow-sm">
                    {totalItems}
                  </span>
                ) : null}
              </button>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-full h-16 w-16 -translate-x-1/2 -translate-y-5 rounded-full bg-white/90 ring-1 ring-white/80"
            />
            <a
              href="#"
              className="absolute left-1/2 top-full flex h-20 w-20 -translate-x-1/2 -translate-y-7 items-center justify-center rounded-full border border-white/80 bg-gradient-to-br from-mint-50 via-white to-sage-50 p-1 shadow-[0_16px_35px_-20px_rgba(16,70,56,0.7)] transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2"
              aria-label="Go to top"
            >
              <img
                src={logo}
                alt="Nayab Seeds Logo"
                className="h-full w-full rounded-full border border-mint-200/60 bg-white object-cover"
              />
            </a>
          </div>

          <div className="relative mt-3 px-1 md:mt-5">
            <label htmlFor="nav-search" className="sr-only">
              Search products
            </label>
            <div className="mx-auto flex w-full max-w-xl items-center gap-2 rounded-full border border-mint-100/80 bg-gradient-to-r from-mint-50/80 to-white/80 px-4 py-2 shadow-inner shadow-mint-100/40">
              <Search className="h-4 w-4 text-mint-700" aria-hidden="true" />
              <input
                id="nav-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search seeds, tools, and plant care"
                className="w-full bg-transparent text-sm text-green-900 placeholder:text-green-700/60 focus:outline-none"
              />
            </div>
          </div>

          <AnimatePresence initial={false}>
            {mobileOpen ? (
              <motion.div
                id="mobile-nav-menu"
                initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden md:hidden"
              >
                <div className="mt-3 space-y-1 rounded-2xl border border-mint-100/70 bg-white/60 p-2 backdrop-blur">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-green-900/90 transition hover:bg-mint-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.nav>
      </header>
      <div className="h-36 sm:h-40" aria-hidden="true" />
    </>
  );
}
