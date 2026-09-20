import type { Skill } from "../data/skills";

const SkillTile = ({ skill }: { skill: Skill }) => (
  <li className="skill-tile">
    <span className="skill-symbol" aria-hidden="true">
      {skill.icon ? (
        <img
          src={`/skill-icons/${skill.icon}.svg`}
          alt=""
          width="32"
          height="32"
        />
      ) : (
        skill.symbol
      )}
    </span>
    <span className="skill-details">
      <span>{skill.name}</span>
    </span>
  </li>
);

export default SkillTile;
