import ControlHeader from './ControlHeader';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ControlHeader> = {
  title: 'ControlHeader',
  component: ControlHeader,
};

export default meta;

type Story = StoryObj<typeof ControlHeader>;

export const Default: Story = {
  args: {},
};
