import { Link } from "react-router-dom";
import { FaCode, FaLightbulb } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import SectionTitle from "../../components/custom/SectionTitle/SectionTitle";
import Card from "../../components/ui/Card/Card";
import { skills } from "../../data/skills";
import css from "../Pages.module.css";

const strengths = [
  {
    icon: <FaCode />,
    title: "Clean code",
    description: "Writing maintainable, readable and scalable code.",
  },
  {
    icon: <MdSpeed />,
    title: "Performance",
    description: "Building fast and optimized applications.",
  },
  {
    icon: <IoPhonePortraitOutline />,
    title: "Responsive",
    description: "Creating seamless experiences on every screen.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem solver",
    description: "Turning complex challenges into simple solutions.",
  },
];

export default function About() {
  return (
    <div className={css.page}>
      <section className={css.pageHero}>
        <div className={css.container}>
          <SectionTitle title="A little about me" />
          <h1>
            Thoughtful code.
            <br />
            <span>Useful experiences.</span>
          </h1>
          <p>
            I’m Vladyslav, a fullstack developer who enjoys turning ideas into
            polished digital products.
          </p>
        </div>
      </section>
      <section className={css.container + " " + css.contentSection}>
        <div className={css.aboutGrid}>
          <div>
            <span className={css.kicker}>THE PERSON BEHIND THE CODE</span>
            <h2>Curiosity drives better work.</h2>
          </div>
          <div className={css.bodyCopy}>
            <p>
              I enjoy working across the full stack: shaping clear interfaces,
              building dependable features, and connecting the details that make
              an application feel complete.
            </p>
            <p>
              My approach is grounded in thoughtful problem solving, readable
              code, and a steady curiosity for tools and techniques that make
              the web better to use.
            </p>
            <Link className={css.inlineLink} to="/contact">
              Let’s start a conversation <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className={css.strengthGrid}>
          {strengths.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>
      <section className={css.skillsBand}>
        <div className={css.container}>
          <SectionTitle title="Tools of the trade" />
          <h2>Technology is a means to make good ideas real.</h2>
          <div className={css.skillList}>
            {skills.map(({ name, icon: Icon }) => (
              <span className={css.skillTag} key={name}>
                <Icon />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
