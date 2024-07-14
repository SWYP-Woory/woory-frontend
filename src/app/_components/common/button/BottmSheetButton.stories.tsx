import BottomSheetButton from '@/app/_components/common/button/BottomSheetButton';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BottomSheetButton> = {
  title: 'BottomSheetButton',
  component: BottomSheetButton,
};

export default meta;

type Story = StoryObj<typeof BottomSheetButton>;

export const Default: Story = {
  args: {
    text: '동의',
  },
};
