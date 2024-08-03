interface Props {
  children: React.ReactNode;
}

export default function IntroduceTitle({ children }: Props) {
  return <h1 className="mt-8 text-primary text-18 font-700 text-center">{children}</h1>;
}
