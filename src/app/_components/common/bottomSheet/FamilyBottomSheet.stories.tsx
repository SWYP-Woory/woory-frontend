import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';
import { FamilyMakeType } from '@/type';
import { Meta, StoryObj } from '@storybook/react';

const FAMILY_DATA: FamilyMakeType[] = [
  {
    id: 1,
    familyName: '우리집',
    imageUrl: 'https://cdn.hankyung.com/photo/202307/01.33990193.1.jpg',
  },
  {
    id: 2,
    familyName: '할머니',
    imageUrl:
      'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/03/02/2f9ca821-28d5-4b1b-8943-d7cdee3b767b.jpg',
  },
  {
    id: 3,
    familyName: '부산누나',
    imageUrl:
      'https://i.namu.wiki/i/p4yom4hoK2bpXlDzk9qPUjzU2ImtUJs9hKlUgMUZ8f5laqf5IzdrFksLRRlo3wyVK1bRtGZJTeHZWaB4XHAP9g.webp',
  },
  {
    id: 4,
    familyName: '남동생들',
  },
  {
    id: 5,
    familyName: '형님들',
  },
];

const meta: Meta<typeof BottomSheet> = {
  title: 'FamilyBottomSheet',
  component: BottomSheet,
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  args: {
    sheetType: 'familySelect',
    familyData: FAMILY_DATA,
  },
};
