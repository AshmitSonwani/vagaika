// import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonsProps {
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export function NavigationButtons({ 
  onNext, 
  onPrevious, 
  hasNext, 
  hasPrevious 
}: NavigationButtonsProps) {
  return (
    <>
      {hasPrevious && (
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-20"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      
      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-20"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </>
  );
}