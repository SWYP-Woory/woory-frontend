'use client';

import DailyView from '@/app/(afterLogin)/(main)/home/daily/[day]/_components/daily/DailyView';
import PostButton from '@/app/(afterLogin)/(main)/home/daily/[day]/_components/daily/PostButton';
import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';
import ModalBackground from '@/app/_components/common/modal/ModalBackground';
import ToastPopUp from '@/app/_components/common/popup/ToastPopUp';
import UpperTabBar from '@/app/_components/upperTabBar/UpperTabBar';
import { useToast } from '@/app/_hooks/useToast';
import { getCookies } from '@/app/_store/cookie/cookies';
import { useModalStore } from '@/app/_store/modalStore';
import { useEffect } from 'react';

export default function DailyMain() {
  const { isModalOpen, setIsModalOpen } = useModalStore();
  const { isToastFloating } = useToast();
  const cookie = getCookies('add_home');

  useEffect(() => {
    if (!cookie || cookie !== 'yes') {
      setIsModalOpen(true);
    }
  }, [cookie, setIsModalOpen]);

  return (
    <>
      <div className="mt-8 mx-16">
        <UpperTabBar />
      </div>
      <div className="mt-24">
        <DailyView />
      </div>
      <PostButton />
      {isModalOpen && (
        <ModalBackground>
          <BottomSheet sheetType="home" />
        </ModalBackground>
      )}
      {isToastFloating && <ToastPopUp type="shortcut" />}
    </>
  );
}
