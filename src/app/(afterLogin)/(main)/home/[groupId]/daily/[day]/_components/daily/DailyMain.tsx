'use client';

import DailyView from '@/app/(afterLogin)/(main)/home/[groupId]/daily/[day]/_components/daily/DailyView';
import PostButton from '@/app/(afterLogin)/(main)/home/[groupId]/daily/[day]/_components/daily/PostButton';
import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';
import ModalBackground from '@/app/_components/common/modal/ModalBackground';
import UpperTabBar from '@/app/_components/upperTabBar/UpperTabBar';
import { getCookies } from '@/app/_store/cookie/cookies';
import { useModalStore } from '@/app/_store/modalStore';
import { useEffect } from 'react';

interface Props {
  groupId: number;
  day: Date;
}

export default function DailyMain({ groupId, day }: Props) {
  const { isModalOpen, setIsModalOpen } = useModalStore();
  const cookie = getCookies('add_home');

  useEffect(() => {
    if (!cookie) {
      setIsModalOpen(true);
    }
  }, [cookie, setIsModalOpen]);

  return (
    <>
      <div className="mt-8 mx-16">
        <UpperTabBar />
      </div>
      <div className="mt-24">
        <DailyView groupId={groupId} day={day} />
      </div>
      <PostButton />
      {isModalOpen && (
        <ModalBackground>
          <BottomSheet sheetType="home" />
        </ModalBackground>
      )}
    </>
  );
}
