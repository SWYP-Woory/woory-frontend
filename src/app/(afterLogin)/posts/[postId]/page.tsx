'use client';

import DailyPostView from '@/app/(afterLogin)/posts/_components/DailyPostView';
import CommentView from '@/app/(afterLogin)/posts/_components/comment/CommentView';
import Border from '@/app/_components/common/border/Border';
import BasicHeader from '@/app/_components/common/header/BasicHeader';
import InputChat from '@/app/_components/input/InputChat';
import { DailyPostType } from '@/type';
import { useState } from 'react';

const TOPIC = '내일 지구가 멸망한다면';
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

const DUMMY_COMMENT = [
  {
    profile: {
      profileUrl: '',
      name: '엄마',
      isEdit: false,
    },
    comment: 'This is a comment',
    replies: [
      {
        profile: {
          profileUrl: '',
          name: '아빠',
          isEdit: true,
        },
        comment: 'This is a reply',
      },
      {
        profile: {
          profileUrl: '',
          name: '아들',
          isEdit: false,
        },
        comment: 'This is a reply',
      },
    ],
  },
  {
    profile: {
      profileUrl: '',
      name: '아빠',
      isEdit: true,
    },
    comment: 'This is a comment',
    replies: [
      {
        profile: {
          profileUrl: '',
          name: '아빠',
          isEdit: true,
        },
        comment: 'This is a reply',
      },
      {
        profile: {
          profileUrl: '',
          name: '아들',
          isEdit: false,
        },
        comment: 'This is a reply',
      },
    ],
  },
];

const MAX_LENGTH = 10;
const PLACEHOLDER = '아들님의 이야기를 적어주세요';

export default function PostPage() {
  const [inputData, setInputData] = useState<string>('');

  const handleChatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= MAX_LENGTH) {
      setInputData(input);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <div>
        <BasicHeader title="게시글" />
        <DailyPostView topic={TOPIC} data={DUMMY_DATA} />
        <Border />
      </div>
      <CommentView data={DUMMY_COMMENT} />
      <div className="flex items-center justify-center w-full h-[6.0rem] border-bgGrey border-t bg-white">
        <InputChat
          value={inputData}
          maxLength={MAX_LENGTH}
          placeholder={PLACEHOLDER}
          onChange={(e) => handleChatChange(e)}
        />
      </div>
    </div>
  );
}
