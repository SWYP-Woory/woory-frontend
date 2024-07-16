import Profile from '@/app/_components/icon/profile/Profile';
import { FamilyMakeType } from '@/type';

interface Props {
  familyData: FamilyMakeType;
}

export default function FamilySelectButton({ familyData }: Props) {
  return (
    <>
      <Profile size="small" profileImage={familyData.imageUrl} />
      <h3 className="text-18 text-black font-500">{familyData.familyName}</h3>
    </>
  );
}
