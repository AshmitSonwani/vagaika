import type { CartState } from '../types/cart';

const STORAGE_KEY = 'designerwear_cart';

export function loadCartState(): CartState | undefined {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading cart state:', err);
    return undefined;
  }
}

export function saveCartState(state: CartState): void {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {
    console.error('Error saving cart state:', err);
  }
}