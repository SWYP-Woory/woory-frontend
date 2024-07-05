import RightArrowIcon from './RightArrowIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RightArrowIcon> = {
  title: 'RightArrowIcon',
  component: RightArrowIcon,
};

export default meta;

type Story = StoryObj<typeof RightArrowIcon>;

export const Default: Story = {
  args: {},
};
