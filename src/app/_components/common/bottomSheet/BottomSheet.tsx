'use client';

import ModalBorder from '@/app/_components/common/border/ModalBorder';
import FamilySelect from '@/app/_components/common/bottomSheet/FamilySelect';
import ServiceInquiry from '@/app/_components/common/bottomSheet/ServiceInquiry';
import ModalBackground from '@/app/_components/common/modal/ModalBackground';
import { useModalClosed } from '@/app/_hooks/useModal';
import { BottomSheetType } from '@/type';
import { usePathname } from 'next/navigation';

interface Props {
  sheetType: BottomSheetType;
  onClose: () => void;
}

function BottomSheetByType({ sheetType, onClose }: Props) {
  switch (sheetType) {
    case 'inquiry':
      return <ServiceInquiry onClose={onClose} />;
    case 'familySelect':
      return <FamilySelect />;
    default:
      return null;
  }
}

export default function BottomSheet({ sheetType }: Omit<Props, 'onClose'>) {
  const { isClosed, handleClose } = useModalClosed();
  const pathName = usePathname();

  const onCloseHandler = pathName.includes('/mypage') ? handleClose : undefined;

  return (
    <ModalBackground isClosed={isClosed} onClose={onCloseHandler}>
      <div
        className={`fixed bottom-0 justify-center items-center w-[37.5rem] h-[34.1rem] bg-white rounded-t-[4rem] ${isClosed ? 'bottomSheet-slide-down' : 'bottomSheet-slide-up'}`}
      >
        <ModalBorder />
        <BottomSheetByType sheetType={sheetType} onClose={handleClose} />
      </div>
    </ModalBackground>
  );
}
