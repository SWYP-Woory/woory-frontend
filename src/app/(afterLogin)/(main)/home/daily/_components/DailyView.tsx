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
import LocalStorage from '@/app/_store/localstorage/LocalStorage';
import { useTopicStore } from '@/app/_store/topicStore';
import { DailyDataType, DailyThreadType, TopicStoreType } from '@/type';
import { getCalendarTime } from '@/utils/getTime';
import { format } from 'date-fns';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export default function DailyView() {
  const [topic, setTopic] = useState<string>('');
  const [dailyThreads, setDailyThreads] = useState<DailyThreadType[]>([]);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [isPrevDay, setIsPrevDay] = useState(false);
  const [isNextDay, setIsNextDay] = useState(false);

  const searchParams = useSearchParams();
  const { currentDate, setCurrentDate, prevDayHandler, nextDayHandler } = useDateControl();
  const { setIsPosted, setPostDate } = useIsPostStore();
  const day = searchParams.get('day');
  const [isLiked, setIsLiked] = useState<boolean>(false);
  // 데일리에서 topic, topicImage, topicDate 저장
  const { setTopicId, setTopicTitle, setTopicImage, setTopicDate } = useTopicStore();

  const handleLoad = useCallback(async () => {
    const groupId = getCookies('groupId');
    const { data }: { data: DailyDataType } = await getData({
      path: `${apiRoutes.getDaily}/${groupId}/get?day=${getCalendarTime(currentDate)}`,
    });
    const { topicId, topicContent, hasPrevDay, hasNextDay, contents, isPosted } = data;
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

    const storageData: TopicStoreType[] = LocalStorage.getItemJson('favorites') || [];
    if (storageData.length !== 0) {
      const find = storageData.some((storage) => storage.topicId === topicId);
      if (find) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    }

    setTopic(topicContent);
    setIsPrevDay(hasPrevDay);
    setIsNextDay(hasNextDay);
    setDailyThreads(newContents);
    setIsPosted(isPosted);
    setPostDate(currentDate);

    const storeFirstImage = newContents.find((content) => content.postUrl)?.postUrl || '';
    setTopicId(topicId);
    setTopicTitle(topicContent);
    setTopicImage(storeFirstImage);
    setTopicDate(currentDate);
    console.log(isLiked);
  }, [currentDate]);

  useEffect(() => {
    if (day && !initialized) {
      setCurrentDate(new Date(day));
      setInitialized(true);
    } else if (!day && !initialized) {
      setInitialized(true);
    }
  }, [day, initialized, setCurrentDate]);

  useEffect(() => {
    if (initialized) {
      handleLoad();
    }
  }, [initialized, handleLoad]);

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
        <DailyTopic topic={topic} hasLike isLiked={isLiked} />
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
