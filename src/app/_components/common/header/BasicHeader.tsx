'use client';

import LeftArrowIcon from '@/app/_components/icon/arrow/LeftArrowIcon';
import { useInputStore } from '@/app/_store/inputStore';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
  hasRightButton?: boolean;
  buttonType?: 'complete' | 'save';
}

const BUTTON_LABEL = {
  complete: '완료',
  save: '저장',
};

export default function BasicHeader({ title, hasRightButton, buttonType }: Props) {
  const { inputFamilyText } = useInputStore();
  const router = useRouter();
  const isValid = inputFamilyText.length > 0;

  const handleLeftArrowClick = () => {
    router.back();
  };

  return (
    <header className="header">
      <button className="absolute left-[1.6rem]" type="button" aria-label="back" onClick={handleLeftArrowClick}>
        <LeftArrowIcon />
      </button>
      <div className="font-title text-18">{title}</div>
      {hasRightButton && (
        <button
          type="button"
          disabled={!isValid}
          className={`absolute right-[1.6rem] font-body ${isValid ? 'text-black' : 'text-textDisabled'}`}
        >
          {buttonType && BUTTON_LABEL[buttonType]}
        </button>
      )}
    </header>
  );
}
