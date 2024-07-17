'use client';

import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import DateController from '@/app/_components/common/dateController/DateController';
import DailyThread from '@/app/_components/daily/DailyThread';
import { useDateControl } from '@/app/_hooks/useDateControl';
import { DailyThreadType } from '@/type';
import { format } from 'date-fns';

interface Props {
  topic: string;
  data: DailyThreadType;
}

export default function DailyView({ topic, data }: Props) {
  const { currentDate, prevDayHandler, nextDayHandler } = useDateControl();

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
