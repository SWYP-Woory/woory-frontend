import { useToastStore } from '@/app/_store/toastStore';
import { useEffect } from 'react';

export const useToast = (timeout: number = 1500) => {
  const { isToastFloating, setIsToastFloating } = useToastStore();

  useEffect(() => {
    if (isToastFloating) {
      const timer = setTimeout(() => {
        setIsToastFloating(false);
      }, timeout);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isToastFloating, timeout]);

  return { isToastFloating, setIsToastFloating };
};
