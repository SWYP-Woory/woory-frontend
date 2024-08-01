import { ReactNode } from 'react';

interface Props {
  isClosed?: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

export default function ModalBackground({ isClosed, children, onClose }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center modal-background ${isClosed ? 'modal-background-fade-out' : 'modal-background-fade-In'} z-20`}
      onClick={handleClick}
      role="presentation"
    >
      {children}
    </div>
  );
}
