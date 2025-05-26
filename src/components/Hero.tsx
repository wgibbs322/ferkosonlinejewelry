import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/7691049/pexels-photo-7691049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Luxury jewelry" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl text-left ml-4 md:ml-16 lg:ml-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-tight mb-6">
            <span className="block">Timeless Elegance</span>
            <span className="block mt-2 font-normal">Exquisite Craftsmanship</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-lg">
            Discover our handcrafted collection of fine jewelry, designed to captivate for generations.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/category/rings" 
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-md text-base font-medium transition-colors duration-300"
            >
              Shop Collection
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-md text-base font-medium transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;