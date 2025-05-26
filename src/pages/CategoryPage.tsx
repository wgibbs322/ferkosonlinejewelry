import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const products = category ? getProductsByCategory(category) : [];
  
  const categoryTitles: Record<string, string> = {
    rings: 'Rings',
    necklaces: 'Necklaces',
    earrings: 'Earrings',
    bracelets: 'Bracelets'
  };

  const categoryDescriptions: Record<string, string> = {
    rings: 'From stunning engagement rings to everyday statements, our collection showcases exceptional craftsmanship and timeless design.',
    necklaces: 'Discover our exquisite selection of pendants and necklaces, each piece handcrafted to elevate your style.',
    earrings: 'From subtle studs to dramatic statement pieces, our earrings collection offers versatile options for every occasion.',
    bracelets: 'Adorn your wrist with our handcrafted bracelets, featuring exceptional materials and meticulous attention to detail.'
  };

  return (
    <div className="pt-24">
      <div className="bg-cream-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-serif font-medium text-gray-900 mb-4">
            {category ? categoryTitles[category] || 'Collection' : 'Collection'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {category ? categoryDescriptions[category] || 'Explore our collection' : 'Explore our collection'}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-xl font-medium text-gray-900 mb-4">No Products Found</h2>
            <p className="text-gray-600">
              We couldn't find any products in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;