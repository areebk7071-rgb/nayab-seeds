import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import Seo from '../components/shared/Seo';
import ProductCard from '../components/shared/ProductCard';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import { shopCategories } from '../data/products';
import { pageSeo } from '../config/seo';
import type { SortOption } from '../types';

const categorySeoBlurbs: Record<string, string> = {
  native: 'Shop native plants Pakistan — wildflowers and indigenous species tested for Karachi gardening and urban biodiversity.',
  medicinal: 'Medicinal plants Pakistan — tulsi, mint, moringa, and traditional herbs with Karachi growing guides.',
  vegetables: 'Vegetable seeds for Karachi home gardens — coriander, fenugreek, and kitchen herbs for winter and monsoon.',
  flowers: 'Flower seeds for Karachi balconies and rooftops — marigold, butterfly pea, and pollinator-friendly blooms.',
  trees: 'Tree seeds and saplings for Karachi — moringa, neem, and long-term shade for rooftops and gardens.',
  beginner: 'Beginner gardening Karachi — easy seeds and starter kits for first-time growers in Pakistan.',
  pollinator: 'Pollinator-friendly seeds — attract bees and butterflies to your Karachi garden.',
  'heat-tolerant': 'Heat tolerant plants Pakistan — species that survive Karachi summer temperatures (35–45°C).',
};

export default function ShopPage() {
  const { products, loading } = useProducts();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortOption>('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...products];

    if (category !== 'all') {
      list = list.filter((p) => p.shopTags.includes(category) || p.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.nameUrdu?.includes(q) ||
          p.smartTags.some((t) => t.toLowerCase().includes(q))
      );
    }

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        list.sort((a, b) => b.karachiRating - a.karachiRating);
    }

    return list;
  }, [products, category, search, sort]);

  const categoryBlurb = category !== 'all' ? categorySeoBlurbs[category] : null;

  return (
    <>
      <Seo
        title={pageSeo.shop.title}
        description={pageSeo.shop.description}
        path="/shop"
        noSuffix
      />

      <div className="page-top pb-16 gradient-mint min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 dark:text-warm-50 mb-3 text-balance">
              Shop Seeds for Karachi Gardening
            </h1>
            <p className="text-charcoal-600 dark:text-charcoal-300 max-w-2xl leading-relaxed">
              Buy native plants Pakistan, medicinal herbs, and heat tolerant plants tested for Karachi&apos;s climate.
              Balcony-friendly varieties, COD delivery, and growing guides on every product.
            </p>
            {categoryBlurb && (
              <p className="mt-3 text-sm text-mint-800 dark:text-mint-300 max-w-2xl">{categoryBlurb}</p>
            )}
          </header>

          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-400" />
              <input
                type="search"
                placeholder="Search tulsi, mint, marigold, balcony plants…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-sage-200 dark:border-charcoal-600 bg-white dark:bg-charcoal-800 text-charcoal-900 dark:text-warm-100 focus:ring-2 focus:ring-mint-500 outline-none"
                aria-label="Search seeds for Karachi gardening"
              />
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-charcoal-400 shrink-0" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="px-4 py-3 rounded-xl border border-sage-200 dark:border-charcoal-600 bg-white dark:bg-charcoal-800 text-sm font-medium"
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>

          <nav className="flex gap-2 mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide snap-x snap-mandatory" aria-label="Product categories">
            <button
              type="button"
              onClick={() => setCategory('all')}
              className={`flex-shrink-0 snap-start px-4 py-2.5 min-h-[44px] rounded-full text-sm font-medium transition-all touch-manipulation ${
                category === 'all' ? 'bg-mint-600 text-white shadow-lg' : 'bg-white/70 dark:bg-charcoal-800 text-charcoal-600'
              }`}
            >
              All Seeds
            </button>
            {shopCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                className={`flex-shrink-0 snap-start px-4 py-2.5 min-h-[44px] rounded-full text-sm font-medium transition-all whitespace-nowrap touch-manipulation ${
                  category === cat.id ? 'bg-mint-600 text-white shadow-lg' : 'bg-white/70 dark:bg-charcoal-800 text-charcoal-600'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </nav>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-80 rounded-2xl bg-sage-200/50 dark:bg-charcoal-700 animate-pulse" />
              ))}
            </div>
          ) : (
            <>
              <p className="text-sm text-charcoal-500 mb-4">{filtered.length} Karachi-tested seed products</p>
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence mode="popLayout">
                  {filtered.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={addToCart}
                      onToggleWishlist={toggleWishlist}
                      isInWishlist={isInWishlist}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
              {filtered.length === 0 && (
                <p className="text-center py-16 text-charcoal-500">
                  No products match your search. Try &quot;medicinal&quot;, &quot;balcony&quot;, or &quot;heat tolerant&quot;.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
