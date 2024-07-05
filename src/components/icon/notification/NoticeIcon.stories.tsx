import NoticeIcon from './NoticeIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NoticeIcon> = {
  title: 'NoticeIcon',
  component: NoticeIcon,
};

export default meta;

type Story = StoryObj<typeof NoticeIcon>;

export const Default: Story = {
  args: {},
};
