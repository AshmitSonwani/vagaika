// import React, { createContext, useContext, useReducer } from 'react';

// interface CartItem {
//   id: number;
//   name: string;
//   price: string;
//   imageUrl: string;
//   quantity: number;
// }

// interface CartState {
//   items: CartItem[];
//   wishlist: number[];
// }

// type CartAction =
//   | { type: 'ADD_TO_CART'; payload: Omit<CartItem, 'quantity'> }
//   | { type: 'REMOVE_FROM_CART'; payload: number }
//   | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
//   | { type: 'TOGGLE_WISHLIST'; payload: number };

// const CartContext = createContext<{
//   state: CartState;
//   dispatch: React.Dispatch<CartAction>;
// } | null>(null);

// function cartReducer(state: CartState, action: CartAction): CartState {
//   switch (action.type) {
//     case 'ADD_TO_CART': {
//       const existingItem = state.items.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         return {
//           ...state,
//           items: state.items.map(item =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       }
//       return {
//         ...state,
//         items: [...state.items, { ...action.payload, quantity: 1 }],
//       };
//     }
//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload),
//       };
//     case 'UPDATE_QUANTITY':
//       return {
//         ...state,
//         items: state.items.map(item =>
//           item.id === action.payload.id
//             ? { ...item, quantity: action.payload.quantity }
//             : item
//         ),
//       };
//     case 'TOGGLE_WISHLIST':
//       return {
//         ...state,
//         wishlist: state.wishlist.includes(action.payload)
//           ? state.wishlist.filter(id => id !== action.payload)
//           : [...state.wishlist, action.payload],
//       };
//     default:
//       return state;
//   }
// }

// export function CartProvider({ children }: { children: React.ReactNode }) {
//   const [state, dispatch] = useReducer(cartReducer, {
//     items: [],
//     wishlist: [],
//   });

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// }

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { loadCartState, saveCartState } from '../utils/storage';
import type { CartState, CartAction, CartContextType } from '../types/cart';

const CartContext = createContext<CartContextType | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'TOGGLE_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.includes(action.payload)
          ? state.wishlist.filter(id => id !== action.payload)
          : [...state.wishlist, action.payload],
      };
    default:
      return state;
  }
}

const initialState: CartState = {
  items: [],
  wishlist: [],
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    loadCartState() || initialState
  );

  useEffect(() => {
    saveCartState(state);
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}