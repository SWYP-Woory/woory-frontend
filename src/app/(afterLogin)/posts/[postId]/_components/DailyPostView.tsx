'use client';

import ReactionSection from '@/app/(afterLogin)/posts/[postId]/_components/reaction/ReactionSection';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import DailyPostImage from '@/app/_components/common/daily/DailyPostImage';
import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import DailyUserTitle from '@/app/_components/common/daily/DailyUserTitle';
import Loading from '@/app/_components/common/loading/Loading';
import Profile from '@/app/_components/common/profile/Profile';
import { DailyPostType, ReactionDataType } from '@/type';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

interface Props {
  postId: number;
}

export default function DailyPostView({ postId }: Props) {
  const [postData, setPostData] = useState<DailyPostType>();
  const [reactionData, setReactionData] = useState<ReactionDataType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  const fetchPostData = useCallback(async () => {
    try {
      const { data, status } = await getData({ path: `${apiRoutes.getPost}/${postId}` });
      if (status === 404) {
        router.replace('/not-found');
      }
      setPostData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [postId]);

  const fetchReaction = useCallback(async () => {
    try {
      const { data } = await getData({ path: `${apiRoutes.getReaction}?contentId=${postId}` });
      setReactionData(data);
    } catch (error) {
      console.error(error);
    }
  }, [postId]);

  useEffect(() => {
    fetchPostData();
  }, [fetchPostData]);

  useEffect(() => {
    fetchReaction();
  }, [fetchReaction]);

  return (
    <div className="flex flex-col w-full h-full bg-white pl-16 pt-24 pb-16 gap-16">
      {isLoading ? (
        <Loading />
      ) : (
        postData && (
          <>
            <DailyTopic topicId={postData.contentId} topic={postData.topicContent} isLiked />
            <div className="flex items-center w-full gap-8 mt-8 pr-16">
              <Profile size="small" profileImage={postData.profileUrl} />
              <DailyUserTitle
                name={postData?.name}
                isEdit={postData?.isEdit}
                targetType="post"
                postId={postId}
                regDate={postData.contentRegDate}
              />
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
        )
      )}
      {reactionData && <ReactionSection reactions={reactionData} postId={postId} fetchReaction={fetchReaction} />}
    </div>
  );
}
