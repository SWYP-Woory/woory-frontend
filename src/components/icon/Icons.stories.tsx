import LeftArrowIcon from '@/components/icon/arrow/LeftArrowIcon';
import RightArrowIcon from '@/components/icon/arrow/RightArrowIcon';
import HeartIcon from '@/components/icon/bottomBar/HeartIcon';
import HomeIcon from '@/components/icon/bottomBar/HomeIcon';
import MemberIcon from '@/components/icon/bottomBar/MemberIcon';
import MyPageIcon from '@/components/icon/bottomBar/MyPageIcon';
import DeleteIcon from '@/components/icon/delete/DeleteIcon';
import InfoIcon from '@/components/icon/info/InfoIcon';
import KebabMenuIcon from '@/components/icon/kebabMenu/KebabMenuIcon';
import LikeIcon from '@/components/icon/like/LikeIcon';
import LinkIcon from '@/components/icon/link/LinkIcon';
import NoticeIcon from '@/components/icon/notification/NoticeIcon';
import GreyHeartIcon from '@/components/icon/reaction/GreyHeartIcon';
import RcHeartIcon from '@/components/icon/reaction/RcHeartIcon';
import SadIcon from '@/components/icon/reaction/SadIcon';
import SmileIcon from '@/components/icon/reaction/SmileIcon';
import SurpriseIcon from '@/components/icon/reaction/SurpriseIcon';
import ThumbsIcon from '@/components/icon/reaction/ThumbsIcon';
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

function Icons() {
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

      <IconSection title="Comment,KebabMenu,Like Icons (Click here)">
        <IconSort>
          <DeleteIcon />
          <KebabMenuIcon />
          <LikeIcon />
        </IconSort>
      </IconSection>

      <IconSection title="Info, Notice Icons">
        <InfoIcon />
        <IconSort>
          <NoticeIcon isActive />
          <NoticeIcon isActive={false} />
        </IconSort>
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
