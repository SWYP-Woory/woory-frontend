import AddReactionChip from '@/app/(afterLogin)/posts/[postId]/_components/reaction/chip/AddReactionChip';
import ReactionChip from '@/app/(afterLogin)/posts/[postId]/_components/reaction/chip/ReactionChip';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

function Chips() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="flex gap-12">
      <ReactionChip count={1} reactionType="LOVE" isActive={false} />
      <ReactionChip count={2} reactionType="WOW" isActive />
      <AddReactionChip isClicked={isClicked} onClick={handleClick} />
    </div>
  );
}

const meta: Meta<typeof Chips> = {
  title: 'Chips',
  component: Chips,
};

export default meta;

type Story = StoryObj<typeof Chips>;

export const Default: Story = {};
