// import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Menu, X} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartIcon } from './cart/CartIcon';
import { useCart } from '../context/CartContext';
// import { ImageIcon} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useState } from 'react';

export function Navigation() {
  const { state } = useCart();
  const { wishlist } = useWishlist();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-black/20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">VEGAIKYA</span>
          </Link>
          {/* Mobile Menu Button */}

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/collections" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Accessories
            </Link>
            <div className="flex items-center gap-4">
            <Link
                  to="/wishlist"
                  className="flex items-center space-x-2 text-gray-300 hover:text-indigo-600 transition-colors"
                >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                
                  <Heart className={location.pathname === '/wishlist' ? 'h-6 w-6 text-gray-300 ' : ''} size={24} />
                {state.wishlist.length > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-cyan-400 flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">
                      {state.wishlist.length && wishlist.length}
                    </span>
                  </motion.div>
                )}
              </motion.div>
                </Link>
              {/* <Link
                to="/wishlist"
                className="flex items-center space-x-2 text-gray-300 hover:text-indigo-600 transition-colors"
              >
                <Heart
                  className={location.pathname === '/wishlist' ? 'h-6 w-6 text-gray-300 ' : ''}
                  size={24}
                />
                <span className="font-medium">Wishlist ({wishlist.length})</span>
              </Link> */}

              <CartIcon />
            </div>
          </nav>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10"
            >
              <div className="py-4 space-y-4">
                <Link 
                  to="/" 
                  className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/collections" 
                  className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accessories
                </Link>
                <div className="flex items-center gap-4 py-2">
                  <Link to="/wishlist" onClick={() => setIsMenuOpen(false)}>
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                       <Heart className={location.pathname === '/wishlist' ? 'h-6 w-6 text-gray-300 ' : ''} size={24} />
                      {state.wishlist.length > 0 && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-cyan-400 flex items-center justify-center"
                        >
                          <span className="text-xs font-bold text-white">
                            {state.wishlist.length && wishlist.length}
                          </span>
                        </motion.div>
                      )}
                    </motion.div>
                  </Link>
                  <CartIcon />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}