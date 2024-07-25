import { TabType } from '@/type';
import React from 'react';

interface Props {
  tabType: TabType;
  isClicked: boolean;
  onClick?: (value: TabType) => void;
}

export default function TabButton({ tabType, isClicked, onClick }: Props) {
  const handleClick = () => {
    onClick?.(tabType);
  };
  return (
    <button
      type="button"
      className={`cursor-pointer w-[16.8rem] h-[2.8rem] text-18 font-500 ${isClicked ? 'text-black rounded-xl bg-white shadow-dropShadow' : 'text-textDisabled'} shrink-0`}
      onClick={handleClick}
    >
      {tabType === 'daily' ? '데일리' : '캘린더'}
    </button>
  );
}
