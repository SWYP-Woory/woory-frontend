import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';
import { Meta, StoryObj } from '@storybook/react';

function BottomSheets() {
  return (
    <div className="inset-0 fixed flex flex-col gap-16 bg-modalBackground min-h-screen">
      <BottomSheet sheetType="inquiry" />
      <BottomSheet sheetType="familySelect" />
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
