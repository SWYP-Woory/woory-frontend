import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';
import { Meta, StoryObj } from '@storybook/react';

function BottomSheets() {
  return (
    <div className="flex w-[1000px] gap-16">
      <BottomSheet sheetType="home" />
      <BottomSheet sheetType="inquiry" />
    </div>
  );
}

const meta: Meta<typeof BottomSheets> = {
  title: 'BottomSheet',
  component: BottomSheets,
};

export default meta;

type Story = StoryObj<typeof BottomSheets>;

export const Default: Story = {};
