'use client';

import MyTitle from '@/app/(afterLogin)/(main)/mypage/_components/MyTitle';
import AccountSetting from '@/app/(afterLogin)/(main)/mypage/_components/account/AccountSetting';
import AddHome from '@/app/(afterLogin)/(main)/mypage/_components/addHome/AddHome';
import FamilySetting from '@/app/(afterLogin)/(main)/mypage/_components/family/FamilySetting';
import NotificationSetting from '@/app/(afterLogin)/(main)/mypage/_components/notification/NotificationSetting';
import ServiceInfo from '@/app/(afterLogin)/(main)/mypage/_components/service/ServiceInfo';
import Border from '@/app/_components/common/border/Border';
import ToastPopUp from '@/app/_components/common/popup/ToastPopUp';
import { ModalTypeMap } from '@/app/_constants/modal';
import { useClickToast } from '@/app/_hooks/useClickToast';

const DUMMY_DATA = {
  name: '아들',
  profileImage: '',
  isHouseholder: true,
  isLastMember: false,
  notifications: {
    topic: true,
    post: false,
    reaction: true,
  },
};

export default function MyPageMain() {
  const { isLastMember, isHouseholder } = DUMMY_DATA;
  const { isClicked, handleClick } = useClickToast(1500);

  let targetType: keyof ModalTypeMap = 'member';
  if (isLastMember) {
    targetType = 'lastMember';
  } else if (isHouseholder) {
    targetType = 'householder';
  }

  return (
    <div className="flex flex-col flex-grow">
      <MyTitle name={DUMMY_DATA.name} profileImage={DUMMY_DATA.profileImage} />
      <Border />
      <NotificationSetting notifications={DUMMY_DATA.notifications} />
      <FamilySetting isHouseholder={DUMMY_DATA.isHouseholder} />
      <AddHome onClick={handleClick} />
      <AccountSetting targetType={targetType} />
      <ServiceInfo />
      {isClicked && <ToastPopUp />}
    </div>
  );
}
