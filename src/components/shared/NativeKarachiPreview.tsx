import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Trees } from 'lucide-react';

export default function NativeKarachiPreview() {
  return (
    <section className="section-padding gradient-mint">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card overflow-hidden grid lg:grid-cols-2 gap-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 flex flex-col justify-center"
          >
            <span className="inline-flex items-center gap-2 text-mint-700 dark:text-mint-400 text-sm font-medium mb-3">
              <MapPin className="w-4 h-4" /> Coming Soon
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-900 dark:text-warm-50 mb-4">
              Native Karachi
            </h2>
            <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-6">
              A future platform for ecological restoration — native species guides, Miyawaki forests,
              invasive species awareness, and community greening across Karachi.
            </p>
            <Link
              to="/native-karachi"
              className="inline-flex items-center gap-2 text-mint-700 dark:text-mint-400 font-semibold hover:gap-3 transition-all"
            >
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="relative min-h-[240px] lg:min-h-0 bg-gradient-to-br from-sage-200 to-mint-300 dark:from-sage-900 dark:to-mint-900 flex items-center justify-center">
            <Trees className="w-24 h-24 text-mint-700/40 dark:text-mint-400/30" />
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
