import { Link } from 'react-router-dom'
const Footer = () => {
  return <footer className="site-footer wrap">
    <Link className="wordmark" to="/">ZLT<span>.</span>
    </Link>
    <span>© {new Date().getFullYear()} Zaw Lin Than</span>
    <a href="https://github.com/ZawLinThan" target="_blank" rel="noreferrer">GitHub ↗</a>
    <a href="mailto:zthan3@gatech.edu">Email ↗</a>
  </footer>
}

export default Footer
