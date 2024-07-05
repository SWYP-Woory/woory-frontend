import MyPageIcon from './MyPageIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MyPageIcon> = {
  title: 'MyPageIcon',
  component: MyPageIcon,
};

export default meta;

type Story = StoryObj<typeof MyPageIcon>;

export const Default: Story = {
  args: {},
};
