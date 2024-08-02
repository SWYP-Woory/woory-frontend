'use client';

import { getData, postData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { getCookies } from '@/app/_store/cookie/cookies';
import { useFavoritePostsStore } from '@/app/_store/favoritePostsStore';
import ActiveLike from '@/assets/icons/like/activeLike.svg';
import Like from '@/assets/icons/like/like.svg';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

interface Props {
  topicId: number;
  isLiked: boolean;
}

export default function LikeIcon({ topicId, isLiked }: Props) {
  const pathName = usePathname();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { setFavoritePosts } = useFavoritePostsStore();

  const toggleFavorite = useCallback(async () => {
    const groupId = getCookies('groupId');
    await postData({ path: `${apiRoutes.favorites}/${groupId}/favorites/${topicId}` });
  }, [topicId]);

  const fetchFavoritePosts = useCallback(async () => {
    const groupId = getCookies('groupId');
    const { data } = await getData({ path: `${apiRoutes.favorites}/${groupId}/favorites` });
    setFavoritePosts(data);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    toggleFavorite();
    if (pathName === '/favorites') {
      fetchFavoritePosts();
    }
    setIsActive(!isActive);
  };

  useEffect(() => {
    setIsActive(isLiked);
  }, [topicId, isLiked]);

  return (
    <div className="cursor-pointer">
      {isActive ? (
        <ActiveLike width="2.0rem" height="1.8rem" onClick={handleClick} />
      ) : (
        <Like
          width="2.0rem"
          height="1.8rem"
          fill={isHovered ? '#666666' : '#888888'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />
      )}
    </div>
  );
}
