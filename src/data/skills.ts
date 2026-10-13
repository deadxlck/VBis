import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
}

export const skills: Skill[] = [
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Express.js",
    icon: SiExpress,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Prisma",
    icon: SiPrisma,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
];
