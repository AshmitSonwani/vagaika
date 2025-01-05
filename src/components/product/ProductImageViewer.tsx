// import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { buttonHover } from '../animations/variants';

interface ProductImageViewerProps {
  products: Array<{ imageUrl: string; name: string }>;
  currentIndex: number;
  onNavigate: (direction: 'next' | 'prev') => void;
  productName: string;
}

export function ProductImageViewer({ products, currentIndex, onNavigate, productName }: ProductImageViewerProps) {
  return (
    <div className="relative h-full">
      <motion.img
        src={products[currentIndex].imageUrl}
        alt={productName}
        className="h-full w-full object-cover"
        layoutId={`product-image-${productName}`}
        transition={{ duration: 0.6 }}
      />
      
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
        <motion.button
          variants={buttonHover}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onClick={() => onNavigate('prev')}
          className="pointer-events-auto bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          variants={buttonHover}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onClick={() => onNavigate('next')}
          className="pointer-events-auto bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {products.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
        
      </div>
    </div>
  );
}