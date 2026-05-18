import { ClipboardList, Code2, Rocket } from 'lucide-react';
import styles from '@/components/sections/HowItWorksSection.module.css';
import SectionHeader from '@/components/ui/SectionHeader';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Plan',
    desc: 'Define your goals, break down tasks, and align your team — all inside NexusAI.',
  },
  {
    icon: Code2,
    step: '02',
    title: 'Build',
    desc: 'Write, review, and ship code faster with AI suggestions and seamless Git integration.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Launch',
    desc: 'Deploy with confidence using automated testing, rollbacks, and real-time monitoring.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="How It Works"
          title="Three steps to ship faster"
          subtitle="From idea to production in record time."
        />
        <div className={styles.steps}>
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className={styles.step}>
              <div className={styles.stepIcon}>
                <Icon size={24} />
              </div>
              <div className={styles.stepNum}>{step}</div>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
