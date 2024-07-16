import FamilySelector from '@/app/_components/common/bottomSheet/FamilySelector';
import { FamilyMakeType } from '@/type';

interface Props {
  data?: FamilyMakeType[];
}

export default function FamilySelect({ data }: Props) {
  return (
    <div className="absolute top-[4.8rem] w-full flex flex-col">
      {data?.map((familyData, index) => <FamilySelector key={familyData.id} index={index} familyData={familyData} />)}
      {!data || (data && data.length < 5) ? <FamilySelector index={data?.length} /> : null}
    </div>
  );
}
