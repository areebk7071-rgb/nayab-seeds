import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function QuizCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-mint-600 via-mint-700 to-sage-800" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-terracotta-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" /> Core Feature
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Not sure what to grow?
            </h2>
            <p className="text-mint-100 text-base sm:text-lg leading-relaxed">
              <span className="sm:hidden">Free quiz — seed picks for your balcony, light, and Karachi season.</span>
              <span className="hidden sm:inline">
                Take our free Smart Plant Quiz — get seed picks for balcony gardening Karachi, medicinal or edible herbs, and heat tolerant plants for your season.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <Link
              to="/quiz"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-mint-800 font-bold px-8 py-4 min-h-[48px] rounded-full shadow-xl hover:bg-mint-50 transition-colors touch-manipulation"
            >
              Take Plant Quiz
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/shop"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-semibold px-8 py-4 min-h-[48px] rounded-full hover:bg-white/10 transition-colors touch-manipulation"
            >
              Browse Seeds
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
