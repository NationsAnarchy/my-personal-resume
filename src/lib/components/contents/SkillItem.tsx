interface Props {
  details: string;
}

const SkillItem = ({ details }: Props) => {
  return (
    <div className="card-compact min-w-[150px] rounded-md bg-accent  shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-center">{details}</h2>
      </div>
    </div>
  );
};

export default SkillItem;
