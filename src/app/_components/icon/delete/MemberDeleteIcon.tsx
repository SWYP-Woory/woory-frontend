'use client';

import Delete from '@/assets/icons/delete/memberDelete.svg';
import { useState } from 'react';

interface Props {
  isClicked: boolean;
}

export default function MemberDeleteIcon({ isClicked }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  let fill = '#888888';
  if (isClicked) {
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
    />
  );
}
