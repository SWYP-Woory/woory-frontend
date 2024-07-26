'use client';

// import ReactionSection from '@/app/(afterLogin)/posts/[postId]/_components/reaction/ReactionSection';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import DailyPostImage from '@/app/_components/common/daily/DailyPostImage';
// import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import DailyUserTitle from '@/app/_components/common/daily/DailyUserTitle';
import Profile from '@/app/_components/common/profile/Profile';
import { DailyPostType } from '@/type';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Props {
  postId: number;
}

export default function DailyPostView({ postId }: Props) {
  const [postData, setPostData] = useState<DailyPostType>();

  const fetchPostData = async () => {
    try {
      const { content } = await getData({ path: `${apiRoutes.getPost}/${postId}` });
      setPostData(content);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-white px-16 pt-24 pb-16 gap-16">
      {postData && (
        <>
          {/* <DailyTopic topicId={topicId} topic={topic} isLiked /> */}
          <div className="flex items-center w-full gap-8">
            <Profile size="small" profileImage={postData.profileUrl} />
            <DailyUserTitle name={postData?.name} isEdit={postData?.isEdit} targetType="post" />
          </div>
          <div className="font-body">{postData?.contentText}</div>
          {postData.contentImgPath && (
            <Link
              href={{
                pathname: `/posts/${postId}/image-modal`,
                query: { postUrl: postData.contentImgPath },
              }}
              className="cursor-pointer"
            >
              <DailyPostImage postUrl={postData?.contentImgPath} />
            </Link>
          )}
        </>
      )}
      {/* <ReactionSection reactions={reactions} /> */}
    </div>
  );
}
