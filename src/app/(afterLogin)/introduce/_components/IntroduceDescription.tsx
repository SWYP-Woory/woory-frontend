interface Props {
  children: React.ReactNode;
}

export default function IntroduceDescription({ children }: Props) {
  return <p className="mt-16 text-midGrey text-18 font-500 leading-[2.4rem] text-center">{children}</p>;
}
