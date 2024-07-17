import OptionTitle from '@/app/(afterLogin)/myPage/_components/OptionTitle';
import SettingIcon from '@/assets/icons/setting/setting.svg';

export default function AccountSetting() {
  return (
    <div className="border-bgGrey border-b">
      <OptionTitle icon={<SettingIcon />} title="계정 관리" />
      <button type="button" aria-label="logout" className="setting-button">
        로그 아웃
      </button>
      <button type="button" aria-label="account Deletion" className="setting-button">
        회원 탈퇴
      </button>
    </div>
  );
}
