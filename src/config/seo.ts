/**
 * SEO & AI-discovery copy for Nayab Seeds (Karachi, Pakistan).
 * Written for humans first; phrased so search engines and LLM agents can cite clear facts.
 */

export const seoKeywords = [
  // Primary (brief requirement)
  'Karachi gardening',
  'native plants Pakistan',
  'medicinal plants Pakistan',
  'balcony gardening Karachi',
  'heat tolerant plants Pakistan',
  // High-intent local
  'buy seeds online Karachi',
  'organic seeds Pakistan',
  'ecological seeds Karachi',
  'rooftop gardening Karachi',
  'apartment gardening Karachi',
  'pollinator garden Pakistan',
  'native wildflowers Pakistan',
  'herb seeds Pakistan',
  'vegetable seeds Karachi',
  'garden seeds delivery Karachi',
  // Climate & season
  'monsoon planting Karachi',
  'summer plants Karachi heat',
  'winter herbs Karachi',
  'Karachi climate plants',
  // AI / conversational queries
  'best plants for Karachi balcony',
  'what to grow in Karachi apartment',
  'medicinal herbs grow at home Pakistan',
  'heat resistant plants Karachi summer',
  'where to buy native seeds Karachi',
  'beginner gardening Karachi',
  'Tulsi mint coriander seeds Karachi',
] as const;

/** Factual entity block — useful for JSON-LD and llms.txt */
export const businessFacts = {
  name: 'Nayab Seeds',
  type: 'Ecological seed retailer and gardening education brand',
  location: {
    city: 'Karachi',
    region: 'Sindh',
    country: 'Pakistan',
    countryCode: 'PK',
  },
  serviceArea: 'Karachi, Pakistan (nationwide shipping planned)',
  specializes: [
    'Karachi-tested native plant seeds',
    'Medicinal herb seeds (Tulsi, mint, moringa, neem)',
    'Balcony and rooftop gardening seeds',
    'Heat-tolerant and drought-tolerant species',
    'Pollinator-friendly wildflowers',
    'Beginner gardening kits',
  ],
  delivery: 'Karachi delivery in 2–4 business days; Cash on Delivery (COD) available',
  payments: ['Cash on Delivery', 'Easypaisa', 'JazzCash', 'Bank transfer'],
  languages: ['English', 'Urdu product names where applicable'],
} as const;

export const pageSeo = {
  home: {
    title: 'Karachi Gardening Seeds — Native & Medicinal Plants Pakistan',
    description:
      'Nayab Seeds sells Karachi-tested seeds for native plants Pakistan, medicinal herbs, balcony gardening Karachi, and heat tolerant plants Pakistan. Shop online with COD, growing guides, and a free plant quiz.',
    h1Support:
      'Karachi-tested ecological seeds for native plants, medicinal plants Pakistan, balcony gardening, and heat-tolerant species.',
  },
  shop: {
    title: 'Shop Seeds Karachi — Native, Medicinal & Heat-Tolerant Plants',
    description:
      'Browse native plants Pakistan, medicinal plants Pakistan, vegetables, flowers, and heat tolerant plants Pakistan — all tested for Karachi gardening. Filter by category, search, and order with COD across Karachi.',
  },
  quiz: {
    title: 'Plant Quiz — Best Plants for Your Karachi Balcony or Garden',
    description:
      'Free Smart Plant Quiz for Karachi gardeners: get personalized seed recommendations for balcony gardening Karachi, sunlight, watering, and monsoon or winter planting season in Pakistan.',
  },
  about: {
    title: 'About Nayab Seeds — Karachi Ecological Gardening',
    description:
      'Nayab Seeds is a Karachi, Pakistan brand helping urban growers restore biodiversity with native plants, medicinal herbs, and climate-adapted seeds for balconies and rooftops.',
  },
  contact: {
    title: 'Contact — Seeds Delivery Karachi & Gardening Help',
    description:
      'Order seeds in Karachi via WhatsApp or email. COD, Easypaisa, and JazzCash accepted. Ask about balcony gardening Karachi, germination, and native plants Pakistan.',
  },
  nativeKarachi: {
    title: 'Native Karachi — Ecological Restoration (Coming Soon)',
    description:
      'Future hub for native plants Pakistan, Miyawaki forests, and Karachi biodiversity — from the team behind Nayab Seeds ecological gardening.',
  },
  community: {
    title: 'Karachi Gardening Community',
    description:
      'Karachi gardeners sharing balcony gardens, rooftop farms, and pollinator projects. Community forum coming soon from Nayab Seeds.',
  },
} as const;

/** FAQ tuned for featured snippets and AI agent citations (direct, factual answers). */
export const seoFaqItems = [
  {
    q: 'Where can I buy native plant seeds in Karachi?',
    a: 'Nayab Seeds (nayabseeds.pk) sells Karachi-tested native plant seeds online with delivery across Karachi, Pakistan. Categories include native wildflowers, milkweed, marigold, and heat-tolerant species. Cash on Delivery (COD) is available.',
  },
  {
    q: 'What are the best plants for balcony gardening in Karachi?',
    a: 'For balcony gardening Karachi, choose compact heat-tolerant herbs and flowers: mint (pudina), holy basil (tulsi), coriander (dhaniya), marigold, and butterfly pea. Use well-draining pots, morning watering, and wind protection. Nayab Seeds labels balcony-friendly products and offers a free Plant Quiz for personalized picks.',
  },
  {
    q: 'Which medicinal plants can I grow at home in Pakistan?',
    a: 'Popular medicinal plants Pakistan home growers start with: tulsi (holy basil), mint (pudina), moringa (sahjan), fenugreek (methi), and neem. Nayab Seeds sells seeds tested for Karachi\'s heat and monsoon, with growing instructions on each product page.',
  },
  {
    q: 'What heat tolerant plants survive Karachi summer?',
    a: 'Heat tolerant plants Pakistan and Karachi summers include moringa, neem, marigold, butterfly pea, and cleome. Water early morning, use mulch, and avoid peak afternoon sun for young seedlings. Nayab Seeds marks heat-tolerant and "Karachi Summer Survivor" species in the shop.',
  },
  {
    q: 'When is the best time to plant seeds in Karachi?',
    a: 'Karachi gardening seasons: monsoon (July–September) for native wildflowers and direct sowing; winter (November–January) for herbs and vegetables like coriander and fenugreek; spring for setup; summer for established heat-tolerant plants with careful watering.',
  },
  {
    q: 'Do you deliver seeds across Karachi?',
    a: 'Yes. Nayab Seeds delivers across Karachi, Pakistan in approximately 2–4 business days. Cash on Delivery (COD), Easypaisa, and JazzCash are accepted.',
  },
  {
    q: 'Does Nayab Seeds offer organic or untreated seeds?',
    a: 'Nayab Seeds prioritizes untreated, ecologically sourced seeds batch-tested in Karachi conditions, without unnecessary chemical treatments. Product pages include germination and Karachi-specific care guidance.',
  },
  {
    q: 'How do I choose seeds for a beginner garden in Karachi?',
    a: 'Start with beginner-friendly seeds: mint, tulsi, marigold, coriander, or the Beginner Herb Garden Kit. Use the free Smart Plant Quiz at nayabseeds.pk/quiz for recommendations based on your balcony or garden, sunlight, and season.',
  },
] as const;

/** Short product SEO suffix appended to PDP descriptions in meta tags */
export function productMetaDescription(productName: string, baseDescription: string): string {
  const trimmed = baseDescription.slice(0, 120).replace(/\s+\S*$/, '');
  return `${trimmed}… Buy ${productName} seeds for Karachi gardening — native & medicinal plants Pakistan. COD Karachi delivery.`;
}
