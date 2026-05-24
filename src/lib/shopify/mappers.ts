import type { Product } from '../../types';
import { localProducts } from '../../data/products';

interface ShopifyImageEdge {
  node: { url: string; altText?: string | null };
}

interface ShopifyVariantEdge {
  node: {
    id: string;
    availableForSale: boolean;
    quantityAvailable?: number;
    price: { amount: string };
  };
}

interface ShopifyProductNode {
  id: string;
  title: string;
  handle: string;
  description: string;
  tags: string[];
  availableForSale: boolean;
  priceRange: { minVariantPrice: { amount: string } };
  compareAtPriceRange?: { minVariantPrice: { amount: string } };
  images: { edges: ShopifyImageEdge[] };
  variants: { edges: ShopifyVariantEdge[] };
}

function enrichFromLocal(handle: string): Partial<Product> | undefined {
  return localProducts.find((p) => p.handle === handle);
}

function tagsToShopTags(tags: string[]): string[] {
  const normalized = tags.map((t) => t.toLowerCase().replace(/\s+/g, '-'));
  return normalized;
}

export function mapShopifyProduct(node: ShopifyProductNode): Product {
  const variant = node.variants.edges[0]?.node;
  const images = node.images.edges.map((e) => e.node.url);
  const local = enrichFromLocal(node.handle);

  const shopTags = tagsToShopTags(node.tags);

  return {
    id: node.id,
    handle: node.handle,
    name: node.title,
    nameUrdu: local?.nameUrdu,
    description: node.description || local?.description || '',
    price: Math.round(parseFloat(variant?.price.amount || node.priceRange.minVariantPrice.amount)),
    compareAtPrice: node.compareAtPriceRange?.minVariantPrice.amount
      ? Math.round(parseFloat(node.compareAtPriceRange.minVariantPrice.amount))
      : local?.compareAtPrice,
    image: images[0] || local?.image || '',
    images: images.length ? images : local?.images || [],
    category: local?.category || 'general',
    shopTags: local?.shopTags?.length ? local.shopTags : shopTags,
    difficulty: local?.difficulty || 'Easy',
    sunlight: local?.sunlight || 'Partial Sun',
    watering: local?.watering || 'Moderate',
    germinationDays: local?.germinationDays || '7-21 days',
    plantingSeason: local?.plantingSeason || 'Monsoon & Winter',
    karachiRating: local?.karachiRating || 4,
    badges: local?.badges || node.tags.slice(0, 3),
    smartTags: local?.smartTags || [],
    inStock: variant?.availableForSale ?? node.availableForSale,
    quantityAvailable: variant?.quantityAvailable ?? 99,
    variantId: variant?.id,
    medicinal: local?.medicinal ?? shopTags.includes('medicinal'),
    pollinator: local?.pollinator ?? shopTags.includes('pollinator-friendly'),
    native: local?.native ?? shopTags.includes('native'),
    edible: local?.edible ?? shopTags.includes('edible'),
    droughtTolerant: local?.droughtTolerant,
    balconyFriendly: local?.balconyFriendly,
    beginnerFriendly: local?.beginnerFriendly,
  };
}
