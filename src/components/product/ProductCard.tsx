import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { buttonHover, fadeInUp } from '../animations/variants';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: string;
  description: string;
  onExpand: () => void;
  id: number;
}

export function ProductCard({ id, imageUrl, name, price, description, onExpand }: ProductCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const { state, dispatch } = useCart();
  const isWishlisted = state.wishlist.includes(id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, name, price, imageUrl },
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: 'TOGGLE_WISHLIST', payload: id });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group w-[300px] cursor-pointer"
      onClick={onExpand}
    >
      <div className="overflow-hidden rounded-xl bg-white shadow-xl">
        <div className="relative h-[400px]">
          <motion.img
            layoutId={`product-image-${name}`}
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"
          />
          
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.button
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className={`absolute top-4 right-4 p-2 rounded-full shadow-lg ${
                    isWishlisted ? 'bg-cyan-400 text-white' : 'bg-white/90 text-gray-800'
                  }`}
                  onClick={handleToggleWishlist}
                >
                  <Heart className="w-5 h-5" fill={isWishlisted ? 'currentColor' : 'none'} />
                </motion.button>

                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute bottom-4 left-0 right-0 px-4"
                >
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full bg-white text-black py-2 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </motion.button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        <motion.div 
          className="p-4"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <motion.p 
            className="text-cyan-600 font-medium mt-1"
            whileHover={{ scale: 1.05 }}
          >
            {price}
          </motion.p>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}