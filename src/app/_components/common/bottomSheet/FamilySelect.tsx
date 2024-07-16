import FamilySelector from '@/app/_components/common/bottomSheet/FamilySelector';
import { FamilyMakeType } from '@/type';

interface Props {
  data?: FamilyMakeType[];
}

export default function FamilySelect({ data }: Props) {
  return (
    <div className="absolute top-[4.8rem] w-full flex flex-col">
      {data ? data.map((item) => <FamilySelector key={item.id} />) : <FamilySelector />}
    </div>
  );
}
