import React from 'react';
import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import CategoryBanner from '../components/CategoryBanner';
import NewArrivals from '../components/NewArrivals';
import ContactForm from '../components/ContactForm';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedCollection />
      <CategoryBanner />
      <NewArrivals />
      
      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-cream-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our valued clients have to say about their Ferkos experience.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/7691049/pexels-photo-7691049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Timeless elegance"
                  className="rounded-lg w-full h-[400px] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="h-1 w-12 bg-gold-500 mr-4"></div>
                  <div className="text-gold-500">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-6 italic text-lg">
                  "The craftsmanship and attention to detail in every piece from Ferkos is absolutely exceptional. Their commitment to quality and customer service sets them apart in the industry."
                </p>
                <div>
                  <p className="font-medium text-gray-900">Sarah Mitchell</p>
                  <p className="text-gray-600">Luxury Jewelry Collector</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
};

export default HomePage;