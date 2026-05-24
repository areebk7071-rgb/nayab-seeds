import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { featuredHomeCategories } from '../../data/products';

export default function FeaturedCategories() {
  return (
    <section className="gradient-warm section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint-100/80 dark:bg-mint-400/10 text-mint-700 dark:text-mint-400 text-sm font-medium mb-4">
            Shop by Goal
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-charcoal-900 dark:text-warm-50 mb-3 text-balance">Featured Categories</h2>
          <p className="text-charcoal-600 dark:text-charcoal-300 max-w-xl mx-auto">
            Shop native plants Pakistan, medicinal plants Pakistan, beginner balcony kits, and heat tolerant plants for Karachi summers.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredHomeCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={cat.href}
                className="block glass-card p-6 sm:p-8 text-center group hover:shadow-2xl transition-shadow h-full"
              >
                <span className="text-4xl mb-4 block">{cat.icon}</span>
                <h3 className="font-bold text-charcoal-900 dark:text-warm-100 mb-2 group-hover:text-mint-700 dark:group-hover:text-mint-400 transition-colors">
                  {cat.name}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm text-mint-600 dark:text-mint-400 font-medium">
                  Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
