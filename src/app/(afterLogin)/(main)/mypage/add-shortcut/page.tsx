import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';
import ModalBackground from '@/app/_components/common/modal/ModalBackground';

export default function AddShortCut() {
  return (
    <ModalBackground>
      <BottomSheet sheetType="home" />
    </ModalBackground>
  );
}
