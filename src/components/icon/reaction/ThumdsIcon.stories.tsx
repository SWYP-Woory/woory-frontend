import ThumbsIcon from './ThumbsIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ThumbsIcon> = {
  title: 'ThumbsIcon',
  component: ThumbsIcon,
};

export default meta;

type Story = StoryObj<typeof ThumbsIcon>;

export const Default: Story = {
  args: {
    size: 'sm',
  },
};
