import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import styles from '@/components/sections/HeroSection.module.css';

export default function HeroSection() {
  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for opportunities
        </div>

        <h1 className={styles.heading}>
          Hi, I'm <span className={styles.name}>Alex Morgan</span>
          <br />
          <span className={styles.role}>Full-Stack Developer</span>
        </h1>

        <p className={styles.tagline}>
          I craft <span className={styles.highlight}>performant</span>,{' '}
          <span className={styles.highlight}>accessible</span>, and{' '}
          <span className={styles.highlight}>beautiful</span> web experiences
          that users love and businesses rely on.
        </p>

        <div className={styles.actions}>
          <a
            href="#projects"
            className={styles.btnPrimary}
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className={styles.btnSecondary}
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Get in Touch
          </a>
        </div>

        <div className={styles.social}>
          <a href="#" className={styles.socialLink} aria-label="GitHub"><Github size={20} /></a>
          <a href="#" className={styles.socialLink} aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="#" className={styles.socialLink} aria-label="Twitter"><Twitter size={20} /></a>
        </div>
      </div>

      <button className={styles.scrollBtn} onClick={scrollToAbout} aria-label="Scroll down">
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
