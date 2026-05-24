import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Stethoscope, Sparkles, CloudSun, MessageCircle, Zap, Scan } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface QuizAnswer {
  sunlight: string;
  watering: string;
  interest: string;
  spaceSize?: string;
  climate?: string;
}

interface PlantRecommendation {
  id: string;
  name: string;
  urduName?: string;
  category: 'medicinal' | 'edible' | 'flowers';
  sunRequirement: 'full-sun' | 'partial-sun' | 'shade';
  wateringNeeds: 'daily' | 'moderate' | 'low';
  description: string;
  benefits: string[];
  price: number;
  image: string;
  score?: number; // Relevance score
}

const quizQuestions = [
  {
    id: 'sunlight',
    question: `How much sunlight does your space get?`,
    description: `This helps us recommend sun-appropriate plants`,
    options: [
      { label: '☀️ Full sun (6+ hours)', value: 'full-sun' },
      { label: '⛅ Partial sun (3-6 hours)', value: 'partial-sun' },
      { label: '🌑 Mostly shade', value: 'shade' },
    ],
  },
  {
    id: 'watering',
    question: `How often can you water?`,
    description: `We will match you with low-maintenance or frequent-watering plants`,
    options: [
      { label: '💧 Daily', value: 'daily' },
      { label: '💧💧 Every 2-3 days', value: 'moderate' },
      { label: '💧💧💧 Once a week or less', value: 'low' },
    ],
  },
  {
    id: 'interest',
    question: `What interests you most?`,
    description: `Choose based on your primary use`,
    options: [
      { label: '🌿 Medicinal & herbal', value: 'medicinal' },
      { label: '🥘 Edible & kitchen herbs', value: 'edible' },
      { label: '🌸 Flowers & pollinators', value: 'flowers' },
    ],
  },
  {
    id: 'spaceSize',
    question: `How much growing space do you have?`,
    description: `We recommend compact or sprawling varieties accordingly`,
    options: [
      { label: '🏠 Indoor/windowsill (compact)', value: 'compact' },
      { label: '🪟 Balcony/small garden (medium)', value: 'medium' },
      { label: '🌾 Large garden/outdoor (spacious)', value: 'spacious' },
    ],
  },
];

// Mock database - replace with Supabase query
const PLANT_RECOMMENDATIONS: PlantRecommendation[] = [
  {
    id: '1',
    name: 'Moringa',
    urduName: 'سہجن',
    category: 'medicinal',
    sunRequirement: 'full-sun',
    wateringNeeds: 'low',
    description: `Highly nutritious, medicinal superfood tree perfect for Karachi climate`,
    benefits: ['High protein', 'Immune boost', 'Anti-inflammatory', 'Vitamins & minerals'],
    price: 299,
    image: '/plants/moringa.jpg',
  },
  {
    id: '2',
    name: 'Mint',
    urduName: 'پودینہ',
    category: 'edible',
    sunRequirement: 'partial-sun',
    wateringNeeds: 'moderate',
    description: `Refreshing herb that grows vigorously in Karachi`,
    benefits: ['Digestive aid', 'Fresh flavor', 'Easy to grow', 'Pest repellent'],
    price: 199,
    image: '/plants/mint.jpg',
  },
  {
    id: '3',
    name: 'Holy Basil',
    urduName: 'تلسی',
    category: 'medicinal',
    sunRequirement: 'full-sun',
    wateringNeeds: 'moderate',
    description: `Sacred medicinal herb with spiritual and health benefits`,
    benefits: ['Stress relief', 'Respiratory health', 'Antibacterial', 'Energy boost'],
    price: 249,
    image: '/plants/basil.jpg',
  },
  {
    id: '4',
    name: 'Coriander',
    urduName: 'دھنیا',
    category: 'edible',
    sunRequirement: 'partial-sun',
    wateringNeeds: 'moderate',
    description: `Essential kitchen herb grown in Karachi gardens`,
    benefits: ['Culinary use', 'Digestive benefits', 'Rich in antioxidants', 'Quick harvest'],
    price: 179,
    image: '/plants/coriander.jpg',
  },
  {
    id: '5',
    name: 'Marigold',
    urduName: 'گیندا',
    category: 'flowers',
    sunRequirement: 'full-sun',
    wateringNeeds: 'moderate',
    description: `Vibrant flowers that attract pollinators and repel pests`,
    benefits: ['Pollinator magnet', 'Pest control', 'Edible petals', 'Beautiful blooms'],
    price: 149,
    image: '/plants/marigold.jpg',
  },
];

const calculateRelevanceScore = (plant: PlantRecommendation, answers: QuizAnswer): number => {
  let score = 0;
  
  // Sunlight match (40 points)
  if (plant.sunRequirement === answers.sunlight) score += 40;
  else if (
    (plant.sunRequirement === 'partial-sun' && answers.sunlight !== 'full-sun') ||
    (plant.sunRequirement === 'full-sun' && answers.sunlight === 'full-sun')
  ) score += 20;

  // Watering match (30 points)
  if (plant.wateringNeeds === answers.watering) score += 30;
  else if (
    (plant.wateringNeeds === 'moderate' && answers.watering !== 'daily') ||
    (plant.wateringNeeds === 'low' && answers.watering === 'low')
  ) score += 15;

  // Interest match (30 points)
  if (plant.category === answers.interest) score += 30;

  return score;
};

export default function AISection() {
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer>({
    sunlight: 'partial-sun',
    watering: 'moderate',
    interest: 'medicinal',
    spaceSize: 'medium',
    climate: 'karachi',
  });
  const [showResult, setShowResult] = useState(false);
  const [recommendations, setRecommendations] = useState<PlantRecommendation[]>([]);
  useCart();

  const handleAnswer = (value: string) => {
    const questionId = quizQuestions[quizStep].id as keyof QuizAnswer;
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Calculate recommendations
      const scored = PLANT_RECOMMENDATIONS.map(plant => ({
        ...plant,
        score: calculateRelevanceScore(plant, newAnswers),
      }))
        .sort((a, b) => (b.score || 0) - (a.score || 0))
        .slice(0, 5); // Top 5 recommendations

      setRecommendations(scored);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setAnswers({
      sunlight: 'partial-sun',
      watering: 'moderate',
      interest: 'medicinal',
      spaceSize: 'medium',
      climate: 'karachi',
    });
    setShowResult(false);
    setRecommendations([]);
  };

  const handleAddToCart = (_plant: PlantRecommendation) => {
    // Legacy section — use PlantQuiz component for cart integration
  };

  return (
    <section className="section-padding bg-charcoal-900 text-warm-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-mint-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-terracotta-800/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sage-800/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint-400/10 text-mint-400 text-sm font-medium mb-4 flex items-center justify-center gap-2">
            <Brain className="w-4 h-4" /> AI-Powered
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-50 mb-4">
            Find Your Perfect Plant
          </h2>
          <p className="text-charcoal-300 max-w-2xl mx-auto">
            Our intelligent quiz matches your growing conditions with the best plants for Karachi climate. Answer just 4 questions!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quiz Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-charcoal-800/60 backdrop-blur-lg border border-charcoal-700/50 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-mint-400/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-mint-400" />
              </div>
              <div>
                <h3 className="font-bold text-warm-100">Plant Recommendation Quiz</h3>
                <p className="text-xs text-charcoal-400">Personalized for Karachi climate</p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={quizStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {/* Progress Bar */}
                  <div className="flex items-center gap-2 mb-6">
                    {quizQuestions.map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className={`h-1.5 flex-1 rounded-full origin-left transition-colors ${
                          i < quizStep ? 'bg-mint-400' : i === quizStep ? 'bg-mint-300' : 'bg-charcoal-700'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-xs font-semibold text-mint-400 mb-2">
                    Question {quizStep + 1} of {quizQuestions.length}
                  </p>
                  <h4 className="text-xl font-bold text-warm-100 mb-2">
                    {quizQuestions[quizStep].question}
                  </h4>
                  <p className="text-sm text-charcoal-400 mb-6">
                    {quizQuestions[quizStep].description}
                  </p>

                  <div className="space-y-3">
                    {quizQuestions[quizStep].options.map((option, idx) => (
                      <motion.button
                        key={option.value}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(option.value)}
                        className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${
                          answers[quizQuestions[quizStep].id as keyof QuizAnswer] === option.value
                            ? 'border-mint-400 bg-mint-400/15 text-mint-300'
                            : 'border-charcoal-700 bg-charcoal-800/30 text-charcoal-300 hover:border-mint-400/50 hover:bg-charcoal-800/50'
                        }`}
                      >
                        <span className="font-medium">{option.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                /* Results Section */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', delay: 0.2 }}
                      className="w-16 h-16 bg-mint-400/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Sparkles className="w-8 h-8 text-mint-400" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-warm-100 mb-1">
                      Your Perfect Plants!
                    </h4>
                    <p className="text-sm text-charcoal-400">
                      Based on sunlight, watering, and your interests
                    </p>
                  </div>

                  <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
                    {recommendations.map((plant, i) => (
                      <motion.div
                        key={plant.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-charcoal-800/50 border border-charcoal-700 group hover:border-mint-400/50 hover:bg-charcoal-800/80 transition-all cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-mint-400/10 flex items-center justify-center text-mint-400 font-bold text-sm">
                          {i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-warm-200">{plant.name}</div>
                          {plant.urduName && (
                            <div className="text-xs text-charcoal-400">{plant.urduName}</div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-semibold text-mint-400">
                            {plant.score}% Match
                          </div>
                          <div className="text-sm font-bold text-warm-200">Rs. {plant.price}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={resetQuiz}
                      className="py-3 rounded-xl border border-charcoal-600 text-charcoal-300 hover:border-charcoal-500 transition-all text-sm font-medium"
                    >
                      Retake Quiz
                    </button>
                    <button
                      onClick={() => {
                        recommendations.slice(0, 3).forEach(plant => {
                          handleAddToCart(plant);
                        });
                      }}
                      className="py-3 rounded-xl bg-mint-400 text-charcoal-900 hover:bg-mint-300 transition-all text-sm font-medium"
                    >
                      Add Top 3 to Cart
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* AI Tools Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: Stethoscope,
                title: `AI Plant Doctor`,
                desc: `Upload a photo of your sick plant and get instant diagnosis and treatment recommendations.`,
                color: 'text-terracotta-400',
                bg: 'bg-terracotta-400/10',
              },
              {
                icon: CloudSun,
                title: `Weather Gardening`,
                desc: `Real-time Karachi weather-based gardening suggestions and alerts for your plants.`,
                color: 'text-sand-400',
                bg: 'bg-sand-400/10',
              },
              {
                icon: Scan,
                title: `Plant Scanner`,
                desc: `Point your camera at any plant to identify it and get care instructions.`,
                color: 'text-mint-400',
                bg: 'bg-mint-400/10',
              },
              {
                icon: MessageCircle,
                title: `Garden Assistant`,
                desc: `Chat with our AI assistant for personalized gardening advice and tips.`,
                color: 'text-sage-400',
                bg: 'bg-sage-400/10',
              },
            ].map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-charcoal-800/60 backdrop-blur-lg border border-charcoal-700/50 rounded-2xl p-5 group cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-xl ${tool.bg} flex items-center justify-center mb-4`}>
                  <tool.icon className={`w-5 h-5 ${tool.color}`} />
                </div>
                <h3 className="font-bold text-warm-100 mb-2 group-hover:text-mint-400 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-charcoal-400 leading-relaxed">{tool.desc}</p>
                <div className="flex items-center gap-1 mt-3 text-xs font-medium text-charcoal-500 group-hover:text-mint-400 transition-colors">
                  <Zap className="w-3 h-3" />
                  <span>Coming Soon</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}