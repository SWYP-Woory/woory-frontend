'use client';

import ImageUpload from '@/app/(afterLogin)/posts/_components/imageUpload/ImageUpload';
import InputDailyContent from '@/app/(afterLogin)/posts/_components/input/InputDailyContent';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import ControlHeader from '@/app/_components/common/header/ControlHeader';
import { getCookies } from '@/app/_store/cookie/cookies';
import { TopicDataType } from '@/type';
import { getCalendarTime } from '@/utils/getTime';
import { useEffect, useState } from 'react';

export default function WritePostMain() {
  const [topicData, setTopicData] = useState<TopicDataType>();

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const groupId = getCookies('groupId');
        const day = getCalendarTime(new Date());
        const { data } = await getData({ path: `${apiRoutes.getTopic}?groupId=${groupId}&day=${day}` });
        setTopicData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTopic();
  }, []);

  return (
    topicData && (
      <>
        <ControlHeader topicId={topicData.topicId} day={topicData.issueDate} />
        <div className="flex flex-col items-center gap-24 py-24 px-16">
          <DailyTopic topic={topicData.topicContent} />
          <InputDailyContent />
          <ImageUpload />
        </div>
      </>
    )
  );
}
