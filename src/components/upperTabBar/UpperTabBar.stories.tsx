import UpperTabBar from '@/components/upperTabBar/UpperTabBar';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UpperTabBar> = {
  title: 'UpperTabBar',
  component: UpperTabBar,
};

export default meta;

type Story = StoryObj<typeof UpperTabBar>;

export const Default: Story = {};
