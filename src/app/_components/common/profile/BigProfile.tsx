import Profile from '@/assets/images/default_profile.png';
import Logo from '@/assets/images/logo_woory_profile.png';
import Image from 'next/image';

interface Props {
  bigProfileImage: string | null;
  isProfile?: boolean;
}

export default function BigProfile({ bigProfileImage, isProfile }: Props) {
  const defaultImage = isProfile ? Profile : Logo;

  return (
    <div
      className={`flex relative items-center justify-center rounded-full bg-white w-160 h-160 ${bigProfileImage ? 'border-0' : 'border border-lightGrey'}`}
    >
      <Image
        src={bigProfileImage || defaultImage}
        alt="프로필 이미지"
        fill
        priority
        sizes="16rem"
        className="rounded-full object-cover"
      />
    </div>
  );
}
