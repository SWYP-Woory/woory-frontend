import DailyUserTitle from '@/app/_components/common/daily/DailyUserTitle';
import CommentIcon from '@/app/_components/icon/comment/CommentIcon';
import Profile from '@/app/_components/icon/profile/Profile';
import GreyHeartIcon from '@/app/_components/icon/reaction/GreyHeartIcon';
import { DailyThreadType } from '@/type';
import Image from 'next/image';

interface Props {
  data: DailyThreadType;
}

export default function DailyThread({ data }: Props) {
  const { profileUrl, name, comment, reaction, content, postUrl, isEdit } = data;
  return (
    <div className="flex gap-8 w-[37.5rem] min-h-[12.1rem] pl-16 pt-16 pb-[1.4rem] pr-[2.6rem] bg-white border-b border-bgGrey">
      <Profile profileImage={profileUrl} size="small" />
      <div className="flex flex-col gap-8 w-full">
        <div>
          <DailyUserTitle name={name} isEdit={isEdit} />
          <div className="font-body">{content}</div>
        </div>
        {postUrl && (
          <div className="relative w-full aspect-square">
            <Image src={postUrl} alt="post" layout="fill" objectFit="cover" className="w-full h-full" />
          </div>
        )}
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
