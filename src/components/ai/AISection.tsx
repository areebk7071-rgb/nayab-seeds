import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Stethoscope, Sparkles, CloudSun, MessageCircle, ArrowRight, Zap, Scan } from 'lucide-react';

const quizQuestions = [
  {
    question: 'How much sunlight does your space get?',
    options: [
      { label: 'Full sun (6+ hours)', value: 'full-sun' },
      { label: 'Partial sun (3-6 hours)', value: 'partial-sun' },
      { label: 'Mostly shade', value: 'shade' },
    ],
  },
  {
    question: 'How often can you water?',
    options: [
      { label: 'Daily', value: 'daily' },
      { label: 'Every 2-3 days', value: 'moderate' },
      { label: 'Once a week or less', value: 'low' },
    ],
  },
  {
    question: 'What interests you most?',
    options: [
      { label: 'Medicinal & herbal', value: 'medicinal' },
      { label: 'Edible & kitchen herbs', value: 'edible' },
      { label: 'Flowers & pollinators', value: 'flowers' },
    ],
  },
];

const recommendations: Record<string, string[]> = {
  'full-sun': ['Moringa', 'Marigold', 'Holy Basil'],
  'partial-sun': ['Mint', 'Coriander', 'Lemon Balm'],
  'shade': ['Lemon Balm', 'Mint', 'Fenugreek'],
};

export default function AISection() {
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [quizStep]: value };
    setAnswers(newAnswers);
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const sunAnswer = answers[0] || 'partial-sun';
  const recommendedPlants = recommendations[sunAnswer] || recommendations['partial-sun'];

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-50 mb-4">Smart Gardening Tools</h2>
          <p className="text-charcoal-300 max-w-2xl mx-auto">Let AI help you grow better. From plant diagnosis to personalized recommendations for Karachi's climate.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                <h3 className="font-bold text-warm-100">What Should I Grow?</h3>
                <p className="text-xs text-charcoal-400">AI-powered plant recommendation quiz</p>
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
                  <div className="flex items-center gap-2 mb-4">
                    {quizQuestions.map((_, i) => (
                      <div key={i} className={`h-1 flex-1 rounded-full ${i <= quizStep ? 'bg-mint-400' : 'bg-charcoal-700'}`} />
                    ))}
                  </div>
                  <p className="text-sm text-charcoal-400 mb-1">Question {quizStep + 1} of {quizQuestions.length}</p>
                  <h4 className="text-lg font-semibold text-warm-100 mb-5">{quizQuestions[quizStep].question}</h4>
                  <div className="space-y-3">
                    {quizQuestions[quizStep].options.map(option => (
                      <motion.button
                        key={option.value}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(option.value)}
                        className={`w-full text-left px-5 py-3.5 rounded-xl border transition-all ${
                          answers[quizStep] === option.value
                            ? 'border-mint-400 bg-mint-400/10 text-mint-400'
                            : 'border-charcoal-700 bg-charcoal-800/50 text-charcoal-300 hover:border-mint-400/50'
                        }`}
                      >
                        {option.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.2 }}
                      className="w-16 h-16 bg-mint-400/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Sparkles className="w-8 h-8 text-mint-400" />
                    </motion.div>
                    <h4 className="text-lg font-bold text-warm-100 mb-1">Your Perfect Plants</h4>
                    <p className="text-sm text-charcoal-400">Based on your space and preferences</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {recommendedPlants.map((plant, i) => (
                      <motion.div
                        key={plant}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-charcoal-800/50 border border-charcoal-700"
                      >
                        <div className="w-8 h-8 rounded-lg bg-mint-400/10 flex items-center justify-center text-mint-400 font-bold text-sm">{i + 1}</div>
                        <span className="text-warm-200 font-medium">{plant}</span>
                        <ArrowRight className="w-4 h-4 text-mint-400 ml-auto" />
                      </motion.div>
                    ))}
                  </div>
                  <button onClick={resetQuiz} className="w-full py-3 rounded-xl border border-charcoal-600 text-charcoal-300 hover:border-mint-400 hover:text-mint-400 transition-all text-sm font-medium">
                    Retake Quiz
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Stethoscope, title: 'AI Plant Doctor', desc: 'Upload a photo of your sick plant and get instant diagnosis and treatment recommendations.', color: 'text-terracotta-400', bg: 'bg-terracotta-400/10' },
              { icon: CloudSun, title: 'Weather Gardening', desc: 'Real-time Karachi weather-based gardening suggestions and alerts for your plants.', color: 'text-sand-400', bg: 'bg-sand-400/10' },
              { icon: Scan, title: 'Plant Scanner', desc: 'Point your camera at any plant to identify it and get care instructions.', color: 'text-mint-400', bg: 'bg-mint-400/10' },
              { icon: MessageCircle, title: 'Garden Assistant', desc: 'Chat with our AI assistant for personalized gardening advice and tips.', color: 'text-sage-400', bg: 'bg-sage-400/10' },
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
                <h3 className="font-bold text-warm-100 mb-2 group-hover:text-mint-400 transition-colors">{tool.title}</h3>
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
