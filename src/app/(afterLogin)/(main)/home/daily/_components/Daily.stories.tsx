import DailyView from '@/app/(afterLogin)/(main)/home/daily/_components/DailyView';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DailyView> = {
  title: 'DailyView',
  component: DailyView,
};

export default meta;

type Story = StoryObj<typeof DailyView>;

export const Default: Story = {};
