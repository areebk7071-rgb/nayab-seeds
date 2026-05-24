import { Link } from 'react-router-dom';
import { Trees, Map, Users, AlertTriangle } from 'lucide-react';
import Seo from '../components/shared/Seo';
import { pageSeo } from '../config/seo';

const upcoming = [
  { icon: Trees, title: 'Native Species Guide', desc: 'Identify and grow indigenous Karachi plants.' },
  { icon: Map, title: 'Restoration Maps', desc: 'Community greening projects across the city.' },
  { icon: Users, title: 'Citizen Science', desc: 'Document biodiversity in your neighborhood.' },
  { icon: AlertTriangle, title: 'Invasive Species', desc: 'Learn what to avoid and what to restore.' },
];

export default function NativeKarachiPage() {
  return (
    <>
      <Seo
        title={pageSeo.nativeKarachi.title}
        description={pageSeo.nativeKarachi.description}
        path="/native-karachi"
        noSuffix
      />

      <div className="page-top pb-16 min-h-screen gradient-mint">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint-100 text-mint-700 text-sm font-medium mb-6">
            Coming Soon
          </span>
          <h1 className="text-4xl font-bold text-charcoal-900 dark:text-warm-50 mb-4">Native Karachi</h1>
          <p className="text-lg text-charcoal-600 dark:text-charcoal-300 mb-12 leading-relaxed">
            We&apos;re building Karachi&apos;s ecological restoration hub — combining native plant guides,
            Miyawaki forest guidance, invasive species awareness, and community gardening tools.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left mb-12">
            {upcoming.map((item) => (
              <div key={item.title} className="glass-card p-5">
                <item.icon className="w-8 h-8 text-mint-600 mb-3" />
                <h2 className="font-bold text-charcoal-900 dark:text-warm-100 mb-1">{item.title}</h2>
                <p className="text-sm text-charcoal-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <Link to="/shop" className="btn-primary inline-block">
            Shop Seeds While We Build
          </Link>
        </div>
      </div>
    </>
  );
}
