import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <div className="min-h-screen flex flex-col relative bg-white shadow-borderShadow">{children}</div>;
}
