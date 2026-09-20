import { skillGroups } from '../data/skills';
import SkillMarquee from './SkillMarquee';
import SkillCategory from './SkillCategory';
import SectionLabel from "./SectionLabel";
const SkillsSection = () => {
  return (
    <section id="skills" className="skills wrap section">
      <SectionLabel number="03">Toolkit</SectionLabel>
      <SkillMarquee skills={skillGroups.flatMap(group => group.skills)} />
      <div className="skill-categories">
        {skillGroups.map(group => <SkillCategory key={group.title} {...group} fullWidth={group.title === 'Programming Languages'} />)}
      </div>
      <div className="coursework">
        <h3>Completed Coursework</h3>
        <p>
          Data Structures & Algorithms · Linear Algebra · Discrete Math ·
          Multivariable Calculus · Digital System Design
        </p>
      </div>
      <div className="coursework">
        <h3> Spoken Languages </h3>
        <p> English & Mandarin — proficient · Burmese — native </p>
      </div>
    </section>
  );
};

export default SkillsSection;
