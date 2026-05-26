/**
 * Crawlable, human-readable summary for SEO and AI agents (visible, not hidden).
 */
import { Link } from 'react-router-dom';

export default function SeoIntro() {
  return (
    <section
      className="border-y border-sage-200/80 dark:border-charcoal-700 bg-sage-50/50 dark:bg-charcoal-800/30 py-10 sm:py-12"
      aria-labelledby="karachi-gardening-summary"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 id="karachi-gardening-summary" className="text-lg sm:text-xl font-bold text-charcoal-900 dark:text-warm-50 mb-3">
          Karachi Gardening Seeds — Native &amp; Medicinal Plants in Pakistan
        </h2>
        <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
          Shop online with delivery across Karachi: balcony gardening kits,
          heat tolerant plants for summer, pollinator-friendly natives, and a free{' '}
          <Link to="/quiz" className="text-mint-700 dark:text-mint-400 font-medium hover:underline">
            Smart Plant Quiz
          </Link>{' '}
          for personalized recommendations.
        </p>
      </div>
    </section>
  );
}
