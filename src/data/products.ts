import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Diamond Eternity Ring',
    category: 'rings',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/9946922/pexels-photo-9946922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A stunning 18k gold eternity ring featuring brilliant-cut diamonds totaling 1.5 carats. Perfect for anniversaries or as an elegant everyday piece.',
    featured: true,
  },
  {
    id: '2',
    name: 'Pearl Pendant Necklace',
    category: 'necklaces',
    price: 899.99,
    image: 'https://images.pexels.com/photos/11638084/pexels-photo-11638084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'An exquisite 16-inch 14k gold chain featuring a lustrous South Sea pearl pendant. Elegant and timeless for any occasion.',
    newArrival: true,
  },
  {
    id: '3',
    name: 'Sapphire Drop Earrings',
    category: 'earrings',
    price: 1499.99,
    image: 'https://images.pexels.com/photos/12924170/pexels-photo-12924170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Handcrafted 18k white gold earrings featuring pear-shaped blue sapphires surrounded by a halo of diamonds.',
    featured: true,
  },
  {
    id: '4',
    name: 'Gold Tennis Bracelet',
    category: 'bracelets',
    price: 2299.99,
    image: 'https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A classic 7-inch 18k gold tennis bracelet featuring 3 carats of round brilliant diamonds. Secure box clasp with safety latch.',
    newArrival: true,
  },
  {
    id: '5',
    name: 'Emerald Halo Ring',
    category: 'rings',
    price: 1899.99,
    image: 'https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A breathtaking 14k gold ring featuring a 1.2 carat emerald-cut emerald surrounded by a halo of diamonds.',
    featured: true,
  },
  {
    id: '6',
    name: 'Diamond Stud Earrings',
    category: 'earrings',
    price: 999.99,
    image: 'https://images.pexels.com/photos/11044710/pexels-photo-11044710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Timeless 14k white gold diamond stud earrings featuring a pair of round brilliant diamonds totaling 1 carat.',
    newArrival: true,
  },
  {
    id: '7',
    name: 'Vintage Charm Bracelet',
    category: 'bracelets',
    price: 1199.99,
    image: 'https://images.pexels.com/photos/8100805/pexels-photo-8100805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A one-of-a-kind 14k gold vintage charm bracelet featuring five intricately detailed charms. A conversation piece with history.',
    featured: true,
  },
  {
    id: '8',
    name: 'Ruby Statement Necklace',
    category: 'necklaces',
    price: 2499.99,
    image: 'https://images.pexels.com/photos/7447036/pexels-photo-7447036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A magnificent 18k gold necklace featuring a 2 carat oval ruby centerpiece surrounded by diamonds. Adjustable 16-18 inch chain.',
    newArrival: true,
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.newArrival);
};