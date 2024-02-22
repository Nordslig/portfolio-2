import Description from "./Description";

interface SkillsListProps {
  skills: { id: string; name: string; level: number }[];
}

const SkillsList = ({ skills }: SkillsListProps) => {
  return (
    <ul className="overflow-scroll">
      {skills.map(({ id, name, level }) => {
        return (
          <li key={id} className="flex pb-3">
            <p className=" basis-full text-center uppercase mb-3 mt-1">
              {name}
            </p>
            {/* <Description level={level} /> */}
          </li>
        );
      })}
    </ul>
  );
};

export default SkillsList;
