import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useModalClosed = () => {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const router = useRouter();

  const handleClose = () => {
    setIsClosed(true);
    setTimeout(() => {
      router.back();
    }, 200);
  };

  return { isClosed, handleClose };
};
