import { skills } from '@/lib/data';
import styles from '@/components/sections/SkillsSection.module.css';
import SectionHeader from '@/components/ui/SectionHeader';

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Skills"
          title="What I work with"
          subtitle="Technologies and tools I use daily."
        />
        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
              <div className={styles.bar}>
                <div
                  className={styles.barFill}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
