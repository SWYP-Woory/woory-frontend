'use client';

import Profile from '@/app/_components/common/profile/Profile';
import { FamilyMakeType } from '@/type';
import { getCalendarTime } from '@/utils/getTime';
import { useRouter } from 'next/navigation';

interface Props {
  familyData: FamilyMakeType;
}

export default function FamilySelectButton({ familyData }: Props) {
  const router = useRouter();
  const date = getCalendarTime(new Date());

  const handleFamilySelect = () => {
    router.push(`/home/${familyData.groupId}/daily/${date}`);
    localStorage.setItem('groupId', familyData.groupId.toString());
  };

  return (
    <button type="button" onClick={handleFamilySelect}>
      <div className="flex pl-16 items-center justify-center gap-8 flex-shrink-0">
        <Profile size="small" profileImage={familyData.groupImage} isFamilyProfile />
        <h3 className="text-18 text-black font-500">{familyData.groupName}</h3>
      </div>
    </button>
  );
}
