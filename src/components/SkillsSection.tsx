import SectionLabel from './SectionLabel'
const SkillsSection = () => {
  return <section id="skills" className="skills wrap section">
    <SectionLabel number="03">Toolkit</SectionLabel>
    <div className="skill-grid">
      <div>
        <h3>Programming Languages</h3>
        <p>Python · C++ / C · Java · JavaScript · TypeScript · SQL</p>
      </div>
      <div>
        <h3>AI & data</h3>
        <p>Scikit-learn · Pandas · NumPy · Jupyter · Matplotlib</p>
      </div>
      <div>
        <h3>Web & infrastructure</h3>
        <p>React · Node.js · Next.js · TanStack Query · Zustand · PostgreSQL · Drizzle ORM · Firebase · Git</p>
      </div>
    </div>
    <div className="coursework">
      <h3>Completed Coursework</h3>
      <p>Data Structures & Algorithms · Linear Algebra · Discrete Math · Multivariable Calculus · Digital System Design</p>
    </div>
    <div className='coursework'>
      <h3> Spoken Languages </h3>
      <p> English & Mandarin — proficient · Burmese — native </p>
    </div>
  </section>
}

export default SkillsSection
