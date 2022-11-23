import SectionTitle from "lib/components/contents/SectionTitle";
import SkillItem from "lib/components/contents/SkillItem";

const Technical = () => {
  return (
    <div className="max-w-4xl p-4">
      <SectionTitle title="Technical Skills" />
      <div className="flex flex-col gap-6 sm:items-center">
        <SkillItem details="HTML5, CSS3 (+SASS using SCSS)" />
        <SkillItem details="JavaScript, TypeScript" />
        <SkillItem details="React, NextJS (and related libaries)" />
        <SkillItem details="UI libraries: Material, AntD, Chakra UI, TailwindCSS, etc" />
        <SkillItem details="Traditional SQL DBs, Java Spring Boot/C# ASP.NET (limited)" />
        <SkillItem details="VS Code, JetBrains IDEs, Git/Subversion" />
      </div>
    </div>
  );
};

export default Technical;
