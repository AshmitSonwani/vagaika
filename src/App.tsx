// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { WishlistPage } from './pages/WishlistPage';
import { WishlistProvider } from './context/WishlistContext';

export function App() {
  return (
    <CartProvider>
      <WishlistProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Routes>
        </div>
      </Router>
      </WishlistProvider>
      
    </CartProvider>
  );
}