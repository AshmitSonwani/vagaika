import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Image } from '../types';

interface WishlistContextType {
  wishlist: Image[];
  addToWishlist: (image: Image) => void;
  removeFromWishlist: (imageId: string) => void;
  isInWishlist: (imageId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<Image[]>([]);

  const addToWishlist = (image: Image) => {
    setWishlist((prev) => [...prev, image]);
  };

  const removeFromWishlist = (imageId: string) => {
    setWishlist((prev) => prev.filter((image) => image.id !== imageId));
  };

  const isInWishlist = (imageId: string) => {
    return wishlist.some((image) => image.id === imageId);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}