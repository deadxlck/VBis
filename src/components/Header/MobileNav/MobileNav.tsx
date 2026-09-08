import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import css from "./MobileNav.module.css";

export default function MobileNav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* 1. The Hamburger Button (Kept in a high z-index container so it stays clickable) */}
      <div className={css.hamburger} style={{ zIndex: 100 }}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={24}
          color={isOpen ? "#000" : "#000"} // Optional: switches color if panel background is light
          rounded
          label="Show menu"
        />
      </div>

      {/* 2. Dimmed Background Overlay (Closes menu when clicked) */}
      {isOpen && <div onClick={() => setOpen(false)} className={css.overlay} />}

      {/* 3. The Slide-Out Panel */}
      <nav
        className={css.navigation}
        style={{
          // Smooth slide animation based on isOpen state
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* Links close the menu automatically when clicked */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          style={{ color: "#000", textDecoration: "none", fontSize: "1.2rem" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => setOpen(false)}
          style={{ color: "#000", textDecoration: "none", fontSize: "1.2rem" }}
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          style={{ color: "#000", textDecoration: "none", fontSize: "1.2rem" }}
        >
          Contact
        </Link>
      </nav>
    </>
  );
}
