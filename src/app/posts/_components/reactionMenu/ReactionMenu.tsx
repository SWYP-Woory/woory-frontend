import RcHeartIcon from '@/app/_components/icon/reaction/RcHeartIcon';
import SadIcon from '@/app/_components/icon/reaction/SadIcon';
import SmileIcon from '@/app/_components/icon/reaction/SmileIcon';
import SurpriseIcon from '@/app/_components/icon/reaction/SurpriseIcon';
import ThumbsIcon from '@/app/_components/icon/reaction/ThumbsIcon';

export default function ReactionMenu() {
  return (
    <div className="flex gap-16 justify-center items-center bg-white shadow-custom w-[24.6rem] h-[4.8rem] rounded-[3.0rem]">
      <RcHeartIcon size="large" />
      <ThumbsIcon size="large" />
      <SmileIcon size="large" />
      <SurpriseIcon size="large" />
      <SadIcon size="large" />
    </div>
  );
}
