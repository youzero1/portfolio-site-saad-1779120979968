import { projects } from '@/lib/data';
import styles from '@/components/sections/ProjectsSection.module.css';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of my recent work."
        />
        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.id} className={styles.card}>
              <div className={styles.cardImg} />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
