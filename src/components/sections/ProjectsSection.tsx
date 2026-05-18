import { ExternalLink } from 'lucide-react';
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
          subtitle="A selection of projects from client work and personal experiments."
        />
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardBody}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <ExternalLink size={14} /> View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
