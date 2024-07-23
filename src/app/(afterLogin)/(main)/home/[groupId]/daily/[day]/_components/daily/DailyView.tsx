'use client';

import DailyNoThread from '@/app/(afterLogin)/(main)/home/[groupId]/daily/[day]/_components/daily/DailyNoThread';
import DailyThread from '@/app/(afterLogin)/(main)/home/[groupId]/daily/[day]/_components/daily/DailyThread';
import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import DateController from '@/app/_components/common/dateController/DateController';
import { useDateControl } from '@/app/_hooks/useDateControl';
import { useTopicStore } from '@/app/_store/topicStore';
import { DailyThreadType } from '@/type';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

const DUMMY_TOPIC = '내일 지구가 멸망한다면';
const PROFILE_IMAGE =
  'https://avatars.githubusercontent.com/u/49144662?s=400&u=903e697529c3b51f9c69bc3885c8f9be3d754028&v=4';
const POST_URL = 'https://cdn.smarttoday.co.kr/news/photo/202406/mn_52620_20240616152756_1.jpg';

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
  const [firstTopicImage, setFirstTopicImage] = useState<string>('');

  // 데일리에서 첫 이미지 찾기
  const findFirstTopicImage = (threads: DailyThreadType[]): string => {
    const find = threads.find((thread) => thread.postUrl);
    return find?.postUrl || '';
  };

  useEffect(() => {
    const image = findFirstTopicImage(dailyThreads);
    setFirstTopicImage(image);
  }, []);

  // 데일리에서 topic, topicImage, topicDate 저장
  const { setTopicTitle, setTopicImage, setTopicDate } = useTopicStore();

  useEffect(() => {
    setTopicTitle(topic);
    setTopicImage(firstTopicImage);
    setTopicDate(currentDate);
  }, [topic, firstTopicImage, currentDate]);

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
