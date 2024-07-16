import AddFamilySelectButton from '@/app/_components/common/bottomSheet/AddFamilySelectButton';
import FamilySelectButton from '@/app/_components/common/bottomSheet/FamilySelectButton';
import { FamilyMakeType } from '@/type';

interface Props {
  familyData?: FamilyMakeType;
}

export default function FamilySelector({ familyData }: Props) {
  return (
    <div className="relative flex items-center w-full h-[5.8rem] cursor-pointer border-b-lightGrey">
      {familyData ? <FamilySelectButton familyData={familyData} /> : <AddFamilySelectButton />}
    </div>
  );
}
