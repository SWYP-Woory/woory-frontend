'use client';

import { useIsPostStore } from '@/app/_store/isPostStore';
import PostIcon from '@/assets/icons/post/post.svg';
import { openToast } from '@/utils/Toast';
import { getCalendarTime } from '@/utils/getTime';
import { useRouter } from 'next/navigation';

export default function PostButton() {
  const { isPosted, postDate } = useIsPostStore();
  const router = useRouter();

  const handleClick = () => {
    if (isPosted) {
      openToast('post');
    } else {
      router.push('/posts');
    }
  };

  const postStyle = (date: Date) => {
    if (getCalendarTime(date) !== getCalendarTime(new Date())) {
      return 'hidden';
    }
    return '';
  };

  return (
    <button
      aria-label="Post Button"
      type="button"
      className={`${postStyle(postDate)} fixed bottom-72 left-1/2 transform translate-x-[10.4rem] flex justify-center items-center rounded-full w-[5.6rem] h-[5.6rem] cursor-pointer bg-secondary hover:bg-secondaryDark active:bg-secondaryDarkSet`}
      onClick={handleClick}
    >
      <PostIcon />
    </button>
  );
}
