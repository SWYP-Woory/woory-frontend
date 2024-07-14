import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export default function Layout({ children, modal }: Props) {
  return (
    <div className="relative min-h-[81.2rem] border-2 *:absolute">
      {children}
      {modal}
    </div>
  );
}
