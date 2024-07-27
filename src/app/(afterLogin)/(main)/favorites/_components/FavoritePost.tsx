import DefaultPostImage from '@/app/(afterLogin)/(main)/favorites/_components/DefaultPostImage';
import LikeIcon from '@/app/_components/icon/like/LikeIcon';
import defaultImage from '@/assets/icons/logo/logo_woory.svg';
import { getCalendarTime } from '@/utils/getTime';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  topicId: number;
  topicTitle: string;
  topicImage: string;
  topicDate: Date;
}

export default function FavoritePost({ topicId, topicTitle, topicImage, topicDate }: Props) {
  const date = getCalendarTime(topicDate);
  return (
    <div className="relative w-[37.5rem] h-[9.3rem] bg-white">
      <Link href={`/home/daily?day=${topicDate}`}>
        <div className="relative w-full h-full">
          <div className="flex absolute top-[1.6rem] left-[1.6rem] w-[6rem] h-[6rem] justify-center items-center">
            {topicImage ? (
              <Image src={topicImage || defaultImage} fill alt="포스트 사진" className="object-cover rounded-2xl" />
            ) : (
              <DefaultPostImage />
            )}
          </div>
          <div className="absolute top-[2.1rem] left-[9.0rem] w-[23.5rem] text-18 font-500 text-black">
            {topicTitle}
          </div>
        </div>
        <div className="absolute bottom-[2.2rem] left-[9.0rem] text-textDisabled text-14 font-500">{date}</div>
      </Link>
      <div className="absolute cursor-pointer top-[3.7rem] right-[1.8rem]">
        <LikeIcon topicId={topicId} isLiked />
      </div>
      <div className="absolute left-[2.4rem] bottom-0 bg-lightGrey flex w-[32.7rem] h-[0.1rem] justify-center items-center flex-shrink-0" />
    </div>
  );
}
