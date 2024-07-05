import NotificationHeader from './NotificationHeader';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NotificationHeader> = {
  title: 'NotificationHeader',
  component: NotificationHeader,
};

export default meta;

type Story = StoryObj<typeof NotificationHeader>;

export const Default: Story = {
  args: {
    title: 'title',
  },
};
