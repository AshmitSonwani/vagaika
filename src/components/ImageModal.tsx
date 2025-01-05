// import React from 'react';
// import { Image } from '../types';
// import { ModalHeader } from './modal/ModalHeader';
// import { NavigationButtons } from './modal/NavigationButtons';
// import { ImageDetails } from './modal/ImageDetails';
// import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';

// interface ImageModalProps {
//   image: Image | null;
//   onClose: () => void;
//   onNext?: () => void;
//   onPrevious?: () => void;
//   hasNext?: boolean;
//   hasPrevious?: boolean;
// }

// export function ImageModal({ 
//   image, 
//   onClose, 
//   onNext, 
//   onPrevious,
//   hasNext = false,
//   hasPrevious = false
// }: ImageModalProps) {
//   useKeyboardNavigation({
//     onClose,
//     onNext,
//     onPrevious,
//     hasNext,
//     hasPrevious,
//     isOpen: !!image
//   });

//   if (!image) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
//       <div className="relative max-w-6xl w-full bg-white rounded-lg shadow-2xl overflow-hidden">
//         <ModalHeader onClose={onClose} />
//         <NavigationButtons
//           onNext={onNext}
//           onPrevious={onPrevious}
//           hasNext={hasNext}
//           hasPrevious={hasPrevious}
//         />
        
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-2/3 relative">
//             <img
//               src={`${image.url}?auto=format&fit=crop&w=1200&q=90`}
//               alt={image.title}
//               className="w-full h-[500px] object-cover"
//             />
//           </div>
//           <ImageDetails image={image} />
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
import { Image } from '../types';
import { ModalHeader } from './modal/ModalHeader';
import { NavigationButtons } from './modal/NavigationButtons';
import { ImageDetails } from './modal/ImageDetails';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';

interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export function ImageModal({ 
  image, 
  onClose, 
  onNext, 
  onPrevious,
  hasNext = false,
  hasPrevious = false
}: ImageModalProps) {
  useKeyboardNavigation({
    onClose,
    onNext,
    onPrevious,
    hasNext,
    hasPrevious,
    isOpen: !!image
  });

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-2 md:p-4">
      <div className="relative w-full max-w-6xl bg-white rounded-lg shadow-2xl overflow-hidden">
        <ModalHeader onClose={onClose} />
        <NavigationButtons
          onNext={onNext}
          onPrevious={onPrevious}
          hasNext={hasNext}
          hasPrevious={hasPrevious}
        />
        
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 relative">
            <img
              src={`${image.url}?auto=format&fit=crop&w=1200&q=90`}
              alt={image.title}
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>
          <ImageDetails image={image} />
        </div>
      </div>
    </div>
  );
}