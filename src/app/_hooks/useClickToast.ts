import { useCallback, useEffect, useState } from 'react';

export const useClickToast = (timeout: number = 1500) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsClicked((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setIsClicked(false);
      }, timeout);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isClicked, timeout]);

  return { isClicked, handleClick };
};
