import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="site-header wrap">
      <Link className="wordmark" to="/" aria-label="Zaw Lin Than home">
        <span aria-hidden="true">&lt;</span>ZLT<span aria-hidden="true"> /&gt;</span>
      </Link>
      <nav aria-label="Main navigation">
        {[
          ["/", "Home"],
          ["/about", "About"],
          ["/projects", "Projects"],
          ["/experience", "Experience"],
          ["/contact", "Contact"],
        ].map(([to, label]) => (
          <NavLink key={to} to={to} end={to === "/"}>
            <span className="nav-path" aria-hidden="true">/</span>{label.toLowerCase()}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
