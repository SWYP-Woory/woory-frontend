import Checkbox from '@/app/_components/checkbox/Checkbox';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

function Checkboxes() {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex text-12 gap-8">
      <Checkbox isDisabled />
      <Checkbox isChecked={isChecked} onClick={handleClick} />
      <span>체크박스</span>
    </div>
  );
}

const meta: Meta<typeof Checkboxes> = {
  title: 'Checkboxes',
  component: Checkboxes,
};

export default meta;

type Story = StoryObj<typeof Checkboxes>;

export const Default: Story = {
  args: {},
};
