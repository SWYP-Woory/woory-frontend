'use client';

import MyTitle from '@/app/(afterLogin)/mypage/_components/MyTitle';
import AccountSetting from '@/app/(afterLogin)/mypage/_components/account/AccountSetting';
import AddHome from '@/app/(afterLogin)/mypage/_components/addHome/AddHome';
import FamilySetting from '@/app/(afterLogin)/mypage/_components/family/FamilySetting';
import NotificationSetting from '@/app/(afterLogin)/mypage/_components/notification/NotificationSetting';
import ServiceInfo from '@/app/(afterLogin)/mypage/_components/service/ServiceInfo';
import Border from '@/app/_components/common/border/Border';
import BottomMenuBar from '@/app/_components/common/bottomMenuBar/BottomMenuBar';
import NotificationHeader from '@/app/_components/common/header/NotificationHeader';
import ToastPopUp from '@/app/_components/popup/ToastPopUp';
import { ModalTypeMap } from '@/app/_constants/modal';
import { useEffect, useState } from 'react';

const DUMMY_DATA = {
  name: '아들',
  profileImage: '',
  isHouseholder: false,
  isLastMember: true,
  notifications: {
    topic: true,
    post: false,
    reaction: true,
  },
};

export default function MyPageMain() {
  const { isLastMember, isHouseholder } = DUMMY_DATA;
  const [isClicked, setIsClicked] = useState<boolean>(false);

  let targetType: keyof ModalTypeMap = 'member';
  if (isLastMember) {
    targetType = 'lastMember';
  } else if (isHouseholder) {
    targetType = 'householder';
  }

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsClicked(false);
      }, 1500);
    }
  }, [isClicked]);

  return (
    <>
      <NotificationHeader title="마이 페이지" />
      <MyTitle name={DUMMY_DATA.name} profileImage={DUMMY_DATA.profileImage} />
      <Border />
      <NotificationSetting notifications={DUMMY_DATA.notifications} />
      <FamilySetting isHouseholder={DUMMY_DATA.isHouseholder} />
      <AddHome onClick={handleClick} />
      <AccountSetting targetType={targetType} />
      <ServiceInfo />
      {isClicked && <ToastPopUp />}
      <BottomMenuBar />
    </>
  );
}
