import DefaultProfileImage from '@/assets/icons/profile/default.svg';
import Image from 'next/image';

interface Props {
  profileImage?: string;
  size: 'small' | 'large';
}

export default function Profile({ profileImage, size }: Props) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-primary ${size === 'small' ? 'w-[4rem] h-[4rem]' : 'w-[5rem] h-[5rem]'}`}
    >
      {profileImage ? (
        <Image src={profileImage} alt="프로필 이미지" fill />
      ) : (
        <DefaultProfileImage classNames={`${size === 'small' ? 'w-[3.2rem] h-[3.2rem]' : 'w-[4rem] h-[4rem]'}`} />
      )}
    </div>
  );
}
