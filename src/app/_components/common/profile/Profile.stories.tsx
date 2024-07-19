import BigProfile from '@/app/_components/common/profile/BigProfile';
import Profile from '@/app/_components/common/profile/Profile';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const PROFILE_IMAGE =
  'https://avatars.githubusercontent.com/u/49144662?s=400&u=903e697529c3b51f9c69bc3885c8f9be3d754028&v=4';

function Profiles() {
  return (
    <div>
      <Profile size="small" />
      <Profile size="large" isHouseholder />
      <Profile size="small" profileImage={PROFILE_IMAGE} />
      <Profile size="large" profileImage={PROFILE_IMAGE} isHouseholder />
      <BigProfile bigProfileImage={PROFILE_IMAGE} inputType="family" />
      <BigProfile inputType="family" />
      <BigProfile inputType="profile" />
    </div>
  );
}

const meta: Meta<typeof Profiles> = {
  title: 'Profiles',
  component: Profiles,
};

export default meta;

type Story = StoryObj<typeof Profiles>;

export const Default: Story = {};
