'use client';

import ProfileMain from '@/app/(afterLogin)/(profile)/_components/ProfileMain';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import Loading from '@/app/_components/common/loading/Loading';
import { getCookies } from '@/app/_store/cookie/cookies';
import { useEffect, useState } from 'react';

export default function FamilyProfileEditMain() {
  const [title, setTitle] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const groupId = getCookies('groupId');
        const { data } = await getData({ path: `${apiRoutes.getFamily}/${groupId}` });
        const { groupName, groupImage: images } = data;
        setTitle(groupName);
        setProfileImage(images);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return isLoading ? <Loading /> : <ProfileMain profileImage={profileImage} value={title} inputType="familyEdit" />;
}
