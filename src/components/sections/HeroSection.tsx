import { ArrowRight, Play, Star } from 'lucide-react';
import styles from '@/components/sections/HeroSection.module.css';

export default function HeroSection() {
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
          Ship faster with
          <span className={styles.gradient}> AI-powered</span>
          <br />
          developer tools
        </h1>

        <p className={styles.subtitle}>
          NexusAI gives your team everything to build, deploy, and scale — without the usual chaos.
          From idea to production in minutes, not months.
        </p>

        <div className={styles.actions}>
          <button className={styles.btnPrimary}>
            Get started free <ArrowRight size={16} />
          </button>
          <button className={styles.btnSecondary}>
            <div className={styles.playIcon}><Play size={12} fill="currentColor" /></div>
            Watch demo
          </button>
        </div>

        <div className={styles.socialProof}>
          <div className={styles.avatars}>
            {[1,2,3,4,5].map((i) => (
              <div key={i} className={styles.avatar} style={{ background: `hsl(${i * 60}, 70%, 60%)` }} />
            ))}
          </div>
          <div className={styles.proofText}>
            <div className={styles.stars}>
              {[1,2,3,4,5].map((i) => <Star key={i} size={12} fill="#ffd700" color="#ffd700" />)}
            </div>
            <span>4.9/5 from 2,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
