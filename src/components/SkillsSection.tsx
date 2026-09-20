import AcademicBackground from "./AcademicBackground";
import { skillGroups } from "../data/skills";
import SkillMarquee from "./SkillMarquee";
import SkillCategory from "./SkillCategory";
import SectionLabel from "./SectionLabel";
const SkillsSection = () => {
  return (
    <section id="skills" className="skills wrap section">
      <SectionLabel number="03">Toolkit</SectionLabel>
      <SkillMarquee skills={skillGroups.flatMap((group) => group.skills)} />
      <div className="skill-categories">
        {skillGroups.map((group) => (
          <SkillCategory
            key={group.title}
            {...group}
            fullWidth={group.title === "Programming Languages"}
          />
        ))}
      </div>
      <AcademicBackground />
    </section>
  );
};

export default SkillsSection;
