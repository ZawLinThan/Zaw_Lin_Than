import SectionHeading from "../components/SectionHeading";
import ProjectGrid from "../components/ProjectGrid";
import PageMeta from "../components/PageMeta";
import { projects } from "../data/projects";

const ProjectsPage = () => {
  return (
    <div className="wrap page">
      <PageMeta
        title="Projects"
        description="Explore seven projects in AI, full-stack development, and algorithms."
      />
      <SectionHeading label="PROJECTS/" title="Things I’ve built." />
      <ProjectGrid projects={projects} />
    </div>
  );
};

export default ProjectsPage;
