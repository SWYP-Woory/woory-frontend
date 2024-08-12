import AddFamilySelectButton from '@/app/_components/common/bottomSheet/AddFamilySelectButton';
import FamilySelectButton from '@/app/_components/common/bottomSheet/FamilySelectButton';
import { FamilyMakeType } from '@/type';

interface Props {
  data?: FamilyMakeType;
  index?: number;
}

export default function FamilySelector({ data, index }: Props) {
  return (
    <div
      className={`relative flex items-center w-full h-[5.8rem] cursor-pointer ${index !== 4 ? 'border-lightGrey border-b' : 'border-0'} hover:bg-bgGrey active:bg-lightGrey`}
    >
      {data ? <FamilySelectButton familyData={data} /> : <AddFamilySelectButton />}
    </div>
  );
}
