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
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const { setFavoritePosts } = useFavoritePostsStore();

  const toggleFavorite = useCallback(async () => {
    const groupId = getCookies('groupId');
    await postData({ path: `${apiRoutes.favorites}/${groupId}/favorites/${topicId}` });
  }, [topicId]);

  const fetchFavoritePosts = useCallback(async () => {
    const groupId = getCookies('groupId');
    const { data } = await getData({ path: `${apiRoutes.favorites}/${groupId}/favorites` });
    setFavoritePosts(data);
  }, [setFavoritePosts]);

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
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  useEffect(() => {
    setIsActive(isLiked);
  }, [topicId, isLiked]);

  return (
    <div className="cursor-pointer">
      {isActive ? (
        <button type="button" aria-label="active-like-button" onClick={handleClick}>
          <ActiveLike
            width="2.0rem"
            height="1.8rem"
            className={`transition-all duration-300 ease-in-out transform ${isAnimating ? 'scale-125' : 'scale-100'}`}
            fill={isAnimating ? '#FF6C9E' : '#FF95B9'}
          />
        </button>
      ) : (
        <button
          type="button"
          aria-label="like-button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <Like
            width="2.0rem"
            height="1.8rem"
            className={`transition-all duration-300 ease-in-out transform ${isAnimating ? 'scale-125' : 'scale-100'}`}
            fill={isHovered ? '#666666' : '#888888'}
          />
        </button>
      )}
    </div>
  );
}
