import css from "./Card.module.css";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description?: string;
};

export default function Card({ icon, title, description }: CardProps) {
  return (
    <article className={css.infoCard}>
      <div className={css.infoCardIcon}>{icon}</div>
      <h3 className={css.infoCardTitle}>{title}</h3>
      {description && <p className={css.infoCardDescription}>{description}</p>}
    </article>
  );
}
