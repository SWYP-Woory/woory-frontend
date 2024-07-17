import DefaultProfileImage from '@/app/_components/common/profile/DefaultProfileImage';
import HouseholderIcon from '@/assets/icons/profile/householder.svg';
import classNames from 'classnames';
import Image from 'next/image';

interface Props {
  profileImage?: string;
  size: 'small' | 'large' | 'xLarge';
  isHouseholder?: boolean;
}

export default function Profile({ profileImage, size, isHouseholder }: Props) {
  const sizeClass = classNames({
    'w-[4rem] h-[4rem]': size === 'small',
    'w-[5rem] h-[5rem]': size === 'large',
    'w-[8rem] h-[8rem]': size === 'xLarge',
  });

  return (
    <div className={`flex relative items-center justify-center rounded-full bg-primary ${sizeClass}`}>
      {profileImage ? (
        <Image
          src={profileImage}
          alt="프로필 이미지"
          fill
          sizes="40px"
          className={`rounded-full object-cover ${sizeClass}`}
        />
      ) : (
        <DefaultProfileImage size={size} />
      )}
      {isHouseholder && (
        <div className="absolute right-[-0.4rem] bottom-0">
          <HouseholderIcon />
        </div>
      )}
    </div>
  );
}
