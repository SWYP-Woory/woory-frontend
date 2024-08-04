import { useModalStore } from '@/app/_store/modalStore';
import { useRouter } from 'next/navigation';

export const useModalClosed = () => {
  const { isClosed, setIsClosed, reset } = useModalStore();
  const router = useRouter();

  const handleClose = () => {
    setIsClosed(true);
    setTimeout(() => {
      reset();
      router.back();
    }, 200);
  };

  return { isClosed, handleClose };
};
