import LeftArrowIcon from './LeftArrowIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LeftArrowIcon> = {
  title: 'LeftArrowIcon',
  component: LeftArrowIcon,
};

export default meta;

type Story = StoryObj<typeof LeftArrowIcon>;

export const Default: Story = {
  args: {},
};
