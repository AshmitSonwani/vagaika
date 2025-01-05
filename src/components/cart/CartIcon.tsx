// import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export function CartIcon() {
  const { state } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" className="relative">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <ShoppingBag className="h-6 w-6 text-gray-300" />
        {itemCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-cyan-400 flex items-center justify-center"
          >
            <span className="text-xs font-bold text-white">{itemCount}</span>
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
}