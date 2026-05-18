import { Experience, Project, Skill, Testimonial, PricingTier } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'Acme Corp',
    period: '2022 – Present',
    description: 'Led the frontend architecture for a SaaS platform serving 100k+ users. Migrated the codebase from Vue 2 to React 18, improving performance by 40%.',
    tags: ['React', 'TypeScript', 'GraphQL', 'AWS'],
  },
  {
    id: '2',
    role: 'Full-Stack Developer',
    company: 'Startup XYZ',
    period: '2020 – 2022',
    description: 'Built and maintained multiple full-stack features for a fintech product. Owned the entire onboarding flow from design to deployment.',
    tags: ['Node.js', 'React', 'PostgreSQL', 'Docker'],
  },
  {
    id: '3',
    role: 'Junior Developer',
    company: 'Agency ABC',
    period: '2018 – 2020',
    description: 'Developed client websites and web apps for a diverse range of industries. Gained experience in agile workflows and client communication.',
    tags: ['JavaScript', 'HTML/CSS', 'WordPress', 'PHP'],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'DevFlow',
    description: 'A developer productivity tool with Kanban boards, Git integration, and AI-powered task suggestions.',
    tags: ['React', 'Node.js', 'OpenAI', 'PostgreSQL'],
  },
  {
    id: '2',
    title: 'PulseMetrics',
    description: 'Real-time analytics dashboard for e-commerce stores with live data streaming and custom report builder.',
    tags: ['Next.js', 'WebSockets', 'D3.js', 'Redis'],
  },
  {
    id: '3',
    title: 'AuthKit',
    description: 'Open-source authentication library for React apps — supports OAuth, magic links, and passkeys.',
    tags: ['TypeScript', 'React', 'OAuth 2.0', 'WebAuthn'],
  },
  {
    id: '4',
    title: 'Cascade UI',
    description: 'A themeable, accessible component library built with Radix UI primitives and CSS variables.',
    tags: ['React', 'Radix UI', 'Storybook', 'CSS Modules'],
  },
];

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'CSS / Tailwind', level: 88, category: 'Frontend' },
  { name: 'Node.js', level: 82, category: 'Backend' },
  { name: 'PostgreSQL', level: 75, category: 'Backend' },
  { name: 'Docker', level: 70, category: 'DevOps' },
  { name: 'AWS', level: 68, category: 'DevOps' },
  { name: 'GraphQL', level: 78, category: 'Backend' },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Acme Corp',
    quote: 'Alex transformed our frontend codebase. The performance improvements alone saved us thousands in infrastructure costs.',
  },
  {
    id: '2',
    name: 'Marcus Rivera',
    role: 'Product Manager',
    company: 'Startup XYZ',
    quote: 'Incredibly talented developer with an eye for design. Delivered every feature on time and always went the extra mile.',
  },
  {
    id: '3',
    name: 'Emily Watson',
    role: 'Founder',
    company: 'TechVentures',
    quote: 'If you want someone who truly understands both the technical and business sides of product development, Alex is your person.',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for side projects and indie hackers.',
    features: ['Up to 3 projects', '5GB storage', 'Community support', 'Basic analytics'],
    cta: 'Get started free',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For professionals and growing teams.',
    features: ['Unlimited projects', '50GB storage', 'Priority support', 'Advanced analytics', 'Custom domains', 'Team collaboration'],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large teams with advanced needs.',
    features: ['Everything in Pro', 'Unlimited storage', 'Dedicated support', 'SLA guarantee', 'SSO / SAML', 'Custom integrations'],
    cta: 'Contact sales',
  },
];
