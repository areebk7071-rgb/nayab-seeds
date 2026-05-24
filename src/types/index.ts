export type Difficulty = 'Easy' | 'Moderate' | 'Advanced';
export type Sunlight = 'Full Sun' | 'Partial Shade' | 'Full Shade' | 'Partial Sun';
export type Watering = 'Low' | 'Moderate' | 'High';

export interface Product {
  id: string;
  handle: string;
  name: string;
  nameUrdu?: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  images: string[];
  category: string;
  shopTags: string[];
  difficulty: Difficulty;
  sunlight: Sunlight;
  watering: Watering;
  germinationDays: string;
  plantingSeason: string;
  karachiRating: number;
  badges: string[];
  smartTags: string[];
  inStock: boolean;
  quantityAvailable: number;
  variantId?: string;
  medicinal?: boolean;
  pollinator?: boolean;
  native?: boolean;
  edible?: boolean;
  droughtTolerant?: boolean;
  balconyFriendly?: boolean;
  beginnerFriendly?: boolean;
}

export interface ShopCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  icon: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  lineId?: string;
}

export interface CommunityPost {
  id: string;
  author: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface PlantGuide {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
}

export interface KarachiTip {
  id: string;
  title: string;
  description: string;
  icon: string;
  season: 'Summer' | 'Monsoon' | 'Winter' | 'Spring';
  temperature?: string;
}

export interface SeasonInfo {
  name: string;
  months: string;
  tempRange: string;
  plantingTips: string[];
  color: string;
}

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name';

export interface QuizAnswers {
  space: 'balcony' | 'garden';
  sunlight: 'full-sun' | 'partial-sun' | 'shade';
  watering: 'daily' | 'moderate' | 'low';
  purpose: 'medicinal' | 'edible' | 'flowers' | 'greenery';
  experience: 'beginner' | 'experienced';
  season: 'summer' | 'monsoon' | 'winter' | 'spring';
}
