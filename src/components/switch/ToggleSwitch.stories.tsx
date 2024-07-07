import ToggleSwitch from '@/components/switch/ToggleSwitch';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

function ToggleButton() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return <ToggleSwitch isClicked={isClicked} setIsClicked={setIsClicked} />;
}

const meta: Meta<typeof ToggleButton> = {
  title: 'ToggleButton',
  component: ToggleButton,
};

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Buttons: Story = {
  args: {},
};
