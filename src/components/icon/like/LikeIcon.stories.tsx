import LikeIcon from './LikeIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LikeIcon> = {
  title: 'LikeIcon',
  component: LikeIcon,
};

export default meta;

type Story = StoryObj<typeof LikeIcon>;

export const Default: Story = {
  args: {},
};
