import { ArrowRight, Sparkles, Star } from 'lucide-react';
import styles from '@/components/sections/HeroSection.module.css';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={styles.grid} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <Sparkles size={14} className={styles.badgeIcon} />
          Introducing the future of productivity
        </div>

        <h1 className={styles.heading}>
          Build faster,<br />
          <span className={styles.gradient}>ship smarter</span>,<br />
          grow bigger.
        </h1>

        <p className={styles.sub}>
          The all-in-one platform that turns your boldest ideas into production-ready products.
          Join 50,000+ teams already shipping with confidence.
        </p>

        <div className={styles.actions}>
          <button
            className={styles.btnPrimary}
            onClick={() => scrollTo('#pricing')}
          >
            Start for free <ArrowRight size={16} />
          </button>
          <button
            className={styles.btnSecondary}
            onClick={() => scrollTo('#features')}
          >
            See how it works
          </button>
        </div>

        <div className={styles.social}>
          <div className={styles.avatars}>
            {['A','B','C','D','E'].map((l) => (
              <div key={l} className={styles.avatar}>{l}</div>
            ))}
          </div>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className={styles.star} />
            ))}
            <span className={styles.starsText}>Loved by 50,000+ users</span>
          </div>
        </div>
      </div>

      <div className={styles.mockup}>
        <div className={styles.mockupInner}>
          <div className={styles.mockupBar}>
            <span /><span /><span />
          </div>
          <div className={styles.mockupBody}>
            <div className={styles.mockupSidebar}>
              {['Dashboard','Projects','Analytics','Team','Settings'].map((item) => (
                <div key={item} className={styles.mockupNavItem}>{item}</div>
              ))}
            </div>
            <div className={styles.mockupMain}>
              <div className={styles.mockupCards}>
                {[
                  { label: 'Revenue', val: '$84.2k', up: true },
                  { label: 'Users', val: '12,430', up: true },
                  { label: 'Conversion', val: '4.7%', up: false },
                ].map((c) => (
                  <div key={c.label} className={styles.mockupCard}>
                    <span className={styles.mockupCardLabel}>{c.label}</span>
                    <span className={styles.mockupCardVal}>{c.val}</span>
                    <span className={c.up ? styles.mockupUp : styles.mockupDown}>
                      {c.up ? '↑' : '↓'} {c.up ? '12%' : '2%'}
                    </span>
                  </div>
                ))}
              </div>
              <div className={styles.mockupChart}>
                {[40,65,45,80,55,90,70,95,60,85].map((h, i) => (
                  <div key={i} className={styles.mockupBar2} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
