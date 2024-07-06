'use client';

import ActiveLike from '@/assets/icons/like/activeLike.svg';
import Like from '@/assets/icons/like/like.svg';
import { useState } from 'react';

export default function LikeIcon() {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return isActive ? (
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
  );
}
