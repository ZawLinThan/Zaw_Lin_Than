import Arrow from './Arrow'

const ContactSection = () => {
  return <section id="opportunities" className="opportunities wrap">
    <h1 className="section-label">
      <span>06</span> LET’S CONNECT</h1>
    <div className="opportunities-content">
      <div>
        <div className="availability">
          <i /> SEEKING INTERNSHIPS & CO-OPS</div>
        <h1>Ready to learn and contribute<span className="accent">.</span>
        </h1>
      </div>
      <p>I’m looking for opportunities to bring my curiosity and computer science education to real-world challenges.<br />
        <br />Interested in artificial intelligence, connected systems, and the problems in between.</p>
    </div>
    <div className="contact-links">
      <a className="button" href="mailto:zthan3@gatech.edu">zthan3@gatech.edu <Arrow />
      </a>
      <a href="https://github.com/ZawLinThan" target="_blank" rel="noreferrer">GitHub <Arrow />
      </a>
      <a href="/Zaw-Lin-Than-Resume.pdf" download>Download résumé ↓</a>
    </div>
    <p className="spoken-languages">English & Mandarin — proficient · Burmese — native</p>
  </section>
}

export default ContactSection
