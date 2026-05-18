export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
};

export type Skill = {
  name: string;
  level: number;
  category: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};
