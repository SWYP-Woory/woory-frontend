import SocialLoginButton from '@/app/(beforeLogin)/_components/SocialLoginButton';
import { Meta, StoryObj } from '@storybook/react';

function SocialLoginButtons() {
  return (
    <div className="flex flex-col gap-8">
      <SocialLoginButton socialDomain="kakao" />
      <SocialLoginButton socialDomain="kakao" isActive />
      <SocialLoginButton socialDomain="naver" />
      <SocialLoginButton socialDomain="naver" isActive />
    </div>
  );
}

const meta: Meta<typeof SocialLoginButtons> = {
  title: 'SocialLoginButton',
  component: SocialLoginButtons,
};

export default meta;

type Story = StoryObj<typeof SocialLoginButtons>;

export const Default: Story = {};
