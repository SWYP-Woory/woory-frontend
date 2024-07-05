import KebabMenuIcon from './KebabMenuIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof KebabMenuIcon> = {
  title: 'KebabMenuIcon',
  component: KebabMenuIcon,
};

export default meta;

type Story = StoryObj<typeof KebabMenuIcon>;

export const Default: Story = {
  args: {},
};
