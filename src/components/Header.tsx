import { Link, NavLink } from 'react-router-dom'
export default function Header() {
  return <header className="site-header wrap">
<Link className="wordmark" to="/" aria-label="Zaw Lin Than home">ZLT<span>.</span>
</Link>
<nav aria-label="Main navigation">{[['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/experience', 'Experience'], ['/contact', 'Contact']].map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}</nav>
</header>
}
