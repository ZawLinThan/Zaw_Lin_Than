import type { Skill } from '../data/skills';
import SkillTile from './SkillTile';

const SkillCategory = ({ title, skills, fullWidth = false }: { title: string; skills: Skill[]; fullWidth?: boolean }) => (
  <section className={`skill-category${fullWidth ? " skill-category-wide" : ""}`}>
    <h2>{title}</h2>
    <ul className="skill-tiles">{skills.map(skill => <SkillTile key={skill.name} skill={skill} />)}</ul>
  </section>
);

export default SkillCategory;
