import Logo from '@/assets/images/logo_woory_profile.jpeg';
import Image from 'next/image';

interface Props {
  familyProfileImage?: string;
}

export default function FamilyProfile({ familyProfileImage }: Props) {
  return (
    <div
      className={`flex relative items-center justify-center rounded-full bg-white w-160 h-160 ${familyProfileImage ? 'border-0' : 'border-[1px] border-lightGrey'}`}
    >
      <Image
        src={familyProfileImage || Logo}
        alt="프로필 이미지"
        fill
        sizes="16rem"
        className="rounded-full object-cover"
      />
    </div>
  );
}
