import { Leaf, Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const links = {
    shop: [
      { label: 'All Seeds', href: '#' },
      { label: 'Medicinal Plants', href: '#' },
      { label: 'Beginner Kits', href: '#' },
      { label: 'Rare Species', href: '#' },
      { label: 'Mint Collection', href: '#' },
    ],
    learn: [
      { label: 'Plant Care Guides', href: '#' },
      { label: 'Karachi Calendar', href: '#' },
      { label: 'Pest Management', href: '#' },
      { label: 'Medicinal Uses', href: '#' },
      { label: 'Beginner Tutorials', href: '#' },
    ],
    company: [
      { label: 'Our Story', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
  };

  return (
    <footer className="bg-charcoal-900 text-charcoal-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-mint-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Nayab<span className="text-mint-400">Seeds</span>
              </span>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-6 max-w-sm">
              Bringing biodiversity, greenery, and healing back into urban Pakistani spaces through climate-adapted plants and seeds.
            </p>
            <div className="flex flex-col gap-2 text-sm text-charcoal-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-mint-500" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-mint-500" />
                <span>hello@nayabseeds.pk</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-mint-500" />
                <span>+92 300 1234567</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              {links.shop.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-charcoal-400 hover:text-mint-400 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Learn</h4>
            <ul className="space-y-2">
              {links.learn.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-charcoal-400 hover:text-mint-400 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-charcoal-400 hover:text-mint-400 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-charcoal-500">2026 Nayab Seeds. Small Seeds, Big Change.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-charcoal-500 hover:text-mint-400 transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-charcoal-500 hover:text-mint-400 transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-charcoal-500 hover:text-mint-400 transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
