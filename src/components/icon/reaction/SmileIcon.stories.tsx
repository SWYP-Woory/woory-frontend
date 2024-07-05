import SmileIcon from './SmileIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SmileIcon> = {
  title: 'SmileIcon',
  component: SmileIcon,
};

export default meta;

type Story = StoryObj<typeof SmileIcon>;

export const Default: Story = {
  args: {
    size: 'sm',
  },
};
