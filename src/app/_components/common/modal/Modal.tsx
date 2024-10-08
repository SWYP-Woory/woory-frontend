'use client';

import PopUpButton from '@/app/_components/common/button/PopUpButton';
import ModalBackground from '@/app/_components/common/modal/ModalBackground';
import { useModalClosed } from '@/app/_hooks/useModal';

interface Props {
  title: string;
  content: string;
  buttonText: string;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onExecute: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isSmall?: boolean;
}

export default function Modal({ title, content, buttonText, onCancel, onExecute, isSmall }: Props) {
  const { isClosed, handleClose } = useModalClosed();
  return (
    <ModalBackground isClosed={isClosed}>
      <div
        className={`flex flex-col items-center justify-evenly w-[31.1rem] bg-white rounded-[2.0rem] transform transition-transform duration-300 ${!isClosed ? 'fade-in' : 'fade-out'} ${isSmall ? 'h-[21.0rem]' : 'h-[32.0rem]'}`}
      >
        <div className="font-title">{title}</div>
        <div className="flex items-center justify-center w-[25.4rem]  font-body text-midGrey  text-center whitespace-pre-wrap">
          {content}
        </div>
        <div className="flex gap-[1.0rem]">
          <PopUpButton
            text="취소"
            textColor="midGrey"
            colorType="bgGrey"
            size="small"
            onClick={onCancel || handleClose}
          />
          <PopUpButton text={buttonText} textColor="white" colorType="primary" size="small" onClick={onExecute} />
        </div>
      </div>
    </ModalBackground>
  );
}
