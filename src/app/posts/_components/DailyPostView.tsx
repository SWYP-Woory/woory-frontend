import DailyPostImage from '@/app/_components/common/daily/DailyPostImage';
import DailyUserTitle from '@/app/_components/common/daily/DailyUserTitle';
import Profile from '@/app/_components/icon/profile/Profile';
import ReactionSection from '@/app/posts/_components/ReactionSection';
import { DailyPostType } from '@/type';

interface Props {
  data: DailyPostType;
}

export default function DailyPostView({ data }: Props) {
  const { name, isEdit, postUrl, content, reactions } = data;
  return (
    <div className="flex flex-col w-[37.5rem] h-full bg-white px-16 pt-24 pb-16 gap-16">
      <div className="flex items-center w-full gap-8">
        <Profile size="small" />
        <DailyUserTitle name={name} isEdit={isEdit} />
      </div>
      <div className="font-body">{content}</div>
      <DailyPostImage postUrl={postUrl} />
      <ReactionSection reactions={reactions} />
    </div>
  );
}
