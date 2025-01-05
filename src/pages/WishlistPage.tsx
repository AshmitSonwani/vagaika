// import React from 'react';
// import { motion } from 'framer-motion';
// import { useCart } from '../context/CartContext';
// import { WishlistItem } from '../components/wishlist/WishlistItem';


// export function WishlistPage() {
//   const { state } = useCart();
//   const wishlistedProducts = state.items.filter(item => 
//     state.wishlist.includes(item.id)
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="max-w-4xl mx-auto px-4">
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">My Wishlist</h1>
        
//         {state.wishlist.length === 0 ? (
//           <div className="text-center py-16">
//             <p className="text-gray-500 text-lg">Your wishlist is empty</p>
//           </div>
//         ) : (
//           <div className="grid gap-6 md:grid-cols-2">
//             {wishlistedProducts.map(product => (
//               <WishlistItem key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { ImageCard } from '../components/ImageCard';
import { ImageModal } from '../components/ImageModal';
import { useImageNavigation } from '../hooks/useImageNavigation';

export function WishlistPage() {
  const { wishlist } = useWishlist();
  const { 
    currentImage, 
    showImage, 
    showNext, 
    showPrevious, 
    hasNext, 
    hasPrevious 
  } = useImageNavigation(wishlist);

  return (
    <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-base md:text-lg">Your wishlist is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {wishlist.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              onClick={showImage}
            />
          ))}
        </div>
      )}
      <ImageModal
        image={currentImage}
        onClose={() => showImage(null)}
        onNext={showNext}
        onPrevious={showPrevious}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />
    </main>
  );
}