import { Product, Category, KarachiTip, CommunityPost, Testimonial, PlantGuide, SeasonInfo } from '../types';

export const categories: Category[] = [
  { id: 'native-wildflowers', name: 'Native Wildflowers', description: 'Indigenous flowers that thrive in Karachi\'s unique climate', image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 12, icon: '\ud83c\udf38' },
  { id: 'medicinal', name: 'Medicinal Plants', description: 'Traditional healing plants used in Pakistani herbal medicine', image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 18, icon: '\ud83c\udf3f' },
  { id: 'pollinator', name: 'Butterfly & Bee Garden', description: 'Attract pollinators and support urban biodiversity', image: 'https://images.pexels.com/photos/367555/pexels-photo-367555.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 10, icon: '\ud83e\udd8b' },
  { id: 'balcony', name: 'Balcony-Friendly Plants', description: 'Perfect for apartment living and small spaces', image: 'https://images.pexels.com/photos/1084119/pexels-photo-1084119.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 15, icon: '\ud83c\udfe0' },
  { id: 'heat-tolerant', name: 'Heat-Tolerant Plants', description: 'Survive and thrive in Karachi\'s intense summers', image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 14, icon: '\u2600\ufe0f' },
  { id: 'beginner-kits', name: 'Beginner Gardening Kits', description: 'Everything you need to start your first garden', image: 'https://images.pexels.com/photos/1084541/pexels-photo-1084541.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 8, icon: '\ud83c\udf31' },
  { id: 'rare-pakistani', name: 'Rare Pakistani Plants', description: 'Hard-to-find native species worth preserving', image: 'https://images.pexels.com/photos/1072822/pexels-photo-1072822.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 6, icon: '\u2728' },
  { id: 'edible-herbs', name: 'Edible Herbs', description: 'Fresh herbs for cooking, teas, and wellness', image: 'https://images.pexels.com/photos/1072823/pexels-photo-1072823.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 16, icon: '\ud83e\uded2' },
  { id: 'mint-collection', name: 'Mint Collection', description: 'A curated collection of aromatic mint varieties', image: 'https://images.pexels.com/photos/1072178/pexels-photo-1072178.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 7, icon: '\ud83c\udf3b' },
];

export const products: Product[] = [
  {
    id: 'mint-pudina', name: 'Mint (Pudina)', nameUrdu: '\u067e\u0648\u062f\u06cc\u0646\u06c1', description: 'Fast-growing aromatic herb perfect for Karachi. Great for teas, cooking, and digestive health. Spreads quickly in pots.', price: 250, image: 'https://images.pexels.com/photos/1072178/pexels-photo-1072178.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'mint-collection', difficulty: 'Easy', sunlight: 'Partial Sun', watering: 'Moderate', germinationDays: '7-14 days', karachiRating: 5, badges: ['Medicinal', 'Edible'], inStock: true, medicinal: true, edible: true, pollinator: true,
  },
  {
    id: 'holy-basil-tulsi', name: 'Holy Basil (Tulsi)', nameUrdu: '\u062a\u0644\u0633\u06cc', description: 'Sacred medicinal plant with powerful adaptogenic properties. Thrives in Karachi heat and purifies indoor air.', price: 300, image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'medicinal', difficulty: 'Easy', sunlight: 'Full Sun', watering: 'Moderate', germinationDays: '10-21 days', karachiRating: 5, badges: ['Medicinal', 'Air Purifying'], inStock: true, medicinal: true, native: true,
  },
  {
    id: 'butterfly-pea', name: 'Butterfly Pea', nameUrdu: '\u0627\u067e\u0631\u0627\u062c\u06cc\u062a\u0627', description: 'Stunning blue flowers that attract butterflies. Makes beautiful blue tea. Drought-tolerant once established.', price: 350, image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'pollinator', difficulty: 'Moderate', sunlight: 'Full Sun', watering: 'Low', germinationDays: '14-21 days', karachiRating: 4, badges: ['Pollinator', 'Edible'], inStock: true, pollinator: true, edible: true,
  },
  {
    id: 'marigold', name: 'Marigold', nameUrdu: '\u06af\u06cc\u0646\u062f\u0627', description: 'Hardy companion plant that repels pests. Bright orange-yellow blooms perfect for Karachi rooftops and borders.', price: 200, image: 'https://images.pexels.com/photos/367555/pexels-photo-367555.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'native-wildflowers', difficulty: 'Easy', sunlight: 'Full Sun', watering: 'Low', germinationDays: '5-10 days', karachiRating: 5, badges: ['Pest Repellent', 'Pollinator'], inStock: true, pollinator: true, native: true,
  },
  {
    id: 'lemon-balm', name: 'Lemon Balm', nameUrdu: '\u0644\u06cc\u0645\u0646 \u0628\u0627\u0644\u0645', description: 'Calming herb with lemon-scented leaves. Excellent for anxiety relief and attracts bees. Grows well in partial shade.', price: 350, image: 'https://images.pexels.com/photos/1072823/pexels-photo-1072823.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'medicinal', difficulty: 'Easy', sunlight: 'Partial Shade', watering: 'Moderate', germinationDays: '14-28 days', karachiRating: 3, badges: ['Medicinal', 'Calming'], inStock: true, medicinal: true,
  },
  {
    id: 'moringa', name: 'Moringa', nameUrdu: '\u0633\u06c1\u062c\u0646', description: 'Superfood tree with incredible nutritional value. Every part is useful. Extremely heat-tolerant and fast-growing.', price: 400, image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'heat-tolerant', difficulty: 'Easy', sunlight: 'Full Sun', watering: 'Low', germinationDays: '7-14 days', karachiRating: 5, badges: ['Superfood', 'Medicinal'], inStock: true, medicinal: true, edible: true, native: true,
  },
  {
    id: 'cleome', name: 'Cleome (Spider Flower)', nameUrdu: '\u06a9\u0644\u06cc\u0645', description: 'Dramatic tall annual with spidery blooms. Self-seeds readily. Heat-loving and drought-tolerant for Karachi gardens.', price: 275, image: 'https://images.pexels.com/photos/1084119/pexels-photo-1084119.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'native-wildflowers', difficulty: 'Moderate', sunlight: 'Full Sun', watering: 'Low', germinationDays: '10-21 days', karachiRating: 4, badges: ['Drought-Tolerant', 'Pollinator'], inStock: true, pollinator: true, native: true,
  },
  {
    id: 'native-milkweed', name: 'Native Milkweed', nameUrdu: '\u0627\u06a9', description: 'Essential host plant for butterflies. Critical for monarch migration. Beautiful clusters of fragrant flowers.', price: 325, image: 'https://images.pexels.com/photos/1084541/pexels-photo-1084541.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'pollinator', difficulty: 'Moderate', sunlight: 'Full Sun', watering: 'Low', germinationDays: '14-30 days', karachiRating: 3, badges: ['Pollinator', 'Native'], inStock: true, pollinator: true, native: true,
  },
  {
    id: 'coriander', name: 'Coriander (Dhaniya)', nameUrdu: '\u062f\u06be\u0646\u06cc\u0627', description: 'Essential kitchen herb. Grow fresh cilantro year-round. Best sown in Karachi\'s cooler months for continuous harvest.', price: 150, image: 'https://images.pexels.com/photos/1072822/pexels-photo-1072822.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'edible-herbs', difficulty: 'Easy', sunlight: 'Partial Sun', watering: 'Moderate', germinationDays: '7-14 days', karachiRating: 4, badges: ['Edible', 'Kitchen Essential'], inStock: true, edible: true,
  },
  {
    id: 'fenugreek', name: 'Fenugreek (Methi)', nameUrdu: '\u0645\u06cc\u062a\u06be\u06cc', description: 'Nutritious leafy green and medicinal seed. Easy to grow in winter. Essential for Pakistani cooking.', price: 175, image: 'https://images.pexels.com/photos/1072822/pexels-photo-1072822.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'edible-herbs', difficulty: 'Easy', sunlight: 'Full Sun', watering: 'Moderate', germinationDays: '5-10 days', karachiRating: 5, badges: ['Edible', 'Medicinal'], inStock: true, edible: true, medicinal: true,
  },
  {
    id: 'neem-sapling', name: 'Neem Sapling', nameUrdu: '\u0646\u06cc\u0645', description: 'The ultimate Pakistani medicinal tree. Natural pesticide, air purifier, and shade provider. A lifetime investment.', price: 500, image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'rare-pakistani', difficulty: 'Moderate', sunlight: 'Full Sun', watering: 'Low', germinationDays: 'N/A (Sapling)', karachiRating: 5, badges: ['Medicinal', 'Native'], inStock: true, medicinal: true, native: true,
  },
  {
    id: 'beginner-herb-kit', name: 'Beginner Herb Garden Kit', description: 'Complete starter kit with Mint, Tulsi, Coriander, and Fenugreek seeds plus pots, soil, and guide.', price: 1200, image: 'https://images.pexels.com/photos/1084541/pexels-photo-1084541.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'beginner-kits', difficulty: 'Easy', sunlight: 'Partial Sun', watering: 'Moderate', germinationDays: '7-21 days', karachiRating: 5, badges: ['Beginner', 'All-in-One'], inStock: true,
  },
];

export const karachiTips: KarachiTip[] = [
  { id: 'heat', title: 'Beat the Heat', description: 'Choose heat-tolerant varieties like Moringa, Neem, and Marigold. Water early morning or late evening to reduce evaporation.', icon: 'thermometer', season: 'Summer', temperature: '35-45\u00b0C' },
  { id: 'monsoon', title: 'Monsoon Planting', description: 'Best time to sow seeds! The rain provides natural watering. Direct sow wildflowers and native species now.', icon: 'cloud-rain', season: 'Monsoon', temperature: '28-35\u00b0C' },
  { id: 'rooftop', title: 'Rooftop Gardens', description: 'Use lightweight containers with good drainage. Wind breaks protect young plants. Mulch heavily to retain moisture.', icon: 'home', season: 'Spring', temperature: '25-35\u00b0C' },
  { id: 'pollinator', title: 'Pollinator Paradise', description: 'Plant Marigold, Butterfly Pea, and Native Milkweed in clusters. Avoid pesticides to protect bees and butterflies.', icon: 'bug', season: 'Spring', temperature: '20-30\u00b0C' },
  { id: 'winter', title: 'Winter Growing', description: 'Perfect season for herbs! Grow Coriander, Fenugreek, and leafy greens. Protect from cold winds on rooftops.', icon: 'snowflake', season: 'Winter', temperature: '12-25\u00b0C' },
  { id: 'watering', title: 'Smart Watering', description: 'Use drip irrigation or self-watering pots. Collect rainwater during monsoon. Mulch reduces water needs by 50%.', icon: 'droplets', season: 'Summer', temperature: '35-45\u00b0C' },
];

export const seasons: SeasonInfo[] = [
  { name: 'Spring', months: 'Feb - Apr', tempRange: '20-35\u00b0C', plantingTips: ['Start herb seeds indoors', 'Prepare rooftop containers', 'Plant Marigold & Zinnia'], color: 'mint' },
  { name: 'Summer', months: 'May - Aug', tempRange: '35-45\u00b0C', plantingTips: ['Focus on heat-tolerant species', 'Water early morning only', 'Provide shade cloth'], color: 'terracotta' },
  { name: 'Monsoon', months: 'Jul - Sep', tempRange: '28-35\u00b0C', plantingTips: ['Direct sow wildflower seeds', 'Best germination season', 'Watch for fungal issues'], color: 'sage' },
  { name: 'Winter', months: 'Nov - Jan', tempRange: '12-25\u00b0C', plantingTips: ['Grow all herbs and greens', 'Protect from cold winds', 'Reduce watering frequency'], color: 'sand' },
];

export const communityPosts: CommunityPost[] = [
  { id: '1', author: 'Ayesha Khan', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100', image: 'https://images.pexels.com/photos/1084119/pexels-photo-1084119.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'My balcony garden 3 months in! Started with the Beginner Kit and now I have 15 plants thriving in DHA.', likes: 142, comments: 23, timeAgo: '2 days ago', tags: ['BalconyGarden', 'KarachiGrows'] },
  { id: '2', author: 'Omar Farooq', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100', image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Moringa tree on my rooftop - 8 months old and already 6 feet tall! Karachi heat doesn\'t bother it at all.', likes: 89, comments: 15, timeAgo: '5 days ago', tags: ['RooftopFarming', 'Moringa'] },
  { id: '3', author: 'Sana Mirza', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100', image: 'https://images.pexels.com/photos/367555/pexels-photo-367555.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Butterfly garden update: spotted 4 different butterfly species this week! The Milkweed is blooming beautifully.', likes: 203, comments: 41, timeAgo: '1 week ago', tags: ['PollinatorGarden', 'Butterflies'] },
  { id: '4', author: 'Hassan Ali', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100', image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'First time growing Tulsi from seed - germinated in just 10 days! The leaves smell incredible fresh.', likes: 67, comments: 8, timeAgo: '3 days ago', tags: ['HolyBasil', 'FirstGarden'] },
];

export const testimonials: Testimonial[] = [
  { id: '1', name: 'Fatima Rizvi', role: 'Apartment Gardener, Clifton', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100', text: 'Nayab Seeds changed my life. I never thought I could grow anything on my 5th floor balcony, but their beginner kit made it so easy. Now I have fresh mint and tulsi every morning.', rating: 5 },
  { id: '2', name: 'Ahmed Sheikh', role: 'Rooftop Farmer, Gulshan', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100', text: 'The quality of seeds is incredible. Every single seed germinated. The Karachi-specific advice on each product page is what sets Nayab apart from other seed sellers.', rating: 5 },
  { id: '3', name: 'Zara Hussain', role: 'University Student, NED', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100', text: 'As a student with zero gardening experience, the difficulty ratings and care guides helped me pick the right plants. My dorm windowsill is now a mini herb garden!', rating: 5 },
  { id: '4', name: 'Imran Malik', role: 'Eco-Enthusiast, DHA', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100', text: 'Finally, a seed company that cares about native species and pollinators. My butterfly garden has attracted so many bees and butterflies to our neighborhood.', rating: 5 },
];

export const plantGuides: PlantGuide[] = [
  { id: '1', title: 'Starting Your First Balcony Garden in Karachi', category: 'Beginner', readTime: '5 min', image: 'https://images.pexels.com/photos/1084119/pexels-photo-1084119.jpeg?auto=compress&cs=tinysrgb&w=600', excerpt: 'Everything you need to know about growing plants on your Karachi balcony, from container selection to wind protection.' },
  { id: '2', title: 'Medicinal Plants Every Pakistani Home Needs', category: 'Medicinal', readTime: '8 min', image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600', excerpt: 'Discover traditional healing plants that have been used in Pakistani households for generations.' },
  { id: '3', title: 'Creating a Pollinator Paradise', category: 'Ecology', readTime: '6 min', image: 'https://images.pexels.com/photos/367555/pexels-photo-367555.jpeg?auto=compress&cs=tinysrgb&w=600', excerpt: 'How to attract butterflies, bees, and other pollinators to your urban garden in Karachi.' },
  { id: '4', title: 'Monsoon Planting Calendar for Karachi', category: 'Seasonal', readTime: '4 min', image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=600', excerpt: 'The complete guide to what, when, and how to plant during Karachi\'s monsoon season.' },
  { id: '5', title: 'Natural Pest Control Without Chemicals', category: 'Pest Management', readTime: '7 min', image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600', excerpt: 'Keep your garden healthy using companion planting and natural remedies common in Pakistani gardening.' },
  { id: '6', title: 'Rooftop Gardening: A Complete Guide', category: 'Urban', readTime: '10 min', image: 'https://images.pexels.com/photos/1084541/pexels-photo-1084541.jpeg?auto=compress&cs=tinysrgb&w=600', excerpt: 'Transform your Karachi rooftop into a productive green space with these proven techniques.' },
];
