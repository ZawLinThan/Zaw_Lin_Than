import SectionLabel from "./SectionLabel";
const FocusSection = () => {
  return (
    <section id="focus" className="focus wrap section">
      <div className="section-heading">
        <div>
          <SectionLabel number="02">Areas of Focus</SectionLabel>
          <h3>Two Threads as a Connected Concentration.</h3>
        </div>
      </div>
      <div className="focus-grid">
        <article className="focus-card">
          <div className="card-top">
            <span className="card-icon" aria-hidden="true">
              ✳
            </span>
            <span>THREAD / 01</span>
          </div>
          <h3>Artificial Intelligence</h3>
          <p>
            Understanding how computational systems learn, reason, and use
            information to solve problems.
          </p>
          <div className="tags">
            <span>Intelligent systems</span>
            <span>Learning & reasoning</span>
          </div>
        </article>

        <article className="focus-card">
          <div className="card-top">
            <span className="card-icon network-icon" aria-hidden="true">
              ⌘
            </span>
            <span>THREAD / 02</span>
          </div>
          <h3>Information Internetworks</h3>
          <p>
            Exploring how information moves through networks and how connected
            systems work together.
          </p>
          <div className="tags">
            <span>Connected systems</span>
            <span>Information networks</span>
          </div>
        </article>
        <a
          href="https://www.cc.gatech.edu/threads-better-way-learn-computing"
          className="text-link"
          target="_blank"
        >
          More Information on Threads ↗
        </a>
      </div>
    </section>
  );
};

export default FocusSection;
