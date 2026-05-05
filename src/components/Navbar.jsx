import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer">
          <h1 className="text-2xl font-serif text-white tracking-widest font-semibold">
            A<span className="text-brand-gold">U</span>RA
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12 items-center">
          {['Collections', 'Craftsmanship', 'Heritage', 'Boutiques'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-brand-lightGray hover:text-brand-gold transition-colors duration-300 uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-brand-lightGray hover:text-brand-gold transition-colors duration-300">
            <ShoppingBag size={20} />
          </button>
          <button className="px-6 py-2 bg-brand-gold text-brand-black text-sm font-semibold uppercase tracking-wider hover:bg-brand-goldLight transition-colors duration-300 rounded-sm">
            Enquire
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-brand-lightGray hover:text-brand-gold transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full glass transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}>
        <div className="px-6 py-8 space-y-6 flex flex-col">
          {['Collections', 'Craftsmanship', 'Heritage', 'Boutiques'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-serif text-white hover:text-brand-gold transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-6 border-t border-brand-gray flex flex-col space-y-4">
            <button className="flex items-center space-x-3 text-brand-lightGray hover:text-brand-gold transition-colors">
              <ShoppingBag size={20} />
              <span>Bag</span>
            </button>
            <button className="w-full py-3 bg-brand-gold text-brand-black font-semibold uppercase tracking-wider rounded-sm">
              Enquire
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
