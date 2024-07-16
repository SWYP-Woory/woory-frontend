import ModalBackground from '@/app/(beforeLogin)/_components/modal/ModalBackground';
import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';

export default function FamilySelectPage() {
  return (
    <ModalBackground>
      <BottomSheet sheetType="familySelect" />
    </ModalBackground>
  );
}
