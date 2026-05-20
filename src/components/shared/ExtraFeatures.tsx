import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, TreePine, Wind, Sprout, Bell, Droplets, Calendar, TrendingUp } from 'lucide-react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function ExtraFeatures() {
  return (
    <section className="section-padding gradient-mint">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint-100/80 dark:bg-mint-400/10 text-mint-700 dark:text-mint-400 text-sm font-medium mb-4">Impact & Tools</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 dark:text-warm-50 mb-4">Your Green Impact</h2>
          <p className="text-charcoal-600 dark:text-charcoal-300 max-w-2xl mx-auto">Track your environmental impact and get smart gardening reminders.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: TreePine, label: 'Trees Growing', value: 2847, color: 'text-mint-600 dark:text-mint-400', bg: 'bg-mint-50 dark:bg-mint-400/10' },
            { icon: Wind, label: 'CO2 Absorbed (kg)', value: 12450, color: 'text-sage-600 dark:text-sage-400', bg: 'bg-sage-50 dark:bg-sage-400/10' },
            { icon: Leaf, label: 'Native Species Saved', value: 34, color: 'text-terracotta-600 dark:text-terracotta-400', bg: 'bg-terracotta-50 dark:bg-terracotta-400/10' },
            { icon: Sprout, label: 'Seeds Germinated', value: 15620, color: 'text-sand-600 dark:text-sand-400', bg: 'bg-sand-50 dark:bg-sand-400/10' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 text-center"
            >
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>
                <AnimatedCounter target={stat.value} />
              </p>
              <p className="text-xs text-charcoal-500 dark:text-charcoal-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Sprout, title: 'Germination Tracker', desc: 'Track seed germination progress with daily updates and milestone notifications.', color: 'text-mint-600 dark:text-mint-400', bg: 'bg-mint-50 dark:bg-mint-400/10' },
            { icon: Droplets, title: 'Watering Reminders', desc: 'Smart watering schedule based on Karachi weather, plant type, and season.', color: 'text-sage-600 dark:text-sage-400', bg: 'bg-sage-50 dark:bg-sage-400/10' },
            { icon: Bell, title: 'Seasonal Alerts', desc: 'Get notified when it\'s the perfect time to plant specific seeds in Karachi.', color: 'text-terracotta-600 dark:text-terracotta-400', bg: 'bg-terracotta-50 dark:bg-terracotta-400/10' },
            { icon: Calendar, title: 'Planting Calendar', desc: 'Month-by-month Karachi planting guide with optimal sowing windows.', color: 'text-sand-600 dark:text-sand-400', bg: 'bg-sand-50 dark:bg-sand-400/10' },
            { icon: Leaf, title: 'Native Species Spotlight', desc: 'Weekly deep-dive into a Pakistani native plant and its ecological importance.', color: 'text-mint-600 dark:text-mint-400', bg: 'bg-mint-50 dark:bg-mint-400/10' },
            { icon: TrendingUp, title: 'Carbon Calculator', desc: 'Estimate your garden\'s carbon absorption and environmental impact.', color: 'text-sage-600 dark:text-sage-400', bg: 'bg-sage-50 dark:bg-sage-400/10' },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 group cursor-default"
            >
              <div className={`w-11 h-11 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-5 h-5 ${feature.color}`} />
              </div>
              <h3 className="font-bold text-charcoal-900 dark:text-warm-100 mb-2">{feature.title}</h3>
              <p className="text-sm text-charcoal-500 dark:text-charcoal-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
