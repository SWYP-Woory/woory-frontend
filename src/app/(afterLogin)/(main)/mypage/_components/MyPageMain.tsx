'use client';

import MyTitle from '@/app/(afterLogin)/(main)/mypage/_components/MyTitle';
import AccountSetting from '@/app/(afterLogin)/(main)/mypage/_components/account/AccountSetting';
// import AddHome from '@/app/(afterLogin)/(main)/mypage/_components/addHome/AddHome';
import FamilySetting from '@/app/(afterLogin)/(main)/mypage/_components/family/FamilySetting';
// import NotificationSetting from '@/app/(afterLogin)/(main)/mypage/_components/notification/NotificationSetting';
import ServiceInfo from '@/app/(afterLogin)/(main)/mypage/_components/service/ServiceInfo';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import Border from '@/app/_components/common/border/Border';
import Loading from '@/app/_components/common/loading/Loading';
import { getCookies } from '@/app/_store/cookie/cookies';
// import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';
// import ModalBackground from '@/app/_components/common/modal/ModalBackground';
// import { useModalStore } from '@/app/_store/modalStore';
import { AccountDeletionType, UserDataType } from '@/type';
import { useEffect, useState } from 'react';

const determineTargetType = (isLastMember: boolean, isHouseHolder: boolean): AccountDeletionType => {
  if (isLastMember) {
    return 'lastMember';
  }
  if (isHouseHolder) {
    return 'householder';
  }

  return 'member';
};

export default function MyPageMain() {
  const [userData, setUserData] = useState<UserDataType>();
  const [targetType, setTargetType] = useState<AccountDeletionType>('member');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const { isModalOpen, setIsModalOpen } = useModalStore();

  // const handleModal = () => {
  //   setIsModalOpen(true);
  // };

  useEffect(() => {
    if (userData) {
      const { isLastMember, isHouseHolder } = userData;
      setTargetType(determineTargetType(isLastMember, isHouseHolder));
    }
  }, [userData]);

  useEffect(() => {
    const fetchMyPage = async () => {
      try {
        setIsLoading(true);
        const groupId = getCookies('groupId');
        const data = await getData({ path: `${apiRoutes.getUserData}/${groupId}` });
        setUserData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMyPage();
  }, []);

  return (
    <div className="flex flex-col flex-grow">
      {isLoading ? (
        <Loading />
      ) : (
        userData && (
          <>
            <MyTitle name={userData.nickname} profileImage={userData.profileImgLink} />
            <Border />
            {/* <NotificationSetting notifications={DUMMY_DATA.notifications} /> */}
            <FamilySetting isHouseHolder={userData.isHouseHolder} />
            {/* <AddHome onClick={handleModal} /> */}
            <AccountSetting targetType={targetType} />
            <ServiceInfo />
            {/* {isModalOpen && (
              <ModalBackground>
                <BottomSheet sheetType="home" />
              </ModalBackground>
            )} */}
          </>
        )
      )}
    </div>
  );
}
