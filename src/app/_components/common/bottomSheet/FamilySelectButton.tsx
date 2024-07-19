import Profile from '@/app/_components/common/profile/Profile';
import { FamilyMakeType } from '@/type';

interface Props {
  familyData: FamilyMakeType;
}

export default function FamilySelectButton({ familyData }: Props) {
  return (
    <div className="flex pl-16 items-center justify-center gap-8 flex-shrink-0">
      <Profile size="small" profileImage={familyData.imageUrl} isFamilyProfile />
      <h3 className="text-18 text-black font-500">{familyData.familyName}</h3>
    </div>
  );
}
