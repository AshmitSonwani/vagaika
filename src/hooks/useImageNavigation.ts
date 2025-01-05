import { useState, useCallback } from 'react';
import { Image } from '../types';

export function useImageNavigation(images: Image[]) {
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  const currentIndex = selectedImageId 
    ? images.findIndex(img => img.id === selectedImageId)
    : -1;

  const showImage = useCallback((image: Image | null) => {
    setSelectedImageId(image?.id ?? null);
  }, []);

  const showNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      setSelectedImageId(images[currentIndex + 1].id);
    }
  }, [currentIndex, images]);

  const showPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedImageId(images[currentIndex - 1].id);
    }
  }, [currentIndex, images]);

  const currentImage = selectedImageId 
    ? images.find(img => img.id === selectedImageId)
    : null;

  return {
    currentImage,
    showImage,
    showNext,
    showPrevious,
    hasNext: currentIndex < images.length - 1,
    hasPrevious: currentIndex > 0
  };
}