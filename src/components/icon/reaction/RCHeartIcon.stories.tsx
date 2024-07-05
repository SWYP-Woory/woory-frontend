import RcHeartIcon from './RcHeartIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RcHeartIcon> = {
  title: 'RcHeartIcon',
  component: RcHeartIcon,
};

export default meta;

type Story = StoryObj<typeof RcHeartIcon>;

export const Default: Story = {
  args: {
    size: 'sm',
  },
};
