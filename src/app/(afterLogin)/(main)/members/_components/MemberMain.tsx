'use client';

import MemberAdd from '@/app/(afterLogin)/(main)/members/_components/MemberAdd';
import MemberProfile from '@/app/(afterLogin)/(main)/members/_components/MemberProfile';
import MyProfile from '@/app/(afterLogin)/(main)/members/_components/MyProfile';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { getCookies } from '@/app/_store/cookie/cookies';
import { MemberType, MembersDataType } from '@/type';
import { openToast } from '@/utils/Toast';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const defaultUser: MemberType = {
  userId: -1,
  userName: '',
  isHouseholder: false,
  profileUrl: '',
};

export default function MemberMain() {
  const [membersData, setMembersData] = useState<MembersDataType>();
  const router = useRouter();

  const handleMemberAdd = () => {
    const baseUrl = window.location.origin;
    const groupId = getCookies('groupId');

    const url = new URL(`${baseUrl}/home/daily`);
    url.searchParams.set('inviteGroupId', groupId);

    navigator.clipboard
      .writeText(url.toString())
      .then(() => {
        openToast('link');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const fetchMembers = async () => {
    try {
      const groupId = getCookies('groupId');
      const { data, status } = await getData({ path: `${apiRoutes.getMembers}/${groupId}` });

      if (status === 404) {
        router.replace('/not-found');
      }

      setMembersData(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="flex flex-col flex-grow">
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
          fetchMembers={fetchMembers}
        />
      ))}
    </div>
  );
}
