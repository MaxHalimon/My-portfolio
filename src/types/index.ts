export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
