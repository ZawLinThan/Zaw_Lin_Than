import { Link } from 'react-router-dom'
export default function Hero() {
  return <section className="hero wrap">
<div>
<p className="eyebrow">COMPUTER SCIENCE / GEORGIA TECH</p>
<h1>Hi, I’m<br />Zaw Lin Than<span className="accent">.</span>
</h1>
<p className="hero-lead">Building intelligent tools.<br />Connecting ideas to reality.</p>
<p className="hero-description">I build AI tools and full-stack applications, with a focus on Artificial Intelligence and Information Internetworks.</p>
<div className="actions">
<Link className="button" to="/projects">Explore my projects ↗</Link>
<a className="text-link" href="/Zaw-Lin-Than-Resume.pdf" download>Download résumé ↓</a>
</div>
</div>
<aside className="profile-panel">
<span className="availability">● Open to internships & co-ops</span>
<div className="profile-monogram" aria-hidden="true">ZLT<span>_</span>
</div>
<dl>
<div>
<dt>Education</dt>
<dd>Georgia Institute of Technology</dd>
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
<Link to="/about" className="text-link">More about me ↗</Link>
</aside>
</section>
}
