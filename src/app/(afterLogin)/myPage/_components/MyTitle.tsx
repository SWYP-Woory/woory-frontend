import Profile from '@/app/_components/common/profile/Profile';

interface Props {
  name: string;
}

export default function MyTitle({ name }: Props) {
  return (
    <div className="flex flex-col justify-between w-full h-[17.6rem] px-16 pt-[2.4rem] pb-16">
      <div className="flex gap-16 items-center">
        <Profile
          size="xLarge"
          profileImage="https://avatars.githubusercontent.com/u/49144662?s=400&u=903e697529c3b51f9c69bc3885c8f9be3d754028&v=4"
        />
        <div>
          <div className="font-title font-500">안녕하세요!</div>
          <div className="font-title">
            <span className="text-primary">{name}</span>님
          </div>
        </div>
      </div>
      <button
        type="button"
        aria-label="profile edit"
        className="flex w-[34.3rem] h-40 py-4 px-16 justify-center items-center bg-white rounded-[0.8rem] border-[1px] border-lightGrey"
      >
        <div className="text-midGrey text-18 font-500">프로필 수정</div>
      </button>
    </div>
  );
}
