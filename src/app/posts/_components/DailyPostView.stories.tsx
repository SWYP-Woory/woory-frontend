import DailyPostView from '@/app/posts/_components/DailyPostView';
import { Meta, StoryObj } from '@storybook/react';

const PROFILE_IMAGE =
  'https://avatars.githubusercontent.com/u/49144662?s=400&u=903e697529c3b51f9c69bc3885c8f9be3d754028&v=4';
const POST_URL = 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg';

const DUMMY_DATA = {
  profileUrl: PROFILE_IMAGE,
  name: '아빠',
  content: '가족들과 함께 있기',
  postUrl: POST_URL,
  isEdit: true,
  reactions: [
    {
      reaction: 'heart',
      count: 2,
    },
    {
      reaction: 'smile',
      count: 1,
    },
  ],
};

const meta: Meta<typeof DailyPostView> = {
  title: 'DailyPostView',
  component: DailyPostView,
};

export default meta;

type Story = StoryObj<typeof DailyPostView>;

export const Default: Story = {
  args: {
    data: DUMMY_DATA,
  },
};
