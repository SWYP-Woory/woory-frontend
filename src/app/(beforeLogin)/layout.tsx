import { Metadata } from 'next';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export const metadata: Metadata = {
  title: '로그인',
  description: '로그인',
};

export default function Layout({ children, modal }: Props) {
  return (
    <div className="min-h-screen shadow-borderShadow">
      {children}
      {modal}
    </div>
  );
}
