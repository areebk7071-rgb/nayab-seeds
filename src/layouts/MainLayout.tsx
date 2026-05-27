import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/ecommerce/CartDrawer';

export default function MainLayout() {
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div
      className={[
        'min-h-screen min-h-[100dvh] transition-colors duration-300 overflow-x-hidden',
        isHome ? 'bg-transparent' : 'bg-warm-50 dark:bg-charcoal-900',
      ].join(' ')}
    >
      {!isHome ? <Navbar onCartClick={() => setCartOpen(true)} /> : null}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <main>
        <Outlet context={{ setCartOpen }} />
      </main>
      <Footer />
    </div>
  );
}
