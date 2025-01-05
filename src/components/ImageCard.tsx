// import React from 'react';
// import { Heart } from 'lucide-react';
// import { Image } from '../types';
// import { useWishlist } from '../context/WishlistContext';

// interface ImageCardProps {
//   image: Image;
//   onClick: (image: Image) => void;
// }

// export function ImageCard({ image, onClick }: ImageCardProps) {
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
//   const inWishlist = isInWishlist(image.id);

//   const handleWishlistClick = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (inWishlist) {
//       removeFromWishlist(image.id);
//     } else {
//       addToWishlist(image);
//     }
//   };

//   return (
//     <div 
//       className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
//       onClick={() => onClick(image)}
//     >
//       <img
//         src={`${image.url}?auto=format&fit=crop&w=400&q=80`}
//         alt={image.title}
//         className="w-full h-64 object-cover"
//       />
//       <button
//         onClick={handleWishlistClick}
//         className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors z-10"
//       >
//         <Heart 
//           size={20} 
//           className={`${inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
//         />
//       </button>
//       <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
//       <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent">
//         <h3 className="text-lg font-semibold">{image.title}</h3>
//         <p className="text-sm opacity-90">{image.photographer}</p>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Heart } from 'lucide-react';
import { Image } from '../types';
import { useWishlist } from '../context/WishlistContext';

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

export function ImageCard({ image, onClick }: ImageCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(image.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(image.id);
    } else {
      addToWishlist(image);
    }
  };

  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
      onClick={() => onClick(image)}
    >
      <img
        src={`${image.url}?auto=format&fit=crop&w=400&q=80`}
        alt={image.title}
        className="w-full aspect-[4/3] object-cover"
        loading="lazy"
      />
      <button
        onClick={handleWishlistClick}
        className="absolute top-2 right-2 p-2 rounded-full bg-white/90 hover:bg-white transition-colors z-10 touch-manipulation"
        aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <Heart 
          size={20} 
          className={`${inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
        />
      </button>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="text-base font-semibold line-clamp-1">{image.title}</h3>
        <p className="text-sm opacity-90 line-clamp-1">{image.photographer}</p>
      </div>
    </div>
  );
}