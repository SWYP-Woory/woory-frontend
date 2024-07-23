'use client';

import ActiveLike from '@/assets/icons/like/activeLike.svg';
import Like from '@/assets/icons/like/like.svg';
import { useState } from 'react';

interface Props {
  isLiked?: boolean;
}

export default function LikeIcon({ isLiked }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(isLiked || false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

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
