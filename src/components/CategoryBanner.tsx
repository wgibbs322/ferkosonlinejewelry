import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'rings',
    name: 'Rings',
    image: 'https://images.pexels.com/photos/10876639/pexels-photo-10876639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'From engagement rings to statement pieces'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.pexels.com/photos/11638084/pexels-photo-11638084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Elegant pendants and statement pieces'
  },
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.pexels.com/photos/12924170/pexels-photo-12924170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'From studs to dramatic chandeliers'
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    image: 'https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Tennis bracelets and bangles'
  }
];

const CategoryBanner: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections of fine jewelry pieces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-medium mb-2">{category.name}</h3>
                <p className="text-sm text-gray-200 mb-4">{category.description}</p>
                <span className="inline-block border-b border-white pb-1 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;