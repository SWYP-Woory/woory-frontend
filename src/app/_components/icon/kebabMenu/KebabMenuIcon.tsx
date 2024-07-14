'use client';

import KebabMenu from '@/assets/icons/kebabMenu/kebabMenu.svg';
import { useState } from 'react';

interface Props {
  isActive: boolean;
  onClick: () => void;
}

export default function KebabMenuIcon({ isActive, onClick }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  let fill = '#888888';
  if (isActive) {
    fill = '#1EA49A';
  } else if (isHovered) {
    fill = '#666666';
  }

  return (
    <button
      type="button"
      aria-label="kebabMenu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <KebabMenu width="0.4rem" height="2.0rem" fill={fill} />
    </button>
  );
}
