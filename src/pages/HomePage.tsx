import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProjectGrid from '../components/ProjectGrid'
import PageMeta from '../components/PageMeta'
import { projects } from '../data/projects'
export default function HomePage() {
  return <>
    <PageMeta title="Computer Science at Georgia Tech" description="AI and full-stack projects by Zaw Lin Than. Seeking internships and co-ops." />
    <Hero />
    <section className="wrap section">
      <div className="section-heading">
        <div>
          <h2>Latest Projects</h2>
        </div>
        <Link className="text-link" to="/projects">All projects ↗</Link>
      </div>
      <ProjectGrid projects={projects.slice(0, 2)} />
    </section>
  </>
}
