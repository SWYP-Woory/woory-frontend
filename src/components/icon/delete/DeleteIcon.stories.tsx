import DeleteIcon from './DeleteIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DeleteIcon> = {
  title: 'DeleteIcon',
  component: DeleteIcon,
};

export default meta;

type Story = StoryObj<typeof DeleteIcon>;

export const Default: Story = {
  args: {},
};
