import RcHeartIcon from '@/app/_components/icon/reaction/RcHeartIcon';
import SadIcon from '@/app/_components/icon/reaction/SadIcon';
import SmileIcon from '@/app/_components/icon/reaction/SmileIcon';
import SurpriseIcon from '@/app/_components/icon/reaction/SurpriseIcon';
import ThumbsIcon from '@/app/_components/icon/reaction/ThumbsIcon';
import { ReactionType } from '@/type';
import { useEffect, useState } from 'react';

interface Props {
  onClick: (reaction: ReactionType) => void;
  isClicked: boolean;
}

export default function ReactionMenu({ onClick, isClicked }: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(isClicked);

  useEffect(() => {
    if (!isClicked) {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
    setIsVisible(true);
  }, [isClicked]);

  return (
    <div
      className={`flex gap-16 justify-center items-center bg-white shadow-custom w-[24.6rem] h-[4.8rem] rounded-[3.0rem] ${isClicked ? 'scale-up' : 'fade-out'} ${!isVisible && 'hidden'}`}
    >
      <button type="button" aria-label="heart" onClick={() => onClick('LOVE')}>
        <RcHeartIcon size="large" />
      </button>
      <button type="button" aria-label="thumbs" onClick={() => onClick('LIKE')}>
        <ThumbsIcon size="large" />
      </button>
      <button type="button" aria-label="smile" onClick={() => onClick('HAPPY')}>
        <SmileIcon size="large" />
      </button>
      <button type="button" aria-label="surprise" onClick={() => onClick('WOW')}>
        <SurpriseIcon size="large" />
      </button>
      <button type="button" aria-label="sad" onClick={() => onClick('SAD')}>
        <SadIcon size="large" />
      </button>
    </div>
  );
}
