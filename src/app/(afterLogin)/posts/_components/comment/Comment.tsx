import DailyUserTitle from '@/app/_components/common/daily/DailyUserTitle';
import Profile from '@/app/_components/icon/profile/Profile';
import { CommentType } from '@/type';

interface Props extends CommentType {
  hasReply?: boolean;
}

export default function Comment({ profile, comment, hasReply }: Props) {
  const { profileUrl, name, isEdit } = profile;

  return (
    <div className={`${hasReply ? 'w-full' : 'w-[28.5rem]'}`}>
      <div className="flex gap-8">
        <Profile size="small" profileImage={profileUrl} />
        <div className="flex flex-col gap-8 flex-grow">
          <div>
            <DailyUserTitle name={name} isEdit={isEdit} targetType="comment" />
            <div className="font-body">{comment}</div>
          </div>
          {hasReply && <div className="font-caption w-fit text-midGrey underline">답글달기</div>}
        </div>
      </div>
    </div>
  );
}
