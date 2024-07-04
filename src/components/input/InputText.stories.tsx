import InputText from '@/components/input/InputText';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputText> = {
  title: 'InputText',
  component: InputText,
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  args: {
    value: '엥',
    hasLimit: true,
    maxLength: 10,
  },
};
