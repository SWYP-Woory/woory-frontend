'use client';

import TabButton from '@/components/upperTabBar/TabButton';
import { TabType } from '@/type';
import { useState } from 'react';

export default function UpperTabBar() {
  const [clickTab, setClickTab] = useState<TabType>('데일리');
  const handleClick = (value: TabType) => {
    setClickTab(value);
  };

  return (
    <div className="flex justify-center items-center w-[34.3rem] h-[3.2rem] rounded-2xl bg-lightGrey">
      <TabButton text="데일리" isClicked={clickTab === '데일리'} onClick={handleClick} />
      <TabButton text="캘린더" isClicked={clickTab === '캘린더'} onClick={handleClick} />
    </div>
  );
}
