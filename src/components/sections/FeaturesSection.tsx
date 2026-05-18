import { Zap, Shield, BarChart2, Users, Globe, Cpu } from 'lucide-react';
import styles from '@/components/sections/FeaturesSection.module.css';

const features = [
  {
    icon: Zap,
    title: 'Blazing Fast',
    desc: 'Sub-100ms response times powered by edge infrastructure. Your users will never wait.',
    color: '#ffd700',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'SOC 2 compliant, end-to-end encryption, and RBAC — security built in, not bolted on.',
    color: '#43e97b',
  },
  {
    icon: BarChart2,
    title: 'Deep Analytics',
    desc: 'Real-time dashboards and AI-powered insights that turn raw data into clear decisions.',
    color: '#6c63ff',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'Multiplayer editing, comments, and notifications so your whole team stays in sync.',
    color: '#ff6b6b',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    desc: '200+ edge locations worldwide. Ship your product to every corner of the globe instantly.',
    color: '#56ccf2',
  },
  {
    icon: Cpu,
    title: 'AI-Powered',
    desc: 'Automate repetitive tasks, generate content, and predict outcomes with built-in AI.',
    color: '#f953c6',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Features</p>
          <h2 className={styles.title}>Everything you need to succeed</h2>
          <p className={styles.subtitle}>
            A complete toolkit designed for modern teams who refuse to compromise on quality or speed.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className={styles.card}>
              <div className={styles.iconWrap} style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                <Icon size={22} style={{ color }} />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
