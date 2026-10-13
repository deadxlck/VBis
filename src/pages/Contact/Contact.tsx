import { FaGithub, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import SectionTitle from "../../components/custom/SectionTitle/SectionTitle";
import css from "../Pages.module.css";

export default function Contact() {
  return (
    <div className={css.page}>
      <section className={css.pageHero}>
        <div className={css.container}>
          <SectionTitle title="Get in touch" />
          <h1>
            Let’s make
            <br />
            <span>something useful.</span>
          </h1>
          <p>
            Have a project, an opportunity, or just want to say hello? I’d be
            happy to hear from you.
          </p>
        </div>
      </section>
      <section className={css.container + " " + css.contactGrid}>
        <div className={css.contactCopy}>
          <span className={css.kicker}>START A CONVERSATION</span>
          <h2>Tell me a little about what you have in mind.</h2>
          <p>
            Email is the best way to reach me. I’m open to discussing new
            opportunities, collaborations, and interesting ideas.
          </p>
          <div className={css.emailCard}>
            <div className={css.emailIcon}>
              <FaEnvelope />
            </div>
            <div>
              <span>Drop me a line</span>
              <a href="mailto:vbihun269@icloud.com">vbihun269@icloud.com</a>
            </div>
          </div>
        </div>
        <aside className={css.socialPanel}>
          <h3>Find me online</h3>
          <p>Connect with me or follow along with what I’m working on.</p>
          <div className={css.socialLinks}>
            <a
              href="https://github.com/deadxlck"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3BJ5QvwDVvRYqv5z7GMnWVrA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn /> LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://t.me/kkvaldys"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane /> Telegram <span aria-hidden="true">↗</span>
            </a>
          </div>
        </aside>
      </section>
    </div>
  );
}
