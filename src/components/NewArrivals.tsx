import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { getNewArrivals } from '../data/products';

const NewArrivals: React.FC = () => {
  const newProducts = getNewArrivals();

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">New Arrivals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest designs, fresh from our master jewelers' workbenches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/shop" 
            className="inline-block border-b-2 border-gold-500 text-gray-900 hover:text-gold-500 transition-colors font-medium"
          >
            View All New Arrivals
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;