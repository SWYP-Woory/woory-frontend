'use client';

import DailyNoThread from '@/app/(afterLogin)/(main)/daily/[day]/_components/daily/DailyNoThread';
import DailyThread from '@/app/(afterLogin)/(main)/daily/[day]/_components/daily/DailyThread';
import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import DateController from '@/app/_components/common/dateController/DateController';
import { useDateControl } from '@/app/_hooks/useDateControl';
import { DailyThreadType } from '@/type';
import { format } from 'date-fns';
import { useState } from 'react';

const DUMMY_TOPIC = '내일 지구가 멸망한다면';
const PROFILE_IMAGE =
  'https://avatars.githubusercontent.com/u/49144662?s=400&u=903e697529c3b51f9c69bc3885c8f9be3d754028&v=4';
const POST_URL = 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg';

const DUMMY_DATA = {
  profileUrl: PROFILE_IMAGE,
  name: '아빠',
  content: '가족들과 함께 있기',
  comment: 1,
  reaction: 2,
  postUrl: POST_URL,
  isEdit: true,
};

export default function DailyView() {
  const { currentDate, prevDayHandler, nextDayHandler } = useDateControl();
  const [topic] = useState<string>(DUMMY_TOPIC);
  const [dailyThreads] = useState<DailyThreadType[]>([
    DUMMY_DATA,
    DUMMY_DATA,
    DUMMY_DATA,
    DUMMY_DATA,
    DUMMY_DATA,
    DUMMY_DATA,
    DUMMY_DATA,
  ]);

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
