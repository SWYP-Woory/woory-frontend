'use client';

import OptionTitle from '@/app/(afterLogin)/(main)/mypage/_components/OptionTitle';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import SettingIcon from '@/assets/icons/setting/setting.svg';
import { AccountDeletionType } from '@/type';
import Link from 'next/link';

interface Props {
  targetType: AccountDeletionType;
}

export default function AccountSetting({ targetType }: Props) {
  const handleLogout = async () => {
    try {
      await getData({ path: apiRoutes.UserLogout });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="border-bgGrey border-b">
      <OptionTitle icon={<SettingIcon />} title="계정 관리" />
      <button type="button" aria-label="logout" className="setting-button" onClick={handleLogout}>
        로그아웃
      </button>
      <Link href={{ pathname: '/mypage/account-deletion', query: { targetType } }} passHref scroll={false}>
        <div className="setting-button">회원탈퇴</div>
      </Link>
    </div>
  );
}
