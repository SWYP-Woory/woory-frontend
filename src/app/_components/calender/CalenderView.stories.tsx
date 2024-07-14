import CalenderView from '@/app/_components/calender/CalenderView';
import { Meta, StoryObj } from '@storybook/react';

const DUMMY_DATA = {
  userId: 1,
  calender: [
    {
      date: '2024-07-12',
      url: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
      isLiked: true,
    },
    {
      date: '2024-07-16',
      url: '',
      isLiked: true,
    },
    {
      date: '2024-07-17',
      url: '',
      isLiked: false,
    },
    {
      date: '2024-07-27',
      url: '',
      isLiked: true,
    },
    {
      date: '2024-07-28',
      url: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_1.jpg',
      isLiked: false,
    },
  ],
};
const meta: Meta<typeof CalenderView> = {
  title: 'CalenderView',
  component: CalenderView,
};

export default meta;

type Story = StoryObj<typeof CalenderView>;

export const Default: Story = {
  args: { data: DUMMY_DATA },
};
