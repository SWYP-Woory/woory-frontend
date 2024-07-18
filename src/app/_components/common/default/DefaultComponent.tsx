'use client';

import MemberMain from '@/app/(afterLogin)/(main)/members/_components/MemberMain';
import MyPageMain from '@/app/(afterLogin)/(main)/mypage/_components/MyPageMain';
import { usePathname } from 'next/navigation';

export default function DefaultComponent() {
  const pathName = usePathname();

  if (pathName.includes('/mypage')) {
    return <MyPageMain />;
  }
  if (pathName.includes('/member')) {
    return <MemberMain />;
  }
  return null;
}
