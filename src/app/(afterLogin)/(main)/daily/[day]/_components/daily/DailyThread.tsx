import DailyPostImage from '@/app/_components/common/daily/DailyPostImage';
import DailyUserTitle from '@/app/_components/common/daily/DailyUserTitle';
import Profile from '@/app/_components/common/profile/Profile';
import CommentIcon from '@/app/_components/icon/comment/CommentIcon';
import GreyHeartIcon from '@/app/_components/icon/reaction/GreyHeartIcon';
import { DailyThreadType } from '@/type';

interface Props {
  data?: DailyThreadType;
}

const DUMMY_TARGET_TYPE = 'post';

export default function DailyThread({ data }: Props) {
  if (!data) {
    return (
      <div className="flex flex-col flex-grow justify-center items-center text-center w-full min-h-[15.0rem] font-body text-textDisabled">
        아직 게시글이 없어요. <br />
        가장 먼저 글을 남겨보세요.
      </div>
    );
  }
  const { profileUrl, name, comment, reaction, content, postUrl, isEdit } = data;
  return (
    <div className="flex gap-8 w-[37.5rem] min-h-[12.1rem] px-16 pt-16 pb-[1.4rem] bg-white border-b border-bgGrey">
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
