import Modal from '@/components/popup/Modal';
import { Meta, StoryObj } from '@storybook/react';

function Popup() {
  return (
    <div className="flex gap-12">
      <Modal
        title="탈퇴 하기"
        content="탈퇴하면 현재 계정으로 작성한 이야기, 댓글 등을 수정하거나 삭제할 수 없습니다. 지금 탈퇴하시겠습니까?"
        buttonText="탈퇴"
      />
      <Modal
        title="멤버 내보내기"
        content="멤버를 내보내면 해당 멤버가 작성한 글, 댓글은 모두 삭제되며 해당 가족에 접근할 권한을 잃게 됩니다. 내보내시겠습니까?"
        buttonText="내보내기"
      />
      <Modal
        title="게시글 삭제하기"
        content="게시글을 삭제하면 해당 게시글과 댓글, 반응이 사라집니다. 게시글을 삭제하시겠습니까?"
        buttonText="삭제"
      />
    </div>
  );
}

const meta: Meta<typeof Popup> = {
  title: 'Popup',
  component: Popup,
};

export default meta;

type Story = StoryObj<typeof Popup>;

export const Default: Story = {
  args: {},
};
