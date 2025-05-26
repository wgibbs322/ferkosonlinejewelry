import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Mail } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-80 w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </Link>
        <a
          href={`mailto:wgibbs3237@gmail.com?subject=Enquiry about ${product.name}&body=I am interested in ${product.name}`}
          className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold-500 hover:text-white"
          aria-label="Contact about this product"
        >
          <Mail size={20} />
        </a>
        {product.newArrival && (
          <span className="absolute top-4 left-4 bg-gold-500 text-white text-xs uppercase tracking-wider py-1 px-2 rounded">
            New
          </span>
        )}
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">
        <Link to={`/product/${product.id}`} className="hover:text-gold-500 transition-colors">
          {product.name}
        </Link>
      </h3>
      <p className="text-gray-700">${product.price.toLocaleString()}</p>
    </div>
  );
};

export default ProductCard;