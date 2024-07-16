import AddButton from '@/app/_components/icon/addButton/AddButton';
import LeftArrowIcon from '@/app/_components/icon/arrow/LeftArrowIcon';
import RightArrowIcon from '@/app/_components/icon/arrow/RightArrowIcon';
import HeartIcon from '@/app/_components/icon/bottomBar/HeartIcon';
import HomeIcon from '@/app/_components/icon/bottomBar/HomeIcon';
import MemberIcon from '@/app/_components/icon/bottomBar/MemberIcon';
import MyPageIcon from '@/app/_components/icon/bottomBar/MyPageIcon';
import CommentIcon from '@/app/_components/icon/comment/CommentIcon';
import MemberDeleteIcon from '@/app/_components/icon/delete/MemberDeleteIcon';
import InfoIcon from '@/app/_components/icon/info/InfoIcon';
import KebabMenuIcon from '@/app/_components/icon/kebabMenu/KebabMenuIcon';
import LikeIcon from '@/app/_components/icon/like/LikeIcon';
import LinkIcon from '@/app/_components/icon/link/LinkIcon';
import NoticeIcon from '@/app/_components/icon/notification/NoticeIcon';
import Profile from '@/app/_components/icon/profile/Profile';
import GreyHeartIcon from '@/app/_components/icon/reaction/GreyHeartIcon';
import RcHeartIcon from '@/app/_components/icon/reaction/RcHeartIcon';
import SadIcon from '@/app/_components/icon/reaction/SadIcon';
import SmileIcon from '@/app/_components/icon/reaction/SmileIcon';
import SurpriseIcon from '@/app/_components/icon/reaction/SurpriseIcon';
import ThumbsIcon from '@/app/_components/icon/reaction/ThumbsIcon';
import ImageDeleteIcon from '@/assets/icons/delete/imageDelete.svg';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

interface IconSectionProps {
  title: string;
  children: React.ReactNode;
}

interface IconSortProps {
  children: React.ReactNode;
}

function IconSort({ children }: IconSortProps) {
  return <div className="flex gap-12">{children}</div>;
}

function IconSection({ title, children }: IconSectionProps) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-16">{title}</h1>
      <div>{children}</div>
    </div>
  );
}

const PROFILE_IMAGE =
  'https://avatars.githubusercontent.com/u/49144662?s=400&u=903e697529c3b51f9c69bc3885c8f9be3d754028&v=4';

function Icons() {
  const handleClick = () => {};

  return (
    <div className="flex flex-col gap-16">
      <IconSection title="Arrow Icons">
        <IconSort>
          <RightArrowIcon />
          <LeftArrowIcon />
        </IconSort>
      </IconSection>

      <IconSection title="BottomBar Icons">
        <IconSort>
          <HeartIcon isActive />
          <HomeIcon isActive />
          <MemberIcon isActive />
          <MyPageIcon isActive />
        </IconSort>
        <IconSort>
          <HeartIcon isActive={false} />
          <HomeIcon isActive={false} />
          <MemberIcon isActive={false} />
          <MyPageIcon isActive={false} />
        </IconSort>
      </IconSection>

      <IconSection title="MemberDeleteIcon,KebabMenu,Like Icons (Click here)">
        <IconSort>
          <MemberDeleteIcon />
          <KebabMenuIcon isActive onClick={handleClick} />
          <LikeIcon />
        </IconSort>
      </IconSection>

      <IconSection title="Info, Notice, ImageDeleteIcon Icons">
        <InfoIcon />
        <IconSort>
          <NoticeIcon isActive />
          <NoticeIcon isActive={false} />
        </IconSort>
        <ImageDeleteIcon />
        <CommentIcon />
      </IconSection>

      <IconSection title="Reaction Icons">
        <GreyHeartIcon />
        <IconSort>
          <SadIcon size="small" />
          <SmileIcon size="small" />
          <RcHeartIcon size="small" />
          <SurpriseIcon size="small" />
          <ThumbsIcon size="small" />
        </IconSort>
        <IconSort>
          <SadIcon size="large" />
          <SmileIcon size="large" />
          <RcHeartIcon size="large" />
          <SurpriseIcon size="large" />
          <ThumbsIcon size="large" />
        </IconSort>
      </IconSection>

      <IconSection title="Link Icon">
        <LinkIcon />
      </IconSection>

      <IconSection title="Add Button">
        <AddButton />
        <AddButton isActive />
      </IconSection>

      <IconSection title="Profile">
        <Profile size="small" />
        <Profile size="large" isHouseholder />
        <Profile size="small" profileImage={PROFILE_IMAGE} />
        <Profile size="large" profileImage={PROFILE_IMAGE} isHouseholder />
      </IconSection>
    </div>
  );
}

const meta: Meta<typeof Icons> = {
  title: 'Icons',
  component: Icons,
};

export default meta;

type Story = StoryObj<typeof Icons>;

export const Default: Story = {};
