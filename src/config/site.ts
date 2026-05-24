import { pageSeo } from './seo';

export const siteConfig = {
  name: 'Nayab Seeds',
  tagline: 'Grow Something Rare, Resilient, Real',
  description: pageSeo.home.description,
  url: import.meta.env.VITE_SITE_URL || 'https://nayabseeds.pk',
  locale: 'en_PK',
  contact: {
    email: 'hello@nayabseeds.pk',
    phone: '+92 300 1234567',
    whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '923001234567',
    address: 'Karachi, Pakistan',
  },
  social: {
    instagram: 'https://instagram.com/nayabseeds',
    facebook: 'https://facebook.com/nayabseeds',
  },
  payments: ['Cash on Delivery (COD)', 'Easypaisa', 'JazzCash', 'Bank Transfer'],
} as const;
