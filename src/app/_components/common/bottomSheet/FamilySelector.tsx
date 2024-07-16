import AddFamily from '@/assets/icons/addButton/add-family.svg';
import { FamilyMakeType } from '@/type';

interface Props {
  familyData?: FamilyMakeType;
}

function AddFamilySelect() {
  return (
    <>
      <AddFamily />
      <h3 className="text-18 text-primary font-500">새로운 가족 만들기</h3>
    </>
  );
}

export default function FamilySelector({ familyData }: Props) {
  return (
    <div className="relative flex left-16 items-center w-full h-[5.8rem] gap-8">
      {familyData ? <AddFamilySelect /> : <AddFamilySelect />}
    </div>
  );
}
