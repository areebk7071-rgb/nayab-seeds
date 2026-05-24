import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, Clock, ArrowRight, Leaf, Bug, Calendar, Heart, GraduationCap } from 'lucide-react';
import { plantGuides } from '../../data/products';

const categoryIcons: Record<string, React.ElementType> = {
  Beginner: GraduationCap,
  Medicinal: Heart,
  Ecology: Leaf,
  Seasonal: Calendar,
  'Pest Management': Bug,
  Urban: BookOpen,
};

const categoryColors: Record<string, string> = {
  Beginner: 'bg-mint-100 dark:bg-mint-400/10 text-mint-700 dark:text-mint-400',
  Medicinal: 'bg-terracotta-100 dark:bg-terracotta-500/10 text-terracotta-700 dark:text-terracotta-400',
  Ecology: 'bg-sage-100 dark:bg-sage-500/10 text-sage-700 dark:text-sage-400',
  Seasonal: 'bg-sand-100 dark:bg-sand-500/10 text-sand-700 dark:text-sand-400',
  'Pest Management': 'bg-charcoal-100 dark:bg-charcoal-500/10 text-charcoal-700 dark:text-charcoal-400',
  Urban: 'bg-mint-100 dark:bg-mint-400/10 text-mint-700 dark:text-mint-400',
};

export default function EducationSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const allCategories = ['All', ...new Set(plantGuides.map(g => g.category))];

  const filtered = plantGuides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || guide.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="gradient-warm section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100/80 dark:bg-sage-400/10 text-sage-700 dark:text-sage-400 text-sm font-medium mb-4">Plant Library</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 dark:text-warm-50 mb-4">Karachi Gardening Guides</h2>
          <p className="text-charcoal-600 dark:text-charcoal-300 max-w-2xl mx-auto">
            Free guides on native plants Pakistan, medicinal herbs, balcony gardening Karachi, biodiversity, and monsoon planting calendars.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-400" />
            <input
              type="text"
              placeholder="Search balcony gardening, medicinal plants, monsoon…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white dark:bg-charcoal-800 border border-sage-200 dark:border-charcoal-700 text-charcoal-900 dark:text-warm-100 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-mint-400 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-mint-600 text-white shadow-lg shadow-mint-600/25'
                  : 'bg-white/60 dark:bg-charcoal-800/60 text-charcoal-600 dark:text-charcoal-300 hover:bg-mint-50 dark:hover:bg-mint-400/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((guide, index) => {
              const Icon = categoryIcons[guide.category] || BookOpen;
              return (
                <motion.article
                  key={guide.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group bg-white dark:bg-charcoal-800 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 border border-sage-100 dark:border-charcoal-700 overflow-hidden cursor-pointer"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 ${categoryColors[guide.category]}`}>
                      <Icon className="w-3.5 h-3.5" />
                      {guide.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-charcoal-400 dark:text-charcoal-500 mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{guide.readTime} read</span>
                    </div>
                    <h3 className="font-bold text-charcoal-900 dark:text-warm-100 mb-2 group-hover:text-mint-700 dark:group-hover:text-mint-400 transition-colors">{guide.title}</h3>
                    <p className="text-sm text-charcoal-500 dark:text-charcoal-400 leading-relaxed mb-4 line-clamp-2">{guide.excerpt}</p>
                    <div className="flex items-center gap-1 text-mint-600 dark:text-mint-400 text-sm font-medium group-hover:gap-2 transition-all">
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-12 h-12 text-charcoal-300 dark:text-charcoal-600 mx-auto mb-4" />
            <p className="text-charcoal-400 dark:text-charcoal-500">No guides found. Try a different search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
