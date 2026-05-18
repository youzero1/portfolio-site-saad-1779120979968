import { FileText, Cpu, Rocket } from 'lucide-react';
import styles from '@/components/sections/HowItWorksSection.module.css';
import SectionHeader from '@/components/ui/SectionHeader';

const steps = [
  {
    icon: FileText,
    num: '01',
    title: 'Define your project',
    desc: 'Describe your idea or import an existing codebase. NexusAI understands context at a deep level.',
  },
  {
    icon: Cpu,
    num: '02',
    title: 'Let AI do the heavy lifting',
    desc: 'Our models generate boilerplate, catch bugs, write tests, and suggest optimizations in real time.',
  },
  {
    icon: Rocket,
    num: '03',
    title: 'Ship with confidence',
    desc: 'One-click deployments to any cloud. Rollbacks, previews, and monitoring included out of the box.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="How It Works"
          title="From idea to production in 3 steps"
          subtitle="No PhD required. NexusAI makes complex workflows feel effortless."
        />
        <div className={styles.steps}>
          {steps.map(({ icon: Icon, num, title, desc }) => (
            <div key={num} className={styles.step}>
              <div className={styles.stepIcon}>
                <Icon size={24} />
              </div>
              <div className={styles.stepNum}>{num}</div>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
