'use client';

import DateController from '@/app/_components/common/dateController/DateController';
import DailyThread from '@/app/_components/daily/DailyThread';
import DailyTopic from '@/app/_components/daily/DailyTopic';
import { DailyThreadType } from '@/type';
import { addDays, format, subDays } from 'date-fns';
import { useCallback, useState } from 'react';

interface Props {
  topic: string;
  data: DailyThreadType;
}

export default function DailyView({ topic, data }: Props) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextDayHandler = useCallback(() => {
    setCurrentDate(addDays(currentDate, 1));
  }, [currentDate]);

  const prevDayHandler = useCallback(() => {
    setCurrentDate(subDays(currentDate, 1));
  }, [currentDate]);

  return (
    <div className="flex flex-col items-center gap-24">
      <DateController
        date={format(currentDate, 'yy.MM.dd')}
        prevHandler={prevDayHandler}
        nextHandler={nextDayHandler}
      />
      <div className="flex flex-col items-center gap-8">
        <DailyTopic topic={topic} hasLike />
        <div>
          <DailyThread data={data} />
        </div>
      </div>
    </div>
  );
}
