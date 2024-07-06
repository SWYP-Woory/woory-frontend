import AgreeButton from '@/components/common/button/AgreeButton';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AgreeButton> = {
  title: 'AgreeButton',
  component: AgreeButton,
};

export default meta;

type Story = StoryObj<typeof AgreeButton>;

export const Default: Story = {};
