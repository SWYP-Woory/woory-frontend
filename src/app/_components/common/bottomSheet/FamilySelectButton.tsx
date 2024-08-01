'use client';

import Profile from '@/app/_components/common/profile/Profile';
import { deleteCookies, getCookies, setCookies } from '@/app/_store/cookie/cookies';
import FamilySelectIcon from '@/assets/icons/profile/family-select-profile.svg';
import { FamilyMakeType } from '@/type';
import { useRouter } from 'next/navigation';

interface Props {
  familyData: FamilyMakeType;
}

export default function FamilySelectButton({ familyData }: Props) {
  const router = useRouter();

  const handleFamilySelect = () => {
    if (getCookies('groupId')) {
      deleteCookies('groupId');
    }
    setCookies('groupId', familyData.groupId, { path: '/' });
    router.push(`/home/daily`);
  };

  return (
    <button type="button" onClick={handleFamilySelect}>
      <div className="flex pl-16 items-center justify-center gap-8 flex-shrink-0">
        <Profile size="small" profileImage={familyData.groupImage} isFamilyProfile />
        <h3 className="text-18 text-black font-500">{familyData.groupName}</h3>
      </div>
      <FamilySelectIcon className="absolute top-16 right-16" />
    </button>
  );
}
