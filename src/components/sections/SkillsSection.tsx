import { useState } from 'react';
import clsx from 'clsx';
import { skills } from '@/lib/data';
import { Skill } from '@/types';
import styles from '@/components/sections/SkillsSection.module.css';
import SectionHeader from '@/components/ui/SectionHeader';

type Category = 'all' | 'frontend' | 'backend' | 'tools';

export default function SkillsSection() {
  const [active, setActive] = useState<Category>('all');

  const filtered: Skill[] = active === 'all' ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Skills"
          title="Tech I work with"
          subtitle="Tools and technologies I use daily to build great products."
        />

        <div className={styles.tabs}>
          {(['all', 'frontend', 'backend', 'tools'] as Category[]).map((cat) => (
            <button
              key={cat}
              className={clsx(styles.tab, active === cat && styles.activeTab)}
              onClick={() => setActive(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillTop}>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillLevel}>{skill.level}%</span>
      </div>
      <div className={styles.track}>
        <div
          className={styles.bar}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}
