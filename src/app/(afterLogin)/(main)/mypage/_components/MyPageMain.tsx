'use client';

import MyTitle from '@/app/(afterLogin)/(main)/mypage/_components/MyTitle';
import AccountSetting from '@/app/(afterLogin)/(main)/mypage/_components/account/AccountSetting';
import FamilySetting from '@/app/(afterLogin)/(main)/mypage/_components/family/FamilySetting';
// import NotificationSetting from '@/app/(afterLogin)/(main)/mypage/_components/notification/NotificationSetting';
import ServiceInfo from '@/app/(afterLogin)/(main)/mypage/_components/service/ServiceInfo';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import Border from '@/app/_components/common/border/Border';
import { deleteCookies, getCookies } from '@/app/_store/cookie/cookies';
import { AccountDeletionType, UserDataType } from '@/type';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
  const [userData, setUserData] = useState<UserDataType>();
  const [targetType, setTargetType] = useState<AccountDeletionType>('member');
  const router = useRouter();

  useEffect(() => {
    if (userData) {
      const { isLastMember, isHouseholder } = userData;
      setTargetType(determineTargetType(isLastMember, isHouseholder));
    }
  }, [userData]);

  useEffect(() => {
    const fetchMyPage = async () => {
      try {
        const groupId = getCookies('groupId');
        if (!groupId) {
          router.replace('/not-found');
        }
        const { data, status } = await getData({ path: `${apiRoutes.getUserData}/${groupId}` });
        if (status === 404) {
          deleteCookies('groupId');
          router.replace('/not-found');
        }
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMyPage();
  }, []);

  return (
    <div className="flex flex-col flex-grow">
      {userData && (
        <>
          <MyTitle name={userData.nickname} profileImage={userData.profileImgLink} />
          <Border />
          {/* <NotificationSetting notifications={DUMMY_DATA.notifications} /> */}
          <FamilySetting isHouseholder={userData.isHouseholder} />
          <AccountSetting targetType={targetType} />
          <ServiceInfo />
        </>
      )}
    </div>
  );
}
