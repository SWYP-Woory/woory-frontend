import OptionTitle from '@/app/(afterLogin)/(main)/mypage/_components/OptionTitle';
import Modal from '@/app/_components/common/modal/Modal';
import { MODAL_TYPE_MAP } from '@/app/_constants/modal';
import SettingIcon from '@/assets/icons/setting/setting.svg';
import { useState } from 'react';

interface Props {
  targetType: 'householder' | 'member' | 'lastMember';
}

export default function AccountSetting({ targetType }: Props) {
  const content = MODAL_TYPE_MAP[targetType];
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAccountDeletion = () => {
    setIsModalOpen(true);
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
  };

  const handleDeletionConfirm = () => {};

  return (
    <div className="border-bgGrey border-b">
      <OptionTitle icon={<SettingIcon />} title="계정 관리" />
      <button type="button" aria-label="logout" className="setting-button">
        로그아웃
      </button>
      <button type="button" aria-label="account Deletion" className="setting-button" onClick={handleAccountDeletion}>
        회원탈퇴
      </button>
      {isModalOpen && (
        <div className="absolute">
          <Modal
            title="삭제하기"
            content={content}
            buttonText="탈퇴"
            onCancel={handleCancelClick}
            onExecute={handleDeletionConfirm}
          />
        </div>
      )}
    </div>
  );
}
