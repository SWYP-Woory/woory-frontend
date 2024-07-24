'use client';

import ProfileMain from '@/app/(afterLogin)/(profile)/_components/ProfileMain';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import Loading from '@/app/_components/common/loading/Loading';
import { useEffect, useState } from 'react';

export default function UserProfileEditMain() {
  const [title, setTitle] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getData({ path: `${apiRoutes.getUserData}` });
        const { nickname, profileImgLink: images } = data;
        setTitle(nickname);
        setProfileImage(images);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return isLoading ? <Loading /> : <ProfileMain profileImage={profileImage} value={title} inputType="profile" />;
}
