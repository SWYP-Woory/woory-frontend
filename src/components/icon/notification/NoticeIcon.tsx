'use client';

import ActiveNotice from '@/assets/icons/notification/activeNotice.svg';
import Notice from '@/assets/icons/notification/notice.svg';
import { useState } from 'react';

export default function NoticeIcon() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return isActive ? (
    <ActiveNotice width="2.4rem" height="2.4rem" onClick={handleClick} />
  ) : (
    <Notice width="2.4rem" height="2.4rem" onClick={handleClick} />
  );
}
