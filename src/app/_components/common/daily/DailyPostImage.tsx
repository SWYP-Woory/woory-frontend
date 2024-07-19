import Image from 'next/image';

interface Props {
  postUrl: string;
}

export default function DailyPostImage({ postUrl }: Props) {
  return (
    postUrl && (
      <div className="relative w-full aspect-square">
        <Image src={postUrl} alt="post" fill sizes="295" className="w-full h-full" />
      </div>
    )
  );
}
