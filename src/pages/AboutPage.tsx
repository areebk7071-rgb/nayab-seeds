import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Globe } from 'lucide-react';
import Seo from '../components/shared/Seo';
import BrandSection from '../components/brand/BrandSection';
import { testimonials } from '../data/products';
import { pageSeo } from '../config/seo';

const values = [
  { icon: Leaf, title: 'Ecological Integrity', desc: 'Native plants Pakistan and pollinator-friendly seeds — never generic imports that fail in Karachi heat.' },
  { icon: Heart, title: 'Karachi-First', desc: 'Every variety tested for Sindh coastal climate: monsoon rains, 45°C summers, and rooftop wind.' },
  { icon: Users, title: 'Community Roots', desc: 'Supporting balcony gardening Karachi and rooftop growers restoring urban biodiversity.' },
  { icon: Globe, title: 'Hopeful Future', desc: 'Medicinal plants Pakistan households can grow at home — greener neighborhoods, one seed at a time.' },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title={pageSeo.about.title}
        description={pageSeo.about.description}
        path="/about"
        noSuffix
      />

      <div className="page-top">
        <section className="section-padding text-center max-w-3xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-charcoal-900 dark:text-warm-50 mb-6"
          >
            Karachi&apos;s Ecological Gardening Brand
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-charcoal-600 dark:text-charcoal-300 leading-relaxed"
          >
            Nayab Seeds helps Karachi and Pakistan growers access seeds that actually germinate here — native species,
            medicinal herbs, heat tolerant plants, and beginner balcony kits with honest Karachi gardening advice.
          </motion.p>
        </section>

        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-6 text-center"
              >
                <v.icon className="w-10 h-10 text-mint-600 mx-auto mb-4" />
                <h2 className="font-bold text-charcoal-900 dark:text-warm-100 mb-2">{v.title}</h2>
                <p className="text-sm text-charcoal-500 dark:text-charcoal-400">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <BrandSection />

        <section className="section-padding gradient-mint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-10 text-charcoal-900 dark:text-warm-50">
              Karachi Growers Trust Nayab Seeds
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <blockquote key={t.id} className="glass-card p-6">
                  <p className="text-charcoal-600 dark:text-charcoal-300 italic mb-4">&ldquo;{t.text}&rdquo;</p>
                  <footer className="font-semibold text-charcoal-900 dark:text-warm-100">{t.name}</footer>
                  <cite className="text-sm text-charcoal-500 not-italic">{t.role}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
