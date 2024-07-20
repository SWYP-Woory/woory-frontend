'use client';

import DailyView from '@/app/(afterLogin)/(main)/home/daily/[day]/_components/daily/DailyView';
import PostButton from '@/app/(afterLogin)/(main)/home/daily/[day]/_components/daily/PostButton';
import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';
import ModalBackground from '@/app/_components/common/modal/ModalBackground';
import ToastPopUp from '@/app/_components/common/popup/ToastPopUp';
import UpperTabBar from '@/app/_components/upperTabBar/UpperTabBar';
import { useToast } from '@/app/_hooks/useToast';
import { useModalStore } from '@/app/_store/modalStore';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { useEffect } from 'react';

interface Props {
  cookie?: RequestCookie;
}

export default function DailyMain({ cookie }: Props) {
  const { isModalOpen, setIsModalOpen } = useModalStore();
  const { isToastFloating } = useToast();

  useEffect(() => {
    if (!cookie || cookie.value !== 'yes') {
      setIsModalOpen(true);
    }
  }, []);

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
