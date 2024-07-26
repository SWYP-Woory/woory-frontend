import FavoritePost from '@/app/(afterLogin)/(main)/favorites/_components/FavoritePost';
import { Meta, StoryObj } from '@storybook/react';

const IMAGE_URL =
  'https://i.namu.wiki/i/DjZjF9N9GeoZkEspHDgrUoDRSzJM0aS62bQYR05tatPmDcUypUz5WYYL_a3jXI3slpNQ3Az5pbJDA10ENfc3PPMqiLb-PIUwAUNAIcxw8la3Ze86Q41y3UYqJqYxPHGYP9aYulBvTlSHjnN8tpEF6Q.webp';

const meta: Meta<typeof FavoritePost> = {
  title: 'FavoritePost',
  component: FavoritePost,
};

export default meta;

type Story = StoryObj<typeof FavoritePost>;

export const Default: Story = {
  args: {
    topicTitle: IMAGE_URL,
    topicImage: '',
    topicDate: new Date(),
  },
};
