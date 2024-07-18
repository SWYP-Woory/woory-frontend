import InfoIcon from '@/app/_components/icon/info/InfoIcon';

interface Props {
  type: 'link' | 'shortcut';
}

export default function ToastPopUp({ type }: Props) {
  const content = type === 'link' ? '링크가 복사되었습니다' : '홈 화면에 추가되었습니다';
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-[12.8rem]">
      <div className="flex justify-center items-center gap-8 bg-lightGrey w-[23.6rem] h-[4.0rem] rounded-[2.0rem]">
        <InfoIcon />
        <div className="font-caption leading-8">{content}</div>
      </div>
    </div>
  );
}
