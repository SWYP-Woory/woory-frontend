'use client';

import Delete from '@/assets/icons/delete/delete.svg';
import { useState } from 'react';

export default function DeleteIcon() {
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

  let fill = '#888888';
  if (isActive) {
    fill = '#1EA49A';
  } else if (isHovered) {
    fill = '#666666';
  }

  return (
    <Delete
      width="1.8rem"
      height="1.8rem"
      fill={fill}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    />
  );
}
