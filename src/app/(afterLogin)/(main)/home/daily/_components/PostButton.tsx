'use client';

import { useIsPostStore } from '@/app/_store/isPostStore';
import PostIcon from '@/assets/icons/post/post.svg';
import { openToast } from '@/utils/Toast';
import { useRouter } from 'next/navigation';

export default function PostButton() {
  // const { currentDate } = useDateControl();
  const { isPosted } = useIsPostStore();
  const router = useRouter();

  const handleClick = () => {
    if (isPosted) {
      openToast('post');
    } else {
      router.push('/posts');
    }
  };

  return (
    <button
      aria-label="Post Button"
      type="button"
      className="fixed bottom-72 left-1/2 transform translate-x-[10.4rem] flex justify-center items-center rounded-full w-[5.6rem] h-[5.6rem] cursor-pointer bg-secondary"
      onClick={handleClick}
    >
      <PostIcon />
    </button>
  );
}
