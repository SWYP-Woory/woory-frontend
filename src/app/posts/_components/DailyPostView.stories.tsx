import DailyPostView from '@/app/posts/_components/DailyPostView';
import { DailyPostType } from '@/type';
import { Meta, StoryObj } from '@storybook/react';

const PROFILE_IMAGE =
  'https://avatars.githubusercontent.com/u/49144662?s=400&u=903e697529c3b51f9c69bc3885c8f9be3d754028&v=4';
const POST_URL = 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg';

const DUMMY_DATA: DailyPostType = {
  profileUrl: PROFILE_IMAGE,
  name: '아빠',
  content: '가족들과 함께 있기',
  postUrl: POST_URL,
  isEdit: true,
  reactions: [
    {
      reactionType: 'heart',
      count: 2,
      isActive: true,
    },
    {
      reactionType: 'smile',
      count: 1,
      isActive: false,
    },
    {
      reactionType: 'thumbs',
      count: 3,
      isActive: true,
    },
    {
      reactionType: 'surprise',
      count: 3,
      isActive: true,
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
