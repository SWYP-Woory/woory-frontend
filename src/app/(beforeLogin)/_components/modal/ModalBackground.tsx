import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export default function ModalBackground({ children }: Props) {
  return <div className="fixed inset-0 flex items-center justify-center bg-modalBackground z-20">{children}</div>;
}
