import NoImageDay from '@/assets/icons/calendar/noImageDay.svg';
import ActiveLike from '@/assets/icons/like/activeLike.svg';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  day: string;
  date: string;
  validation: boolean;
  hasContent?: boolean;
  imageUrl?: string;
  isLiked?: boolean;
}

export default function Day({ day, date, validation, hasContent, imageUrl, isLiked }: Props) {
  if (hasContent && validation) {
    return (
      <Link
        href={{
          pathname: `/home/daily`,
          query: { day: date },
        }}
      >
        <div className="flex justify-center items-center relative w-[4.8rem] h-[7.6rem]">
          {imageUrl ? (
            <Image alt="day" src={imageUrl} className="dayChip object-cover" fill sizes="80" />
          ) : (
            <NoImageDay />
          )}
          <div className="absolute z-10">
            {isLiked ? (
              <ActiveLike width="2.0rem" height="1.8rem" fill="#FF95B9" />
            ) : (
              <div className="text-white/40 font-body">{day}</div>
            )}
          </div>
          <div className="absolute rounded-[0.6rem] inset-0 hover:bg-hoverBackground hover:bg-opacity-50 hover:z-20" />
        </div>
      </Link>
    );
  }

  return <div className="dayChip text-textDisabled">{validation && day}</div>;
}
