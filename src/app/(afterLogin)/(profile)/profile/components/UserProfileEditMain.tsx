'use client';

import ProfileMain from '@/app/(afterLogin)/(profile)/_components/ProfileMain';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { useEffect, useState } from 'react';

export default function UserProfileEditMain() {
  const [title, setTitle] = useState('');
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getData({ path: `${apiRoutes.getUserData}` });
        const { nickName, profileImgLink: images } = data;
        setTitle(nickName);
        setProfileImage(images);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return <ProfileMain profileImage={profileImage} value={title} inputType="profile" />;
}
