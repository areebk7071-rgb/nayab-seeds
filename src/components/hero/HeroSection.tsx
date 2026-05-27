import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function HeroSection() {
  const words = useMemo(() => ['Rare', 'Real', 'Resilient'], []);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 2400);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <section className="w-full text-center pt-10 sm:pt-14 pb-8 sm:pb-10">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 text-charcoal-900 tracking-tight">
        Grow Something{' '}
        <span className="relative inline-block min-w-[9ch] align-baseline">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={words[wordIndex]}
              initial={{ opacity: 0, y: 10, filter: 'blur(2px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(2px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-mint-600 underline decoration-mint-400 underline-offset-8 inline-block"
            >
              {words[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>
      <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-2xl text-charcoal-700 mb-8 font-medium">
        Sustainable native, medicinal, and edible plants tested for Karachi's climate.
      </p>
      <p className="max-w-3xl mx-auto text-sm sm:text-base text-charcoal-600 mb-8">
        Tests for Native and Climatically adapted plants for Karachi.
      </p>

      <div className="flex justify-center mb-8">
        <div className="w-full max-w-xl sm:max-w-2xl">
          <div className="rounded-3xl bg-white/70 backdrop-blur border border-mint-100 shadow-sm overflow-hidden">
            <img
              src="/hero-plant.jpg"
              alt="Seedling"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col xs:flex-row justify-center gap-3 mb-10">
        <a
          href="#products"
          className="px-8 py-3.5 rounded-full bg-mint-600 text-white font-semibold shadow hover:bg-mint-700 transition"
        >
          Shop Seeds
        </a>
        <a
          href="#native"
          className="px-8 py-3.5 rounded-full border border-mint-300 text-mint-800 font-semibold bg-white/60 hover:bg-white/80 transition"
        >
          Explore Native Plants
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
        <div className="bg-white/70 backdrop-blur border border-mint-100 rounded-2xl px-6 py-4 text-charcoal-900 shadow-sm">
          <span className="block text-2xl font-bold">50+</span>
          <span className="block text-xs mt-1 text-charcoal-600">Native Species</span>
        </div>
        <div className="bg-white/70 backdrop-blur border border-mint-100 rounded-2xl px-6 py-4 text-charcoal-900 shadow-sm">
          <span className="block text-2xl font-bold">5K+</span>
          <span className="block text-xs mt-1 text-charcoal-600">Happy Growers</span>
        </div>
        <div className="bg-white/70 backdrop-blur border border-mint-100 rounded-2xl px-6 py-4 text-charcoal-900 shadow-sm">
          <span className="block text-2xl font-bold">98%</span>
          <span className="block text-xs mt-1 text-charcoal-600">Germination Rate</span>
        </div>
      </div>
    </section>
  );
}
