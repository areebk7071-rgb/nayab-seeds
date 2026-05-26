import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '../../config/site';

export default function Footer() {
  const links = {
    shop: [
      { label: 'All Seeds', to: '/shop' },
      { label: 'Medicinal Plants', to: '/shop?category=medicinal' },
      { label: 'Beginner Friendly', to: '/shop?category=beginner' },
      { label: 'Native Plants', to: '/shop?category=native' },
      { label: 'Take Plant Quiz', to: '/quiz' },
    ],
    learn: [
      { label: 'About Us', to: '/about' },
      { label: 'Native Karachi', to: '/native-karachi' },
      { label: 'Community', to: '/community' },
      { label: 'Contact', to: '/contact' },
    ],
  };

  return (
    <footer className="bg-charcoal-900 text-charcoal-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/Logo.png"
                alt="Nayab Seeds"
                className="h-12 w-12 rounded-lg object-cover shadow-md"
                width={48}
                height={48}
              />
              <span className="text-xl font-bold text-white">Nayab Seeds</span>
            </Link>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-6 max-w-sm">
              Bringing biodiversity, greenery, and healing back into urban Pakistani spaces through climate-adapted plants and seeds.
            </p>
            <div className="flex flex-col gap-2 text-sm text-charcoal-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-mint-500 shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-mint-400">
                <Mail className="w-4 h-4 text-mint-500 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-mint-500 shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              {links.shop.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-charcoal-400 hover:text-mint-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {links.learn.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-charcoal-400 hover:text-mint-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-charcoal-500 text-center sm:text-left">
            © {new Date().getFullYear()} Nayab Seeds. Small Seeds, Big Change.
          </p>
          <div className="flex items-center gap-4">
            <a href={siteConfig.social.instagram} className="text-charcoal-500 hover:text-mint-400" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={siteConfig.social.facebook} className="text-charcoal-500 hover:text-mint-400" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
