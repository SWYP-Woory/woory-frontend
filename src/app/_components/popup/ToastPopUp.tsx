import InfoIcon from '@/app/_components/icon/info/InfoIcon';

export default function ToastPopUp() {
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-[12.8rem]">
      <div className="flex justify-center items-center gap-8 bg-lightGrey w-[23.6rem] h-[4.0rem] rounded-[2.0rem]">
        <InfoIcon />
        <div className="font-caption leading-8">링크가 복사되었습니다</div>
      </div>
    </div>
  );
}
