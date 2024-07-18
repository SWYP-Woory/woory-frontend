'use client';

import TabButton from '@/app/_components/upperTabBar/TabButton';
import { useHomeTabStore } from '@/app/_store/homeTabStore';
import { TabType } from '@/type';
import { getCalendarTime } from '@/utils/getTime';
import { format } from 'date-fns';
import Link from 'next/link';

export default function UpperTabBar() {
  const { tabType, setTabType } = useHomeTabStore();
  const date = getCalendarTime(new Date());
  const calendar = format(date, 'yyyy-MM');

  const handleClick = (value: TabType) => {
    setTabType(value);
  };

  return (
    <div className="flex justify-center items-center w-[34.3rem] h-[3.2rem] rounded-2xl bg-lightGrey">
      <Link href={`/home/daily/${date}`}>
        <TabButton tabType="daily" isClicked={tabType === 'daily'} onClick={handleClick} />
      </Link>
      <Link href={`/home/calendar/${calendar}`}>
        <TabButton tabType="calendar" isClicked={tabType === 'calendar'} onClick={handleClick} />
      </Link>
    </div>
  );
}
