'use client';

import FavoritePost from '@/app/(afterLogin)/(main)/favorites/_components/FavoritePost';
import { useFavoritePostsStore } from '@/app/_store/favoritePostsStore';
import { useEffect } from 'react';

export default function FavoritePostView() {
  const { favoritePosts, fetchFavoritePosts } = useFavoritePostsStore();

  useEffect(() => {
    fetchFavoritePosts();
  }, [fetchFavoritePosts]);

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
