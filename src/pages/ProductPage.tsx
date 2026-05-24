import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sun, Calendar, Leaf, Bug, Sparkles, Minus, Plus, ShoppingCart,
  ChevronLeft, Shield, Thermometer,
} from 'lucide-react';
import Seo from '../components/shared/Seo';
import { productMetaDescription } from '../config/seo';
import LazyImage from '../components/shared/LazyImage';
import { getProductByHandle } from '../lib/products';
import { useCart } from '../context/CartContext';
import type { Product } from '../types';

export default function ProductPage() {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!handle) return;
    setLoading(true);
    getProductByHandle(handle)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [handle]);

  if (loading) {
    return (
      <div className="pt-32 pb-16 min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-mint-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/shop" className="text-mint-600 hover:underline">← Back to shop</Link>
      </div>
    );
  }

  const images = product.images.length ? product.images : [product.image];

  const handleAdd = () => addToCart(product, quantity);

  return (
    <>
      <Seo
        title={`${product.name} Seeds — Karachi`}
        description={productMetaDescription(product.name, product.description)}
        path={`/product/${product.handle}`}
        image={product.image}
        type="product"
      />

      <article className="page-top pb-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-mint-700 dark:text-mint-400 mb-6 hover:gap-2 transition-all">
            <ChevronLeft className="w-4 h-4" /> Back to shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="rounded-2xl overflow-hidden aspect-square mb-4">
                <LazyImage src={images[activeImage]} alt={product.name} className="w-full h-full" loading="eager" />
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={`w-16 h-16 rounded-lg overflow-hidden shrink-0 border-2 ${
                        activeImage === i ? 'border-mint-500' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-warm-50 mb-1 text-balance">{product.name}</h1>
              {product.nameUrdu && <p className="text-lg text-charcoal-500 mb-4">{product.nameUrdu}</p>}

              <div className="flex items-baseline gap-3 mb-6">
                <p className="text-3xl font-bold text-charcoal-900 dark:text-warm-100">Rs. {product.price}</p>
                {product.compareAtPrice && (
                  <p className="text-lg text-charcoal-400 line-through">Rs. {product.compareAtPrice}</p>
                )}
              </div>

              <p className={`text-sm font-medium mb-6 ${product.inStock ? 'text-mint-600' : 'text-terracotta-600'}`}>
                {product.inStock ? `In stock (${product.quantityAvailable} available)` : 'Out of stock'}
              </p>

              <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-8">{product.description}</p>

              {product.smartTags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.smartTags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-mint-100 dark:bg-mint-400/10 text-mint-800 dark:text-mint-300 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-charcoal-600">Quantity</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="touch-target w-11 h-11 rounded-lg border border-sage-200 dark:border-charcoal-600 flex items-center justify-center"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-semibold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="touch-target w-11 h-11 rounded-lg border border-sage-200 dark:border-charcoal-600 flex items-center justify-center"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                onClick={handleAdd}
                disabled={!product.inStock}
                className="btn-primary w-full sm:w-auto hidden md:flex items-center justify-center gap-2 disabled:opacity-50 mb-10"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart — Rs. {product.price * quantity}
              </motion.button>
              <div className="md:hidden mb-6" aria-hidden />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="glass-card p-5">
                  <h2 className="font-bold text-charcoal-900 dark:text-warm-100 mb-4 flex items-center gap-2">
                    <Sun className="w-5 h-5 text-terracotta-500" /> Growing Info
                  </h2>
                  <ul className="space-y-3 text-sm text-charcoal-600 dark:text-charcoal-300">
                    <li className="flex justify-between"><span>Sunlight</span><strong>{product.sunlight}</strong></li>
                    <li className="flex justify-between"><span>Watering</span><strong>{product.watering}</strong></li>
                    <li className="flex justify-between"><span>Karachi season</span><strong>{product.plantingSeason}</strong></li>
                    <li className="flex justify-between"><span>Difficulty</span><strong>{product.difficulty}</strong></li>
                    <li className="flex justify-between"><span>Germination</span><strong>{product.germinationDays}</strong></li>
                  </ul>
                </div>

                <div className="glass-card p-5">
                  <h2 className="font-bold text-charcoal-900 dark:text-warm-100 mb-4 flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-mint-500" /> Ecological Info
                  </h2>
                  <ul className="space-y-2 text-sm">
                    {product.native && <li className="flex items-center gap-2 text-charcoal-600"><Sparkles className="w-4 h-4 text-terracotta-500" /> Native species</li>}
                    {product.medicinal && <li className="flex items-center gap-2 text-charcoal-600"><Leaf className="w-4 h-4 text-mint-500" /> Medicinal value</li>}
                    {product.pollinator && <li className="flex items-center gap-2 text-charcoal-600"><Bug className="w-4 h-4 text-sage-500" /> Pollinator friendly</li>}
                    {product.droughtTolerant && <li className="flex items-center gap-2 text-charcoal-600"><Thermometer className="w-4 h-4 text-terracotta-500" /> Drought tolerant</li>}
                    {product.edible && <li className="flex items-center gap-2 text-charcoal-600"><Calendar className="w-4 h-4" /> Edible</li>}
                    {!product.native && !product.medicinal && !product.pollinator && !product.droughtTolerant && (
                      <li className="text-charcoal-500">Ecological details coming soon.</li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-sage-50 dark:bg-charcoal-800/50 text-sm text-charcoal-600 dark:text-charcoal-300">
                <Shield className="w-5 h-5 text-mint-600 shrink-0 mt-0.5" />
                <p>
                  Karachi-tested with germination guidance included. COD, Easypaisa & JazzCash accepted.
                  <Link to="/contact" className="text-mint-600 ml-1 hover:underline">Contact us</Link> for care help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Mobile sticky add-to-cart */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-sage-200 dark:border-charcoal-700 bg-white/95 dark:bg-charcoal-900/95 backdrop-blur-lg px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-charcoal-500 truncate">{product.name}</p>
            <p className="text-lg font-bold text-charcoal-900 dark:text-warm-100">Rs. {product.price * quantity}</p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="touch-target w-10 h-10 rounded-lg border border-sage-200 dark:border-charcoal-600 flex items-center justify-center"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-6 text-center font-semibold text-sm">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="touch-target w-10 h-10 rounded-lg border border-sage-200 dark:border-charcoal-600 flex items-center justify-center"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            disabled={!product.inStock}
            className="btn-primary !px-4 !py-3 shrink-0 disabled:opacity-50"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}
