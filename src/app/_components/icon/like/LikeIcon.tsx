'use client';

import LocalStorage from '@/app/_store/localstorage/LocalStorage';
import { useTopicStore } from '@/app/_store/topicStore';
import ActiveLike from '@/assets/icons/like/activeLike.svg';
import Like from '@/assets/icons/like/like.svg';
import { TopicStoreType } from '@/type';
import { getCalendarTime } from '@/utils/getTime';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Props {
  topicId: number;
  isLiked: boolean;
}

export default function LikeIcon({ topicId, isLiked }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { setFavoriteTopicId, topicTitle, topicImage, topicDate } = useTopicStore();
  const pathName = usePathname();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFavoriteTopic = () => {
    if (!isActive) {
      if (pathName === '/home/daily') {
        const topics: TopicStoreType[] = LocalStorage.getItemJson('favorites') || [];
        LocalStorage.setItem(
          'favorites',
          JSON.stringify([
            ...topics,
            {
              topicId,
              topicTitle,
              topicImage,
              topicDate: topicDate ? getCalendarTime(topicDate) : null,
            },
          ]),
        );
      }
    }
  };

  const handleCancelFavoriteTopic = () => {
    if (isActive) {
      const topics: TopicStoreType[] = LocalStorage.getItemJson('favorites') || [];
      const filteredTopics = topics.filter((topic) => topic.topicId !== topicId);
      LocalStorage.setItem('favorites', JSON.stringify(filteredTopics));
      setFavoriteTopicId(topicId);
    }
  };

  const handleClick = () => {
    handleFavoriteTopic();
    handleCancelFavoriteTopic();
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
