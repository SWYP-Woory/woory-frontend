import ReactionSection from '@/app/(afterLogin)/posts/_components/reaction/ReactionSection';
import DailyPostImage from '@/app/_components/common/daily/DailyPostImage';
import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import DailyUserTitle from '@/app/_components/common/daily/DailyUserTitle';
import Profile from '@/app/_components/icon/profile/Profile';
import { DailyPostType } from '@/type';

interface Props {
  data: DailyPostType;
}

export default function DailyPostView({ data }: Props) {
  const { topic, name, isEdit, postUrl, profileUrl, content, reactions } = data;
  return (
    <div className="flex flex-col w-full h-full bg-white px-16 pt-24 pb-16 gap-16">
      <DailyTopic topic={topic} />
      <div className="flex items-center w-full gap-8">
        <Profile size="small" profileImage={profileUrl} />
        <DailyUserTitle name={name} isEdit={isEdit} targetType="post" />
      </div>
      <div className="font-body">{content}</div>
      <DailyPostImage postUrl={postUrl} />
      <ReactionSection reactions={reactions} />
    </div>
  );
}
