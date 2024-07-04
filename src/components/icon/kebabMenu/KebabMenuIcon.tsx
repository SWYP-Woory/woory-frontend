'use client';

import KebabMenu from '@/../../public/kebabMenu/kebabMenu.svg';
import { useState } from 'react';

export default function KebabMenuIcon() {
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
    <KebabMenu
      width="0.4rem"
      height="2.0rem"
      fill={fill}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    />
  );
}
