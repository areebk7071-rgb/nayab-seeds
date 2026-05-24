import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Thermometer, CloudRain, Home, Bug, Snowflake, Droplets, ChevronRight } from 'lucide-react';
import { karachiTips, seasons } from '../../data/products';

const iconMap: Record<string, React.ElementType> = {
  thermometer: Thermometer,
  'cloud-rain': CloudRain,
  home: Home,
  bug: Bug,
  snowflake: Snowflake,
  droplets: Droplets,
};

const seasonColors: Record<string, string> = {
  Summer: 'bg-terracotta-100 dark:bg-terracotta-500/10 text-terracotta-700 dark:text-terracotta-400 border-terracotta-200 dark:border-terracotta-500/20',
  Monsoon: 'bg-sage-100 dark:bg-sage-500/10 text-sage-700 dark:text-sage-400 border-sage-200 dark:border-sage-500/20',
  Winter: 'bg-sand-100 dark:bg-sand-500/10 text-sand-700 dark:text-sand-400 border-sand-200 dark:border-sand-500/20',
  Spring: 'bg-mint-100 dark:bg-mint-500/10 text-mint-700 dark:text-mint-400 border-mint-200 dark:border-mint-500/20',
};

const seasonBadgeColors: Record<string, string> = {
  Summer: 'bg-terracotta-500',
  Monsoon: 'bg-sage-500',
  Winter: 'bg-sand-500',
  Spring: 'bg-mint-500',
};

export default function KarachiSection() {
  const [activeSeason, setActiveSeason] = useState(0);

  return (
    <section className="section-padding bg-white dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-terracotta-100/80 dark:bg-terracotta-500/10 text-terracotta-700 dark:text-terracotta-400 text-sm font-medium mb-4">Local Knowledge</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 dark:text-warm-50 mb-4">Why Karachi Gardening Needs Local Seeds</h2>
          <p className="text-charcoal-600 dark:text-charcoal-300 max-w-2xl mx-auto">
            Coastal heat, monsoon humidity, and rooftop wind make Karachi different from the rest of Pakistan.
            We test seeds for 35–45°C summers, monsoon sowing windows, and balcony gardening Karachi — so you grow what survives here.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {seasons.map((season, i) => (
            <motion.button
              key={season.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSeason(i)}
              className={`px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 border ${
                activeSeason === i
                  ? seasonColors[season.name === 'Spring' ? 'Spring' : season.name === 'Summer' ? 'Summer' : season.name === 'Monsoon' ? 'Monsoon' : 'Winter']
                  : 'bg-white dark:bg-charcoal-800 text-charcoal-600 dark:text-charcoal-300 border-sage-200 dark:border-charcoal-700 hover:border-mint-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${seasonBadgeColors[season.name === 'Spring' ? 'Spring' : season.name === 'Summer' ? 'Summer' : season.name === 'Monsoon' ? 'Monsoon' : 'Winter']}`} />
                <span>{season.name}</span>
                <span className="text-xs opacity-60">{season.months}</span>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSeason}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-6 sm:p-8 mb-12"
          >
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-mint-100 dark:bg-mint-400/10 flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Thermometer className="w-7 h-7 text-mint-600 dark:text-mint-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 dark:text-warm-100">{seasons[activeSeason].name}</h3>
                    <p className="text-sm text-charcoal-500 dark:text-charcoal-400">{seasons[activeSeason].months} | {seasons[activeSeason].tempRange}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {seasons[activeSeason].plantingTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-mint-500 mt-0.5 flex-shrink-0" />
                      <p className="text-charcoal-600 dark:text-charcoal-300 text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full sm:w-48">
                <div className="bg-gradient-to-br from-mint-50 to-sage-50 dark:from-charcoal-700 dark:to-charcoal-800 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-mint-600 dark:text-mint-400">{seasons[activeSeason].tempRange.split('-')[0]}</p>
                  <p className="text-xs text-charcoal-500 dark:text-charcoal-400 mt-1">Avg Temperature</p>
                  <div className="mt-3 h-2 bg-sage-200 dark:bg-charcoal-600 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-mint-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(parseInt(seasons[activeSeason].tempRange) / 45) * 100}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {karachiTips.map((tip, index) => {
            const Icon = iconMap[tip.icon] || Thermometer;
            return (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${seasonColors[tip.season]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-charcoal-900 dark:text-warm-100">{tip.title}</h3>
                    </div>
                    {tip.temperature && (
                      <span className="inline-block px-2 py-0.5 rounded-full bg-terracotta-50 dark:bg-terracotta-500/10 text-terracotta-600 dark:text-terracotta-400 text-xs font-medium mb-2">
                        {tip.temperature}
                      </span>
                    )}
                    <p className="text-sm text-charcoal-500 dark:text-charcoal-400 leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
