'use client';

import MemberAdd from '@/app/(afterLogin)/(main)/members/_components/MemberAdd';
import MemberProfile from '@/app/(afterLogin)/(main)/members/_components/MemberProfile';
import MyProfile from '@/app/(afterLogin)/(main)/members/_components/MyProfile';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { getCookies } from '@/app/_store/cookie/cookies';
import { MemberType, MembersDataType } from '@/type';
import { openToast } from '@/utils/Toast';
import { useEffect, useState } from 'react';

const defaultUser: MemberType = {
  userId: -1,
  userName: '',
  isHouseholder: false,
  profileUrl: '',
};

export default function MemberMain() {
  const [membersData, setMembersData] = useState<MembersDataType>();

  const handleMemberAdd = () => {
    openToast('link');
  };

  useEffect(() => {
    const groupId = getCookies('groupId');
    const getMembers = async () => {
      try {
        const res = await getData({ path: `${apiRoutes.getMembers}/${groupId}` });
        setMembersData(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    getMembers();
  }, []);

  return (
    <div className="flex-grow">
      <MyProfile data={membersData?.user || defaultUser} />
      <MemberAdd onClick={handleMemberAdd} />
      {membersData?.members.map((member) => (
        <MemberProfile
          key={member.userId}
          userId={member.userId}
          profileUrl={member.profileUrl}
          userName={member.userName}
          isHouseholder={member.isHouseholder}
          canDelete={membersData?.user.isHouseholder}
        />
      ))}
    </div>
  );
}
