import ToggleSwitch from '@/app/(afterLogin)/(main)/mypage/_components/switch/ToggleSwitch';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

function ToggleButton() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return <ToggleSwitch isActive={isClicked} onClick={handleClick} />;
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
