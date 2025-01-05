import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { buttonHover, fadeInUp } from '../animations/variants';
import { ProductImageViewer } from './ProductImageViewer';
// import { ProductActions } from './ProductActions';

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  description: string;
}

interface ExpandedProductViewProps {
  products: Product[];
  initialProductIndex: number;
  onClose: () => void;
}

export function ExpandedProductView({ products, initialProductIndex, onClose }: ExpandedProductViewProps) {
  const [currentIndex, setCurrentIndex] = React.useState(initialProductIndex);
  const currentProduct = products[currentIndex];
  const { state, dispatch } = useCart();
  
  const isWishlisted = state.wishlist.includes(currentProduct.id);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        imageUrl: currentProduct.imageUrl,
      },
    });
    onClose();
  };

  const handleToggleWishlist = () => {
    dispatch({ type: 'TOGGLE_WISHLIST', payload: currentProduct.id });
  };

  const handleNavigate = (direction: 'next' | 'prev') => {
    setCurrentIndex(current => {
      if (direction === 'next') {
        return (current + 1) % products.length;
      }
      return (current - 1 + products.length) % products.length;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-white rounded-2xl max-w-5xl w-full overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[400px] sm:h-[400px] md:h-[600px]">
            <ProductImageViewer
              products={products}
              currentIndex={currentIndex}
              onNavigate={handleNavigate}
              productName={currentProduct.name}
            />
          </div>
          
          <div className="p-8 sm:p-6 md:p-8 flex flex-col">
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="flex-1">
              <div className="mb-8 md:mb-8">
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl md:text-3xl font-bold text-gray-800">{currentProduct.name}</h2>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={handleToggleWishlist}
                    className={`p-2 rounded-full ${
                      isWishlisted ? 'bg-cyan-400 text-white' : 'bg-gray-100'
                    }`}
                  >
                    <Heart className="w-6 h-6 md:w-6 md:h-6" fill={isWishlisted ? 'currentColor' : 'none'} />
                  </motion.button>
                </div>
                <p className="text-2xl md:text-2xl text-cyan-600 font-semibold mt-2">{currentProduct.price}</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-lg font-semibold text-gray-800 mb-2">Description</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{currentProduct.description}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.button
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 mt-8 md:mt-8"
            >
              <ShoppingCart className="w-5 h-5 md:w-5 md:h-5" />
              Add to Cart
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}