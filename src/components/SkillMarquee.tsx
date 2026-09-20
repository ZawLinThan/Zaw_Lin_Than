import { useState } from 'react';
import type { Skill } from '../data/skills';
import SkillTile from './SkillTile';

const SkillMarquee = ({ skills }: { skills: Skill[] }) => {
  const [paused, setPaused] = useState(false);

  return (
    <div className="skill-marquee">
      <div className="marquee-toolbar">
        <span className="eyebrow">My stack, in motion</span>
        <button className="marquee-control" onClick={() => setPaused(value => !value)} aria-pressed={paused}>
          {paused ? 'Resume animation' : 'Pause animation'}
        </button>
      </div>
      <div className={`marquee-viewport${paused ? ' is-paused' : ''}`}>
        <div className="marquee-track">
          <ul className="marquee-group" aria-label="Technology stack">{skills.map(skill => <SkillTile key={skill.name} skill={skill} />)}</ul>
          <ul className="marquee-group marquee-copy" aria-hidden="true">{skills.map(skill => <SkillTile key={skill.name} skill={skill} />)}</ul>
        </div>
      </div>
    </div>
  );
};

export default SkillMarquee;
