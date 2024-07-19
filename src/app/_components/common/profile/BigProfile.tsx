import Profile from '@/assets/images/default_profile.png';
import Logo from '@/assets/images/logo_woory_profile.png';
import { InputTextType } from '@/type';
import Image from 'next/image';

interface Props {
  bigProfileImage?: string | null;
  inputType: InputTextType;
}

export default function BigProfile({ bigProfileImage, inputType }: Props) {
  const defaultImage = inputType.includes('profile') ? Profile : Logo;

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
