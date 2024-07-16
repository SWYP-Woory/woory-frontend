import ModalBorder from '@/app/_components/common/border/ModalBorder';
import FamilySelect from '@/app/_components/common/bottomSheet/FamilySelect';
import HomeShortcut from '@/app/_components/common/bottomSheet/HomeShortcut';
import ServiceInquiry from '@/app/_components/common/bottomSheet/ServiceInquiry';
import { BottomSheetType, FamilyMakeType } from '@/type';

interface Props {
  sheetType: BottomSheetType;
  familyData?: FamilyMakeType[];
}

function BottomSheetByType({ sheetType, familyData }: Props) {
  switch (sheetType) {
    case 'home':
      return <HomeShortcut />;
    case 'inquiry':
      return <ServiceInquiry />;
    case 'familySelect':
      return <FamilySelect data={familyData} />;
    default:
      return null;
  }
}

export default function BottomSheet({ sheetType, familyData }: Props) {
  return (
    <div className="fixed bottom-0 justify-center items-center w-[37.5rem] h-[34.1rem] bg-white rounded-t-[4rem]">
      <ModalBorder />
      <BottomSheetByType sheetType={sheetType} familyData={familyData} />
    </div>
  );
}
