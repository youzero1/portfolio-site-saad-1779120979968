import { ArrowRight, Star } from 'lucide-react';
import styles from '@/components/sections/HeroSection.module.css';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
      </div>

      <div className={styles.container}>
        <div className={styles.badge}>
          <Star size={12} className={styles.badgeStar} />
          <span>Trusted by 50,000+ teams worldwide</span>
        </div>

        <h1 className={styles.title}>
          Ship faster with{' '}
          <span className={styles.gradient}>AI-powered</span>
          <br />
          developer tools
        </h1>

        <p className={styles.subtitle}>
          NexusAI brings your entire workflow into one place — planning, coding, reviewing, and
          deploying — so your team can focus on what matters: building great products.
        </p>

        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('#pricing')}>
            Start for free <ArrowRight size={16} />
          </button>
          <button className={styles.btnSecondary} onClick={() => scrollTo('#features')}>
            See how it works
          </button>
        </div>

        <div className={styles.social}>
          <div className={styles.avatars}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={styles.avatar} />
            ))}
          </div>
          <span className={styles.socialText}>
            <strong>4.9/5</strong> from 2,000+ reviews
          </span>
        </div>
      </div>
    </section>
  );
}
