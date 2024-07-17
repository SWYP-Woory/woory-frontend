import PostIcon from '@/assets/icons/post/post.svg';

export default function PostButton() {
  return (
    <button
      aria-label="Post Button"
      type="button"
      className="fixed bottom-72 left-1/2 transform translate-x-[10.4rem] flex justify-center items-center rounded-full w-[5.6rem] h-[5.6rem] cursor-pointer bg-secondary"
    >
      <PostIcon />
    </button>
  );
}
