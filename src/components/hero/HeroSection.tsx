import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Sparkles, HandHeart, Sprout, BadgeCheck } from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const ROTATING_WORDS = ['Rare', 'Resilient', 'Real'] as const;
const WORD_INTERVAL_MS = 2800;

function RotatingTagline({ reducedMotion }: { reducedMotion: boolean }) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, WORD_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const activeWord = ROTATING_WORDS[wordIndex];

  if (reducedMotion) {
    return (
      <span className="flex flex-col items-start gap-1">
        <span className="text-[2rem] leading-none xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold">Grow Something</span>
        <span className="text-[#5fc693] text-[1.65rem] xs:text-4xl sm:text-5xl font-extrabold">Rare, Resilient, Real</span>
      </span>
    );
  }

  return (
    <span className="flex flex-col items-start gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3">
      <span className="text-[2rem] leading-none xs:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight">
        Grow Something
      </span>
      <span
        className="relative inline-block min-w-[10ch] h-[1.1em] sm:h-auto sm:min-w-[11ch] text-[#5fc693] text-[1.65rem] xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold"
        aria-live="polite"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={activeWord}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-block"
          >
            {activeWord}
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 w-full h-3 text-charcoal-900 dark:text-warm-100"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M 1 5 Q 50 1 99 4"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.85"
              />
            </svg>
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="sr-only">Rare, Resilient, Real</span>
    </span>
  );
}

function FloatingParticle({ delay, x, y, size, duration, reduced }: { delay: number; x: string; y: string; size: number; duration: number; reduced: boolean }) {
  if (reduced) return null;
  return (
    <motion.div
      className="absolute pointer-events-none z-10 hidden sm:block"
      style={{ left: x, top: y }}
      animate={{
        opacity: [0, 0.6, 0.3, 0.6, 0],
        y: [0, -30, -60, -90, -120],
        rotate: [0, 45, 90, 135, 180],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Leaf className="text-mint-400/40 dark:text-mint-400/20" style={{ width: size, height: size }} />
    </motion.div>
  );
}

export default function HeroSection() {
  const reducedMotion = usePrefersReducedMotion();

  const particles = [
    { delay: 0, x: '10%', y: '60%', size: 16, duration: 8 },
    { delay: 2, x: '75%', y: '50%', size: 20, duration: 7 },
    { delay: 1.5, x: '35%', y: '55%', size: 18, duration: 8 },
  ];

  const stats = [
    { icon: Leaf, value: '50+', label: 'Native Species' },
    { icon: HandHeart, value: '5K+', label: 'Happy Growers' },
    { icon: Sprout, value: '98%', label: 'Germination Rate' },
    { icon: BadgeCheck, value: '100%', label: 'Karachi-Tested' },
  ];

  return (
    <section className="relative min-h-[100dvh] sm:min-h-screen flex items-center overflow-hidden z-10 pt-safe-top">
      <svg className="absolute right-0 top-[10%] w-full max-w-4xl h-[320px] sm:h-[700px] pointer-events-none opacity-40 sm:opacity-80 z-0 hidden xs:block" viewBox="0 0 1000 700" fill="none" aria-hidden>
        <path d="M 200 650 Q 550 500 950 150" stroke="url(#goldGradient)" strokeWidth="6" strokeLinecap="round" opacity="0.65" />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#61c69d" stopOpacity="0" />
            <stop offset="60%" stopColor="#fbbf24" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#fffbeb" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-br from-[#dff2e8] via-[#f7faf5] to-[#f4f2e5] dark:from-[#13241b] dark:via-[#1c221e] dark:to-[#22211b] z-0" />
      <div className="absolute top-20 right-10 w-48 sm:w-96 h-48 sm:h-96 bg-[#8ae4bc]/30 dark:bg-mint-800/10 rounded-full blur-3xl z-0" />

      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} reduced={reducedMotion} />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:py-40 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-mint-400/10 border border-white/40 dark:border-mint-400/20 mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-mint-600 dark:text-mint-400" />
            <span className="text-sm font-medium text-mint-800 dark:text-mint-300">Karachi-Tested Seeds</span>
          </motion.div>

          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-900 dark:text-warm-50 mb-4 sm:mb-6 font-display max-w-full"
          >
            <RotatingTagline reducedMotion={reducedMotion} />
          </motion.h1>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm xs:text-base sm:text-xl text-[#4a6b57] dark:text-sage-300 leading-relaxed mb-6 sm:mb-10 max-w-xl font-medium text-balance"
          >
            <span className="sm:hidden">
              Karachi-tested seeds for native, medicinal, and balcony plants — built for our climate.
            </span>
            <span className="hidden sm:inline">
              Karachi-tested seeds for native plants Pakistan, medicinal herbs, balcony gardening, and heat-tolerant species — grown for our climate, not imported guesses.
            </span>
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col xs:flex-row flex-wrap gap-3 w-full sm:gap-5 sm:w-auto"
          >
            <Link
              to="/shop"
              className="w-full xs:w-auto text-center bg-[#9de0bd] hover:bg-[#86d4af] text-[#1d3326] font-bold px-8 py-3.5 min-h-[48px] rounded-full shadow-md hover:shadow-lg transition-all touch-manipulation flex items-center justify-center"
            >
              Shop Seeds
            </Link>
            <Link
              to="/shop?category=native"
              className="w-full xs:w-auto text-center border border-charcoal-800 dark:border-warm-200 text-charcoal-900 dark:text-warm-100 font-semibold px-8 py-3.5 min-h-[48px] rounded-full hover:bg-charcoal-900/5 dark:hover:bg-warm-100/10 transition-all touch-manipulation flex items-center justify-center"
            >
              Explore Native Plants
            </Link>
            <Link
              to="/quiz"
              className="w-full xs:w-auto text-center border border-mint-600 text-mint-700 font-semibold px-8 py-3.5 min-h-[48px] rounded-full touch-manipulation flex items-center justify-center sm:hidden"
            >
              Take Plant Quiz
            </Link>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-16"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-white/45 dark:bg-charcoal-800/45 backdrop-blur-md border border-white/30 dark:border-charcoal-700/30 rounded-2xl p-3 sm:p-4 shadow-sm"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-charcoal-700 flex items-center justify-center shadow-sm shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#2b8663] dark:text-[#61c69d]" />
                    </div>
                    <p className="text-xl sm:text-3xl font-extrabold text-charcoal-900 dark:text-warm-50 font-display">{stat.value}</p>
                  </div>
                  <p className="text-[10px] sm:text-xs font-semibold text-[#4a6b57] dark:text-sage-300 mt-2">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
