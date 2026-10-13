import type { IconType } from "react-icons";
import css from "./SkillCard.module.css";

interface SkillCardProps {
  icon: IconType;
  name: string;
}

export default function SkillCard({ icon: Icon, name }: SkillCardProps) {
  return (
    <article className={css.skillCard}>
      <div className={css.skillCardIcon}>
        <Icon />
      </div>

      <span className={css.skillCardName}>{name}</span>
    </article>
  );
}
