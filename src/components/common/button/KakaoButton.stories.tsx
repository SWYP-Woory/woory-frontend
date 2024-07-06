import KakaoButton from '@/components/common/button/KakaoButton';
import { Meta, StoryObj } from '@storybook/react';

function KakaoButtons() {
  return (
    <div className="flex gap-8">
      <KakaoButton />
      <KakaoButton isActive />
    </div>
  );
}

const meta: Meta<typeof KakaoButtons> = {
  title: 'KakaoButton',
  component: KakaoButtons,
};

export default meta;

type Story = StoryObj<typeof KakaoButtons>;

export const kakaoButtons: Story = {};
