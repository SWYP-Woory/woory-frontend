'use client';

import ImageUpload from '@/app/(afterLogin)/posts/_components/imageUpload/ImageUpload';
import InputDailyContent from '@/app/(afterLogin)/posts/_components/input/InputDailyContent';
import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import ControlHeader from '@/app/_components/common/header/ControlHeader';

interface Props {
  topic: string;
}

export default function WritePostMain({ topic }: Props) {
  return (
    <>
      <ControlHeader />
      <div className="flex flex-col items-center gap-24 py-24 px-16">
        <DailyTopic topic={topic} />
        <InputDailyContent />
        <ImageUpload />
      </div>
    </>
  );
}
