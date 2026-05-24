import { motion } from 'framer-motion';
import { Truck, Shield, Sprout, MessageCircle, CreditCard, HelpCircle } from 'lucide-react';
import { faqItems } from '../../data/products';
import { siteConfig } from '../../config/site';

const trustItems = [
  { icon: Truck, title: 'Karachi Delivery', desc: '2-4 day delivery across Karachi. COD available.' },
  { icon: Sprout, title: 'Germination Guidance', desc: 'Karachi-tested seeds with care instructions on every product.' },
  { icon: Shield, title: 'Quality Promise', desc: '14-day germination support when you follow our care guide.' },
  { icon: CreditCard, title: 'Flexible Payments', desc: 'COD, Easypaisa, JazzCash, and bank transfer accepted.' },
];

export default function TrustSection({ showFaq = true }: { showFaq?: boolean }) {
  return (
    <section className="section-padding bg-white dark:bg-charcoal-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-mint-100 dark:bg-mint-400/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-mint-600 dark:text-mint-400" />
              </div>
              <h3 className="font-bold text-charcoal-900 dark:text-warm-100 mb-2">{item.title}</h3>
              <p className="text-sm text-charcoal-500 dark:text-charcoal-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {showFaq && (
          <>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-mint-600 dark:text-mint-400 text-sm font-medium mb-2">
                <HelpCircle className="w-4 h-4" /> FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-900 dark:text-warm-50">
                Karachi Gardening FAQ
              </h2>
              <p className="text-sm text-charcoal-500 mt-2 max-w-lg mx-auto">
                Answers about native plants Pakistan, balcony gardening Karachi, medicinal herbs, and ordering seeds in Karachi.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group glass-card p-5 cursor-pointer"
                >
                  <summary className="font-semibold text-charcoal-900 dark:text-warm-100 list-none flex justify-between items-start gap-2">
                    {item.q}
                    <span className="text-mint-500 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-charcoal-500 dark:text-charcoal-400 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Assalam-o-Alaikum! I have a question about Nayab Seeds.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
