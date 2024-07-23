'use client';

import ProfileMain from '@/app/(afterLogin)/(profile)/_components/ProfileMain';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { getCookies } from '@/app/_store/cookie/cookies';
import { useEffect, useState } from 'react';

export default function ProfileEditMain() {
  const [title, setTitle] = useState('');
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const groupId = getCookies('groupId');
        const { data } = await getData({ path: `${apiRoutes.getFamily}/${groupId}` });
        const { groupName, groupImage: images } = data;
        setTitle(groupName);
        setProfileImage(images);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return <ProfileMain profileImage={profileImage} value={title} inputType="familyEdit" />;
}
