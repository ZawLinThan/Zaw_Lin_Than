import { experience } from '../data/experience'
import TimelineItem from './TimelineItem'
import SectionLabel from './SectionLabel'

const ExperienceSection = () => (
  <section id="experience" className="experience wrap section">
    <SectionLabel number="05">Experience</SectionLabel>
    <div className="timeline">
      {experience.map(item => <TimelineItem key={item.title} {...item} />)}
    </div>
  </section>
)

export default ExperienceSection
