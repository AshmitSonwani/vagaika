// export interface CartItem {
//   id: number;
//   name: string;
//   price: string;
//   imageUrl: string;
//   quantity: number;
// }

export interface CartItem {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  wishlist: number[];
}

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'TOGGLE_WISHLIST'; payload: number };

export interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}