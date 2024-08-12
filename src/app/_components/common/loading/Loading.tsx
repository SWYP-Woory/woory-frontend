import { FadeLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="flex justify-center items-center flex-grow">
      <FadeLoader color="#1EA49A" />
    </div>
  );
}
