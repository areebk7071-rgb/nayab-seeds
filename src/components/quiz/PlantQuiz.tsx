import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ShoppingCart } from 'lucide-react';
import type { Product, QuizAnswers } from '../../types';
import { getQuizRecommendations, getCareTip } from '../../lib/quiz';
import { useCart } from '../../context/CartContext';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const questions: {
  id: keyof QuizAnswers;
  question: string;
  description: string;
  options: { label: string; value: QuizAnswers[keyof QuizAnswers] }[];
}[] = [
  {
    id: 'space',
    question: 'Balcony or garden?',
    description: 'We will match plants to your growing space in Karachi.',
    options: [
      { label: '🏠 Balcony or windowsill', value: 'balcony' },
      { label: '🌾 Garden or rooftop', value: 'garden' },
    ],
  },
  {
    id: 'sunlight',
    question: 'How much sunlight do you get?',
    description: 'Honest answers help us recommend plants that will actually thrive.',
    options: [
      { label: '☀️ Full sun (6+ hours)', value: 'full-sun' },
      { label: '⛅ Partial sun (3-6 hours)', value: 'partial-sun' },
      { label: '🌑 Mostly shade', value: 'shade' },
    ],
  },
  {
    id: 'watering',
    question: 'How often can you water?',
    description: 'We match low-maintenance or frequent-care plants accordingly.',
    options: [
      { label: '💧 Daily', value: 'daily' },
      { label: '💧 Every 2-3 days', value: 'moderate' },
      { label: '💧 Once a week or less', value: 'low' },
    ],
  },
  {
    id: 'purpose',
    question: 'Medicinal, edible, flowers, or greenery?',
    description: 'What matters most to you right now?',
    options: [
      { label: '🌿 Medicinal & herbal', value: 'medicinal' },
      { label: '🥘 Edible & kitchen', value: 'edible' },
      { label: '🌸 Flowers & colour', value: 'flowers' },
      { label: '🍃 Greenery & natives', value: 'greenery' },
    ],
  },
  {
    id: 'experience',
    question: 'Beginner or experienced?',
    description: 'No wrong answer — we celebrate every grower.',
    options: [
      { label: '🌱 Complete beginner', value: 'beginner' },
      { label: '🌿 Some experience', value: 'experienced' },
    ],
  },
  {
    id: 'season',
    question: 'What season are you planting in?',
    description: 'Karachi seasons shape what grows best right now.',
    options: [
      { label: '☀️ Summer', value: 'summer' },
      { label: '🌧️ Monsoon', value: 'monsoon' },
      { label: '❄️ Winter', value: 'winter' },
      { label: '🌸 Spring', value: 'spring' },
    ],
  },
];

const defaultAnswers: QuizAnswers = {
  space: 'balcony',
  sunlight: 'partial-sun',
  watering: 'moderate',
  purpose: 'medicinal',
  experience: 'beginner',
  season: 'monsoon',
};

interface PlantQuizProps {
  products: Product[];
  compact?: boolean;
}

export default function PlantQuiz({ products, compact = false }: PlantQuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(defaultAnswers);
  const [results, setResults] = useState<Product[] | null>(null);
  const { addToCart } = useCart();
  const reducedMotion = usePrefersReducedMotion();

  const handleAnswer = (value: QuizAnswers[keyof QuizAnswers]) => {
    const q = questions[step];
    const next = { ...answers, [q.id]: value } as QuizAnswers;
    setAnswers(next);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setResults(getQuizRecommendations(products, next));
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers(defaultAnswers);
    setResults(null);
  };

  const motionProps = reducedMotion ? {} : { initial: { opacity: 0, x: 16 }, animate: { opacity: 1, x: 0 } };

  return (
    <div className={`${compact ? '' : 'bg-charcoal-900/95 text-warm-100 rounded-3xl border border-charcoal-700/50'} p-5 sm:p-8`}>
      {!compact && (
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-400/10 text-mint-400 text-sm font-medium mb-3">
            <Sparkles className="w-4 h-4" /> Smart Plant Quiz
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-warm-50">Find Your Perfect Plant</h2>
          <p className="text-charcoal-300 text-sm mt-2 max-w-lg mx-auto">
            A quick, conversational quiz tailored for Karachi&apos;s climate.
          </p>
        </div>
      )}

      <AnimatePresence mode="wait">
        {!results ? (
          <motion.div key={step} {...motionProps}>
            <div className="flex gap-1.5 mb-6">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i <= step ? 'bg-mint-400' : compact ? 'bg-sage-200' : 'bg-charcoal-700'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs font-semibold text-mint-500 mb-1">Question {step + 1} of {questions.length}</p>
            <h3 className="text-xl font-bold text-charcoal-900 dark:text-warm-100 mb-1">{questions[step].question}</h3>
            <p className="text-sm text-charcoal-500 dark:text-charcoal-400 mb-5">{questions[step].description}</p>
            <div className="space-y-2.5">
              {questions[step].options.map((opt, idx) => (
                <motion.button
                  key={String(opt.value)}
                  type="button"
                  whileHover={reducedMotion ? undefined : { x: 4 }}
                  whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                  initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => handleAnswer(opt.value)}
                  className={`w-full text-left px-4 sm:px-5 py-4 min-h-[52px] rounded-xl border-2 transition-all font-medium touch-manipulation ${
                    compact
                      ? 'border-sage-200 dark:border-charcoal-600 hover:border-mint-400 bg-white dark:bg-charcoal-800 text-charcoal-800 dark:text-warm-100'
                      : 'border-charcoal-700 bg-charcoal-800/40 text-warm-100 hover:border-mint-400/60 hover:bg-charcoal-800/70'
                  }`}
                >
                  {opt.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="text-center mb-6">
              <Sparkles className="w-10 h-10 text-mint-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-charcoal-900 dark:text-warm-100">Your Karachi Plant Matches</h3>
              <p className="text-sm text-charcoal-500 dark:text-charcoal-400 mt-1">Based on your space, light, and goals</p>
            </div>
            <ul className="space-y-3 mb-6 max-h-[420px] overflow-y-auto pr-1">
              {results.map((product, i) => (
                <li
                  key={product.id}
                  className="flex gap-3 p-3 rounded-xl bg-white/80 dark:bg-charcoal-800/80 border border-sage-100 dark:border-charcoal-700"
                >
                  <img src={product.image} alt="" className="w-14 h-14 rounded-lg object-cover shrink-0" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${product.handle}`} className="font-semibold text-charcoal-900 dark:text-warm-100 hover:text-mint-600">
                      {i + 1}. {product.name}
                    </Link>
                    <p className="text-xs text-charcoal-500 mt-0.5 line-clamp-2">{getCareTip(product, answers)}</p>
                    <p className="text-sm font-bold text-mint-700 dark:text-mint-400 mt-1">Rs. {product.price}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="shrink-0 self-center p-2 rounded-lg bg-mint-600 text-white hover:bg-mint-700"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-2">
              <button type="button" onClick={reset} className="flex-1 py-3 rounded-xl border border-sage-300 dark:border-charcoal-600 text-sm font-medium">
                Retake Quiz
              </button>
              <Link to="/shop" className="flex-1 py-3 rounded-xl bg-mint-600 text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-mint-700">
                Shop All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
