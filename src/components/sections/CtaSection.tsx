import { ArrowRight, Zap } from 'lucide-react';
import styles from '@/components/sections/CtaSection.module.css';

export default function CtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.inner}>
          <div className={styles.iconWrap}>
            <Zap size={28} className={styles.icon} />
          </div>
          <h2 className={styles.title}>
            Ready to build something
            <span className={styles.gradient}> extraordinary?</span>
          </h2>
          <p className={styles.sub}>
            Join 50,000+ teams shipping faster with confidence. Start free — no credit card required.
          </p>
          <div className={styles.actions}>
            <button className={styles.btnPrimary}>
              Get started for free <ArrowRight size={16} />
            </button>
            <button className={styles.btnSecondary}>
              Talk to sales
            </button>
          </div>
          <p className={styles.note}>14-day free trial &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp; No credit card needed</p>
        </div>
      </div>
    </section>
  );
}
