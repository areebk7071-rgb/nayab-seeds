import type { Product, Category, ShopCategory, KarachiTip, CommunityPost, Testimonial, PlantGuide, SeasonInfo } from '../types';

export const shopCategories: ShopCategory[] = [
  { id: 'native', name: 'Native Plants', slug: 'native-plants', description: 'Native plants Pakistan — wildflowers & species for Karachi biodiversity', icon: '🌿' },
  { id: 'medicinal', name: 'Medicinal Plants', slug: 'medicinal-plants', description: 'Medicinal plants Pakistan — tulsi, mint, moringa for home gardens', icon: '🍃' },
  { id: 'vegetables', name: 'Vegetables', slug: 'vegetables', description: 'Vegetable & herb seeds for Karachi kitchen gardens', icon: '🥬' },
  { id: 'flowers', name: 'Flowers', slug: 'flowers', description: 'Flower seeds for balcony gardening Karachi', icon: '🌸' },
  { id: 'trees', name: 'Trees', slug: 'trees', description: 'Tree seeds & saplings — moringa, neem for rooftops', icon: '🌳' },
  { id: 'beginner', name: 'Beginner Friendly', slug: 'beginner-friendly', description: 'Beginner gardening Karachi — easy starter seeds & kits', icon: '🌱' },
  { id: 'pollinator', name: 'Pollinator Friendly', slug: 'pollinator-friendly', description: 'Pollinator garden seeds — bees & butterflies in Karachi', icon: '🦋' },
  { id: 'heat-tolerant', name: 'Heat-Tolerant', slug: 'heat-tolerant', description: 'Heat tolerant plants Pakistan — survive Karachi summer', icon: '☀️' },
];

export const featuredHomeCategories = [
  { id: 'native', name: 'Native Plants', icon: '🌿', href: '/shop?category=native' },
  { id: 'medicinal', name: 'Medicinal Plants', icon: '🍃', href: '/shop?category=medicinal' },
  { id: 'beginner', name: 'Beginner Friendly', icon: '🌱', href: '/shop?category=beginner' },
  { id: 'heat-tolerant', name: 'Heat-Tolerant Plants', icon: '☀️', href: '/shop?category=heat-tolerant' },
];

export const categories: Category[] = [
  { id: 'native-wildflowers', name: 'Native Wildflowers', description: "Indigenous flowers that thrive in Karachi's unique climate", image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 12, icon: '🌸' },
  { id: 'medicinal', name: 'Medicinal Plants', description: 'Traditional healing plants used in Pakistani herbal medicine', image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 18, icon: '🌿' },
  { id: 'pollinator', name: 'Butterfly & Bee Garden', description: 'Attract pollinators and support urban biodiversity', image: 'https://images.pexels.com/photos/367555/pexels-photo-367555.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 10, icon: '🦋' },
  { id: 'balcony', name: 'Balcony-Friendly Plants', description: 'Perfect for apartment living and small spaces', image: 'https://images.pexels.com/photos/1084119/pexels-photo-1084119.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 15, icon: '🏠' },
  { id: 'heat-tolerant', name: 'Heat-Tolerant Plants', description: "Survive and thrive in Karachi's intense summers", image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 14, icon: '☀️' },
  { id: 'beginner-kits', name: 'Beginner Gardening Kits', description: 'Everything you need to start your first garden', image: 'https://images.pexels.com/photos/1084541/pexels-photo-1084541.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 8, icon: '🌱' },
];

export const localProducts: Product[] = [
  {
    id: 'mint-pudina', handle: 'mint-pudina', name: 'Mint (Pudina)', nameUrdu: 'پودینہ',
    description: 'Fast-growing aromatic herb perfect for Karachi. Great for teas, cooking, and digestive health.',
    price: 250, image: 'https://images.pexels.com/photos/1072178/pexels-photo-1072178.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/1072178/pexels-photo-1072178.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'medicinal', shopTags: ['medicinal', 'edible', 'beginner', 'balcony', 'heat-tolerant'],
    difficulty: 'Easy', sunlight: 'Partial Sun', watering: 'Moderate', germinationDays: '7-14 days',
    plantingSeason: 'Spring & Monsoon', karachiRating: 5, badges: ['Medicinal', 'Edible'],
    smartTags: ['Beginner Friendly', 'Balcony Friendly', 'Karachi Summer Survivor'],
    inStock: true, quantityAvailable: 50, medicinal: true, edible: true, pollinator: true, balconyFriendly: true, beginnerFriendly: true,
  },
  {
    id: 'holy-basil-tulsi', handle: 'holy-basil-tulsi', name: 'Holy Basil (Tulsi)', nameUrdu: 'تلسی',
    description: 'Sacred medicinal plant with adaptogenic properties. Thrives in Karachi heat and purifies indoor air.',
    price: 300, image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'medicinal', shopTags: ['medicinal', 'native', 'beginner', 'heat-tolerant'],
    difficulty: 'Easy', sunlight: 'Full Sun', watering: 'Moderate', germinationDays: '10-21 days',
    plantingSeason: 'Monsoon & Winter', karachiRating: 5, badges: ['Medicinal', 'Native'],
    smartTags: ['Beginner Friendly', 'Native Species', 'Medicinal', 'Karachi Summer Survivor'],
    inStock: true, quantityAvailable: 40, medicinal: true, native: true, beginnerFriendly: true, droughtTolerant: true,
  },
  {
    id: 'butterfly-pea', handle: 'butterfly-pea', name: 'Butterfly Pea', nameUrdu: 'اپراجیتا',
    description: 'Stunning blue flowers that attract butterflies. Makes beautiful blue tea. Drought-tolerant once established.',
    price: 350, image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'flowers', shopTags: ['flowers', 'pollinator', 'edible', 'heat-tolerant'],
    difficulty: 'Moderate', sunlight: 'Full Sun', watering: 'Low', germinationDays: '14-21 days',
    plantingSeason: 'Monsoon', karachiRating: 4, badges: ['Pollinator', 'Edible'],
    smartTags: ['Pollinator Friendly', 'Karachi Summer Survivor'],
    inStock: true, quantityAvailable: 30, pollinator: true, edible: true, droughtTolerant: true,
  },
  {
    id: 'marigold', handle: 'marigold', name: 'Marigold', nameUrdu: 'گیندا',
    description: 'Hardy companion plant that repels pests. Bright blooms perfect for Karachi rooftops and borders.',
    price: 200, image: 'https://images.pexels.com/photos/367555/pexels-photo-367555.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/367555/pexels-photo-367555.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'flowers', shopTags: ['flowers', 'native', 'pollinator', 'beginner', 'heat-tolerant'],
    difficulty: 'Easy', sunlight: 'Full Sun', watering: 'Low', germinationDays: '5-10 days',
    plantingSeason: 'Monsoon & Winter', karachiRating: 5, badges: ['Native', 'Pollinator'],
    smartTags: ['Beginner Friendly', 'Native Species', 'Karachi Summer Survivor', 'Balcony Friendly'],
    inStock: true, quantityAvailable: 60, pollinator: true, native: true, beginnerFriendly: true, balconyFriendly: true, droughtTolerant: true,
  },
  {
    id: 'moringa', handle: 'moringa', name: 'Moringa', nameUrdu: 'سہجن',
    description: 'Superfood tree with incredible nutritional value. Extremely heat-tolerant and fast-growing in Karachi.',
    price: 400, image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'trees', shopTags: ['trees', 'medicinal', 'native', 'heat-tolerant', 'edible'],
    difficulty: 'Easy', sunlight: 'Full Sun', watering: 'Low', germinationDays: '7-14 days',
    plantingSeason: 'Monsoon', karachiRating: 5, badges: ['Superfood', 'Medicinal'],
    smartTags: ['Native Species', 'Medicinal', 'Karachi Summer Survivor'],
    inStock: true, quantityAvailable: 25, medicinal: true, edible: true, native: true, droughtTolerant: true,
  },
  {
    id: 'coriander', handle: 'coriander', name: 'Coriander (Dhaniya)', nameUrdu: 'دھنیا',
    description: 'Essential kitchen herb. Grow fresh cilantro year-round. Best in Karachi cooler months.',
    price: 150, image: 'https://images.pexels.com/photos/1072822/pexels-photo-1072822.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/1072822/pexels-photo-1072822.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'vegetables', shopTags: ['vegetables', 'edible', 'beginner', 'balcony'],
    difficulty: 'Easy', sunlight: 'Partial Sun', watering: 'Moderate', germinationDays: '7-14 days',
    plantingSeason: 'Winter', karachiRating: 4, badges: ['Edible'],
    smartTags: ['Beginner Friendly', 'Balcony Friendly'],
    inStock: true, quantityAvailable: 80, edible: true, beginnerFriendly: true, balconyFriendly: true,
  },
  {
    id: 'fenugreek', handle: 'fenugreek', name: 'Fenugreek (Methi)', nameUrdu: 'میتھی',
    description: 'Nutritious leafy green and medicinal seed. Easy to grow in winter. Essential for Pakistani cooking.',
    price: 175, image: 'https://images.pexels.com/photos/1072822/pexels-photo-1072822.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/1072822/pexels-photo-1072822.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'vegetables', shopTags: ['vegetables', 'edible', 'medicinal', 'beginner'],
    difficulty: 'Easy', sunlight: 'Full Sun', watering: 'Moderate', germinationDays: '5-10 days',
    plantingSeason: 'Winter', karachiRating: 5, badges: ['Edible', 'Medicinal'],
    smartTags: ['Beginner Friendly', 'Medicinal'],
    inStock: true, quantityAvailable: 70, edible: true, medicinal: true, beginnerFriendly: true,
  },
  {
    id: 'neem-sapling', handle: 'neem-sapling', name: 'Neem Sapling', nameUrdu: 'نیم',
    description: 'The ultimate Pakistani medicinal tree. Natural pesticide, air purifier, and shade provider.',
    price: 500, image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'trees', shopTags: ['trees', 'medicinal', 'native', 'heat-tolerant'],
    difficulty: 'Moderate', sunlight: 'Full Sun', watering: 'Low', germinationDays: 'N/A (Sapling)',
    plantingSeason: 'Monsoon', karachiRating: 5, badges: ['Medicinal', 'Native'],
    smartTags: ['Native Species', 'Medicinal', 'Karachi Summer Survivor'],
    inStock: true, quantityAvailable: 15, medicinal: true, native: true, droughtTolerant: true,
  },
  {
    id: 'beginner-herb-kit', handle: 'beginner-herb-kit', name: 'Beginner Herb Garden Kit',
    description: 'Complete starter kit with Mint, Tulsi, Coriander, and Fenugreek seeds plus pots, soil, and guide.',
    price: 1200, image: 'https://images.pexels.com/photos/1084541/pexels-photo-1084541.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/1084541/pexels-photo-1084541.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'beginner-kits', shopTags: ['beginner', 'medicinal', 'edible', 'balcony'],
    difficulty: 'Easy', sunlight: 'Partial Sun', watering: 'Moderate', germinationDays: '7-21 days',
    plantingSeason: 'Year-round', karachiRating: 5, badges: ['Beginner', 'All-in-One'],
    smartTags: ['Beginner Friendly', 'Balcony Friendly'],
    inStock: true, quantityAvailable: 20, beginnerFriendly: true, balconyFriendly: true,
  },
  {
    id: 'native-milkweed', handle: 'native-milkweed', name: 'Native Milkweed', nameUrdu: 'اک',
    description: 'Essential host plant for butterflies. Critical for urban biodiversity in Karachi.',
    price: 325, image: 'https://images.pexels.com/photos/1084541/pexels-photo-1084541.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/1084541/pexels-photo-1084541.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'native-wildflowers', shopTags: ['native', 'pollinator', 'flowers'],
    difficulty: 'Moderate', sunlight: 'Full Sun', watering: 'Low', germinationDays: '14-30 days',
    plantingSeason: 'Monsoon', karachiRating: 3, badges: ['Pollinator', 'Native'],
    smartTags: ['Native Species', 'Pollinator Friendly'],
    inStock: true, quantityAvailable: 20, pollinator: true, native: true, droughtTolerant: true,
  },
  {
    id: 'cleome', handle: 'cleome', name: 'Cleome (Spider Flower)', nameUrdu: 'کلیم',
    description: 'Dramatic tall annual with spidery blooms. Heat-loving and drought-tolerant for Karachi gardens.',
    price: 275, image: 'https://images.pexels.com/photos/1084119/pexels-photo-1084119.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/1084119/pexels-photo-1084119.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'native-wildflowers', shopTags: ['native', 'flowers', 'heat-tolerant', 'pollinator'],
    difficulty: 'Moderate', sunlight: 'Full Sun', watering: 'Low', germinationDays: '10-21 days',
    plantingSeason: 'Monsoon', karachiRating: 4, badges: ['Drought-Tolerant', 'Pollinator'],
    smartTags: ['Native Species', 'Karachi Summer Survivor', 'Pollinator Friendly'],
    inStock: true, quantityAvailable: 35, pollinator: true, native: true, droughtTolerant: true,
  },
  {
    id: 'lemon-balm', handle: 'lemon-balm', name: 'Lemon Balm', nameUrdu: 'لیمن بالم',
    description: 'Calming herb with lemon-scented leaves. Excellent for anxiety relief and attracts bees.',
    price: 350, image: 'https://images.pexels.com/photos/1072823/pexels-photo-1072823.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/1072823/pexels-photo-1072823.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'medicinal', shopTags: ['medicinal', 'balcony', 'beginner'],
    difficulty: 'Easy', sunlight: 'Partial Shade', watering: 'Moderate', germinationDays: '14-28 days',
    plantingSeason: 'Winter & Spring', karachiRating: 3, badges: ['Medicinal', 'Calming'],
    smartTags: ['Medicinal', 'Balcony Friendly', 'Beginner Friendly'],
    inStock: true, quantityAvailable: 25, medicinal: true, balconyFriendly: true, beginnerFriendly: true,
  },
];

/** @deprecated Use localProducts */
export const products = localProducts;

export const karachiTips: KarachiTip[] = [
  { id: 'heat', title: 'Beat the Heat', description: 'Choose heat-tolerant varieties like Moringa, Neem, and Marigold. Water early morning or late evening.', icon: 'thermometer', season: 'Summer', temperature: '35-45°C' },
  { id: 'monsoon', title: 'Monsoon Planting', description: 'Best time to sow seeds! Direct sow wildflowers and native species during monsoon rains.', icon: 'cloud-rain', season: 'Monsoon', temperature: '28-35°C' },
  { id: 'rooftop', title: 'Rooftop Gardens', description: 'Use lightweight containers with drainage. Mulch heavily to retain moisture in Karachi heat.', icon: 'home', season: 'Spring', temperature: '25-35°C' },
  { id: 'pollinator', title: 'Pollinator Paradise', description: 'Plant Marigold, Butterfly Pea, and Milkweed in clusters. Avoid pesticides.', icon: 'bug', season: 'Spring', temperature: '20-30°C' },
  { id: 'winter', title: 'Winter Growing', description: 'Perfect season for herbs! Grow Coriander, Fenugreek, and leafy greens.', icon: 'snowflake', season: 'Winter', temperature: '12-25°C' },
  { id: 'watering', title: 'Smart Watering', description: 'Use drip irrigation or self-watering pots. Mulch reduces water needs by 50%.', icon: 'droplets', season: 'Summer', temperature: '35-45°C' },
];

export const seasons: SeasonInfo[] = [
  { name: 'Spring', months: 'Feb - Apr', tempRange: '20-35°C', plantingTips: ['Start herb seeds indoors', 'Prepare rooftop containers', 'Plant Marigold'], color: 'mint' },
  { name: 'Summer', months: 'May - Aug', tempRange: '35-45°C', plantingTips: ['Focus on heat-tolerant species', 'Water early morning only', 'Provide shade cloth'], color: 'terracotta' },
  { name: 'Monsoon', months: 'Jul - Sep', tempRange: '28-35°C', plantingTips: ['Direct sow wildflower seeds', 'Best germination season', 'Watch for fungal issues'], color: 'sage' },
  { name: 'Winter', months: 'Nov - Jan', tempRange: '12-25°C', plantingTips: ['Grow all herbs and greens', 'Protect from cold winds', 'Reduce watering'], color: 'sand' },
];

export const communityPosts: CommunityPost[] = [
  { id: '1', author: 'Ayesha Khan', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100', image: 'https://images.pexels.com/photos/1084119/pexels-photo-1084119.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'My balcony garden 3 months in! Started with the Beginner Kit.', likes: 142, comments: 23, timeAgo: '2 days ago', tags: ['BalconyGarden', 'KarachiGrows'] },
];

export const testimonials: Testimonial[] = [
  { id: '1', name: 'Fatima Rizvi', role: 'Apartment Gardener, Clifton', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100', text: 'Nayab Seeds changed my life. Their beginner kit made balcony gardening so easy in Karachi.', rating: 5 },
  { id: '2', name: 'Ahmed Sheikh', role: 'Rooftop Farmer, Gulshan', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100', text: 'Every seed germinated. The Karachi-specific advice on each product page sets Nayab apart.', rating: 5 },
];

export const plantGuides: PlantGuide[] = [
  { id: '1', title: 'Starting Your First Balcony Garden in Karachi', category: 'Beginner', readTime: '5 min', image: 'https://images.pexels.com/photos/1084119/pexels-photo-1084119.jpeg?auto=compress&cs=tinysrgb&w=600', excerpt: 'Everything you need for growing plants on your Karachi balcony.' },
  { id: '2', title: 'Medicinal Plants Every Pakistani Home Needs', category: 'Medicinal', readTime: '8 min', image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600', excerpt: 'Traditional healing plants used in Pakistani households for generations.' },
  { id: '3', title: 'Creating a Pollinator Paradise', category: 'Ecology', readTime: '6 min', image: 'https://images.pexels.com/photos/367555/pexels-photo-367555.jpeg?auto=compress&cs=tinysrgb&w=600', excerpt: 'How to attract butterflies and bees to your urban Karachi garden.' },
  { id: '4', title: 'Monsoon Planting Calendar for Karachi', category: 'Seasonal', readTime: '4 min', image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=600', excerpt: 'What, when, and how to plant during Karachi monsoon season.' },
];

export { seoFaqItems as faqItems } from '../config/seo';
