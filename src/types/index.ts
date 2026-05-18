export type NavLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  color: string;
};

export type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};
