import { skills } from '@/lib/data';
import styles from '@/components/sections/SkillsSection.module.css';
import SectionHeader from '@/components/ui/SectionHeader';

const categories = Array.from(new Set(skills.map((s) => s.category)));

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="A snapshot of my technical toolkit."
        />
        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat} className={styles.group}>
              <h3 className={styles.groupTitle}>{cat}</h3>
              <div className={styles.skillList}>
                {skills.filter((s) => s.category === cat).map((skill) => (
                  <div key={skill.name} className={styles.skill}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.bar}>
                      <div className={styles.fill} style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
