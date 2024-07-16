import ModalBorder from '@/app/_components/common/border/ModalBorder';
import HomeShortcut from '@/app/_components/common/bottomSheet/HomeShortcut';
import ServiceInquiry from '@/app/_components/common/bottomSheet/ServiceInquiry';
import { BottomSheetType } from '@/type';

interface Props {
  sheetType: BottomSheetType;
}

function BottomSheetByType({ sheetType }: Props) {
  switch (sheetType) {
    case 'home':
      return <HomeShortcut />;
    case 'inquiry':
      return <ServiceInquiry />;
    case 'familySelect':
      return null;
    default:
      return null;
  }
}

export default function BottomSheet({ sheetType }: Props) {
  return (
    <div className="relative justify-center items-center w-[37.5rem] h-[34.1rem] bg-white rounded-t-[4rem]">
      <ModalBorder />
      <BottomSheetByType sheetType={sheetType} />
    </div>
  );
}
