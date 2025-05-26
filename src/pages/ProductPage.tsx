import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductById, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Mail, Share2 } from 'lucide-react';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you are looking for does not exist.</p>
        <button 
          onClick={() => navigate('/shop')}
          className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-md transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto rounded-lg object-cover"
            />
            {product.newArrival && (
              <span className="absolute top-4 left-4 bg-gold-500 text-white text-xs uppercase tracking-wider py-1 px-2 rounded">
                New
              </span>
            )}
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-serif font-medium text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-xl text-gold-500 mb-6">
              ${product.price.toLocaleString()}
            </p>
            
            <div className="border-t border-gray-200 py-6">
              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={`mailto:wgibbs3237@gmail.com?subject=Enquiry about ${product.name}&body=I am interested in ${product.name}`}
                  className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-md text-base font-medium transition-colors flex items-center"
                >
                  <Mail className="mr-2" size={20} />
                  Contact for Enquiry
                </a>
                
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 p-3 rounded-md transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Category</p>
                    <p className="text-gray-900 capitalize">{product.category}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Materials</p>
                    <p className="text-gray-900">18k Gold, Diamonds</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Shipping</p>
                    <p className="text-gray-900">2-3 business days</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Returns</p>
                    <p className="text-gray-900">30-day returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-serif font-medium text-gray-900 mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;