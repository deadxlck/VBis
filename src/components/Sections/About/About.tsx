import { Link } from "react-router-dom";
import css from "./About.module.css";

//ui imports
import Card from "../../ui/Card/Card";
import SectionTitle from "../../custom/SectionTitle/SectionTitle";

// data imports
import { cards } from "../../../data/cards";

export default function About() {
  return (
    <section id="about" className={css.section}>
      <SectionTitle title="About Me" />
      <div className={css.intro}>
        <h2>Passionate about code and solving problems</h2>
        <p>
          I’m a fullstack developer who loves turning ideas into useful digital
          products. I enjoy working across frontend and backend, learning new
          tools, and improving every detail along the way.
        </p>
      </div>
      <div>
        <div className={css.features}>
          {cards.map((card) => (
            <Card
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className={css.actions}>
          <Link className={css.button} to="/about">
            More about me <span aria-hidden="true"> ↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
