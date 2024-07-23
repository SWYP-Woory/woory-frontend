'use client';

import TabButton from '@/app/_components/upperTabBar/TabButton';
import { getCookies } from '@/app/_store/cookie/cookies';
import { TabType } from '@/type';
import { getCalendarTime } from '@/utils/getTime';
import { format } from 'date-fns';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function UpperTabBar() {
  const pathName = usePathname();
  const type = pathName.includes('daily') ? 'daily' : 'calendar';
  const [tabType, setTabType] = useState<TabType>(type);
  const date = getCalendarTime(new Date());
  const calendar = format(date, 'yyyy-MM');
  const groupId = getCookies('groupId');

  const handleClick = (value: TabType) => {
    setTabType(value);
  };

  return (
    <div className="flex justify-center items-center w-[34.3rem] h-[3.2rem] rounded-2xl bg-lightGrey">
      <Link href={`/home/${groupId}/daily/${date}`}>
        <TabButton tabType="daily" isClicked={tabType === 'daily'} onClick={handleClick} />
      </Link>
      <Link href={`/home/${groupId}/calendar/${calendar}`}>
        <TabButton tabType="calendar" isClicked={tabType === 'calendar'} onClick={handleClick} />
      </Link>
    </div>
  );
}
