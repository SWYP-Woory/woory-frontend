'use client';

import LeftArrowIcon from '@/app/_components/icon/arrow/LeftArrowIcon';
import { useInputStore } from '@/app/_store/inputStore';

interface Props {
  title: string;
  hasRightButton?: boolean;
  buttonType?: 'complete' | 'save';
}

export default function BasicHeader({ title, hasRightButton, buttonType }: Props) {
  const { inputFamilyText } = useInputStore();
  const isValid = inputFamilyText.length > 0;

  const buttonLabels = {
    complete: '완료',
    save: '저장',
  };

  return (
    <header className="header">
      <button className="absolute left-[1.6rem]" type="button" aria-label="back">
        <LeftArrowIcon />
      </button>
      <div className="font-title text-18">{title}</div>
      {hasRightButton && (
        <button
          type="button"
          disabled={!isValid}
          className={`absolute right-[1.6rem] font-body ${isValid ? 'text-black' : 'text-textDisabled'}`}
        >
          {buttonType && buttonLabels[buttonType]}
        </button>
      )}
    </header>
  );
}
