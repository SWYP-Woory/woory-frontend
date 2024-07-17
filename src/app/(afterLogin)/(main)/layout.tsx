import BottomMenuBar from '@/app/_components/common/bottomMenuBar/BottomMenuBar';
import NotificationHeader from '@/app/_components/common/header/NotificationHeader';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <NotificationHeader />
      {children}
      <BottomMenuBar />
    </>
  );
}
