import DailyView from '@/app/(afterLogin)/(main)/home/daily/_components/DailyView';
import PostButton from '@/app/(afterLogin)/(main)/home/daily/_components/PostButton';
// import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';
// import ModalBackground from '@/app/_components/common/modal/ModalBackground';
import UpperTabBar from '@/app/_components/common/upperTabBar/UpperTabBar';

// import { getCookies } from '@/app/_store/cookie/cookies';
// import { useModalStore } from '@/app/_store/modalStore';
// import { useEffect } from 'react';

export default function DailyMain() {
  // const { isModalOpen, setIsModalOpen } = useModalStore();
  // const cookie = getCookies('add_home');

  // useEffect(() => {
  //   if (!cookie) {
  //     setIsModalOpen(true);
  //   }
  // }, [cookie, setIsModalOpen]);

  return (
    <>
      <div className="mt-8 mx-16">
        <UpperTabBar />
      </div>
      <div className="flex flex-col flex-grow mt-24">
        <DailyView />
      </div>
      <PostButton />
      {/* {isModalOpen && (
        <ModalBackground>
          <BottomSheet sheetType="home" />
        </ModalBackground>
      )} */}
    </>
  );
}
