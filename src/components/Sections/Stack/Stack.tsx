import SkillCard from "../../ui/SkillCard/SkillCard";

//ui imports
import css from "./Stack.module.css";
import SectionTitle from "../../custom/SectionTitle/SectionTitle";

// data imports
import { skills } from "../../../data/skills";

export default function Stack() {
  return (
    <section className={css.section}>
      <SectionTitle title="Tech Stack" />
      <h2 className={css.heading}>Technologies I work with</h2>
      <div className={css.skills}>
        {skills.map((skill) => (
          <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
