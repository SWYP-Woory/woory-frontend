import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export default function Layout({ children, modal }: Props) {
  return (
    <div className="min-h-screen shadow-borderShadow">
      {children}
      {modal}
    </div>
  );
}
