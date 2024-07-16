import ImageUpload from '@/app/(afterLogin)/posts/_components/imageUpload/ImageUpload';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ImageUpload> = {
  title: 'ImageUpload',
  component: ImageUpload,
};

export default meta;

type Story = StoryObj<typeof ImageUpload>;

export const Buttons: Story = {
  args: {},
};
