import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

const ShopPage = lazy(() => import('./pages/ShopPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NativeKarachiPage = lazy(() => import('./pages/NativeKarachiPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center pt-32">
      <div className="w-10 h-10 border-4 border-mint-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route
                  path="shop"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <ShopPage />
                    </Suspense>
                  }
                />
                <Route
                  path="product/:handle"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <ProductPage />
                    </Suspense>
                  }
                />
                <Route
                  path="quiz"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <QuizPage />
                    </Suspense>
                  }
                />
                <Route
                  path="about"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <AboutPage />
                    </Suspense>
                  }
                />
                <Route
                  path="contact"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <ContactPage />
                    </Suspense>
                  }
                />
                <Route
                  path="native-karachi"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <NativeKarachiPage />
                    </Suspense>
                  }
                />
                <Route
                  path="community"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <CommunityPage />
                    </Suspense>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
