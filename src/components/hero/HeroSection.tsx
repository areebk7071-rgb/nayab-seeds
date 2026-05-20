import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

function FloatingParticle({ delay, x, y, size, duration }: { delay: number; x: string; y: string; size: number; duration: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: [0, 0.6, 0.3, 0.6, 0],
        y: [0, -30, -60, -90, -120],
        x: [0, 10, -5, 15, 5],
        rotate: [0, 45, 90, 135, 180],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Leaf className="text-mint-400/40 dark:text-mint-400/20" style={{ width: size, height: size }} />
    </motion.div>
  );
}

function PollenParticle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      animate={{
        opacity: [0, 0.8, 0],
        y: [0, -80],
        x: [0, Math.random() * 40 - 20],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-mint-300/60 dark:bg-mint-400/30" />
    </motion.div>
  );
}

export default function HeroSection({ onNavigate }: HeroProps) {
  const particles = [
    { delay: 0, x: '10%', y: '60%', size: 16, duration: 8 },
    { delay: 1, x: '25%', y: '70%', size: 12, duration: 10 },
    { delay: 2, x: '75%', y: '50%', size: 20, duration: 7 },
    { delay: 3, x: '85%', y: '65%', size: 14, duration: 9 },
    { delay: 0.5, x: '50%', y: '80%', size: 10, duration: 11 },
    { delay: 1.5, x: '35%', y: '55%', size: 18, duration: 8 },
    { delay: 2.5, x: '65%', y: '75%', size: 12, duration: 10 },
    { delay: 3.5, x: '90%', y: '45%', size: 16, duration: 9 },
  ];

  const pollen = Array.from({ length: 15 }, (_, i) => ({
    delay: i * 0.7,
    x: `${Math.random() * 90 + 5}%`,
    y: `${Math.random() * 40 + 50}%`,
  }));

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-mint-50 via-warm-50 to-sage-50 dark:from-charcoal-900 dark:via-charcoal-800 dark:to-sage-900/20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-mint-200/30 dark:bg-mint-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-terracotta-200/20 dark:bg-terracotta-800/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage-200/20 dark:bg-sage-800/10 rounded-full blur-3xl" />

      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}
      {pollen.map((p, i) => (
        <PollenParticle key={`pollen-${i}`} {...p} />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint-100/80 dark:bg-mint-400/10 border border-mint-200 dark:border-mint-400/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-mint-600 dark:text-mint-400" />
            <span className="text-sm font-medium text-mint-700 dark:text-mint-300">Karachi-Tested Seeds</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal-900 dark:text-warm-50 leading-[1.1] mb-6"
          >
            Grow Something{' '}
            <span className="relative">
              <span className="text-mint-600 dark:text-mint-400">Rare</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-mint-400/40 dark:bg-mint-400/20 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-10 max-w-xl"
          >
            Sustainable native, medicinal, and edible plants tested for Karachi's climate. From balcony herbs to rooftop gardens.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => onNavigate('products')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary flex items-center gap-2"
            >
              Shop Seeds
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={() => onNavigate('categories')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-outline flex items-center gap-2"
            >
              <Leaf className="w-4 h-4" />
              Explore Native Plants
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-sage-200/50 dark:border-charcoal-700/50"
          >
            {[
              { value: '50+', label: 'Native Species' },
              { value: '5K+', label: 'Happy Growers' },
              { value: '98%', label: 'Germination Rate' },
              { value: '100%', label: 'Karachi-Tested' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl font-bold text-mint-600 dark:text-mint-400">{stat.value}</p>
                <p className="text-sm text-charcoal-500 dark:text-charcoal-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-sage-300 dark:border-charcoal-600 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-mint-500"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
