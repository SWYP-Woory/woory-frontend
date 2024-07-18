'use client';

import MyTitle from '@/app/(afterLogin)/(main)/mypage/_components/MyTitle';
import AccountSetting from '@/app/(afterLogin)/(main)/mypage/_components/account/AccountSetting';
import AddHome from '@/app/(afterLogin)/(main)/mypage/_components/addHome/AddHome';
import FamilySetting from '@/app/(afterLogin)/(main)/mypage/_components/family/FamilySetting';
import NotificationSetting from '@/app/(afterLogin)/(main)/mypage/_components/notification/NotificationSetting';
import ServiceInfo from '@/app/(afterLogin)/(main)/mypage/_components/service/ServiceInfo';
import Border from '@/app/_components/common/border/Border';
import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';
import ModalBackground from '@/app/_components/common/modal/ModalBackground';
import ToastPopUp from '@/app/_components/common/popup/ToastPopUp';
import { useToast } from '@/app/_hooks/useToast';
import { useModalStore } from '@/app/_store/modalStore';
import { AccountDeletionType } from '@/type';

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

const determineTargetType = (isLastMember: boolean, isHouseholder: boolean): AccountDeletionType => {
  if (isLastMember) {
    return 'lastMember';
  }
  if (isHouseholder) {
    return 'householder';
  }

  return 'member';
};
export default function MyPageMain() {
  const { isLastMember, isHouseholder } = DUMMY_DATA;
  const { isModalOpen, setIsModalOpen } = useModalStore();
  const { isToastFloating } = useToast();
  const targetType = determineTargetType(isLastMember, isHouseholder);

  const handleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col flex-grow">
      <MyTitle name={DUMMY_DATA.name} profileImage={DUMMY_DATA.profileImage} />
      <Border />
      <NotificationSetting notifications={DUMMY_DATA.notifications} />
      <FamilySetting isHouseholder={DUMMY_DATA.isHouseholder} />
      <AddHome onClick={handleModal} />
      <AccountSetting targetType={targetType} />
      <ServiceInfo />
      {isModalOpen && (
        <ModalBackground>
          <BottomSheet sheetType="home" />
        </ModalBackground>
      )}
      {isToastFloating && <ToastPopUp type="shortcut" />}
    </div>
  );
}
