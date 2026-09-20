import HomeActions from "./HomeActions";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero wrap">
      <div>
        <p className="hero-kicker"><span aria-hidden="true">~/</span> ZAW LIN THAN · DEVELOPER PORTFOLIO</p>
        <p className="terminal-command"><span aria-hidden="true">❯</span> whoami</p>
        <h1>
          Hi, I’m
          <br />
          Zaw Lin Than<span className="accent">.</span>
        </h1>
        <p className="hero-lead">
          Building intelligent tools.
          <br />
          Connecting ideas to reality.
        </p>{" "}
        {/* Need to think if to remove or not */}
        <p className="hero-description">
          I build AI tools and full-stack applications.
        </p>{" "}
        {/* Add some info to this sentence*/}
        <HomeActions />
      </div>
      <aside className="profile-panel">
        <div className="panel-titlebar"><span className="panel-dots" aria-hidden="true"><i /><i /><i /></span><span>developer.ts</span><span aria-hidden="true">{"{ }"}</span></div>
        <span className="availability">● Open to internships & co-ops</span>
        <dl>
          <div>
            <dt>Education</dt>
            <dd>Georgia Institute of Technology</dd>
          </div>
          <div>
            <dt> Major </dt>
            <dd> Computer Science</dd>
          </div>
          <div>
            <dt> Concentration</dt>
            <dd> Artificial Intelligence & Information Internetwork</dd>
          </div>
          <div>
            <dt> Student Status</dt>
            <dd> Junior </dd>
          </div>
          <div>
            <dt>Graduation</dt>
            <dd>Expected May 2028</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>Atlanta, Georgia</dd>
          </div>
        </dl>
        <Link to="/about" className="text-link">
          More about me ↗
        </Link>
      </aside>
    </section>
  );
};

export default Hero;
