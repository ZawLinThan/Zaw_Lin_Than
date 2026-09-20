import SectionLabel from './SectionLabel'
const AboutSection = () => {
  return <section id="about" className="about wrap section">
    <SectionLabel number="01">About Me</SectionLabel>
    <div>
      {/* <h1>Learning how things think.<br />
        <span className="muted">Understanding how they connect.</span>
      </h1> */}
      <div className="about-body">
        <p>I’m pursuing a B.S. in Computer Science at Georgia Tech, concentrating in Artificial Intelligence and Information Internetworks. 
          Previously, in June 2026, I finished my Associate Degree in Computer Science at Santa Monica College with a 4.0 GPA.</p>
          <p>From AI research pipelines to real-time messaging, I enjoy turning ideas into working software. As a project manager at GT WebDev, I’m also leading a team building an AI study assistant. I’m seeking <span className="underline">an internship or co-op</span> where I can contribute and keep growing.</p>
      </div>
    </div>
  </section>
}

export default AboutSection
