import { useToastStore } from '@/app/_store/toastStore';
import { useEffect } from 'react';

export const useToast = () => {
  const { isToastFloating, setIsToastFloating } = useToastStore();

  useEffect(() => {
    if (isToastFloating) {
      const timer = setTimeout(() => {
        setIsToastFloating(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isToastFloating]);

  return { isToastFloating, setIsToastFloating };
};
