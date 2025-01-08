// import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-cyan-500 dark:text-cyan-400" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Vegaikya</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">About Us</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              V3i Technology is a software company which provide custom software solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start space-x-3 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>B-377 World Bank Barra Kanpur</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3 text-gray-600 dark:text-gray-300">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 9956308445</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3 text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@v3itechnology.com</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Subscribe to get special offers and updates.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} V3i Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}