import SurpriseIcon from './SurpriseIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SurpriseIcon> = {
  title: 'SurpriseIcon',
  component: SurpriseIcon,
};

export default meta;

type Story = StoryObj<typeof SurpriseIcon>;

export const Default: Story = {
  args: {
    size: 'sm',
  },
};
