import DefaultProfileImage from '@/app/_components/common/profile/DefaultProfileImage';
import DefaultFamilyImage from '@/assets/icons/profile/family_profile.svg';
import HouseholderIcon from '@/assets/icons/profile/householder.svg';
import { ProfileSize } from '@/type';
import classNames from 'classnames';
import Image from 'next/image';

interface Props {
  profileImage?: string;
  size: ProfileSize;
  isHouseholder?: boolean;
  isFamilyProfile?: boolean;
}

export default function Profile({ profileImage, size, isHouseholder, isFamilyProfile }: Props) {
  const sizeClass = classNames({
    'w-[4rem] h-[4rem]': size === 'small',
    'w-[5rem] h-[5rem]': size === 'large',
    'w-[8rem] h-[8rem]': size === 'xLarge',
  });

  const DefaultProfile = isFamilyProfile ? <DefaultFamilyImage /> : <DefaultProfileImage size={size} />;

  return (
    <div className={`flex flex-shrink-0 relative items-center justify-center rounded-full bg-primary ${sizeClass}`}>
      {profileImage ? (
        <Image
          src={profileImage}
          alt="프로필 이미지"
          fill
          sizes="40px"
          className={`rounded-full object-cover ${sizeClass}`}
        />
      ) : (
        DefaultProfile
      )}
      {isHouseholder && (
        <div className="absolute right-[-0.4rem] bottom-0">
          <HouseholderIcon />
        </div>
      )}
    </div>
  );
}
