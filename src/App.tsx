import { useState, useRef, useCallback } from 'react';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/hero/HeroSection';
import CategoriesSection from './components/categories/CategoriesSection';
import KarachiSection from './components/karachi/KarachiSection';
import ProductsSection from './components/products/ProductsSection';
import CommunitySection from './components/community/CommunitySection';
import EducationSection from './components/education/EducationSection';
import AISection from './components/ai/AISection';
import BrandSection from './components/brand/BrandSection';
import ExtraFeatures from './components/shared/ExtraFeatures';
import CartDrawer from './components/ecommerce/CartDrawer';

function AppContent() {
  const [currentSection, setCurrentSection] = useState('home');
  const [cartOpen, setCartOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const setSectionRef = useCallback((id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  }, []);

  const handleNavigate = useCallback((section: string) => {
    setCurrentSection(section);
    const el = sectionRefs.current[section];
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-warm-50 dark:bg-charcoal-900 transition-colors duration-300">
      <Navbar
        onNavigate={handleNavigate}
        currentSection={currentSection}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main>
        <div ref={setSectionRef('home')}>
          <HeroSection onNavigate={handleNavigate} />
        </div>
        <div ref={setSectionRef('categories')}>
          <CategoriesSection onNavigate={handleNavigate} />
        </div>
        <div ref={setSectionRef('products')}>
          <ProductsSection />
        </div>
        <div ref={setSectionRef('karachi')}>
          <KarachiSection />
        </div>
        <div ref={setSectionRef('brand')}>
          <BrandSection />
        </div>
        <div ref={setSectionRef('community')}>
          <CommunitySection />
        </div>
        <div ref={setSectionRef('education')}>
          <EducationSection />
        </div>
        <ExtraFeatures />
        <div ref={setSectionRef('ai')}>
          <AISection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  );
}
