import HeartIcon from './HeartIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HeartIcon> = {
  title: 'HeartIcon',
  component: HeartIcon,
};

export default meta;

type Story = StoryObj<typeof HeartIcon>;

export const Default: Story = {
  args: {},
};
