import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <div className="min-h-screen flex flex-col justify-between bg-white">{children}</div>;
}
