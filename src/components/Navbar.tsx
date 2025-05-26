import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="bg-white/90 backdrop-blur-md fixed w-full z-50 transition-all duration-300 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold text-gray-900">
            Ferkos
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gold-500 transition-colors">
              Home
            </Link>
            <Link to="/category/rings" className="text-gray-700 hover:text-gold-500 transition-colors">
              Rings
            </Link>
            <Link to="/category/necklaces" className="text-gray-700 hover:text-gold-500 transition-colors">
              Necklaces
            </Link>
            <Link to="/category/earrings" className="text-gray-700 hover:text-gold-500 transition-colors">
              Earrings
            </Link>
            <Link to="/category/bracelets" className="text-gray-700 hover:text-gold-500 transition-colors">
              Bracelets
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="text-gray-700 hover:text-gold-500 transition-colors"
            >
              <Search size={20} />
            </button>
            
            <button 
              onClick={toggleMenu} 
              className="md:hidden text-gray-700 hover:text-gold-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 mt-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-gold-500 transition-colors" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/category/rings" className="text-gray-700 hover:text-gold-500 transition-colors" onClick={toggleMenu}>
                Rings
              </Link>
              <Link to="/category/necklaces" className="text-gray-700 hover:text-gold-500 transition-colors" onClick={toggleMenu}>
                Necklaces
              </Link>
              <Link to="/category/earrings" className="text-gray-700 hover:text-gold-500 transition-colors" onClick={toggleMenu}>
                Earrings
              </Link>
              <Link to="/category/bracelets" className="text-gray-700 hover:text-gold-500 transition-colors" onClick={toggleMenu}>
                Bracelets
              </Link>
            </nav>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 border-t border-gray-100">
            <div className="container mx-auto">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for jewelry..." 
                  className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <button 
                  onClick={toggleSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;