import HomeIcon from './HomeIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomeIcon> = {
  title: 'HomeIcon',
  component: HomeIcon,
};

export default meta;

type Story = StoryObj<typeof HomeIcon>;

export const Default: Story = {
  args: {},
};
