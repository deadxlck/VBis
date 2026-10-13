import { FaShoppingBag, FaChartLine, FaLayerGroup } from "react-icons/fa";
import SectionTitle from "../../components/custom/SectionTitle/SectionTitle";
import css from "../Pages.module.css";

const focusAreas = [
  { icon: <FaShoppingBag />, label: "E-commerce", title: "Online storefronts", description: "Clear product discovery, smooth shopping flows, and responsive experiences that help customers get where they need to go.", tags: ["React", "TypeScript", "Node.js"], art: css.projectArtOne },
  { icon: <FaChartLine />, label: "Data & tools", title: "Product dashboards", description: "Useful interfaces that bring information together and make complex workflows easier to understand.", tags: ["React", "API design", "PostgreSQL"], art: css.projectArtTwo },
  { icon: <FaLayerGroup />, label: "Full stack", title: "Web applications", description: "Thoughtful products built from the user interface through to the underlying services and data.", tags: ["Next.js", "Prisma", "Docker"], art: css.projectArtThree },
];

export default function Projects() {
  return (
    <div className={css.page}>
      <section className={css.pageHero}><div className={css.container}><SectionTitle title="Areas of focus" /><h1>Good ideas,<br /><span>built with care.</span></h1><p>A look at the kinds of digital products and experiences I enjoy bringing to life.</p></div></section>
      <section className={css.container + " " + css.contentSection}>
        <span className={css.kicker}>AREAS OF FOCUS</span>
        <div className={css.projectGrid}>{focusAreas.map((item) => <article className={css.projectCard} key={item.title}><div className={`${css.projectArt} ${item.art}`}>{item.icon}</div><div className={css.projectInfo}><span>{item.label}</span><h2>{item.title}</h2><p>{item.description}</p><ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div>
      </section>
    </div>
  );
}
