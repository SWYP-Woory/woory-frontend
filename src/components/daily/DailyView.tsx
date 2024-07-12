'use client';

import postUrl from '@/assets/images/picture2.jpg';
import DateController from '@/components/common/dateController/DateController';
import DailyThread from '@/components/daily/DailyThread';
import DailyTopic from '@/components/daily/DailyTopic';
import { addDays, format, subDays } from 'date-fns';
import { useCallback, useState } from 'react';

const TOPIC = '내일 지구가 멸망한다면';
const PROFILE_IMAGE =
  'https://avatars.githubusercontent.com/u/49144662?s=400&u=903e697529c3b51f9c69bc3885c8f9be3d754028&v=4';

export default function DailyView() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextDayHandler = useCallback(() => {
    setCurrentDate(addDays(currentDate, 1));
  }, [currentDate]);

  const prevDayHandler = useCallback(() => {
    setCurrentDate(subDays(currentDate, 1));
  }, [currentDate]);

  return (
    <div className="flex flex-col items-center  gap-24">
      <DateController
        date={format(currentDate, 'yy.MM.dd')}
        prevHandler={prevDayHandler}
        nextHandler={nextDayHandler}
      />
      <div className="flex flex-col items-center gap-8">
        <DailyTopic topic={TOPIC} hasLike />
        <div>
          <DailyThread profileUrl={PROFILE_IMAGE} name="엄마" comment="10" reaction="3" content="너무 무섭겠다 ㅜㅜ" />
          <DailyThread
            profileUrl={PROFILE_IMAGE}
            name="아빠"
            comment="2"
            reaction="1"
            content="강아지부터 챙겨"
            postUrl={postUrl}
          />
        </div>
      </div>
    </div>
  );
}
