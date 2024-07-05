import MemberIcon from './MemberIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MemberIcon> = {
  title: 'MemberIcon',
  component: MemberIcon,
};

export default meta;

type Story = StoryObj<typeof MemberIcon>;

export const Default: Story = {
  args: {},
};
