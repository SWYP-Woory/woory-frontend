'use client';

import TabButton from '@/app/_components/upperTabBar/TabButton';
import { TabType } from '@/type';
import { useState } from 'react';

export default function UpperTabBar() {
  const [clickTab, setClickTab] = useState<TabType>('daily');
  const handleClick = (value: TabType) => {
    setClickTab(value);
  };

  return (
    <div className="flex justify-center items-center w-[34.3rem] h-[3.2rem] rounded-2xl bg-lightGrey">
      <TabButton tabType="daily" isClicked={clickTab === 'daily'} onClick={handleClick} />
      <TabButton tabType="calendar" isClicked={clickTab === 'calendar'} onClick={handleClick} />
    </div>
  );
}
