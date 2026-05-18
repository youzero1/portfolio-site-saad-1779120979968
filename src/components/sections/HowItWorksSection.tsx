import styles from '@/components/sections/HowItWorksSection.module.css';

const steps = [
  {
    num: '01',
    title: 'Create your workspace',
    desc: 'Sign up in seconds and set up your workspace with your team. Import existing projects or start fresh — we support both.',
    color: '#6c63ff',
  },
  {
    num: '02',
    title: 'Connect your stack',
    desc: '70+ native integrations with the tools you already use. GitHub, Slack, Figma, Jira — plug in and go.',
    color: '#ff6b6b',
  },
  {
    num: '03',
    title: 'Ship & iterate',
    desc: 'Deploy with one click, monitor in real-time, and iterate faster than ever with AI-assisted workflows.',
    color: '#43e97b',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2 className={styles.title}>Up and running in minutes</h2>
          <p className={styles.subtitle}>
            No complex setup, no long onboarding. Just sign up and start building.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, idx) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.numWrap} style={{ borderColor: `${step.color}40` }}>
                  <span className={styles.num} style={{ color: step.color }}>{step.num}</span>
                </div>
                {idx < steps.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
