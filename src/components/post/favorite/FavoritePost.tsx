import defaultImage from '@/assets/icons/logo/logo_woory.svg';
import DefaultPostImage from '@/components/post/DefaultPostImage';
import Image from 'next/image';

interface Props {
  content: string;
  imgUrl?: string;
  date: Date;
}

export default function FavoritePost({ content, imgUrl, date }: Props) {
  return (
    <div className="relative w-[37.5rem] h-[9.3rem] bg-white border-[1px]">
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
    </div>
  );
}
