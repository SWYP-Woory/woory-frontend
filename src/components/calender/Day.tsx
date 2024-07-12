import NoImageDay from '@/assets/icons/calendar/noImageDay.svg';
import ActiveLike from '@/assets/icons/like/activeLike.svg';
import Image from 'next/image';

interface Props {
  day: string;
  validation: boolean;
  hasContent?: boolean;
  imageUrl?: string;
  isLiked?: boolean;
}

export default function Day({ day, validation, hasContent, imageUrl, isLiked }: Props) {
  if (hasContent && validation) {
    return (
      <div className="flex justify-center items-center relative">
        {imageUrl ? (
          <Image alt="day" src={imageUrl} className="dayChip object-cover" width={48} height={76} />
        ) : (
          <NoImageDay />
        )}
        <div className="absolute z-10">
          {isLiked ? (
            <ActiveLike width="2.0rem" height="1.8rem" />
          ) : (
            <div className="text-white/40 font-body">{day}</div>
          )}
        </div>
      </div>
    );
  }

  return <div className="dayChip text-textDisabled">{validation && day}</div>;
}
