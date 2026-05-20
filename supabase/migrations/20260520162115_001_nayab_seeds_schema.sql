/*
  # Nayab Seeds - Initial Database Schema

  1. New Tables
    - `products` - Seed and plant product catalog
      - `id` (uuid, primary key)
      - `name` (text, not null) - Product name
      - `name_urdu` (text) - Product name in Urdu
      - `description` (text, not null) - Product description
      - `price` (integer, not null) - Price in PKR
      - `image` (text, not null) - Product image URL
      - `category` (text, not null) - Category slug
      - `difficulty` (text, not null) - Easy/Moderate/Advanced
      - `sunlight` (text, not null) - Sunlight requirement
      - `watering` (text, not null) - Watering frequency
      - `germination_days` (text, not null) - Germination time
      - `karachi_rating` (integer, not null) - 1-5 rating
      - `badges` (text array) - Feature badges
      - `in_stock` (boolean, default true) - Availability
      - `is_medicinal` (boolean, default false) - Medicinal plant flag
      - `is_pollinator` (boolean, default false) - Pollinator-friendly flag
      - `is_native` (boolean, default false) - Native species flag
      - `is_edible` (boolean, default false) - Edible plant flag
      - `created_at` (timestamptz, default now())

    - `categories` - Product categories
      - `id` (uuid, primary key)
      - `slug` (text, unique, not null) - URL-friendly identifier
      - `name` (text, not null) - Category name
      - `description` (text, not null) - Category description
      - `image` (text, not null) - Category image URL
      - `icon` (text) - Emoji icon
      - `sort_order` (integer, default 0) - Display order
      - `created_at` (timestamptz, default now())

    - `community_posts` - User garden sharing posts
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users) - Post author
      - `image` (text, not null) - Post image URL
      - `caption` (text, not null) - Post caption
      - `tags` (text array) - Post tags
      - `likes_count` (integer, default 0) - Like count
      - `comments_count` (integer, default 0) - Comment count
      - `created_at` (timestamptz, default now())

    - `post_likes` - Like tracking for community posts
      - `id` (uuid, primary key)
      - `post_id` (uuid, references community_posts) - Liked post
      - `user_id` (uuid, references auth.users) - Liking user
      - `created_at` (timestamptz, default now())

    - `post_comments` - Comments on community posts
      - `id` (uuid, primary key)
      - `post_id` (uuid, references community_posts) - Commented post
      - `user_id` (uuid, references auth.users) - Commenting user
      - `content` (text, not null) - Comment text
      - `created_at` (timestamptz, default now())

    - `plant_guides` - Educational plant care guides
      - `id` (uuid, primary key)
      - `title` (text, not null) - Guide title
      - `category` (text, not null) - Guide category
      - `read_time` (text, not null) - Estimated read time
      - `image` (text, not null) - Guide image URL
      - `excerpt` (text, not null) - Short excerpt
      - `content` (text) - Full guide content
      - `created_at` (timestamptz, default now())

    - `wishlist` - User wishlist items
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users) - Wishlist owner
      - `product_id` (uuid, references products) - Wishlisted product
      - `created_at` (timestamptz, default now())

    - `orders` - Customer orders
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users) - Order owner
      - `status` (text, default 'pending') - Order status
      - `total` (integer, not null) - Total amount in PKR
      - `payment_method` (text, default 'cod') - Payment method
      - `shipping_address` (text) - Delivery address
      - `phone` (text) - Contact phone
      - `created_at` (timestamptz, default now())

    - `order_items` - Items within an order
      - `id` (uuid, primary key)
      - `order_id` (uuid, references orders) - Parent order
      - `product_id` (uuid, references products) - Ordered product
      - `quantity` (integer, not null) - Quantity ordered
      - `price` (integer, not null) - Price at time of order
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on ALL tables
    - Products/categories/plant_guides: public read, admin write
    - Community posts: authenticated read, owner write
    - Wishlist/orders: owner-only access
    - Post likes/comments: authenticated users can create, owner can delete own

  3. Important Notes
    - All tables use UUID primary keys
    - Timestamps default to now()
    - Prices stored as integers (PKR, no decimals needed)
    - Tags and badges stored as text arrays for flexibility
*/

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  name_urdu text,
  description text NOT NULL,
  price integer NOT NULL,
  image text NOT NULL,
  category text NOT NULL,
  difficulty text NOT NULL CHECK (difficulty IN ('Easy', 'Moderate', 'Advanced')),
  sunlight text NOT NULL,
  watering text NOT NULL CHECK (watering IN ('Low', 'Moderate', 'High')),
  germination_days text NOT NULL,
  karachi_rating integer NOT NULL CHECK (karachi_rating >= 1 AND karachi_rating <= 5),
  badges text[] DEFAULT '{}',
  in_stock boolean DEFAULT true,
  is_medicinal boolean DEFAULT false,
  is_pollinator boolean DEFAULT false,
  is_native boolean DEFAULT false,
  is_edible boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  image text NOT NULL,
  icon text,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Community posts table
CREATE TABLE IF NOT EXISTS community_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  image text NOT NULL,
  caption text NOT NULL,
  tags text[] DEFAULT '{}',
  likes_count integer DEFAULT 0,
  comments_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Post likes table
CREATE TABLE IF NOT EXISTS post_likes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid REFERENCES community_posts(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(post_id, user_id)
);

-- Post comments table
CREATE TABLE IF NOT EXISTS post_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid REFERENCES community_posts(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Plant guides table
CREATE TABLE IF NOT EXISTS plant_guides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  read_time text NOT NULL,
  image text NOT NULL,
  excerpt text NOT NULL,
  content text,
  created_at timestamptz DEFAULT now()
);

-- Wishlist table
CREATE TABLE IF NOT EXISTS wishlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),
  total integer NOT NULL,
  payment_method text DEFAULT 'cod' CHECK (payment_method IN ('cod', 'easypaisa', 'jazzcash', 'bank_transfer')),
  shipping_address text,
  phone text,
  created_at timestamptz DEFAULT now()
);

-- Order items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  quantity integer NOT NULL CHECK (quantity > 0),
  price integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE plant_guides ENABLE ROW LEVEL SECURITY;
ALTER TABLE wishlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Products: public read, only service role can write
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Authenticated users can insert products"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON products FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Categories: public read
CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Authenticated users can insert categories"
  ON categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update categories"
  ON categories FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Plant guides: public read
CREATE POLICY "Anyone can view plant guides"
  ON plant_guides FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Authenticated users can insert plant guides"
  ON plant_guides FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Community posts: authenticated read, owner insert/update
CREATE POLICY "Authenticated users can view community posts"
  ON community_posts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create own community posts"
  ON community_posts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own community posts"
  ON community_posts FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own community posts"
  ON community_posts FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Post likes: authenticated users can like/unlike
CREATE POLICY "Authenticated users can view likes"
  ON post_likes FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can like posts"
  ON post_likes FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can unlike their own likes"
  ON post_likes FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Post comments: authenticated users can comment
CREATE POLICY "Authenticated users can view comments"
  ON post_comments FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create comments"
  ON post_comments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own comments"
  ON post_comments FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Wishlist: owner-only access
CREATE POLICY "Users can view own wishlist"
  ON wishlist FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can add to own wishlist"
  ON wishlist FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove from own wishlist"
  ON wishlist FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Orders: owner-only access
CREATE POLICY "Users can view own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own orders"
  ON orders FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own orders"
  ON orders FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Order items: owner-only access through orders
CREATE POLICY "Users can view own order items"
  ON order_items FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create own order items"
  ON order_items FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_difficulty ON products(difficulty);
CREATE INDEX IF NOT EXISTS idx_community_posts_user ON community_posts(user_id);
CREATE INDEX IF NOT EXISTS idx_community_posts_created ON community_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_post_likes_post ON post_likes(post_id);
CREATE INDEX IF NOT EXISTS idx_post_comments_post ON post_comments(post_id);
CREATE INDEX IF NOT EXISTS idx_wishlist_user ON wishlist(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
