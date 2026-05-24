import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/ecommerce/CartDrawer';

export default function MainLayout() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen min-h-[100dvh] bg-warm-50 dark:bg-charcoal-900 transition-colors duration-300 overflow-x-hidden">
      <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <main>
        <Outlet context={{ setCartOpen }} />
      </main>
      <Footer />
    </div>
  );
}
