import { experience } from '../data/experience'
import TimelineItem from './TimelineItem'
export default function ExperienceSection() {
  return <section id="experience" className="experience wrap section">
    <div className="section-heading">
      <div>
        <div className="section-label">
          <span>04</span> EXPERIENCE & LEADERSHIP</div>
        <h1>Building with people.</h1>
      </div>
    </div>
    <div className="timeline">{experience.map(item => <TimelineItem key={item.title} {...item} />)}</div>
    <div className="honors">
      <h3>Honors & awards <span className="accent">↗</span>
      </h3>
      <ul>
        <li>3rd Place, Honors in Action Research Project <span>Phi Theta Kappa · NV/CA Region · 2026</span>
        </li>
        <li>Jack Kent Cooke Transfer Scholarship Semifinalist <span>Jack Kent Cooke Foundation · 2026</span>
        </li>
        <li>6th Place, AMATYC Student Math League <span>College level · Santa Monica College · 2026</span>
        </li>
      </ul>
    </div>
  </section>
}
