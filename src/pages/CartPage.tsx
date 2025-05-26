import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    // This would typically navigate to a checkout page or process
    alert('Proceeding to checkout...');
    // For demo purposes we'll just clear the cart
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any jewelry to your cart yet.</p>
          <Link 
            to="/shop" 
            className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-md text-base font-medium transition-colors inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-serif font-medium text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="border-b border-gray-200 pb-4 mb-4 hidden md:grid md:grid-cols-12 text-sm text-gray-500">
              <div className="md:col-span-6">Product</div>
              <div className="md:col-span-2 text-center">Price</div>
              <div className="md:col-span-2 text-center">Quantity</div>
              <div className="md:col-span-2 text-right">Total</div>
            </div>
            
            {cart.map(item => (
              <div key={item.product.id} className="border-b border-gray-200 py-6 md:grid md:grid-cols-12 md:items-center">
                {/* Product */}
                <div className="md:col-span-6 flex items-center mb-4 md:mb-0">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-20 h-20 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      <Link to={`/product/${item.product.id}`} className="hover:text-gold-500 transition-colors">
                        {item.product.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500 capitalize">{item.product.category}</p>
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-sm text-red-500 hover:text-red-700 flex items-center mt-2 md:hidden"
                    >
                      <Trash2 size={14} className="mr-1" /> Remove
                    </button>
                  </div>
                </div>
                
                {/* Price */}
                <div className="md:col-span-2 text-center text-gray-900 mb-2 md:mb-0">
                  <span className="md:hidden text-gray-500 mr-2">Price:</span>
                  ${item.product.price.toLocaleString()}
                </div>
                
                {/* Quantity */}
                <div className="md:col-span-2 flex items-center justify-center mb-2 md:mb-0">
                  <span className="md:hidden text-gray-500 mr-2">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="px-2 py-1 text-gray-500 hover:text-gray-700"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-2 py-1 text-gray-900">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-2 py-1 text-gray-500 hover:text-gray-700"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                
                {/* Total */}
                <div className="md:col-span-2 text-right text-gray-900 font-medium mb-2 md:mb-0">
                  <span className="md:hidden text-gray-500 mr-2">Total:</span>
                  ${(item.product.price * item.quantity).toLocaleString()}
                </div>
                
                {/* Remove - Desktop */}
                <div className="hidden md:block md:absolute md:right-0">
                  <button 
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-gray-400 hover:text-red-500"
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            
            <div className="flex justify-between items-center mt-8">
              <Link 
                to="/shop" 
                className="text-gray-700 hover:text-gold-500 transition-colors text-sm"
              >
                &larr; Continue Shopping
              </Link>
              <button 
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 transition-colors text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-medium text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${getCartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">Calculated at checkout</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-lg font-medium text-gray-900">Total</span>
                  <span className="text-lg font-medium text-gold-500">${getCartTotal().toLocaleString()}</span>
                </div>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-md text-base font-medium transition-colors"
              >
                Proceed to Checkout
              </button>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p className="mb-2">We accept</p>
                <div className="flex justify-center space-x-2">
                  <div className="bg-white px-2 py-1 rounded border border-gray-200">Visa</div>
                  <div className="bg-white px-2 py-1 rounded border border-gray-200">Mastercard</div>
                  <div className="bg-white px-2 py-1 rounded border border-gray-200">PayPal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;