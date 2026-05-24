import { motion } from 'framer-motion';
import { Leaf, Sparkles, HandHeart, Sprout, BadgeCheck } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

function FloatingParticle({ delay, x, y, size, duration }: { delay: number; x: string; y: string; size: number; duration: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none z-10"
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
      className="absolute pointer-events-none z-10"
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

  const stats = [
    { icon: Leaf, value: '50+', label: 'Native Species', color: 'text-mint-600 dark:text-mint-400' },
    { icon: HandHeart, value: '5K+', label: 'Happy Growers', color: 'text-mint-600 dark:text-mint-400' },
    { icon: Sprout, value: '98%', label: 'Germination Rate', color: 'text-mint-600 dark:text-mint-400' },
    { icon: BadgeCheck, value: '100%', label: 'Karachi-Tested', color: 'text-mint-600 dark:text-mint-400' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden z-10 select-none">
      {/* Curved glowing gold path */}
      <svg className="absolute right-0 top-[10%] w-full max-w-4xl h-[700px] pointer-events-none opacity-80 z-0" viewBox="0 0 1000 700" fill="none">
        <path d="M 200 650 Q 550 500 950 150" stroke="url(#goldGradient)" strokeWidth="6" strokeLinecap="round" opacity="0.65" filter="url(#glowPath)" />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#61c69d" stopOpacity="0" />
            <stop offset="60%" stopColor="#fbbf24" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#fffbeb" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glowPath" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-br from-[#dff2e8] via-[#f7faf5] to-[#f4f2e5] dark:from-[#13241b] dark:via-[#1c221e] dark:to-[#22211b] z-0" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#8ae4bc]/30 dark:bg-mint-800/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sand-200/20 dark:bg-terracotta-800/10 rounded-full blur-3xl z-0" />

      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}
      {pollen.map((p, i) => (
        <PollenParticle key={`pollen-${i}`} {...p} />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-mint-400/10 border border-white/40 dark:border-mint-400/20 mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-mint-600 dark:text-mint-400" />
            <span className="text-sm font-medium text-mint-800 dark:text-mint-300">Karachi-Tested Seeds</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7.5xl font-extrabold text-charcoal-900 dark:text-warm-50 leading-[1.15] mb-6 font-display"
          >
            Grow Something{' '}
            <span className="relative inline-block text-[#5fc693] dark:text-[#5fc693] font-extrabold ml-1">
              Rare
              <svg className="absolute -bottom-4 left-0 right-0 w-full h-4 text-charcoal-900 dark:text-warm-100" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M 1 5 Q 50 1 99 4 M 3 9 Q 50 5 97 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-[#4a6b57] dark:text-sage-300 leading-relaxed mb-10 max-w-xl font-medium"
          >
            Sustainable native, medicinal, and edible plants tested for Karachi's climate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-5"
          >
            <motion.button
              onClick={() => onNavigate('products')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#9de0bd] hover:bg-[#86d4af] text-[#1d3326] font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Shop Seeds
            </motion.button>
            <motion.button
              onClick={() => onNavigate('categories')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-charcoal-800 dark:border-warm-200 text-charcoal-900 dark:text-warm-100 font-semibold px-8 py-3.5 rounded-full hover:bg-charcoal-900/5 dark:hover:bg-warm-100/10 transition-all duration-300"
            >
              Explore Native Plants
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white/20 dark:bg-charcoal-800/20 backdrop-blur-md border border-white/40 dark:border-charcoal-700/40 rounded-[28px] p-5 flex flex-wrap gap-4 mt-16 max-w-4xl"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-white/45 dark:bg-charcoal-800/45 backdrop-blur-md border border-white/30 dark:border-charcoal-700/30 rounded-2xl p-4 flex flex-col justify-between min-w-[190px] flex-1 shadow-sm transition-all duration-300 hover:y-[-2px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-charcoal-700 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-[#2b8663] dark:text-[#61c69d]" />
                    </div>
                    <p className="text-3xl font-extrabold text-charcoal-900 dark:text-warm-50 font-display">{stat.value}</p>
                  </div>
                  <p className="text-xs font-semibold text-[#4a6b57] dark:text-sage-300 mt-3">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
