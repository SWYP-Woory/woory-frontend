'use client';

import DailyNoThread from '@/app/(afterLogin)/(main)/home/[groupId]/daily/[day]/_components/daily/DailyNoThread';
import DailyThread from '@/app/(afterLogin)/(main)/home/[groupId]/daily/[day]/_components/daily/DailyThread';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import DateController from '@/app/_components/common/dateController/DateController';
import { useDateControl } from '@/app/_hooks/useDateControl';
import { getCookies } from '@/app/_store/cookie/cookies';
import { DailyThreadType } from '@/type';
import { getCalendarTime } from '@/utils/getTime';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

export default function DailyView() {
  const { currentDate, prevDayHandler, nextDayHandler } = useDateControl();
  const [topic] = useState<string>('');
  const [dailyThreads] = useState<DailyThreadType[]>([]);

  const handleLoad = async () => {
    const groupId = getCookies('groupId');
    const { data } = await getData({
      path: `${apiRoutes.getDaily}/${groupId}/get?day=${getCalendarTime(currentDate)}`,
    });
    console.log(data);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen gap-24">
      <DateController
        date={format(currentDate, 'yy.MM.dd')}
        prevHandler={prevDayHandler}
        nextHandler={nextDayHandler}
      />
      <div className="flex flex-col items-center gap-8">
        <DailyTopic topic={topic} hasLike />
        <div>
          {dailyThreads.length > 0 ? (
            dailyThreads.map((data) => <DailyThread data={data} />)
          ) : (
            <div className="pt-180">
              <DailyNoThread />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
