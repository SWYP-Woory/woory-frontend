import RcHeartIcon from '@/app/_components/icon/reaction/RcHeartIcon';
import SadIcon from '@/app/_components/icon/reaction/SadIcon';
import SmileIcon from '@/app/_components/icon/reaction/SmileIcon';
import SurpriseIcon from '@/app/_components/icon/reaction/SurpriseIcon';
import ThumbsIcon from '@/app/_components/icon/reaction/ThumbsIcon';
import { ReactionDataType } from '@/type';

interface Props extends ReactionDataType {}

const REACTION_ICON_MAP = {
  LOVE: RcHeartIcon,
  HAPPY: SmileIcon,
  SAD: SadIcon,
  WOW: SurpriseIcon,
  LIKE: ThumbsIcon,
};

export default function ReactionChip({ count, reactionType, isActive }: Props) {
  const IconComponent = REACTION_ICON_MAP[reactionType];

  return (
    <button type="button" className="flex justify-evenly items-center bg-bgGrey w-[5.9rem] h-[3.2rem] rounded-[2.0rem]">
      <IconComponent size="small" />
      <div className={`${isActive ? 'text-primary' : 'text-black'} font-body`}>{count}</div>
    </button>
  );
}
