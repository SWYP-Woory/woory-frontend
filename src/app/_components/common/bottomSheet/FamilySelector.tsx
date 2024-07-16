import AddFamilySelectButton from '@/app/_components/common/bottomSheet/AddFamilySelectButton';
import FamilySelectButton from '@/app/_components/common/bottomSheet/FamilySelectButton';
import { FamilyMakeType } from '@/type';

interface Props {
  familyData?: FamilyMakeType;
  index?: number;
}

export default function FamilySelector({ familyData, index }: Props) {
  return (
    <div
      className={`relative flex items-center w-full h-[5.8rem] cursor-pointer ${index !== 4 ? 'border-lightGrey border-b' : 'border-0'}`}
    >
      {familyData ? <FamilySelectButton familyData={familyData} /> : <AddFamilySelectButton />}
    </div>
  );
}
