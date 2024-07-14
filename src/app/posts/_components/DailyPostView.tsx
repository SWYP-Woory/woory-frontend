import DailyUserTitle from '@/app/_components/common/daily/DailyUserTitle';
import Profile from '@/app/_components/icon/profile/Profile';
import { DailyPostType } from '@/type';
import Image from 'next/image';

interface Props {
  data: DailyPostType;
}

export default function DailyPost({ data }: Props) {
  const { name, isEdit, postUrl } = data;
  return (
    <div className="w-[37.5rem] h-full bg-white">
      <div className="flex items-center w-full gap-8">
        <Profile size="small" />
        <DailyUserTitle name={name} isEdit={isEdit} />
      </div>
      <div>
        {postUrl && (
          <div className="relative w-full aspect-square">
            <Image src={postUrl} alt="post" layout="fill" objectFit="cover" className="w-full h-full" />
          </div>
        )}
      </div>
    </div>
  );
}
