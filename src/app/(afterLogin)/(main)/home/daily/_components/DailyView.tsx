'use client';

import DailyNoThread from '@/app/(afterLogin)/(main)/home/daily/_components/DailyNoThread';
import DailyThread from '@/app/(afterLogin)/(main)/home/daily/_components/DailyThread';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import DateController from '@/app/_components/common/dateController/DateController';
import { useDateControl } from '@/app/_hooks/useDateControl';
import { getCookies } from '@/app/_store/cookie/cookies';
import { useIsPostStore } from '@/app/_store/isPostStore';
import { DailyDataType, DailyThreadType } from '@/type';
import { getCalendarTime } from '@/utils/getTime';
import { format } from 'date-fns';
import { useCallback, useEffect, useState } from 'react';

export default function DailyView() {
  const { currentDate, prevDayHandler, nextDayHandler } = useDateControl();
  const [topic, setTopic] = useState<string>('');
  const [dailyThreads, setDailyThreads] = useState<DailyThreadType[]>([]);
  const { setIsPosted } = useIsPostStore();
  const [isPrevDay, setIsPrevDay] = useState(false);
  const [isNextDay, setIsNextDay] = useState(false);

  const handleLoad = useCallback(async () => {
    const groupId = getCookies('groupId');
    const { data }: { data: DailyDataType } = await getData({
      path: `${apiRoutes.getDaily}/${groupId}/get?day=${getCalendarTime(currentDate)}`,
    });
    const { topicContent, hasPrevDay, hasNextDay, contents, isPosted } = data;
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
    setIsPrevDay(hasPrevDay);
    setIsNextDay(hasNextDay);
    setDailyThreads(newContents);
    setIsPosted(isPosted);
  }, [currentDate, prevDayHandler, nextDayHandler]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <div className="flex flex-col items-center min-h-screen gap-24">
      <DateController
        controllerType="daily"
        date={format(currentDate, 'yy.MM.dd')}
        prevHandler={prevDayHandler}
        nextHandler={nextDayHandler}
        hasPrevDay={isPrevDay}
        hasNextDay={isNextDay}
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
