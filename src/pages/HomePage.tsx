import { Link } from 'react-router-dom';
import Seo from '../components/shared/Seo';
import HomeStorefront from '../components/home/HomeStorefront';
import { useProducts } from '../hooks/useProducts';
import { pageSeo } from '../config/seo';
import { useOutletContext } from 'react-router-dom';

export default function HomePage() {
  const { products } = useProducts();
  const { setCartOpen } = useOutletContext<{ setCartOpen: (open: boolean) => void }>();

  return (
    <>
      <Seo
        title={pageSeo.home.title}
        description={pageSeo.home.description}
        path="/"
        includeFaqSchema
        noSuffix
      />
      <HomeStorefront products={products} onOpenCart={() => setCartOpen(true)} />

      <section className="section-padding text-center bg-transparent">
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
