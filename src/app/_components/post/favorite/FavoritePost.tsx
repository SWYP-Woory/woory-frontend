import LikeIcon from '@/app/_components/icon/like/LikeIcon';
import DefaultPostImage from '@/app/_components/post/DefaultPostImage';
import defaultImage from '@/assets/icons/logo/logo_woory.svg';
import { getCalendarTime } from '@/utils/getTime';
import Image from 'next/image';

interface Props {
  content: string;
  imgUrl?: string;
  postDate: Date;
}

export default function FavoritePost({ content, imgUrl, postDate }: Props) {
  const date = getCalendarTime(postDate);
  return (
    <div className="relative w-[37.5rem] h-[9.3rem] bg-white">
      <div className="flex absolute top-[1.6rem] left-[1.6rem] w-[6rem] h-[6rem] justify-center items-center rounded-2xl">
        {imgUrl ? (
          <Image
            src={imgUrl || defaultImage}
            fill
            sizes="6rem"
            alt="포스트 사진"
            className="w-[6rem] h-[6rem] flex-shrink-0 rounded-2xl"
          />
        ) : (
          <DefaultPostImage />
        )}
      </div>
      <div className="absolute top-[2.1rem] left-[9.2rem] w-[17.8rem] h-[2.6rem] text-18 font-500 text-black">
        {content}
      </div>
      <div className="absolute bottom-[2.2rem] left-[9.2rem] text-textDisabled text-14 font-500">{date}</div>
      <div className="absolute cursor-pointer top-[3.7rem] right-[1.8rem]">
        <LikeIcon />
      </div>
      <div className="absolute left-[2.4rem] bottom-0 bg-lightGrey flex w-[32.7rem] h-[0.1rem] justify-center items-center flex-shrink-0" />
    </div>
  );
}
