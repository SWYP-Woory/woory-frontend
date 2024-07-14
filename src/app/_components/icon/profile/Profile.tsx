import DefaultProfileImage from '@/app/_components/icon/profile/DefaultProfileImage';
import HouseholderIcon from '@/assets/icons/profile/householder.svg';
import Image from 'next/image';

interface Props {
  profileImage?: string;
  size: 'small' | 'large';
  isHouseholder?: boolean;
}

export default function Profile({ profileImage, size, isHouseholder }: Props) {
  return (
    <div
      className={`flex relative items-center justify-center rounded-full bg-primary ${size === 'small' ? 'w-[4rem] h-[4rem]' : 'w-[5rem] h-[5rem]'}`}
    >
      {profileImage ? (
        <Image
          src={profileImage}
          alt="프로필 이미지"
          fill
          sizes="40px"
          className={`rounded-full object-cover ${size === 'small' ? 'w-[4rem] h-[4rem]' : 'w-[5rem] h-[5rem]'}`}
        />
      ) : (
        <DefaultProfileImage size={size} />
      )}
      {isHouseholder && (
        <div className="z-10 absolute right-[-0.4rem] bottom-0">
          <HouseholderIcon />
        </div>
      )}
    </div>
  );
}
