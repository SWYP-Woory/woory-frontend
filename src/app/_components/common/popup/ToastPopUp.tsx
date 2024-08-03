import InfoIcon from '@/app/_components/icon/info/InfoIcon';
import { ToastType } from '@/type';

interface Props {
  type: ToastType;
  errorMessage?: string;
  isVisible: boolean;
}

const decideContent = (type: string, errorMessage?: string) => {
  switch (type) {
    case 'link':
      return '링크가 복사되었습니다';
    case 'imageSize':
      return '사진 용량 초과 (5mb 이하 가능)';
    case 'post':
      return '하루 1개의 게시글 작성 가능';
    case 'error':
      return errorMessage;
    default:
      return '';
  }
};

export default function ToastPopUp({ type, errorMessage, isVisible }: Props) {
  return (
    <div
      className={`flex justify-center items-center gap-8 bg-primaryLight w-[23.6rem] h-[4.0rem] rounded-[2.0rem] 
      ${isVisible ? 'toast-slide-up' : 'toast-slide-down'}`}
    >
      <InfoIcon />
      <div className={`font-caption leading-8 ${type !== 'error' ? 'w-fit' : 'w-[17rem]'} text-center text-black`}>
        {decideContent(type, errorMessage)}
      </div>
    </div>
  );
}
