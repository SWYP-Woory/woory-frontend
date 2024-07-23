import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BottomSheet> = {
  title: 'FamilyBottomSheet',
  component: BottomSheet,
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  args: {
    sheetType: 'familySelect',
  },
};
