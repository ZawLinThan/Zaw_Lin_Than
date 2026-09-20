import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import StatusBadge from '../components/StatusBadge'
import TechStack from '../components/TechStack'
import ProjectGallery from '../components/ProjectGallery'
import SectionHeading from '../components/SectionHeading'
import PageMeta from '../components/PageMeta'
import NotFoundPage from './NotFoundPage'
const ProjectDetailPage = () => {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  if (!project) return <NotFoundPage />
  return <article className="wrap page">
    <PageMeta title={project.title} description={project.summary} />
    <Link className="back-link" to="/projects">← All projects</Link>
    <SectionHeading label={project.category} title={project.title}>
      <p>{project.summary}</p>
    </SectionHeading>
    <div className="detail-grid">
      <div>
        <section className="detail-section">
          <h2>About the project</h2>
          <p>{project.description}</p>
        </section>
        <section className="detail-section">
          <h2>Key features & contributions</h2>
          <ul className="feature-list">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>
        </section>
      </div>
      <aside className="project-facts">
        <div>
          <h2>Status</h2>
          <StatusBadge status={project.status} />
          <p>{project.date}</p>
        </div>
        <div>
          <h2>Technologies & frameworks</h2>
          <TechStack items={project.stack} />
        </div>
        <div>
          <h2>Project website</h2>{project.websiteUrl ? <a className="button" href={project.websiteUrl} target="_blank" rel="noreferrer">Visit website ↗</a> : <p>A live website link hasn’t been added yet.</p>}</div>
      </aside>
    </div>
    <ProjectGallery screenshots={project.screenshots} />
  </article>
}

export default ProjectDetailPage
