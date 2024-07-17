import AddHomeIcon from '@/assets/icons/addHome/addHome.svg';

interface Props {
  onClick: () => void;
}

export default function AddHome({ onClick }: Props) {
  return (
    <button type="button" aria-label="addHome" onClick={onClick}>
      <div className="flex gap-[1.0rem] px-16 w-full h-[7.8rem] border-bgGrey border-b">
        <div className="pt-20">
          <AddHomeIcon />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-body font-700 text-start">홈 화면에 바로가기 추가</div>
          <div className="font-caption text-midGrey">모바일 기기에서 어플처럼 편하게 이용하세요</div>
        </div>
      </div>
    </button>
  );
}
