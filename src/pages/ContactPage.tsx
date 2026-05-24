import { useState, FormEvent } from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import Seo from '../components/shared/Seo';
import TrustSection from '../components/shared/TrustSection';
import { siteConfig } from '../config/site';
import { pageSeo } from '../config/seo';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Seo
        title={pageSeo.contact.title}
        description={pageSeo.contact.description}
        path="/contact"
        includeFaqSchema
        noSuffix
      />

      <div className="page-top pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-warm-50 mb-3">
              Contact Nayab Seeds — Karachi Seed Delivery
            </h1>
            <p className="text-charcoal-600 dark:text-charcoal-300 max-w-xl mx-auto leading-relaxed">
              Order native plant seeds, medicinal herbs, and balcony gardening kits. Ask about heat tolerant plants,
              monsoon planting, or germination — we reply fastest on WhatsApp.
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <div className="space-y-6">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Assalam-o-Alaikum! I need help with seeds for Karachi gardening.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-card p-6 hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-charcoal-900 dark:text-warm-100 group-hover:text-mint-600">WhatsApp — fastest for orders</p>
                  <p className="text-sm text-charcoal-500">{siteConfig.contact.phone}</p>
                </div>
              </a>

              <div className="glass-card p-6 space-y-4">
                <div className="flex items-center gap-3 text-charcoal-600 dark:text-charcoal-300">
                  <Mail className="w-5 h-5 text-mint-600" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-mint-600">{siteConfig.contact.email}</a>
                </div>
                <div className="flex items-center gap-3 text-charcoal-600 dark:text-charcoal-300">
                  <Phone className="w-5 h-5 text-mint-600" />
                  <span>{siteConfig.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-charcoal-600 dark:text-charcoal-300">
                  <MapPin className="w-5 h-5 text-mint-600" />
                  <span>Based in {siteConfig.contact.address} — delivery across Karachi</span>
                </div>
              </div>

              <div className="glass-card p-6">
                <h2 className="font-bold text-charcoal-900 dark:text-warm-100 mb-3">Payment Methods (Pakistan)</h2>
                <ul className="space-y-2 text-sm text-charcoal-600 dark:text-charcoal-300">
                  {siteConfig.payments.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
                <p className="text-xs text-charcoal-500 mt-4">
                  Easypaisa &amp; JazzCash account details shared via WhatsApp after you confirm your seed order.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-4">
              {submitted ? (
                <p className="text-center py-12 text-mint-700 font-medium">
                  Thank you! For seed orders and Karachi gardening questions, message us on WhatsApp for the quickest reply.
                </p>
              ) : (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-sage-200 dark:border-charcoal-600 bg-white dark:bg-charcoal-800" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-sage-200 dark:border-charcoal-600 bg-white dark:bg-charcoal-800" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="e.g. balcony gardening, medicinal plants, COD delivery area…"
                      className="w-full px-4 py-3 rounded-xl border border-sage-200 dark:border-charcoal-600 bg-white dark:bg-charcoal-800 resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">Send Message</button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      <TrustSection />
    </>
  );
}
