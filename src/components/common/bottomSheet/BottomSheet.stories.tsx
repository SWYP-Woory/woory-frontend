import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import { Meta, StoryObj } from '@storybook/react';

function BottomSheets() {
  return (
    <div className="flex flex-col gap-16">
      <BottomSheet sheetType="home" buttonText="추가" />
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
