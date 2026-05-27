import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpen,
  Brain,
  Home,
  Info,
  Leaf,
  Mail,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  ShoppingCart,
  Users,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import logo from '/Logo.png';

function formatPrice(pkr: number) {
  return `$${pkr.toFixed(2)}`;
}

type SidebarLink =
  | { label: string; to: string; icon: LucideIcon }
  | { label: string; href: string; icon: LucideIcon };

function ProductTile({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="text-left rounded-2xl bg-white/60 backdrop-blur border border-white/40 shadow-sm hover:shadow-lg transition overflow-hidden group"
    >
      <div className="aspect-[4/3] w-full bg-mint-50/40 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <p className="font-semibold text-charcoal-900 truncate">{product.name}</p>
        <p className="text-sm text-charcoal-600">{formatPrice(product.price)}</p>
      </div>
    </button>
  );
}

function CartPanel({ onOpenCart }: { onOpenCart: () => void }) {
  const {
    items,
    totalPrice,
    updateQuantity,
    checkout,
    useShopify,
    isCheckingOut,
  } = useCart();

  return (
    <aside className="hidden lg:block">
      <div className="rounded-2xl bg-white/70 backdrop-blur border border-white/40 shadow-sm p-4 sticky top-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-charcoal-900">Cart</h3>
          <button
            type="button"
            onClick={onOpenCart}
            className="p-2 rounded-xl hover:bg-mint-50 transition"
            aria-label="Open cart"
          >
            <X className="w-4 h-4 text-charcoal-700" />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-sm text-charcoal-600">
            Add items to your cart to checkout.
          </p>
        ) : (
          <div className="space-y-3">
            <div className="space-y-3 max-h-[320px] overflow-auto pr-1">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 items-start bg-white/70 border border-white/40 rounded-2xl p-3"
                >
                  <img
                    src={item.product.image}
                    alt=""
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-charcoal-900 truncate">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-charcoal-500 mb-2">
                      Qty : {item.quantity}
                    </p>
                    <div className="inline-flex items-center gap-2 rounded-xl bg-white/70 border border-white/40 px-2 py-1">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-7 h-7 rounded-lg hover:bg-mint-50 transition grid place-items-center"
                        aria-label="Decrease"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-7 h-7 rounded-lg hover:bg-mint-50 transition grid place-items-center"
                        aria-label="Increase"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-charcoal-900">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/40">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm text-charcoal-700">Cart total</p>
                <p className="text-sm font-semibold text-charcoal-900">
                  {formatPrice(totalPrice)}
                </p>
              </div>

              <p className="text-xs text-charcoal-600 text-center mb-3">
                Prefer a quick chat? Check out instantly on WhatsApp with our team.
              </p>

              <button
                type="button"
                onClick={() => checkout()}
                disabled={isCheckingOut}
                className="w-full rounded-full bg-mint-200/80 hover:bg-mint-300/80 text-charcoal-900 font-semibold py-3 transition disabled:opacity-70"
              >
                CHECKOUT VIA SHOPIFY
              </button>

              <button
                type="button"
                onClick={() => checkout()}
                disabled={isCheckingOut}
                className="w-full mt-3 rounded-full bg-mint-600 hover:bg-mint-700 text-white font-semibold py-3 transition disabled:opacity-70"
              >
                {useShopify ? 'ORDER VIA WHATSAPP' : 'ORDER VIA WHATSAPP'}
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

function ProductQuickView({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const images = product.images?.length ? product.images : [product.image];
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-label="Product quick view"
      >
        <div
          className="absolute inset-0 bg-black/15 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ type: 'spring', damping: 22, stiffness: 220 }}
          className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 w-[min(860px,calc(100vw-2rem))] rounded-3xl bg-white/75 backdrop-blur border border-white/40 shadow-2xl overflow-hidden"
        >
          <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-[68px_1fr_300px] gap-5 items-start">
            {/* thumbs */}
            <div className="hidden sm:flex flex-col gap-2">
              {images.slice(0, 3).map((src, idx) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={[
                    'w-16 h-16 rounded-2xl overflow-hidden border',
                    idx === activeIdx
                      ? 'border-mint-400'
                      : 'border-white/40 hover:border-mint-300',
                  ].join(' ')}
                  aria-label="Select image"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            {/* main image */}
            <div className="rounded-3xl bg-white/60 border border-white/40 overflow-hidden">
              <img
                src={images[activeIdx]}
                alt={product.name}
                className="w-full aspect-[16/9] object-cover"
                loading="lazy"
              />
            </div>

            {/* info */}
            <div className="relative">
              <button
                type="button"
                onClick={onClose}
                className="absolute -top-2 -right-2 w-10 h-10 rounded-xl hover:bg-mint-50 transition grid place-items-center"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-bold text-charcoal-900 mb-1">
                {product.name}
              </h3>
              <p className="text-xs text-charcoal-600 mb-3 line-clamp-3">
                {product.description}
              </p>

              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-charcoal-700">Quantity</p>
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/70 border border-white/40 px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-7 h-7 rounded-lg hover:bg-mint-50 transition grid place-items-center"
                    aria-label="Decrease"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-6 text-center text-sm font-semibold">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="w-7 h-7 rounded-lg hover:bg-mint-50 transition grid place-items-center"
                    aria-label="Increase"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    addToCart(product, qty);
                    onClose();
                  }}
                  className="flex-1 rounded-full bg-mint-200/80 hover:bg-mint-300/80 text-charcoal-900 font-semibold py-3 transition inline-flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Shopify Cart
                </button>
                <Link
                  to="/shop"
                  className="w-12 h-12 rounded-full bg-mint-600 hover:bg-mint-700 text-white transition grid place-items-center"
                  aria-label="Go to shop"
                >
                  <ShoppingCart className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function FloatingWhatsAppCTA() {
  const { checkout } = useCart();
  return (
    <div className="fixed right-4 bottom-4 z-[65] hidden sm:block">
      <div className="rounded-3xl bg-white/70 backdrop-blur border border-white/40 shadow-xl p-4 max-w-[360px]">
        <p className="text-sm text-charcoal-700 mb-3">
          Prefer a quick chat? Check out instantly on WhatsApp with our team.
        </p>
        <button
          type="button"
          onClick={() => checkout()}
          className="w-full rounded-full bg-mint-600 hover:bg-mint-700 text-white font-semibold py-3 transition"
        >
          ORDER VIA WHATSAPP
        </button>
      </div>
    </div>
  );
}

export default function HomeStorefront({
  products,
  onOpenCart,
}: {
  products: Product[];
  onOpenCart: () => void;
}) {
  const featured = useMemo(() => products.slice(0, 8), [products]);
  const [openProduct, setOpenProduct] = useState<Product | null>(null);
  const [heroSearch, setHeroSearch] = useState('');

  const sidebarLinks = useMemo<SidebarLink[]>(
    () => [
      { label: 'Home', to: '/', icon: Home },
      { label: 'Shop', to: '/shop', icon: ShoppingBag },
      { label: 'Quiz', to: '/quiz', icon: Brain },
      { label: 'Native Karachi', to: '/native-karachi', icon: Leaf },
      { label: 'Community', to: '/community', icon: Users },
      { label: 'About', to: '/about', icon: Info },
      { label: 'Contact', to: '/contact', icon: Mail },
    ],
    []
  );

  const categorySidebarLinks = useMemo(
    () => [
      { label: 'Vegetables', to: '/shop?category=vegetables' },
      // "Herbs" maps best to our medicinal/herb collection right now
      { label: 'Herbs', to: '/shop?category=medicinal' },
      { label: 'Flowers', to: '/shop?category=flowers' },
      // "Kits" maps best to our beginner-friendly starter kits collection
      { label: 'Kits', to: '/shop?category=beginner' },
    ],
    []
  );

  const categoryRail = useMemo(
    () => [
      { label: 'Vegetables', icon: Leaf },
      { label: 'Herbs', icon: Leaf },
      { label: 'Flowers', icon: Leaf },
      { label: 'Kits', icon: Leaf },
    ],
    []
  );

  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-mint-50 via-white to-mint-100/60" />
        <div className="absolute -top-40 -left-48 w-[520px] h-[520px] rounded-full bg-mint-200/35 blur-3xl" />
        <div className="absolute -bottom-48 -right-56 w-[620px] h-[620px] rounded-full bg-mint-300/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_360px] gap-5 items-start">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="rounded-2xl bg-white/60 backdrop-blur border border-white/40 shadow-sm p-3 sticky top-4">
              <div className="flex items-center gap-3 px-2 py-2 mb-2">
                <img
                  src={logo}
                  alt="Nayab Seeds"
                  className="w-9 h-9 rounded-full object-cover border border-white/60 bg-white"
                  width={36}
                  height={36}
                />
                <div className="leading-tight">
                  <p className="text-sm font-bold text-charcoal-900">
                    Nayab Seeds
                  </p>
                  <p className="text-xs text-charcoal-500">
                    Heirloom • Native • Seasonal
                  </p>
                </div>
              </div>

              <nav className="space-y-1">
                {sidebarLinks.map((it) => {
                  const Icon = it.icon;
                  if ('to' in it) {
                    return (
                      <Link
                        key={it.label}
                        to={it.to}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl text-charcoal-700 hover:bg-mint-50 hover:text-mint-900 transition"
                      >
                        <Icon className="w-4 h-4 text-mint-700" />
                        <span className="text-sm font-medium">{it.label}</span>
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={it.label}
                      href={it.href}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl text-charcoal-700 hover:bg-mint-50 hover:text-mint-900 transition"
                    >
                      <Icon className="w-4 h-4 text-mint-700" />
                      <span className="text-sm font-medium">{it.label}</span>
                    </a>
                  );
                })}
              </nav>

              <div className="mt-3 pt-3 border-t border-white/40">
                <p className="px-3 text-xs font-semibold text-charcoal-500 uppercase tracking-wide mb-2">
                  Categories
                </p>
                <div className="space-y-1">
                  {categorySidebarLinks.map((c) => (
                    <Link
                      key={c.label}
                      to={c.to}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl text-charcoal-700 hover:bg-mint-50 hover:text-mint-900 transition"
                    >
                      <Leaf className="w-4 h-4 text-mint-700" />
                      <span className="text-sm font-medium">{c.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="relative">
            {/* Top bar */}
            <header className="relative rounded-2xl bg-white/70 backdrop-blur border border-white/40 shadow-sm px-4 sm:px-5 py-3">
              <div className="grid grid-cols-[1fr_auto_auto] md:grid-cols-[1fr_auto_1fr_auto] items-center gap-3">
                <nav className="overflow-x-auto scrollbar-hide">
                  <div className="flex items-center gap-5 min-w-max text-sm font-medium text-charcoal-800">
                    <Link to="/" className="hover:text-mint-900">
                      Home
                    </Link>
                    <Link to="/shop" className="hover:text-mint-900">
                      Shop
                    </Link>
                    <Link to="/quiz" className="hover:text-mint-900">
                      Quiz
                    </Link>
                    <Link to="/native-karachi" className="hover:text-mint-900">
                      Native Karachi
                    </Link>
                    <Link to="/community" className="hover:text-mint-900">
                      Community
                    </Link>
                    <Link to="/about" className="hover:text-mint-900">
                      About
                    </Link>
                    <Link to="/contact" className="hover:text-mint-900">
                      Contact
                    </Link>
                    <a href="#shopify" className="hover:text-mint-900">
                      Shopify Storefront
                    </a>
                  </div>
                </nav>

                {/* Logo centered INSIDE header (not detached) */}
                <div className="justify-self-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 border border-white/70 shadow-md grid place-items-center">
                    <img
                      src={logo}
                      alt="Nayab Seeds"
                      className="w-12 h-12 rounded-full object-cover"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>

                {/* spacer for md layout */}
                <div className="hidden md:block" />

                <button
                  type="button"
                  onClick={onOpenCart}
                  className="justify-self-end relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/80 border border-white/60 hover:bg-mint-50 transition"
                  aria-label="Open cart"
                >
                  <ShoppingCart className="w-5 h-5 text-charcoal-800" />
                </button>
              </div>
            </header>

            {/* Hero banner */}
            <section className="mt-4 rounded-3xl overflow-hidden relative">
              <img
                src="/hero-garden.jpg"
                alt="Heirloom garden"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/10" />

              <div className="relative px-6 sm:px-10 py-12 sm:py-14">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow mb-6 max-w-2xl">
                  Cultivate Your Legacy:
                  <br />
                  Premium Heirloom Seeds
                </h1>

                <div className="max-w-xl">
                  <div className="relative">
                    <input
                      value={heroSearch}
                      onChange={(e) => setHeroSearch(e.target.value)}
                      placeholder="Search varieties..."
                      className="w-full rounded-full bg-white/90 border border-white/70 px-5 py-3 pr-12 text-sm text-charcoal-800 outline-none"
                      aria-label="Search varieties"
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-mint-700 text-white grid place-items-center"
                      aria-label="Search"
                    >
                      <Search className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-4 text-white/90 text-sm">
                    Featured categories:
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Featured Gardeea Mix', 'Nayab Perfection Peas'].map(
                      (c) => (
                        <button
                          key={c}
                          type="button"
                          className="inline-flex items-center gap-2 rounded-xl bg-white/85 text-charcoal-900 px-4 py-2 text-xs font-semibold border border-white/70 hover:bg-white transition"
                        >
                          <Leaf className="w-4 h-4 text-mint-700" />
                          {c}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Products + category rail */}
            <section className="mt-5 rounded-3xl bg-white/55 backdrop-blur border border-white/40 shadow-sm p-4 sm:p-5">
              <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4">
                <div className="sm:pr-2">
                  <div className="space-y-2">
                    {categoryRail.map((c) => {
                      const Icon = c.icon;
                      return (
                        <button
                          key={c.label}
                          type="button"
                          className="w-full flex items-center gap-2 rounded-xl bg-white/70 border border-white/50 px-3 py-2 text-sm font-medium text-charcoal-800 hover:bg-mint-50 transition"
                        >
                          <Icon className="w-4 h-4 text-mint-700" />
                          {c.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-sm text-charcoal-700">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white/50 px-3 py-1.5">
                        <BookOpen className="w-4 h-4 text-mint-700" />
                        Browse heirloom picks
                      </span>
                    </div>
                    <a
                      href="#products"
                      className="text-sm font-semibold text-mint-800 hover:underline"
                    >
                      View all
                    </a>
                  </div>

                  <div
                    id="products"
                    className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
                  >
                    {featured.map((p) => (
                      <div key={p.id} className="min-w-[220px] max-w-[220px]">
                        <ProductTile
                          product={p}
                          onOpen={() => setOpenProduct(p)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* stats bar */}
            <div className="mt-5">
              <div className="rounded-2xl bg-white/70 backdrop-blur border border-white/40 shadow-sm px-4 py-3 grid grid-cols-4 gap-3 text-center text-charcoal-800">
                <div className="rounded-xl bg-white/60 border border-white/40 py-2">
                  <p className="font-bold">50+</p>
                  <p className="text-[11px] text-charcoal-600">Native Species</p>
                </div>
                <div className="rounded-xl bg-white/60 border border-white/40 py-2">
                  <p className="font-bold">5K+</p>
                  <p className="text-[11px] text-charcoal-600">Happy Growers</p>
                </div>
                <div className="rounded-xl bg-white/60 border border-white/40 py-2">
                  <p className="font-bold">98%</p>
                  <p className="text-[11px] text-charcoal-600">
                    Germination Rate
                  </p>
                </div>
                <div className="rounded-xl bg-white/60 border border-white/40 py-2">
                  <p className="font-bold">AI</p>
                  <p className="text-[11px] text-charcoal-600">
                    Assistant Test
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right cart */}
          <CartPanel onOpenCart={onOpenCart} />
        </div>
      </div>

      <FloatingWhatsAppCTA />

      {openProduct ? (
        <ProductQuickView
          product={openProduct}
          onClose={() => setOpenProduct(null)}
        />
      ) : null}
    </section>
  );
}
