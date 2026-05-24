import { Link } from 'react-router-dom';
import Seo from '../components/shared/Seo';
import PlantQuiz from '../components/quiz/PlantQuiz';
import { useProducts } from '../hooks/useProducts';
import { pageSeo } from '../config/seo';

export default function QuizPage() {
  const { products, loading } = useProducts();

  return (
    <>
      <Seo
        title={pageSeo.quiz.title}
        description={pageSeo.quiz.description}
        path="/quiz"
        noSuffix
      />

      <div className="page-top pb-16 min-h-screen gradient-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-warm-50 mb-3">
              Best Plants for Your Karachi Balcony or Garden
            </h1>
            <p className="text-charcoal-600 dark:text-charcoal-300 max-w-lg mx-auto leading-relaxed">
              Not sure what to grow? This free quiz matches you with Karachi-tested seeds for balcony gardening,
              medicinal plants Pakistan, heat tolerant summer species, and your current planting season.
            </p>
          </header>

          {loading ? (
            <div className="h-96 rounded-3xl bg-sage-200/50 dark:bg-charcoal-700 animate-pulse" />
          ) : (
            <PlantQuiz products={products} />
          )}

          <p className="text-center mt-8 text-sm text-charcoal-500">
            Prefer browsing?{' '}
            <Link to="/shop" className="text-mint-600 hover:underline">
              Shop all seeds for Karachi gardening
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
