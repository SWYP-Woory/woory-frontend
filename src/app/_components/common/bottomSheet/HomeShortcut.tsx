'use client';

import PopUpButton from '@/app/_components/common/button/PopUpButton';
import { useModalStore } from '@/app/_store/modalStore';
import { useToastStore } from '@/app/_store/toastStore';
import Logo from '@/assets/icons/logo/logo_woory.svg';

export default function HomeShortcut() {
  const { setIsModalOpen } = useModalStore();
  const { setIsToastFloating } = useToastStore();

  const handleCancelClick = () => {
    setIsModalOpen(false);
  };

  const handleAddClick = () => {
    // 홈 화면 추가 로직 구현
    setIsModalOpen(false);
    setIsToastFloating(true);
  };

  return (
    <>
      <div className="absolute top-[5.6rem] left-[10.8rem] px-[0.8rem] py-[1.1rem]">
        <Logo width="14.4rem" height="5.8rem" />
      </div>
      <div className="absolute top-[15.2rem] left-[5.5rem] h-[6.4rem]">
        <h2 className="text-[2.2rem] font-700 text-black text-center">
          &apos;우리&apos; 바로가기를
          <br /> 홈 화면에 추가하시겠습니까?
        </h2>
      </div>
      <div className="absolute bottom-[3.2rem] left-[2rem] flex gap-[1rem]">
        <PopUpButton text="취소" textColor="midGrey" colorType="lightGrey" size="large" onClick={handleCancelClick} />
        <PopUpButton text="추가" textColor="white" colorType="primary" size="large" onClick={handleAddClick} />
      </div>
    </>
  );
}
