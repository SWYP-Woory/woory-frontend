import ToastPopUp from '@/app/_components/common/popup/ToastPopUp';
import { ToastType } from '@/type';
import toast from 'react-hot-toast';

export const openToast = (type: ToastType, errorMessage?: string) => {
  toast.custom((t) => <ToastPopUp type={type} errorMessage={errorMessage} isVisible={t.visible} />);
};
