import Logo from '@/assets/icons/logo/logo_woory.svg';
import PopUpButton from '@/components/common/button/PopUpButton';
import { BottomSheetType } from '@/type';

interface Props {
  sheetType: BottomSheetType;
  buttonText?: string;
}

export default function BottomSheet({ sheetType, buttonText }: Props) {
  return (
    <div className="relative justify-center items-center w-[37.5rem] h-[34.1rem] bg-white rounded-t-[4rem]">
      <div className="absolute top-[1.6rem] left-[17rem] bg-lightGrey w-[3.6rem] h-[0.5rem]" />
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
        <div>
          <div />
        </div>
      )}
    </div>
  );
}
