import DailyPostImage from '@/app/_components/common/daily/DailyPostImage';
import DailyUserTitle from '@/app/_components/common/daily/DailyUserTitle';
import Profile from '@/app/_components/common/profile/Profile';
import CommentIcon from '@/app/_components/icon/comment/CommentIcon';
import GreyHeartIcon from '@/app/_components/icon/reaction/GreyHeartIcon';
import { DailyThreadType } from '@/type';

interface Props {
  data: DailyThreadType;
}

const DUMMY_TARGET_TYPE = 'post';

export default function DailyThread({ data }: Props) {
  const { profileUrl, name, comment, reaction, content, postUrl, isEdit } = data;
  return (
    <div className="flex gap-8 w-[37.5rem] min-h-[12.1rem] pl-16 pt-16 pb-[1.4rem] pr-[2.6rem] bg-white border-b border-bgGrey">
      <Profile profileImage={profileUrl} size="small" />
      <div className="flex flex-col gap-8 w-full">
        <div>
          <DailyUserTitle targetType={DUMMY_TARGET_TYPE} name={name} isEdit={isEdit} />
          <div className="font-body">{content}</div>
        </div>
        <DailyPostImage postUrl={postUrl} />
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
