'use client';

import FavoritePost from '@/app/(afterLogin)/(main)/favorites/_components/FavoritePost';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { getCookies } from '@/app/_store/cookie/cookies';
import { useFavoritePostsStore } from '@/app/_store/favoritePostsStore';
import { useEffect } from 'react';

export default function FavoritePostView() {
  const { favoritePosts, setFavoritePosts } = useFavoritePostsStore();

  useEffect(() => {
    const fetchFavoritePosts = async () => {
      const groupId = getCookies('groupId');
      const { data } = await getData({ path: `${apiRoutes.favorites}/${groupId}/favorites` });
      setFavoritePosts(data);
    };
    fetchFavoritePosts();
  }, [setFavoritePosts]);

  if (favoritePosts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center text-center w-full flex-grow font-body text-textDisabled">
        마음을 누른 글이 없어요. <br />
        우리에 올라온 글을 확인하고 <br />
        마음을 눌러보세요!
      </div>
    );
  }

  return favoritePosts.map(({ topicId, topicText, contentImg, issueDate }) => (
    <FavoritePost key={topicId} topicId={topicId} topicText={topicText} contentImg={contentImg} issueDate={issueDate} />
  ));
}
