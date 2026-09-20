import { Link } from "react-router-dom";
import ActionIcon from "./ActionIcon";

const HomeActions = () => {
  return (
    <div className="home-actions">
      <div className="home-actions-primary">
        <Link className="home-action home-action-projects" to="/projects">
          <span>Explore my projects</span>
          <ActionIcon name="arrow" />
        </Link>
        <a
          className="home-action home-action-resume"
          href="/Zaw-Lin-Than-Resume.pdf"
        >
          <span>Download résumé</span>
          <ActionIcon name="download" />
        </a>
      </div>
      <div className="home-actions-social" aria-label="Social profiles">
        <a
          className="social-action"
          href="https://www.linkedin.com/in/zaw-lin-than-88541b192"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ActionIcon name="linkedin" />
          <span>My LinkedIn</span>
          <ActionIcon name="arrow" />
        </a>
        <a
          className="social-action"
          href="https://github.com/ZawLinThan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ActionIcon name="github" />
          <span>My GitHub</span>
          <ActionIcon name="arrow" />
        </a>
      </div>
    </div>
  );
};

export default HomeActions;
