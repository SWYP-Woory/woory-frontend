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
import { FadeLoader } from 'react-spinners';

const defaultUser: MemberType = {
  userId: -1,
  userName: '',
  isHouseholder: false,
  profileUrl: '',
};

export default function MemberMain() {
  const [membersData, setMembersData] = useState<MembersDataType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleMemberAdd = () => {
    openToast('link');
  };

  const fetchMembers = async () => {
    try {
      setIsLoading(true);
      const groupId = getCookies('groupId');
      const { data } = await getData({ path: `${apiRoutes.getMembers}/${groupId}` });
      setMembersData(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="flex flex-col flex-grow">
      {isLoading ? (
        <div className="flex justify-center items-center flex-grow">
          <FadeLoader color="#1EA49A" />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
