import Modal from '@/app/_components/common/modal/Modal';
import ToastPopUp from '@/app/_components/common/popup/ToastPopUp';
import { Meta, StoryObj } from '@storybook/react';

function PopUp() {
  const handleCancelExecute = () => {};

  return (
    <div className="flex flex-col gap-16">
      <div className="flex gap-12">
        <Modal
          title="탈퇴 하기"
          content="탈퇴하면 현재 계정으로 작성한 이야기, 댓글 등을 수정하거나 삭제할 수 없습니다. 지금 탈퇴하시겠습니까?"
          buttonText="탈퇴"
          onCancel={handleCancelExecute}
          onExecute={handleCancelExecute}
        />
        <Modal
          title="멤버 내보내기"
          content="멤버를 내보내면 해당 멤버가 작성한 글, 댓글은 모두 삭제되며 해당 가족에 접근할 권한을 잃게 됩니다. 내보내시겠습니까?"
          buttonText="내보내기"
          onCancel={handleCancelExecute}
          onExecute={handleCancelExecute}
        />
        <Modal
          title="게시글 삭제하기"
          content="게시글을 삭제하면 해당 게시글과 댓글, 반응이 사라집니다. 게시글을 삭제하시겠습니까?"
          buttonText="삭제"
          onCancel={handleCancelExecute}
          onExecute={handleCancelExecute}
        />
      </div>
      <ToastPopUp type="link" />
    </div>
  );
}

const meta: Meta<typeof PopUp> = {
  title: 'PopUp',
  component: PopUp,
};

export default meta;

type Story = StoryObj<typeof PopUp>;

export const Default: Story = {
  args: {},
};
