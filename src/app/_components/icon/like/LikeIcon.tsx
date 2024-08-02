'use client';

import { useFavoritePostsStore } from '@/app/_store/favoritePostsStore';
import ActiveLike from '@/assets/icons/like/activeLike.svg';
import Like from '@/assets/icons/like/like.svg';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Props {
  topicId: number;
  isLiked: boolean;
}

export default function LikeIcon({ topicId, isLiked }: Props) {
  const pathName = usePathname();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { fetchFavoritePosts, toggleFavorite } = useFavoritePostsStore();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    toggleFavorite(topicId);
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
