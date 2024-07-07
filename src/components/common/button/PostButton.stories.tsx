import PostButton from '@/components/common/button/PostButton';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PostButton> = {
  title: 'PostButton',
  component: PostButton,
};

export default meta;

type Story = StoryObj<typeof PostButton>;

export const Default: Story = {};
