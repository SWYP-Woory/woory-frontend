import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';
import ModalBackground from '@/app/_components/common/modal/ModalBackground';

export default function FamilySelectPage() {
  return (
    <ModalBackground>
      <BottomSheet sheetType="familySelect" />
    </ModalBackground>
  );
}
