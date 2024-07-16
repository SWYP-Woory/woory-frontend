import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';
import { FamilyMakeType } from '@/type';
import { Meta, StoryObj } from '@storybook/react';

const FAMILY_DATA: FamilyMakeType[] = [
  {
    id: 1,
    familyName: '아빠',
    imageUrl: 'https://cdn.hankyung.com/photo/202307/01.33990193.1.jpg',
  },
  {
    id: 2,
    familyName: '엄마',
    imageUrl:
      'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/03/02/2f9ca821-28d5-4b1b-8943-d7cdee3b767b.jpg',
  },
  {
    id: 3,
    familyName: '누나',
    imageUrl:
      'https://i.namu.wiki/i/p4yom4hoK2bpXlDzk9qPUjzU2ImtUJs9hKlUgMUZ8f5laqf5IzdrFksLRRlo3wyVK1bRtGZJTeHZWaB4XHAP9g.webp',
  },
  {
    id: 4,
    familyName: '남동생',
  },
];
function BottomSheets() {
  return (
    <div className="inset-0 fixed flex flex-col gap-16 bg-modalBackground min-h-screen">
      <BottomSheet sheetType="home" />
      <BottomSheet sheetType="inquiry" />
      <BottomSheet sheetType="familySelect" familyData={FAMILY_DATA} />
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
