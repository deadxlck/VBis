import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.inner}>
        <div className={css.copy}>
          <div className={css.identity}>
            <span className={css.purpleBullet} /> Vladyslav Bihun
          </div>
          <div className={css.statusBadge}>
            <span className={css.grBullet} /> Available for work
          </div>
          <h1>
            I build modern web applications <span>that matter.</span>
          </h1>
          <p className={css.intro}>
            Fullstack developer focused on creating fast, scalable and
            user-friendly web applications with clean code and modern
            technologies.
          </p>
          <div className={css.btns}>
            <Link className={css.mainBtn} to="/projects">
              View my work <span aria-hidden="true">↗</span>
            </Link>
            <Link className={css.secondaryBtn} to="/contact">
              Contact me
            </Link>
          </div>
          <ul className={css.socialsList} aria-label="Social links">
            <li>
              <a
                aria-label="GitHub"
                href="https://github.com/deadxlck"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/public-profile/settings/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3BJ5QvwDVvRYqv5z7GMnWVrA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                aria-label="Telegram"
                href="https://t.me/kkvaldys"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a aria-label="Email" href="mailto:vbihun269@icloud.com">
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
        <div className={css.art} aria-hidden="true">
          <div className={css.orbit}>
            <span className={css.orbitDot} />
            <span className={css.codeMark}>&lt;/&gt;</span>
            <span className={css.artCaption}>
              CRAFTING FOR THE WEB
              <br />
              ONE LINE AT A TIME
            </span>
          </div>
        </div>
        <a className={css.scrollCue} href="#about">
          <span /> Scroll to explore
        </a>
      </div>
    </section>
  );
}
