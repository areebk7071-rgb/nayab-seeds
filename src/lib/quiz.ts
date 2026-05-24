import type { Product, QuizAnswers } from '../types';

export function scoreProduct(product: Product, answers: QuizAnswers): number {
  let score = 0;

  if (answers.space === 'balcony' && product.balconyFriendly) score += 25;
  if (answers.space === 'garden' && !product.balconyFriendly) score += 10;
  if (answers.space === 'balcony' && product.balconyFriendly === undefined && product.shopTags.includes('balcony')) score += 20;

  const sunMap: Record<string, string[]> = {
    'full-sun': ['Full Sun'],
    'partial-sun': ['Partial Sun', 'Partial Shade'],
    shade: ['Full Shade', 'Partial Shade'],
  };
  if (sunMap[answers.sunlight]?.includes(product.sunlight)) score += 25;

  const waterMap: Record<string, string[]> = {
    daily: ['High', 'Moderate'],
    moderate: ['Moderate'],
    low: ['Low', 'Moderate'],
  };
  if (waterMap[answers.watering]?.includes(product.watering)) score += 20;

  if (answers.purpose === 'medicinal' && product.medicinal) score += 25;
  if (answers.purpose === 'edible' && product.edible) score += 25;
  if (answers.purpose === 'flowers' && product.shopTags.includes('flowers')) score += 25;
  if (answers.purpose === 'greenery' && (product.shopTags.includes('native') || product.native)) score += 20;

  if (answers.experience === 'beginner' && product.beginnerFriendly) score += 20;
  if (answers.experience === 'experienced') score += 5;

  const seasonTags: Record<string, string[]> = {
    summer: ['heat-tolerant'],
    monsoon: ['native', 'flowers'],
    winter: ['vegetables', 'edible', 'medicinal'],
    spring: ['flowers', 'beginner'],
  };
  if (seasonTags[answers.season]?.some((t) => product.shopTags.includes(t))) score += 15;

  if (product.inStock) score += 5;

  return score;
}

export function getQuizRecommendations(products: Product[], answers: QuizAnswers, limit = 5): Product[] {
  return [...products]
    .map((p) => ({ product: p, score: scoreProduct(p, answers) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.product);
}

export function getCareTip(product: Product, answers: QuizAnswers): string {
  const tips: string[] = [];
  if (answers.space === 'balcony') tips.push('Use well-draining pots and protect from strong Karachi winds.');
  if (product.watering === 'Low') tips.push('Water deeply but infrequently — ideal for summer heat.');
  if (product.plantingSeason) tips.push(`Best planting season in Karachi: ${product.plantingSeason}.`);
  if (product.beginnerFriendly) tips.push('Great for beginners — germinates reliably with basic care.');
  return tips.slice(0, 2).join(' ');
}
