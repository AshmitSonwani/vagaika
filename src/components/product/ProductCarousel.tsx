import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { ExpandedProductView } from './ExpandedProductView';
import { useCarouselControls } from '../../hooks/useCarouselControls';
import { buttonHover, slideIn } from '../animations/variants';

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  description: string;
}

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const { currentIndex, next, previous, goToSlide } = useCarouselControls(products.length);
  const [expandedProductIndex, setExpandedProductIndex] = React.useState<number | null>(null);
  
  const displayCount = 3;
  const startIndex = currentIndex;
  const visibleProducts = [...products, ...products].slice(startIndex, startIndex + displayCount);

  return (
    <>
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div 
          className="overflow-hidden py-8"
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex gap-6 justify-center"
              variants={slideIn}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              {visibleProducts.map((product, index) => (
                <ProductCard
                  key={`${product.id}-${index}`}
                  imageUrl={product.imageUrl}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  onExpand={() => setExpandedProductIndex(index)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.button
          variants={buttonHover}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onClick={previous}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          variants={buttonHover}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        <div className="flex justify-center gap-2 mt-6">
          {products.map((_, index) => (
            <motion.button
              key={index}
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex ? 'bg-cyan-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expandedProductIndex !== null && (
          <ExpandedProductView
            products={products}
            initialProductIndex={expandedProductIndex}
            onClose={() => setExpandedProductIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}