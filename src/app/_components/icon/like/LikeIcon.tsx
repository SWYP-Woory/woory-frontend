'use client';

import LocalStorage from '@/app/_store/localstorage/LocalStorage';
import { useTopicStore } from '@/app/_store/topicStore';
import ActiveLike from '@/assets/icons/like/activeLike.svg';
import Like from '@/assets/icons/like/like.svg';
import { TopicStoreType } from '@/type';
import { getCalendarTime } from '@/utils/getTime';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface Props {
  isLiked?: boolean;
}

export default function LikeIcon({ isLiked }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(isLiked || false);
  const { topicId, topicTitle, topicImage, topicDate } = useTopicStore();
  const pathName = usePathname();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTopic = () => {
    const data: TopicStoreType[] = LocalStorage.getItemJson('favorites') || [];
    LocalStorage.setItem(
      'favorites',
      JSON.stringify([
        ...data,
        {
          topicId,
          topicTitle,
          topicImage,
          topicDate: topicDate ? getCalendarTime(topicDate) : null,
        },
      ]),
    );
  };

  const handleClick = () => {
    if (!isActive) {
      if (pathName !== '/favorites') {
        handleTopic();
      }
    }
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
