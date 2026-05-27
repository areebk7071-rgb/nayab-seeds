import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Grid3X3,
  Home,
  Leaf,
  Sparkles,
  ShoppingBag,
  ShoppingCart,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import logo from '/Logo.png';

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function HomeMockHeader({
  onOpenCart,
}: {
  onOpenCart: () => void;
}) {
  const { totalItems, items, totalPrice, checkout, isCheckingOut, useShopify } =
    useCart();

  const navItems: NavItem[] = useMemo(
    () => [
      { label: 'Home', href: '#', icon: Home },
      { label: 'Native Seeds', href: '/shop?category=native', icon: Leaf },
      { label: 'Seasonal Seeds', href: '/shop?category=seasonal', icon: Sparkles },
      { label: 'Categories', href: '#categories', icon: Grid3X3 },
      { label: 'Products', href: '#products', icon: ShoppingBag },
      { label: 'Quiz', href: '/quiz', icon: Brain },
    ],
    []
  );

  return (
    <section className="relative">
      {/* Soft mint glow background (home-only vibe) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-mint-50 via-white to-mint-100" />
        <div className="absolute -top-32 -left-40 h-[420px] w-[420px] rounded-full bg-mint-200/50 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-mint-300/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="relative grid grid-cols-1 lg:grid-cols-[220px_1fr_320px] gap-5 items-start">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="rounded-2xl bg-white/70 backdrop-blur border border-mint-100 shadow-sm p-3 sticky top-6">
              <div className="flex items-center gap-3 px-2 py-2 mb-2">
                <img
                  src={logo}
                  alt="Nayab Seeds"
                  className="w-9 h-9 rounded-full object-cover border border-mint-200 bg-white"
                  width={36}
                  height={36}
                />
                <div className="leading-tight">
                  <p className="text-sm font-bold text-charcoal-900">
                    Nayab Seeds
                  </p>
                  <p className="text-xs text-charcoal-500">Karachi • Pakistan</p>
                </div>
              </div>
              <nav className="space-y-1">
                {navItems.map((it) => (
                  <a
                    key={it.label}
                    href={it.href}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl text-charcoal-700 hover:bg-mint-50 hover:text-mint-800 transition"
                  >
                    <it.icon className="w-4 h-4 text-mint-700" />
                    <span className="text-sm font-medium">{it.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main header area */}
          <div className="relative">
            {/* Top bar */}
            <div className="relative rounded-2xl bg-white/70 backdrop-blur border border-mint-100 shadow-sm px-4 sm:px-5 py-3 flex items-center">
              {/* Circular notch cutout (logo sits in the middle) */}
              <div
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 w-16 h-16 rounded-full bg-gradient-to-br from-mint-50 via-white to-mint-100 border border-mint-100"
                aria-hidden="true"
              />

              <div className="flex items-center gap-3 text-sm text-charcoal-700">
                <Link to="/about" className="hover:text-mint-800">
                  About Us
                </Link>
                <a href="#shopify" className="hover:text-mint-800">
                  Shopify Storefront
                </a>
              </div>

              <div className="ml-auto flex items-center gap-2">
                <Link
                  to="/quiz"
                  className="hidden sm:inline-flex items-center justify-center rounded-xl px-4 py-2 bg-mint-600 hover:bg-mint-700 text-white font-semibold text-sm transition"
                >
                  Take Quiz
                </Link>

                <button
                  type="button"
                  onClick={onOpenCart}
                  className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 border border-mint-100 hover:bg-mint-50 transition"
                  aria-label="Open cart"
                >
                  <ShoppingCart className="w-5 h-5 text-charcoal-700" />
                  {totalItems > 0 ? (
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-mint-600 text-white text-[11px] flex items-center justify-center font-semibold">
                      {totalItems}
                    </span>
                  ) : null}
                </button>
              </div>
            </div>

            {/* Center logo badge */}
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-7">
              <div className="w-20 h-20 rounded-full bg-white border border-mint-200 shadow-lg grid place-items-center">
                <img
                  src={logo}
                  alt="Nayab Seeds"
                  className="w-16 h-16 rounded-full object-cover"
                  width={64}
                  height={64}
                />
              </div>
            </div>
          </div>

          {/* Cart preview panel */}
          <aside className="hidden lg:block">
            <div className="rounded-2xl bg-white/70 backdrop-blur border border-mint-100 shadow-sm p-4 sticky top-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-charcoal-800">Cart</h3>
                <button
                  type="button"
                  onClick={onOpenCart}
                  className="text-xs font-semibold text-mint-700 hover:underline"
                >
                  Open
                </button>
              </div>

              {items.length === 0 ? (
                <p className="text-sm text-charcoal-500">
                  Your cart is empty. Add a few seeds to checkout.
                </p>
              ) : (
                <div className="space-y-3">
                  <div className="space-y-2 max-h-44 overflow-auto pr-1">
                    {items.slice(0, 3).map((it) => (
                      <div
                        key={it.product.id}
                        className="flex items-center gap-3 rounded-xl bg-white/80 border border-mint-100 p-2"
                      >
                        <img
                          src={it.product.image}
                          alt=""
                          className="w-10 h-10 rounded-lg object-cover"
                          loading="lazy"
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-charcoal-800 truncate">
                            {it.product.name}
                          </p>
                          <p className="text-xs text-charcoal-500">
                            Qty: {it.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-mint-100">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-charcoal-600">Cart total</span>
                      <span className="font-semibold text-charcoal-900">
                        Rs. {totalPrice}
                      </span>
                    </div>

                    <p className="text-xs text-charcoal-500 mb-3">
                      {useShopify
                        ? 'Secure Shopify checkout is enabled.'
                        : 'No Shopify keys set — checkout will open WhatsApp.'}
                    </p>

                    <button
                      type="button"
                      onClick={() => checkout()}
                      disabled={isCheckingOut}
                      className="w-full rounded-xl bg-mint-600 hover:bg-mint-700 text-white font-semibold text-sm py-2.5 transition disabled:opacity-70"
                    >
                      {useShopify ? 'Checkout with Shopify' : 'Order via WhatsApp'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Mobile: small nav row */}
        <div className="lg:hidden mt-4">
          <div className="rounded-2xl bg-white/70 backdrop-blur border border-mint-100 shadow-sm px-3 py-2 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max">
              {navItems.map((it) => (
                it.href.startsWith('/') ? (
                  <Link
                    key={it.label}
                    to={it.href}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-charcoal-700 hover:bg-mint-50"
                  >
                    <it.icon className="w-4 h-4 text-mint-700" />
                    {it.label}
                  </Link>
                ) : (
                  <a
                    key={it.label}
                    href={it.href}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-charcoal-700 hover:bg-mint-50"
                  >
                    <it.icon className="w-4 h-4 text-mint-700" />
                    {it.label}
                  </a>
                )
              ))}
            </div>
          </div>
          <div className="mt-3">
            <Link
              to="/quiz"
              className="w-full inline-flex items-center justify-center rounded-xl px-4 py-3 bg-mint-600 hover:bg-mint-700 text-white font-semibold transition"
            >
              Take Quiz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
