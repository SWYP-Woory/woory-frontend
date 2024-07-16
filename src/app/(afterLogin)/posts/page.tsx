import InputDailyContent from '@/app/(afterLogin)/posts/_components/InputDailyContent';
import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import ControlHeader from '@/app/_components/common/header/ControlHeader';
import ImageUpload from '@/app/_components/imageUpload/ImageUpload';

const TOPIC = '오늘 먹은 점심 자랑하기';

export default function WritePostPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <ControlHeader />
      <div className="flex flex-col items-center gap-24 py-24 px-16">
        <DailyTopic topic={TOPIC} />
        <InputDailyContent />
        <ImageUpload />
      </div>
    </div>
  );
}
