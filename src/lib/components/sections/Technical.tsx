import SectionTitle from "lib/components/contents/SectionTitle";
import SkillItem from "lib/components/contents/SkillItem";

const Technical = () => {
  return (
    <div className="max-w-4xl p-4 text-justify">
      <SectionTitle title="Technical Skills" />
      <div className="flex max-w-[600px] flex-wrap justify-start gap-6 lg:justify-start">
        <SkillItem details="HTML5, CSS3 (+ SASS with SCSS)" />
        <SkillItem details="JavaScript, TypeScript" />
        <SkillItem details="React, NextJS (and related tools)" />
        <SkillItem details="UI libraries: Material, AntD, Chakra UI, TailwindCSS, etc" />
        <SkillItem details="Traditional SQL DBs, Java Spring/C# .NET (limited)" />
        <SkillItem details="VS Code, JetBrains IDEs, Git/SVN" />
      </div>
    </div>
  );
};

export default Technical;
