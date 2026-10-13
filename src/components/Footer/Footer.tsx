import { Link } from "react-router-dom";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.inner}>
        <div className={css.cta}>
          <div>
            <span className={css.eyebrow}>LET’S WORK TOGETHER</span>
            <h2>Have a project in mind?</h2>
            <p>
              I’m always open to discussing new opportunities and interesting
              ideas.
            </p>
          </div>
          <Link className={css.button} to="/contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className={css.bottom}>
          <Link to="/" className={css.brand}>
            Vladyslav Bihun<span>.</span>
          </Link>
          <span>Designed with care · © {new Date().getFullYear()}</span>
          <Link to="/contact">Get in touch</Link>
        </div>
      </div>
    </footer>
  );
}
