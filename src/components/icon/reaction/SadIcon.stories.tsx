import SadIcon from './SadIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SadIcon> = {
  title: 'SadIcon',
  component: SadIcon,
};

export default meta;

type Story = StoryObj<typeof SadIcon>;

export const Default: Story = {
  args: {
    size: 'sm',
  },
};
