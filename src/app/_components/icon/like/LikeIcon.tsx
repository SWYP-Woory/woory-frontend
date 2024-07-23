'use client';

import LocalStorage from '@/app/_store/localstorage/LocalStorage';
import { useTopicStore } from '@/app/_store/topicStore';
import ActiveLike from '@/assets/icons/like/activeLike.svg';
import Like from '@/assets/icons/like/like.svg';
import { getCalendarTime } from '@/utils/getTime';
import { useState } from 'react';

interface Props {
  isLiked?: boolean;
}

export default function LikeIcon({ isLiked }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(isLiked || false);
  const { topicTitle, topicImage, topicDate, reset } = useTopicStore();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTopic = () => {
    const data = LocalStorage.getItemJson('favorites') || [];
    LocalStorage.setItem(
      'favorites',
      JSON.stringify([
        ...data,
        {
          content: topicTitle,
          imgUrl: topicImage,
          postDate: getCalendarTime(topicDate!),
        },
      ]),
    );
  };

  const handleClick = () => {
    if (!isActive) {
      handleTopic();
      reset();
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
