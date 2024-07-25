'use client';

import DailyNoThread from '@/app/(afterLogin)/(main)/home/daily/_components/DailyNoThread';
import DailyThread from '@/app/(afterLogin)/(main)/home/daily/_components/DailyThread';
import { getData, postData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import DateController from '@/app/_components/common/dateController/DateController';
import { useDateControl } from '@/app/_hooks/useDateControl';
import { deleteCookies, getCookies, setCookies } from '@/app/_store/cookie/cookies';
import { useIsPostStore } from '@/app/_store/isPostStore';
import { DailyDataType, DailyThreadType } from '@/type';
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
  const inviteLoginGroupId = searchParams.get('inviteGroupId');

  const handleLoad = useCallback(async () => {
    let groupId = getCookies('groupId');
    const inviteGroupId = getCookies('inviteGroupId');

    // 로그인 링크 이후 회원가입
    if (inviteLoginGroupId && Number(inviteLoginGroupId) !== groupId) {
      const joinData = { groupId: inviteLoginGroupId };
      await postData({ path: `${apiRoutes.joinFamily}/${inviteLoginGroupId}`, body: joinData });
      deleteCookies('inviteGroupId');
      deleteCookies('groupId');
      setCookies('groupId', inviteLoginGroupId, { path: '/' });
      groupId = inviteLoginGroupId;
    } // 비로그인 링크 이후 회원가입
    else if (inviteGroupId) {
      const joinData = { groupId: inviteGroupId };
      await postData({ path: `${apiRoutes.joinFamily}/${inviteGroupId}`, body: joinData });
      deleteCookies('inviteGroupId');
      deleteCookies('groupId');
      setCookies('groupId', inviteGroupId, { path: '/' });
      groupId = inviteGroupId;
    }

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
    setPostDate(currentDate);
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
