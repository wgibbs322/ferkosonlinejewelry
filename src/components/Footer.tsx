import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Link to="/" className="text-2xl font-serif font-bold text-white mb-6 inline-block">
              Ferkos
            </Link>
            <p className="text-gray-400 mb-6">
              Handcrafted luxury jewelry for the discerning collector. Each piece tells a story of exceptional craftsmanship and timeless elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/category/rings" className="text-gray-400 hover:text-white transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link to="/category/necklaces" className="text-gray-400 hover:text-white transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/category/earrings" className="text-gray-400 hover:text-white transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/category/bracelets" className="text-gray-400 hover:text-white transition-colors">
                  Bracelets
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h3 className="text-lg font-medium mb-6">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-gray-400 hover:text-white transition-colors">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link to="/sizing" className="text-gray-400 hover:text-white transition-colors">
                  Ring Sizing Guide
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-gold-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Fifth Avenue, New York, NY 10160
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (212) 555-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">wgibbs3237@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Ferkos Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;