import SectionLabel from "./SectionLabel";
import Arrow from "./Arrow";

const ContactSection = () => {
  return (
    <section id="opportunities" className="opportunities wrap">
      <SectionLabel number="06">Contact Me</SectionLabel>
      <div className="opportunities-content">
        <div>
          <div className="availability">
            <i /> SEEKING INTERNSHIPS & CO-OPS
          </div>
          <h1>
            Let's work together<span className="accent">.</span>
          </h1>
        </div>
        <p>
          I’m looking for opportunities to bring my curiosity and computer
          science education to real-world challenges.
          <br />
          <br />
          Interested in artificial intelligence, connected systems, and the
          problems in between.
        </p>
      </div>
      <div className="contact-links">
        <a className="button" href="mailto:zthan3@gatech.edu">
          zthan3@gatech.edu <Arrow />
        </a>
        <a
          href="https://github.com/ZawLinThan"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <Arrow />
        </a>
        <a
          href="https://www.linkedin.com/in/zaw-lin-than-88541b192"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <Arrow />
        </a>
        <a href="/Zaw-Lin-Than-Resume.pdf" >
          Download résumé ↓
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
