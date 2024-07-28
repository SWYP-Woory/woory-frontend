'use client';

import Main from '@/app/(beforeLogin)/_components/Main';
import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';
import { useToastStore } from '@/app/_store/toastStore';
import { openToast } from '@/utils/Toast';
import { useEffect } from 'react';

export default function FamilySelectMain() {
  const { isOpenToast, toastText, resetToast } = useToastStore();

  useEffect(() => {
    if (isOpenToast) {
      openToast('error', toastText);
      resetToast();
    }
  }, []);

  return (
    <>
      <Main />
      <BottomSheet sheetType="familySelect" />
    </>
  );
}
