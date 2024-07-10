import RcHeartIcon from '@/components/icon/reaction/RcHeartIcon';
import SadIcon from '@/components/icon/reaction/SadIcon';
import SmileIcon from '@/components/icon/reaction/SmileIcon';
import SurpriseIcon from '@/components/icon/reaction/SurpriseIcon';
import ThumbsIcon from '@/components/icon/reaction/ThumbsIcon';
import { ReactionType } from '@/type';

interface Props {
  count: number;
  reactionType: ReactionType;
  isActive?: boolean;
}

const ReactionIconMap = {
  heart: RcHeartIcon,
  smile: SmileIcon,
  sad: SadIcon,
  surprise: SurpriseIcon,
  thumbs: ThumbsIcon,
};

export default function ReactionChip({ count, reactionType, isActive }: Props) {
  const IconComponent = ReactionIconMap[reactionType];

  return (
    <button type="button" className="flex justify-evenly items-center bg-bgGrey w-[5.9rem] h-[3.2rem] rounded-[2.0rem]">
      <IconComponent size="small" />
      <div className={`${isActive ? 'text-primary' : 'text-black'} font-body`}>{count}</div>
    </button>
  );
}
