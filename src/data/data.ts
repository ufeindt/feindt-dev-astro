import _projects from "./projects.yml";
import _skills from "./skills.yml";
import _socials from "./socials.yml";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
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

export const projects: Project[] = _projects;
export const skills: Skill[] = _skills;
export const socials: Social[] = _socials;
