// import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/cart/CartItem';
// import { formatPrice } from '../utils/formatPrice';

export function CartPage() {
  const { state } = useCart();

  const total = state.items.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );

  const handleClick = () => {
    window.location.href = "https://sonwaniashmit.mojo.page/vegaikya";
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 sm:py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 sm:mb-8">Shopping Cart</h1>
        
        {state.items.length === 0 ? (
          <div className="text-center py-16 sm:py-16">
            <p className="text-gray-500 text-lg sm:text-lg">Your cart is empty</p>
          </div>
        ) : (
          <div className="space-y-8 sm:space-y-8">
            {state.items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}

            <div className="bg-white rounded-xl shadow-md p-6 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-base sm:text-lg font-semibold text-gray-900">Total</span>
                <span className="text-xl sm:text-2xl font-bold text-cyan-600">
                  ${total.toFixed(2)}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white py-3 rounded-full font-medium"
                onClick={handleClick}
              >
                Proceed to Checkout
              </motion.button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}