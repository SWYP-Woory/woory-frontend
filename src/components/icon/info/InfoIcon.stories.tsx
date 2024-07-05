import InfoIcon from './InfoIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InfoIcon> = {
  title: 'InfoIcon',
  component: InfoIcon,
};

export default meta;

type Story = StoryObj<typeof InfoIcon>;

export const Default: Story = {
  args: {},
};
