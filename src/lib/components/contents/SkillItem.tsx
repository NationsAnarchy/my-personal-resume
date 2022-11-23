interface Props {
  details: string;
}

const SkillItem = ({ details }: Props) => {
  return (
    <div className="card-compact max-w-[600px] rounded-md bg-accent shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{details}</h2>
      </div>
    </div>
  );
};

export default SkillItem;
