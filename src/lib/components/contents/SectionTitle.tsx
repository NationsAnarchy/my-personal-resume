interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return <h1 className="my-4 text-xl font-bold lg:text-2xl">{title}</h1>;
};

export default SectionTitle;
