// // import React from 'react';
// import { Image } from '../../types';

// interface ImageDetailsProps {
//   image: Image;
// }

// export function ImageDetails({ image }: ImageDetailsProps) {
//   return (
//     <div className="p-6 md:w-1/3">
//       <h2 className="text-2xl font-bold mb-4">{image.title}</h2>
//       <div className="space-y-4">
//         <div>
//           <h3 className="text-sm font-semibold text-gray-500">Description</h3>
//           <p className="text-gray-700">{image.description}</p>
//         </div>
        
//         <div>
//           <h3 className="text-sm font-semibold text-gray-500">Photographer</h3>
//           <p className="text-gray-700">{image.photographer}</p>
//         </div>
        
//         <div>
//           <h3 className="text-sm font-semibold text-gray-500">Dimensions</h3>
//           <p className="text-gray-700">{image.dimensions}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
import { Image } from '../../types';
import { motion } from 'framer-motion';
import { buttonHover } from '../animations/variants';
import { ShoppingCart } from 'lucide-react';

interface ImageDetailsProps {
  image: Image;
}

export function ImageDetails({ image }: ImageDetailsProps) {
  return (
    <div className="p-4 md:p-6 w-full md:w-1/3 bg-white">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{image.title}</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-500">Description</h3>
          <p className="text-sm md:text-base text-gray-700">{image.description}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-gray-500">Photographer</h3>
          <p className="text-sm md:text-base text-gray-700">{image.photographer}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-gray-500">Dimensions</h3>
          <p className="text-sm md:text-base text-gray-700">{image.dimensions}</p>
        </div>
        <div className='mt-12 mb-12'>
        <motion.button
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="w-full bg-black text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 mt-8 md:mt-8"
            >
              <ShoppingCart className="w-5 h-5 md:w-5 md:h-5" />
              Add to Cart
            </motion.button>
        </div>
      </div>
      
    </div>
  );
}