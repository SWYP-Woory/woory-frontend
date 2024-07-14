import EditDeleteButton from '@/app/_components/common/button/EditDeleteButton';
import { Meta, StoryObj } from '@storybook/react';

function EditDeleteButtons() {
  return (
    <div className="flex gap-8">
      <EditDeleteButton />
    </div>
  );
}

const meta: Meta<typeof EditDeleteButtons> = {
  title: 'EditDeleteButton',
  component: EditDeleteButtons,
};

export default meta;

type Story = StoryObj<typeof EditDeleteButtons>;

export const Buttons: Story = {};
