import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Product } from '../../types';
import ProductCard from '../shared/ProductCard';
import { useCart } from '../../context/CartContext';

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const featured = products.slice(0, 4);

  return (
    <section className="gradient-mint section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-mint-100/80 dark:bg-mint-400/10 text-mint-700 dark:text-mint-400 text-sm font-medium mb-3">
              Best Sellers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-warm-50">Featured Seeds</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-mint-700 dark:text-mint-400 font-semibold hover:gap-3 transition-all">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <ProductCard
                product={product}
                onAddToCart={addToCart}
                onToggleWishlist={toggleWishlist}
                isInWishlist={isInWishlist}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
