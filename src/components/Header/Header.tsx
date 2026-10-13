import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import MobileNav from "./MobileNav/MobileNav";
import css from "./Header.module.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const location = useLocation();
  return (
    <header className={css.header}>
      <div className={css.inner}>
        <Link to="/" className={css.brand} aria-label="VBis — home">
          <img src={logo} alt="VBis" />
        </Link>
        <nav className={css.desktopNav} aria-label="Main navigation">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
        </nav>
        <MobileNav key={location.pathname} links={links} />
      </div>
    </header>
  );
}
