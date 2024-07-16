import AddFamilySelectButton from '@/app/_components/common/bottomSheet/AddFamilySelectButton';
import FamilySelectButton from '@/app/_components/common/bottomSheet/FamilySelectButton';
import { FamilyMakeType } from '@/type';

interface Props {
  familyData?: FamilyMakeType;
}

export default function FamilySelector({ familyData }: Props) {
  return (
    <div className="relative flex left-16 items-center w-full h-[5.8rem] gap-8 cursor-pointer">
      {familyData ? <FamilySelectButton familyData={familyData} /> : <AddFamilySelectButton />}
    </div>
  );
}
