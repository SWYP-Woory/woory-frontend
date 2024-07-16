import MemberDeleteIcon from '@/app/_components/icon/delete/MemberDeleteIcon';
import Profile from '@/app/_components/icon/profile/Profile';
import { MemberType } from '@/type';

interface Props extends MemberType {
  canDelete?: boolean;
}

export default function MemberProfile({ profileImage, name, isHouseholder, canDelete }: Props) {
  return (
    <div className="flex justify-between items-center p-16 bg-white">
      <div className="flex items-center gap-8">
        <Profile profileImage={profileImage} size="large" isHouseholder={isHouseholder} />
        <div className="font-body font-600">{name}</div>
      </div>
      {canDelete && (
        <button type="button" aria-label="delete">
          <MemberDeleteIcon />
        </button>
      )}
    </div>
  );
}
