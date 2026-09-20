import SectionHeading from '../components/SectionHeading'
import ProjectGrid from '../components/ProjectGrid'
import PageMeta from '../components/PageMeta'
import { projects } from '../data/projects'
const ProjectsPage = () => {
  return <div className="wrap page">
    <PageMeta title="Projects" description="Explore seven projects in AI, full-stack development, and algorithms." />
    <SectionHeading label="PROJECTS / 01—07" title="Things I’ve built.">
      <p>AI assistants, connected applications, and algorithms. Explore the thinking and technology behind each project.</p>
    </SectionHeading>
    <ProjectGrid projects={projects} />
  </div>
}

export default ProjectsPage
