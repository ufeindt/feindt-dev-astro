import _projects from "./projects.yml";
import _skills from "./skills.yml";
import _socials from "./socials.yml";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    live: string;
    src: string;
  };
  featured: boolean;
};

type Skill = {
  category: string;
  items: string[];
};

type Social = {
  name: string;
  link: string;
  icon: string;
};

export const config = {
  name: "Ulrich Feindt",
  title: "Full Stack Developer & Proplem Solver",
};

export const projects: Project[] = _projects;
export const skills: Skill[] = _skills;
export const socials: Social[] = _socials;
