import ModalBorder from '@/app/_components/common/border/ModalBorder';
import BottomSheetButton from '@/app/_components/common/button/BottomSheetButton';
import PopUpButton from '@/app/_components/common/button/PopUpButton';
import Logo from '@/assets/icons/logo/logo_woory.svg';
import { BottomSheetType } from '@/type';

interface Props {
  sheetType: BottomSheetType;
  buttonText?: string;
}

export default function BottomSheet({ sheetType, buttonText }: Props) {
  return (
    <div className="relative justify-center items-center w-[37.5rem] h-[34.1rem] bg-white rounded-t-[4rem]">
      <ModalBorder />
      {buttonText && sheetType === 'home' ? (
        <>
          <div className="absolute top-[5.6rem] left-[10.8rem] px-[0.8rem] py-[1.1rem]">
            <Logo width="14.4rem" height="5.8rem" />
          </div>
          <div className="absolute top-[15.2rem] left-[5.5rem] left[ w-[26.5rem] h-[6.4rem]">
            <h2 className="text-[2.2rem] font-700 text-black text-center">
              &apos;우리&apos; 바로가기를
              <br /> 홈 화면에 추가하시겠습니까?
            </h2>
          </div>
          <div className="absolute bottom-[3.2rem] left-[2rem] flex gap-[1rem]">
            <PopUpButton text="취소" textColor="midGrey" colorType="lightGrey" size="large" />
            <PopUpButton text={buttonText} textColor="white" colorType="primary" size="large" />
          </div>
        </>
      ) : (
        <>
          <div className="absolute top-[4rem] left-[11.2rem] w-[15.2rem] h-[3.2rem]">
            <h2 className="text-[2.2rem] font-700 text-center">서비스 관련 문의</h2>
          </div>
          <div className="absolute top-[8.8rem] left-[1.6rem] w-[33.5rem] h-[15.7rem] text-midGrey text-18 text-500">
            &apos;우리&apos; 를 이용해주셔서 감사합니다.
            <br />
            모든 문의는 아래의 메일 주소로 보내주시면
            <br />
            답변 드리겠습니다.
            <br />
            wooryofficial@gmail.com
          </div>
          <div className="absolute bottom-[3.2rem] left-[1.6rem]">
            <BottomSheetButton text="확인" />
          </div>
        </>
      )}
    </div>
  );
}
