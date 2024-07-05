import BottomMenuBar from './BottomMenuBar';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BottomMenuBar> = {
  title: 'BottomMenuBar',
  component: BottomMenuBar,
};

export default meta;

type Story = StoryObj<typeof BottomMenuBar>;

export const Default: Story = {
  args: {},
};
