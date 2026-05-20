import { motion } from 'framer-motion';
import { Leaf, TreePine, Wind, Droplets, Heart, ArrowRight } from 'lucide-react';

export default function BrandSection() {
  return (
    <section className="section-padding bg-white dark:bg-charcoal-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-mint-100/30 dark:bg-mint-800/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-terracotta-100/30 dark:bg-terracotta-800/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-terracotta-100/80 dark:bg-terracotta-500/10 text-terracotta-700 dark:text-terracotta-400 text-sm font-medium mb-6">Our Story</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 dark:text-warm-50 mb-6 leading-tight">
              Bringing Life Back{' '}
              <span className="text-mint-600 dark:text-mint-400">Home</span>
            </h2>
            <div className="space-y-4 text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
              <p>
                Nayab Seeds was created to help bring biodiversity, greenery, and healing back into urban Pakistani spaces through climate-adapted plants and seeds.
              </p>
              <p>
                In a city of 20 million people, Karachi has lost much of its native green cover. Balconies sit empty, rooftops bake in the sun, and native plant species are disappearing. We believe that even the smallest seed can spark a revolution.
              </p>
              <p>
                Every seed we sell has been tested in Karachi's intense heat, unpredictable monsoons, and salty coastal winds. We don't just sell seeds - we provide the knowledge, community, and support to help them grow.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary mt-8 inline-flex items-center gap-2"
            >
              Join Our Movement
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: TreePine, value: '2,500+', label: 'Trees Planted', color: 'text-mint-600 dark:text-mint-400', bg: 'bg-mint-50 dark:bg-mint-400/10' },
              { icon: Leaf, value: '50+', label: 'Native Species', color: 'text-sage-600 dark:text-sage-400', bg: 'bg-sage-50 dark:bg-sage-400/10' },
              { icon: Wind, value: '12 tons', label: 'CO2 Absorbed', color: 'text-terracotta-600 dark:text-terracotta-400', bg: 'bg-terracotta-50 dark:bg-terracotta-400/10' },
              { icon: Droplets, value: '40%', label: 'Less Water Used', color: 'text-sand-600 dark:text-sand-400', bg: 'bg-sand-50 dark:bg-sand-400/10' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 text-center"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-sm text-charcoal-500 dark:text-charcoal-400 mt-1">{stat.label}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-2 glass-card p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-terracotta-50 dark:bg-terracotta-400/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-terracotta-600 dark:text-terracotta-400" />
                </div>
                <div>
                  <p className="font-bold text-charcoal-900 dark:text-warm-100">Plant of the Week</p>
                  <p className="text-sm text-charcoal-500 dark:text-charcoal-400">Moringa - The Miracle Tree. Every part is useful, from leaves to seeds.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
