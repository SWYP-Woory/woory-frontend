'use client';

import PopUpButton from '@/app/_components/common/button/PopUpButton';
import { deleteCookies, getCookies, setCookies } from '@/app/_store/cookie/cookies';
import { useModalStore } from '@/app/_store/modalStore';
import Logo from '@/assets/icons/logo/logo_woory.svg';
import { openToast } from '@/utils/Toast';
import { useEffect, useState } from 'react';

// `beforeinstallprompt` 이벤트의 타입 정의
interface BeforeInstallPromptEvent extends Event {
  readonly prompt: () => Promise<void>;
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function HomeShortcut() {
  const { setIsModalOpen } = useModalStore();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleCancelClick = () => {
    if (getCookies('add_home')) {
      deleteCookies('add_home');
    }
    setCookies('add_home', 'no');
    setDeferredPrompt(null);
    setIsModalOpen(false);
  };

  const handleAddClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        openToast('shortcut');
      } else {
        console.log('User dismissed the install prompt');
      }
      setDeferredPrompt(null);
    }

    if (getCookies('add_home')) {
      deleteCookies('add_home');
    }
    setCookies('add_home', 'yes');
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="absolute top-[5.6rem] left-[10.8rem] px-[0.8rem] py-[1.1rem]">
        <Logo width="14.4rem" height="5.8rem" />
      </div>
      <div className="absolute top-[15.2rem] left-[5.5rem] h-[6.4rem]">
        <h2 className="text-[2.2rem] font-700 text-black text-center">
          &apos;우리&apos; 바로가기를
          <br /> 홈 화면에 추가하시겠습니까?
        </h2>
      </div>
      <div className="absolute bottom-[3.2rem] left-[2rem] flex gap-[1rem]">
        <PopUpButton text="취소" textColor="midGrey" colorType="lightGrey" size="large" onClick={handleCancelClick} />
        <PopUpButton text="추가" textColor="white" colorType="primary" size="large" onClick={handleAddClick} />
      </div>
    </>
  );
}
