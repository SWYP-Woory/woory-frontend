import RcHeartIcon from '@/components/icon/reaction/RcHeartIcon';
import SadIcon from '@/components/icon/reaction/SadIcon';
import SmileIcon from '@/components/icon/reaction/SmileIcon';
import SurpriseIcon from '@/components/icon/reaction/SurpriseIcon';
import ThumbsIcon from '@/components/icon/reaction/ThumbsIcon';

export default function ReactionMenu() {
  return (
    <div className="flex gap-16 justify-center items-center bg-white shadow-custom w-[24.6rem] h-[4.8rem] rounded-[3.0rem]">
      <div className="">
        <RcHeartIcon size="large" />
      </div>
      <div>
        <ThumbsIcon size="large" />
      </div>
      <div>
        <SmileIcon size="large" />
      </div>
      <div>
        <SurpriseIcon size="large" />
      </div>
      <div>
        <SadIcon size="large" />
      </div>
    </div>
  );
}
