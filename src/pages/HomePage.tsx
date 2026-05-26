import { Link } from 'react-router-dom';
import Seo from '../components/shared/Seo';
import HeroSection from '../components/hero/HeroSection';
import SeoIntro from '../components/home/SeoIntro';
import FeaturedCategories from '../components/home/FeaturedCategories';
import KarachiSection from '../components/karachi/KarachiSection';
import QuizCTA from '../components/shared/QuizCTA';
import FeaturedProducts from '../components/home/FeaturedProducts';
import EducationSection from '../components/education/EducationSection';
import NativeKarachiPreview from '../components/shared/NativeKarachiPreview';
import TrustSection from '../components/shared/TrustSection';
import { useProducts } from '../hooks/useProducts';
import { pageSeo } from '../config/seo';

export default function HomePage() {
  const { products } = useProducts();

  return (
    <>
      <Seo
        title={pageSeo.home.title}
        description={pageSeo.home.description}
        path="/"
        includeFaqSchema
        noSuffix
      />
      <HeroSection />
      <SeoIntro />
      <FeaturedCategories />
      <KarachiSection />
      <QuizCTA />
      <FeaturedProducts products={products} />
      <EducationSection />
      <NativeKarachiPreview />
      <TrustSection showFaq={false} />
      <section className="section-padding text-center">
        <p className="text-charcoal-500 dark:text-charcoal-400 text-sm max-w-lg mx-auto mb-4">
          Questions about native plants Pakistan, medicinal herbs, or balcony gardening in Karachi?
        </p>
        <Link to="/contact" className="text-mint-700 dark:text-mint-400 font-semibold hover:underline">
          See FAQ &amp; contact us →
        </Link>
      </section>
    </>
  );
}