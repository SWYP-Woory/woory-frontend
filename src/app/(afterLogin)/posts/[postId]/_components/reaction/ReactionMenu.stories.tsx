import ReactionMenu from '@/app/(afterLogin)/posts/[postId]/_components/reaction/ReactionMenu';
import { Meta, StoryObj } from '@storybook/react';

function ReactionMenus() {
  const handleClick = () => {};
  return (
    <div className="flex gap-8">
      <ReactionMenu onClick={handleClick} />
    </div>
  );
}

const meta: Meta<typeof ReactionMenus> = {
  title: 'ReactionMenu',
  component: ReactionMenus,
};

export default meta;

type Story = StoryObj<typeof ReactionMenus>;

export const Buttons: Story = {};
