import { leadership } from '../data/experience'
import TimelineItem from './TimelineItem'
import SectionLabel from './SectionLabel'

const LeadershipSection = () => (
  <section id="leadership" className="experience wrap section">
    <SectionLabel number="04">Leadership & Community Involvements</SectionLabel>
    <div className="timeline">
      {leadership.map(item => <TimelineItem key={item.title} {...item} />)}
    </div>
  </section>
)

export default LeadershipSection
