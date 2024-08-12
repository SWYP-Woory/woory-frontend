'use client';

import TabButton from '@/app/_components/common/upperTabBar/TabButton';
import { TabType } from '@/type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function UpperTabBar() {
  const pathName = usePathname();
  const type = pathName.includes('daily') ? 'daily' : 'calendar';
  const [tabType, setTabType] = useState<TabType>(type);

  const handleClick = (value: TabType) => {
    setTabType(value);
  };

  return (
    <div className="flex justify-center items-center w-[34.3rem] h-[3.2rem] rounded-2xl bg-lightGrey">
      <Link href="/home/daily">
        <TabButton tabType="daily" isClicked={tabType === 'daily'} onClick={handleClick} />
      </Link>
      <Link href="/home/calendar">
        <TabButton tabType="calendar" isClicked={tabType === 'calendar'} onClick={handleClick} />
      </Link>
    </div>
  );
}
