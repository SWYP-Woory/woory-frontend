import BasicHeader from './BasicHeader';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BasicHeader> = {
  title: 'BasicHeader',
  component: BasicHeader,
};

export default meta;

type Story = StoryObj<typeof BasicHeader>;

export const Default: Story = {
  args: {
    title: 'title',
    hasRightButton: true,
    buttonType: '완료',
  },
};
