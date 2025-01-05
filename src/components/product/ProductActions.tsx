// import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Share2 } from 'lucide-react';
import { buttonHover, fadeInUp } from '../animations/variants';

interface ProductActionsProps {
  onAddToCart: () => void;
  onAddToWishlist: () => void;
}

export function ProductActions({ onAddToCart, onAddToWishlist }: ProductActionsProps) {
  return (
    <motion.div 
      variants={fadeInUp} 
      initial="initial" 
      animate="animate"
      className="space-y-4"
    >
      <motion.button
        variants={buttonHover}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        onClick={onAddToCart}
        className="w-full bg-black text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors"
      >
        <ShoppingCart className="w-5 h-5" />
        Add to Cart
      </motion.button>
      
      <div className="flex gap-4">
        <motion.button
          variants={buttonHover}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onClick={onAddToWishlist}
          className="flex-1 border-2 border-black text-black py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-black/5 transition-colors"
        >
          <Heart className="w-5 h-5" />
          Wishlist
        </motion.button>
        
        <motion.button
          variants={buttonHover}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className="border-2 border-black text-black p-3 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors"
        >
          <Share2 className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}