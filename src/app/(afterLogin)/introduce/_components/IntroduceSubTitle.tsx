interface Props {
  children: React.ReactNode;
}

export default function IntroduceSubTitle({ children }: Props) {
  return <h2 className="mt-16 text-22 text-black font-700 leading-[2.8rem] text-center">{children}</h2>;
}
