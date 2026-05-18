import { experiences } from '@/lib/data';
import { Experience } from '@/types';
import styles from '@/components/sections/ExperienceSection.module.css';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="A timeline of my professional journey."
        />
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <ExperienceItem key={exp.id} exp={exp} isLast={idx === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ExperienceItemProps = {
  exp: Experience;
  isLast: boolean;
};

function ExperienceItem({ exp, isLast }: ExperienceItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.timelineCol}>
        <div className={styles.dot} />
        {!isLast && <div className={styles.line} />}
      </div>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <div>
            <h3 className={styles.role}>{exp.role}</h3>
            <span className={styles.company}>{exp.company}</span>
          </div>
          <span className={styles.period}>{exp.period}</span>
        </div>
        <p className={styles.desc}>{exp.description}</p>
        <div className={styles.tags}>
          {exp.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
