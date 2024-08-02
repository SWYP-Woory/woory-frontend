'use client';

import ImageUpload from '@/app/(afterLogin)/posts/_components/imageUpload/ImageUpload';
import InputDailyContent from '@/app/(afterLogin)/posts/_components/input/InputDailyContent';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import ControlHeader from '@/app/_components/common/header/ControlHeader';
import { useImageUpload } from '@/app/_hooks/useImageUpload';
import { getCookies } from '@/app/_store/cookie/cookies';
import { useInputStore } from '@/app/_store/inputStore';
import { TopicDataType } from '@/type';
import { getCalendarTime } from '@/utils/getTime';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function WritePostMain() {
  const [topicData, setTopicData] = useState<TopicDataType>();
  const { setInputText } = useInputStore();
  const { setSelectedImage } = useImageUpload();

  const searchParams = useSearchParams();
  const postId = searchParams.get('postId');

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

    const fetchEditPost = async () => {
      try {
        const { data } = await getData({ path: `${apiRoutes.getEditPost}/${postId}` });
        setInputText(data.contentText);
        setSelectedImage(data.images);
      } catch (error) {
        console.error(error);
      }
    };

    if (postId) {
      fetchEditPost();
    }
    fetchTopic();
  }, [postId, setInputText, setSelectedImage]);

  return (
    topicData && (
      <>
        <ControlHeader topicId={topicData.topicId} postId={Number(postId)!} />
        <div className="flex flex-col items-center gap-24 py-24 px-16">
          <DailyTopic topicId={topicData.topicId} topic={topicData.topicContent} isLiked />
          <InputDailyContent />
          <ImageUpload />
        </div>
      </>
    )
  );
}
