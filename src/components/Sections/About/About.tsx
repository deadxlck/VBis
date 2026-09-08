import { FaCode, FaLightbulb } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";

import css from "./About.module.css";

import Card from "../../ui/Card/Card";

const cards = [
  {
    icon: <FaCode />,
    title: "Clean Code",
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
    description: "Creating seamless user experiences on any device.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solver",
    description: "Turning complex challenges into simple solutions.",
  },
];

export default function About() {
  return (
    <section>
      <h3>About Me</h3>
      <div>
        <h2>Passionate about code and solving problems</h2>
        <p>
          I'm a fullstack developer who lovesturning ideas into real digital
          products. I enjoy working with both frontend and backend, always
          learning something new and impoving my skills
        </p>
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
        <button>Download CV</button>
      </div>
    </section>
  );
}
