import { useState } from "react";
import SkillsList from "./SkillsList";
import Description from "./Description";

const DUMMY_SKILLS = [
  { id: "s1", name: "react", level: 20 },
  { id: "s12", name: "react", level: 40 },
  { id: "s2", name: "react", level: 60 },
  { id: "s3", name: "react", level: 10 },
  { id: "s4", name: "react", level: 30 },
  { id: "s5", name: "react", level: 50 },
  { id: "s6", name: "react", level: 70 },
  { id: "s7", name: "react", level: 80 },
];
const DUMMY_TALENTS = [
  { id: "t1", name: "communication", level: 80 },
  { id: "t12", name: "communication", level: 100 },
  { id: "t123", name: "communication", level: 30 },
];

const Skills = () => {
  const [list, setList] =
    useState<{ id: string; name: string; level: number }[]>(DUMMY_SKILLS);

  const btnStyle = ` uppercase border-b-2 border-primary px-2`;

  return (
    <div className="text-primary h-screen font-headlines flex flex-col">
      <h4 className="text-center text-3xl mb-2 border-b-4 border-primary w-4/5 mx-auto text-primary font-headlines">
        Skills and talents:
      </h4>
      <div className="flex justify-evenly my-4">
        <button
          className={`${btnStyle} ${list[0].id === DUMMY_SKILLS[0].id ? "bg-red-900 text-secondary" : ""}`}
          onClick={() => setList(DUMMY_SKILLS)}
        >
          Technical Skills
        </button>
        <button
          className={`${btnStyle} ${list[0].id === DUMMY_TALENTS[0].id ? "bg-red-900 text-secondary" : ""}`}
          onClick={() => setList(DUMMY_TALENTS)}
        >
          Soft Talents
        </button>
      </div>
      <Description />
      <SkillsList skills={list} />
    </div>
  );
};

export default Skills;
