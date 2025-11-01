import { useState } from 'react';
import { School, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Details', href: '#details' },
    { label: 'Trends', href: '#trends' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <School className="w-10 h-10 text-orange-400" />
            <span className="text-xl font-bold">Primary School</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-orange-400 transition font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button className="hidden md:block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition font-semibold">
            Contact
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-white hover:text-orange-400 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition font-semibold">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
