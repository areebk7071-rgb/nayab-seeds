export interface Product {
  id: string;
  name: string;
  nameUrdu?: string;
  description: string;
  price: number;
  image: string;
  category: string;
  difficulty: 'Easy' | 'Moderate' | 'Advanced';
  sunlight: 'Full Sun' | 'Partial Shade' | 'Full Shade' | 'Partial Sun';
  watering: 'Low' | 'Moderate' | 'High';
  germinationDays: string;
  karachiRating: number;
  badges: string[];
  inStock: boolean;
  medicinal?: boolean;
  pollinator?: boolean;
  native?: boolean;
  edible?: boolean;
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
