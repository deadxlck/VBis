import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import css from "./MobileNav.module.css";

type NavLink = { to: string; label: string };

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <div className={css.mobileNav}>
      <div className={css.menuButton}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={22} color="#f7f8f8" rounded label={isOpen ? "Close menu" : "Open menu"} />
      </div>
      <button className={`${css.backdrop} ${isOpen ? css.backdropVisible : ""}`} aria-label="Close menu" tabIndex={isOpen ? 0 : -1} onClick={() => setOpen(false)} />
      <nav id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!isOpen} className={`${css.navigation} ${isOpen ? css.navigationOpen : ""}`}>
        <span className={css.menuEyebrow}>Navigation</span>
        {links.map(({ to, label }) => <Link key={to} tabIndex={isOpen ? 0 : -1} to={to}>{label}<span aria-hidden="true">↗</span></Link>)}
        <p className={css.menuNote}>Let’s build something thoughtful.</p>
      </nav>
    </div>
  );
}
