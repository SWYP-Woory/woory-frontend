import PictureChangeButton from '@/app/_components/common/button/PictureChangeButton';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PictureChangeButton> = {
  title: 'PictureChangeButton',
  component: PictureChangeButton,
};

export default meta;

type Story = StoryObj<typeof PictureChangeButton>;

export const Default: Story = {};
