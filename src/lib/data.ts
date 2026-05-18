import type { Experience, Project, Skill, Testimonial, PricingPlan } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Senior Full-Stack Engineer',
    company: 'TechCorp Inc.',
    period: '2022 – Present',
    description: 'Led development of a SaaS platform serving 100k+ users. Architected microservices, improved performance by 40%, and mentored a team of 5 engineers.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'TypeScript'],
  },
  {
    id: '2',
    role: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: '2020 – 2022',
    description: 'Built the core product from scratch using modern web technologies. Shipped 3 major features per quarter and reduced load times by 60%.',
    tags: ['Next.js', 'GraphQL', 'MongoDB', 'GCP'],
  },
  {
    id: '3',
    role: 'Frontend Developer',
    company: 'Agency Co.',
    period: '2018 – 2020',
    description: 'Delivered pixel-perfect UIs for 15+ client projects across e-commerce, fintech, and media verticals.',
    tags: ['React', 'Vue.js', 'SCSS', 'Figma'],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A fully featured e-commerce solution with inventory management, Stripe payments, and real-time analytics dashboard.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
  },
  {
    id: '2',
    title: 'DevOps Dashboard',
    description: 'Internal tool for monitoring CI/CD pipelines, server health, and deployment statuses across 20+ microservices.',
    tags: ['React', 'Node.js', 'Docker', 'Grafana'],
  },
  {
    id: '3',
    title: 'AI Writing Assistant',
    description: 'Browser extension that integrates GPT-4 into any text field, with custom prompts and tone adjustment.',
    tags: ['TypeScript', 'OpenAI API', 'Chrome Extensions'],
  },
  {
    id: '4',
    title: 'Open-Source UI Kit',
    description: 'A themeable React component library with 60+ components, full accessibility support, and 2k+ GitHub stars.',
    tags: ['React', 'Storybook', 'CSS Modules', 'Rollup'],
  },
];

export const skills: Skill[] = [
  { name: 'TypeScript', level: 95, category: 'Languages' },
  { name: 'JavaScript', level: 98, category: 'Languages' },
  { name: 'Python', level: 75, category: 'Languages' },
  { name: 'React', level: 97, category: 'Frontend' },
  { name: 'Next.js', level: 90, category: 'Frontend' },
  { name: 'CSS / Tailwind', level: 92, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'GraphQL', level: 82, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Backend' },
  { name: 'Docker / K8s', level: 78, category: 'DevOps' },
  { name: 'AWS', level: 75, category: 'DevOps' },
  { name: 'CI/CD', level: 85, category: 'DevOps' },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Veritas Labs',
    content: 'Alex delivered our MVP in half the expected time without cutting any corners. The codebase is clean, well-documented, and our team loved taking it over.',
  },
  {
    id: '2',
    name: 'Marcus Webb',
    role: 'Product Lead',
    company: 'Orbit SaaS',
    content: 'Exceptional attention to detail and a proactive communicator. Alex spotted issues before they became problems and always brought solutions, not just questions.',
  },
  {
    id: '3',
    name: 'Priya Nair',
    role: 'Engineering Manager',
    company: 'ScaleHQ',
    content: 'One of the best contractors we\'ve worked with. Strong across the full stack, fast to onboard, and the UI work was genuinely stunning.',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for individuals and small projects getting started.',
    features: [
      'Up to 5 projects',
      '10 GB storage',
      'Basic analytics',
      'Email support',
      'API access',
    ],
    cta: 'Get Started',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$79',
    period: '/month',
    description: 'For growing teams who need more power and collaboration.',
    features: [
      'Unlimited projects',
      '100 GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Team collaboration',
      'Custom integrations',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations with specific needs.',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Dedicated support',
      'SLA guarantee',
      'SSO / SAML',
      'Audit logs',
      'Custom contracts',
    ],
    cta: 'Contact Sales',
  },
];
