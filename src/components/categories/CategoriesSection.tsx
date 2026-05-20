import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/products';

interface CategoriesProps {
  onNavigate: (section: string) => void;
}

export default function CategoriesSection({ onNavigate }: CategoriesProps) {
  return (
    <section className="gradient-warm section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint-100/80 dark:bg-mint-400/10 text-mint-700 dark:text-mint-400 text-sm font-medium mb-4">Explore Our Collection</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 dark:text-warm-50 mb-4">Find Your Perfect Plant</h2>
          <p className="text-charcoal-600 dark:text-charcoal-300 max-w-2xl mx-auto">From medicinal herbs to pollinator gardens, discover seeds that thrive in Karachi's unique climate.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-charcoal-800 shadow-lg shadow-black/5 dark:shadow-black/20 border border-sage-100 dark:border-charcoal-700 cursor-pointer"
              onClick={() => onNavigate('products')}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-charcoal-800/90 backdrop-blur-sm text-xs font-semibold text-charcoal-700 dark:text-charcoal-200">
                  {category.productCount} items
                </div>
                <div className="absolute top-3 right-3 text-2xl">{category.icon}</div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-charcoal-900 dark:text-warm-100 mb-1.5 group-hover:text-mint-700 dark:group-hover:text-mint-400 transition-colors">{category.name}</h3>
                <p className="text-sm text-charcoal-500 dark:text-charcoal-400 leading-relaxed mb-4">{category.description}</p>
                <div className="flex items-center gap-1 text-mint-600 dark:text-mint-400 text-sm font-medium group-hover:gap-2 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
