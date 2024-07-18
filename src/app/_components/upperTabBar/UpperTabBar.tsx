'use client';

import TabButton from '@/app/_components/upperTabBar/TabButton';
import { TabType } from '@/type';
import { getCalendarTime } from '@/utils/getTime';
import { format } from 'date-fns';
import Link from 'next/link';
import { useState } from 'react';

export default function UpperTabBar() {
  const [clickTab, setClickTab] = useState<TabType>('daily');
  const date = getCalendarTime(new Date());
  const calendar = format(date, 'yyyy-MM');

  const handleClick = (value: TabType) => {
    setClickTab(value);
  };

  return (
    <div className="flex justify-center items-center w-[34.3rem] h-[3.2rem] rounded-2xl bg-lightGrey">
      <Link href={`/home/daily/${date}`}>
        <TabButton tabType="daily" isClicked={clickTab === 'daily'} onClick={handleClick} />
      </Link>
      <Link href={`/home/calendar/${calendar}`}>
        <TabButton tabType="calendar" isClicked={clickTab === 'calendar'} onClick={handleClick} />
      </Link>
    </div>
  );
}
