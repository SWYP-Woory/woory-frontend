import HeartChip from '@/components/chip/HeartChip';
import ReactionChip from '@/components/chip/ReactionChip';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

function Chips() {
  const [isHeartClicked, setIsHeartClicked] = useState<boolean>(false);
  const [isReactionClicked, setIsReactionClicked] = useState<boolean>(false);

  return (
    <div className="flex gap-12">
      <HeartChip count={2} isClicked={isHeartClicked} setIsClicked={setIsHeartClicked} />
      <ReactionChip isClicked={isReactionClicked} setIsClicked={setIsReactionClicked} />
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
