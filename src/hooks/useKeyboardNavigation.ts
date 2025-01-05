import { useEffect, useCallback } from 'react';

interface KeyboardNavigationProps {
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
  isOpen: boolean;
}

export function useKeyboardNavigation({
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
  isOpen
}: KeyboardNavigationProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight' && hasNext && onNext) onNext();
    if (e.key === 'ArrowLeft' && hasPrevious && onPrevious) onPrevious();
  }, [onClose, onNext, onPrevious, hasNext, hasPrevious, isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}