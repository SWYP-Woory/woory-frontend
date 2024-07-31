import ModalBorder from '@/app/_components/common/border/ModalBorder';
import FamilySelect from '@/app/_components/common/bottomSheet/FamilySelect';
import ServiceInquiry from '@/app/_components/common/bottomSheet/ServiceInquiry';
import { BottomSheetType } from '@/type';

interface Props {
  sheetType: BottomSheetType;
}

function BottomSheetByType({ sheetType }: Props) {
  switch (sheetType) {
    case 'inquiry':
      return <ServiceInquiry />;
    case 'familySelect':
      return <FamilySelect />;
    default:
      return null;
  }
}

export default function BottomSheet({ sheetType }: Props) {
  return (
    <div className="fixed bottom-0 justify-center items-center w-[37.5rem] h-[34.1rem] bg-white rounded-t-[4rem]">
      <ModalBorder />
      <BottomSheetByType sheetType={sheetType} />
    </div>
  );
}
