import './App.css'

const Arrow = () => <span aria-hidden="true">↗</span>

function Network() {
  const nodes = [{x:95,y:170},{x:180,y:80},{x:190,y:270},{x:300,y:165},{x:345,y:60},{x:390,y:300},{x:495,y:140},{x:510,y:255}]
  const edges = [[0,1],[0,2],[0,3],[1,3],[1,4],[2,3],[2,5],[3,4],[3,5],[3,6],[4,6],[5,6],[5,7],[6,7]]
  return <div className="network-panel" aria-label="Diagram of interconnected nodes representing artificial intelligence and information networks">
    <div className="diagram-top"><span>EXPLORING THE CONNECTIONS</span><span className="cross">+</span></div>
    <svg viewBox="0 0 600 360" role="img" aria-label="An interconnected network with intelligence at its center">
      <defs><pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#34424b"/></pattern><radialGradient id="glow"><stop stopColor="#c9ac65" stopOpacity=".14"/><stop offset="1" stopColor="#c9ac65" stopOpacity="0"/></radialGradient></defs>
      <rect width="600" height="360" fill="url(#dots)"/><circle cx="300" cy="165" r="150" fill="url(#glow)"/>
      {edges.map(([a,b],i)=><line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke={a===3||b===3?'#b59b61':'#46535c'} strokeOpacity=".65"/>)}
      {nodes.map((n,i)=><g key={i}><circle cx={n.x} cy={n.y} r={i===3?19:9} fill="#10202b" stroke={i===3?'#dfc17d':'#8b999f'} /><circle cx={n.x} cy={n.y} r={i===3?6:3} fill={i===3?'#dfc17d':'#8b999f'}/></g>)}
      <text x="300" y="211" textAnchor="middle">INTELLIGENCE</text><text x="95" y="204" textAnchor="middle">DATA</text><text x="492" y="114" textAnchor="middle">NETWORKS</text>
    </svg>
    <div className="diagram-bottom"><span><i/> Two threads. One connected perspective.</span><span>01 / 02</span></div>
  </div>
}

function App() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header wrap"><a className="wordmark" href="#" aria-label="Zaw Lin Than home">zlt<span>.</span></a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#focus">My focus</a><a className="nav-contact" href="#opportunities">Let’s connect <Arrow/></a></nav></header>
    <main id="main">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy"><div className="eyebrow"><span className="gold-line"/> COMPUTER SCIENCE @ GEORGIA TECH</div><h1 id="hero-title">Hi, I’m<br/>Zaw Lin Than<span className="gold">.</span></h1><p className="hero-lead">Curious about intelligence.<br/>Inspired by connection.</p><p className="hero-description">I’m a computer science student exploring artificial intelligence and the networks that connect our world.</p><a href="#focus" className="button">Explore my focus <span aria-hidden="true">↓</span></a><a className="text-link" href="#about">A little about me <Arrow/></a></div>
        <div className="hero-visual"><div className="availability"><i/> OPEN TO INTERNSHIPS & CO-OPS</div><Network/><div className="visual-caption"><span>AI × INFORMATION INTERNETWORKS</span><span>ATLANTA, GA</span></div></div>
      </section>
      <div className="facts wrap"><div><span className="fact-label">CURRENTLY</span><span>Computer Science student</span></div><div><span className="fact-label">AT</span><span>Georgia Institute of Technology</span></div><div><span className="fact-label">LOOKING FOR</span><span>Internships & co-ops <span className="gold">↗</span></span></div></div>
      <section id="about" className="about wrap section"><div className="section-label"><span>01</span> ABOUT ME</div><div><h2>Learning how things think.<br/><span className="muted">Understanding how they connect.</span></h2><div className="about-body"><p>I’m studying Computer Science at Georgia Tech, concentrating in Artificial Intelligence and Information Internetworks.</p><p>My interests sit at the intersection of intelligent systems and connected technology. I’m looking for an internship or co-op where I can put my learning into practice, contribute to a team, and keep growing.</p></div></div></section>
      <section id="focus" className="focus wrap section"><div className="section-heading"><div><div className="section-label"><span>02</span> AREAS OF FOCUS</div><h2>Two threads.<br/>A connected perspective.</h2></div><p>Exploring the ideas behind smarter systems<br className="desktop-break"/> and a more connected world.</p></div><div className="focus-grid"><article className="focus-card"><div className="card-top"><span className="card-icon" aria-hidden="true">✳</span><span>THREAD / 01</span></div><h3>Artificial Intelligence</h3><p>Understanding how computational systems learn, reason, and use information to solve problems.</p><div className="tags"><span>Intelligent systems</span><span>Learning & reasoning</span></div></article><article className="focus-card"><div className="card-top"><span className="card-icon network-icon" aria-hidden="true">⌘</span><span>THREAD / 02</span></div><h3>Information Internetworks</h3><p>Exploring how information moves through networks and how connected systems work together.</p><div className="tags"><span>Connected systems</span><span>Information networks</span></div></article></div></section>
      <section id="opportunities" className="opportunities wrap"><div className="section-label"><span>03</span> WHAT’S NEXT</div><div className="opportunities-content"><div><div className="availability"><i/> SEEKING INTERNSHIPS & CO-OPS</div><h2>Ready to learn.<br/>Ready to contribute<span className="gold">.</span></h2></div><p>I’m looking for opportunities to bring my curiosity and computer science education to real-world challenges.<br/><br/>Interested in artificial intelligence, connected systems, and the problems in between.</p></div></section>
    </main>
    <footer className="wrap"><a className="wordmark" href="#">zlt<span>.</span></a><span>© {new Date().getFullYear()} Zaw Lin Than</span><a href="#">Back to top ↑</a></footer>
  </>
}
export default App
