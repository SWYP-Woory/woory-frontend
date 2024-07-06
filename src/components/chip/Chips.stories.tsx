import HeartChip from '@/components/chip/HeartChip';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

function Chips() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div>
      <HeartChip count={2} isClicked={isClicked} setIsClicked={setIsClicked} />
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
