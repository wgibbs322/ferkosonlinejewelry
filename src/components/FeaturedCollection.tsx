import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';

const FeaturedCollection: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 px-4 bg-cream-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most coveted pieces, handcrafted with exceptional materials and unparalleled attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/shop" 
            className="inline-block border-b-2 border-gold-500 text-gray-900 hover:text-gold-500 transition-colors font-medium"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;