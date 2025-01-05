import { useState, useCallback } from 'react';

export function useCarouselControls(length: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % length);
  }, [length]);

  const previous = useCallback(() => {
    setCurrentIndex((current) => (current - 1 + length) % length);
  }, [length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return { currentIndex, next, previous, goToSlide };
}