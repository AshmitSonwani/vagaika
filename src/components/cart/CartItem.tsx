// import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import type { CartItem as CartItemType } from '../../types/cart';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { dispatch } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="flex items-center p-4">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-24 w-24 object-cover rounded-lg"
        />
        <div className="ml-6 flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          <p className="text-cyan-600 font-medium">{item.price}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (item.quantity > 1) {
                  dispatch({
                    type: 'UPDATE_QUANTITY',
                    payload: { id: item.id, quantity: item.quantity - 1 },
                  });
                }
              }}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <Minus className="w-4 h-4" />
            </motion.button>
            <span className="w-8 text-center">{item.quantity}</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                dispatch({
                  type: 'UPDATE_QUANTITY',
                  payload: { id: item.id, quantity: item.quantity + 1 },
                })
              }
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <Plus className="w-4 h-4" />
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
            }
            className="p-2 text-red-500 hover:bg-red-50 rounded-full"
          >
            <Trash2 className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}