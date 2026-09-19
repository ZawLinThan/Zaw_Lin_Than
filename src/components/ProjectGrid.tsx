import type { Project } from '../data/projects'
import ProjectCard from './ProjectCard'
export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
}
