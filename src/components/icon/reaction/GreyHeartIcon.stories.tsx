import GreyHeartIcon from './GreyHeartIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GreyHeartIcon> = {
  title: 'GreyHeartIcon',
  component: GreyHeartIcon,
};

export default meta;

type Story = StoryObj<typeof GreyHeartIcon>;

export const Default: Story = {
  args: {},
};
