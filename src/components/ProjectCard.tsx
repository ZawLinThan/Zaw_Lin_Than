import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import StatusBadge from "./StatusBadge";
import TechStack from "./TechStack";
import Arrow from "./Arrow";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <Link
      className="project-card"
      to={`/projects/${project.slug}`}
      aria-label={`View ${project.title} project`}
    >
      <div className="project-filebar">
        <span aria-hidden="true">#</span>
        <span>{project.slug}</span>
        <span className="filebar-arrow" aria-hidden="true">
          ↗
        </span>
      </div>
      <div className="card-top">
        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <StatusBadge status={project.date} />
      </div>
      <p className="eyebrow">{project.category}</p>
      <h2>{project.title}</h2>
      <p>{project.summary}</p>
      <TechStack items={project.stack} />
      <span className="card-link">
        View project <Arrow />
      </span>
    </Link>
  );
};

export default ProjectCard;
