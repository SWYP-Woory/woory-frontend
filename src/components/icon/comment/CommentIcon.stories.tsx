import CommentIcon from './CommentIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommentIcon> = {
  title: 'CommentIcon',
  component: CommentIcon,
};

export default meta;

type Story = StoryObj<typeof CommentIcon>;

export const Default: Story = {
  args: {},
};
