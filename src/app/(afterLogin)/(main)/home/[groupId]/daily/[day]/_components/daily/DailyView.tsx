'use client';

import DailyNoThread from '@/app/(afterLogin)/(main)/home/[groupId]/daily/[day]/_components/daily/DailyNoThread';
import DailyThread from '@/app/(afterLogin)/(main)/home/[groupId]/daily/[day]/_components/daily/DailyThread';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import DateController from '@/app/_components/common/dateController/DateController';
import { useDateControl } from '@/app/_hooks/useDateControl';
import { getCookies } from '@/app/_store/cookie/cookies';
import { useTopicStore } from '@/app/_store/topicStore';
import { DailyDataType, DailyThreadType } from '@/type';
import { getCalendarTime } from '@/utils/getTime';
import { format } from 'date-fns';
import { useCallback, useEffect, useState } from 'react';

export default function DailyView() {
  const { currentDate, prevDayHandler, nextDayHandler } = useDateControl();
  const [topic, setTopic] = useState<string>('');
  const [dailyThreads, setDailyThreads] = useState<DailyThreadType[]>([]);

  const handleLoad = useCallback(async () => {
    const groupId = getCookies('groupId');
    const { data }: { data: DailyDataType } = await getData({
      path: `${apiRoutes.getDaily}/${groupId}/get?day=${getCalendarTime(currentDate)}`,
    });
    const { topicContent, contents } = data;
    const newContents: DailyThreadType[] = contents.map((content) => ({
      id: content.contentId,
      profileUrl: content.profileUrl,
      name: content.name,
      comment: content.commentsCount,
      reaction: content.reactionCount,
      postUrl: content.contentImgPath,
      content: content.contentText,
      isEdit: content.isEdit,
    }));

    setTopic(topicContent);
    setDailyThreads(newContents);
  }, [currentDate, prevDayHandler, nextDayHandler]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);
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
            dailyThreads.map((data) => <DailyThread key={data.id} data={data} />)
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
