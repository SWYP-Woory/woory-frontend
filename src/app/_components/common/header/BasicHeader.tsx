'use client';

import LeftArrowIcon from '@/app/_components/icon/arrow/LeftArrowIcon';
import { useInputStore } from '@/app/_store/inputStore';
import { usePathname } from 'next/navigation';

interface Props {
  title: string;
  hasRightButton?: boolean;
}

const decideInputText = (pathName: string, inputFamilyText: string, inputProfileText: string) => {
  if (pathName === '/profile') {
    return inputProfileText;
  }
  if (pathName === '/family') {
    return inputFamilyText;
  }
  return '';
};

export default function BasicHeader({ title, hasRightButton }: Props) {
  const pathName = usePathname();

  const { inputFamilyText, inputProfileText } = useInputStore();

  const isValid = decideInputText(pathName, inputFamilyText, inputProfileText).length > 0;

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
          저장
        </button>
      )}
    </header>
  );
}
