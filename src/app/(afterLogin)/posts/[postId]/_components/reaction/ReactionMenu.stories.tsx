import ReactionMenu from '@/app/(afterLogin)/posts/[postId]/_components/reaction/ReactionMenu';
import { Meta, StoryObj } from '@storybook/react';

function ReactionMenus() {
  return (
    <div className="flex gap-8">
      <ReactionMenu />
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
