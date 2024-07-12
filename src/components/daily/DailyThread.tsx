import CommentIcon from '@/components/icon/comment/CommentIcon';
import KebabMenuIcon from '@/components/icon/kebabMenu/KebabMenuIcon';
import Profile from '@/components/icon/profile/Profile';
import GreyHeartIcon from '@/components/icon/reaction/GreyHeartIcon';
import Image, { StaticImageData } from 'next/image';

interface Props {
  profileUrl: string;
  name: string;
  comment: string;
  reaction: string;
  content: string;
  postUrl?: string | StaticImageData;
}

export default function DailyThread({ profileUrl, name, comment, reaction, content, postUrl }: Props) {
  return (
    <div className="flex gap-8 w-[37.5rem] min-h-[12.1rem] pl-16 pt-16 pb-[1.4rem] pr-[2.6rem] bg-white border-b border-bgGrey">
      <Profile profileImage={profileUrl} size="small" />
      <div className="flex flex-col gap-8 w-full">
        <div>
          <div className="flex justify-between">
            <div className="font-bodyBold">{name}</div>
            <KebabMenuIcon />
          </div>
          <div className="font-body">{content}</div>
        </div>
        {postUrl && <Image alt="post" src={postUrl} className="w-full object-cover aspect-square" />}
        <div className="flex w-[10.0rem] justify-between">
          <div className="flex items-center gap-8">
            <CommentIcon />
            <div className="font-body text-midGrey">{comment}</div>
          </div>
          <div className="flex items-center gap-8">
            <GreyHeartIcon />
            <div className="font-body text-midGrey">{reaction}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
