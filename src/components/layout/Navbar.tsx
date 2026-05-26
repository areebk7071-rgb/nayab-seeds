// src/components/layout/Navbar.tsx
import logo from '/Logo.png';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Categories', href: '#categories' },
  { name: 'Products', href: '#products' },
  { name: 'AI Assistant', href: '#ai' },
  { name: 'About', href: '#about' },
];

export default function Navbar() {
  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur shadow flex items-center px-6 py-3 rounded-b-2xl mb-6">
      <img
        src={logo}
        alt="Nayab Seeds Logo"
        className="h-12 w-12 mr-3 rounded-full border border-green-700 bg-white"
      />
      <span className="font-extrabold text-2xl text-green-900 tracking-wide mr-10">Nayab Seeds</span>
      <div className="ml-auto flex gap-7 text-lg">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-green-800 hover:text-emerald-600 transition font-medium"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}