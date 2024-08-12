import { Metadata } from 'next';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export const metadata: Metadata = {
  title: '마이페이지',
  description: '마이페이지',
};

export default function Layout({ children, modal }: Props) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
