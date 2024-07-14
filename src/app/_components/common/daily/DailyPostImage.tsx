import Image from 'next/image';

interface Props {
  postUrl: string;
}

export default function DailyPostImage({ postUrl }: Props) {
  return (
    postUrl && (
      <div className="relative w-full aspect-square">
        <Image src={postUrl} alt="post" layout="fill" objectFit="cover" className="w-full h-full" />
      </div>
    )
  );
}
