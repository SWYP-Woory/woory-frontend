'use client';

import DailyNoThread from '@/app/(afterLogin)/(main)/home/daily/_components/DailyNoThread';
import DailyThread from '@/app/(afterLogin)/(main)/home/daily/_components/DailyThread';
import { getData, postData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import DateController from '@/app/_components/common/dateController/DateController';
import Loading from '@/app/_components/common/loading/Loading';
import { useDateControl } from '@/app/_hooks/useDateControl';
import { deleteCookies, getCookies, setCookies } from '@/app/_store/cookie/cookies';
import { usePostDeletedStore } from '@/app/_store/isPostDeletedStore';
import { useIsPostStore } from '@/app/_store/isPostStore';
import { useKebabMenuStore } from '@/app/_store/kebabStore';
import { useToastStore } from '@/app/_store/toastStore';
import { DailyDataType, DailyThreadType } from '@/type';
import { getCalendarTime } from '@/utils/getTime';
import { format } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export default function DailyView() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dailyTopicId, setDailyTopicId] = useState(-1);
  const [topic, setTopic] = useState<string>('');
  const [dailyThreads, setDailyThreads] = useState<DailyThreadType[]>([]);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [isPrevDay, setIsPrevDay] = useState(false);
  const [isNextDay, setIsNextDay] = useState(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const { isDeleted } = usePostDeletedStore();
  const { currentDate, setCurrentDate, prevDayHandler, nextDayHandler } = useDateControl();
  const { setIsPosted, setPostDate } = useIsPostStore();

  const { setIsOpenToast, setToastText } = useToastStore();
  const { resetActiveId } = useKebabMenuStore();

  const searchParams = useSearchParams();
  const day = searchParams.get('day');
  const inviteLoginGroupId = searchParams.get('inviteGroupId');

  const handleLoad = useCallback(async () => {
    let groupId = getCookies('groupId');
    const inviteGroupId = getCookies('inviteGroupId');

    // 회원가입 실패 플래그
    let joinFailFlag = false;

    // 로그인 링크 이후 회원가입
    if (inviteLoginGroupId && Number(inviteLoginGroupId) !== groupId) {
      const joinData = { groupId: inviteLoginGroupId };
      const { status, message } = await postData({
        path: `${apiRoutes.joinFamily}/${inviteLoginGroupId}`,
        body: joinData,
      });
      deleteCookies('inviteGroupId');
      deleteCookies('groupId');

      // 회원가입 실패
      if (status === 400) {
        joinFailFlag = true;
        setIsOpenToast(true);
        setToastText(message);
        router.replace('/family-select');
      } else {
        setCookies('groupId', inviteLoginGroupId, { path: '/' });
        groupId = inviteLoginGroupId;
      }
    } // 비로그인 링크 이후 회원가입
    else if (inviteGroupId) {
      const joinData = { groupId: inviteGroupId };
      const { status, message } = await postData({ path: `${apiRoutes.joinFamily}/${inviteGroupId}`, body: joinData });
      deleteCookies('inviteGroupId');
      deleteCookies('groupId');

      // 회원가입 실패
      if (status === 400) {
        joinFailFlag = true;
        setIsOpenToast(true);
        setToastText(message);
        router.replace('/family-select');
      } else {
        setCookies('groupId', inviteGroupId, { path: '/' });
        groupId = inviteGroupId;
      }
    }

    if (groupId === 'undefined') {
      deleteCookies('groupId');
      router.replace('/not-found');
    }

    // 회원가입 실패했다면 해당 요청 하지 않음
    if (!joinFailFlag) {
      const { data, message, status }: { data: DailyDataType; message: string; status: number } = await getData({
        path: `${apiRoutes.getDaily}/${groupId}/get?day=${getCalendarTime(currentDate)}`,
      });

      if (status === 400) {
        setIsOpenToast(true);
        setToastText(message);
        router.replace('/family-select');
      }

      if (status === 404) {
        deleteCookies('groupId');
        router.push('/not-found');
      }
      const { topicId, topicContent, hasPrevDay, hasNextDay, contents, isPosted, isFavorite } = data;
      const newContents: DailyThreadType[] = contents.map((content) => ({
        id: content.contentId,
        profileUrl: content.profileUrl,
        name: content.name,
        comment: content.commentsCount,
        reaction: content.reactionCount,
        postUrl: content.contentImgPath,
        content: content.contentText,
        isEdit: content.isEdit,
        regDate: getCalendarTime(content.contentRegDate),
      }));

      setDailyTopicId(topicId);
      setTopic(topicContent);
      setIsPrevDay(hasPrevDay);
      setIsNextDay(hasNextDay);
      setDailyThreads(newContents);
      setIsPosted(isPosted);
      setPostDate(currentDate);
      setIsLiked(isFavorite);
    }
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
      try {
        resetActiveId();
        handleLoad();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [initialized, handleLoad, isDeleted]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col flex-grow items-center gap-24">
      <DateController
        controllerType="daily"
        date={format(currentDate, 'yy.MM.dd')}
        prevHandler={prevDayHandler}
        nextHandler={nextDayHandler}
        hasPrevDay={isPrevDay}
        hasNextDay={isNextDay}
      />
      <div className="flex flex-col flex-grow items-center gap-8">
        <DailyTopic topicId={dailyTopicId} topic={topic} hasLike isLiked={isLiked} />
        <div className="flex flex-col flex-grow">
          {dailyThreads.length > 0 ? (
            dailyThreads.map((data) => <DailyThread key={data.id} data={data} />)
          ) : (
            <div className="flex flex-col justify-end flex-grow">
              <DailyNoThread />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
