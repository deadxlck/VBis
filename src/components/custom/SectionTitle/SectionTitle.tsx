import css from "./SectionTitle.module.css";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <h3 className={css.sectionTitle}>
      <span className={css.purpleBullet}></span>
      {title}
    </h3>
  );
}
