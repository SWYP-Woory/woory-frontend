import CalenderView from '@/components/calender/CalenderView';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CalenderView> = {
  title: 'CalenderView',
  component: CalenderView,
};

export default meta;

type Story = StoryObj<typeof CalenderView>;

export const Default: Story = {};
