// import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import type { CartItem } from '../../types/cart';

interface WishlistItemProps {
  product: CartItem;
}

export function WishlistItem({ product }: WishlistItemProps) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
      },
    });
  };

  const handleRemoveFromWishlist = () => {
    dispatch({ type: 'TOGGLE_WISHLIST', payload: product.id });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRemoveFromWishlist}
          className="absolute top-2 right-2 p-2 bg-white/90 rounded-full shadow-lg"
        >
          <X className="w-5 h-5" />
        </motion.button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-cyan-600 font-medium mt-1">{product.price}</p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="w-full mt-4 bg-black text-white py-2 rounded-full font-medium flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}