import { Metadata } from 'next';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export const metadata: Metadata = {
  title: '가족 관리',
  description: '가족 관리',
};

export default function Layout({ children, modal }: Props) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
