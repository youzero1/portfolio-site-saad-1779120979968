import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import clsx from 'clsx';
import { projects } from '@/lib/data';
import { Project } from '@/types';
import styles from '@/components/sections/ProjectsSection.module.css';
import SectionHeader from '@/components/ui/SectionHeader';

type FilterType = 'all' | 'featured';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered: Project[] = filter === 'featured'
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="My Work"
          title="Projects I'm proud of"
          subtitle="A selection of things I've built — from side projects to production apps."
        />

        <div className={styles.filters}>
          {(['all', 'featured'] as FilterType[]).map((f) => (
            <button
              key={f}
              className={clsx(styles.filterBtn, filter === f && styles.active)}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All Projects' : 'Featured'}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardAccent} style={{ background: project.color }} />
      <div className={styles.cardHeader}>
        <div className={styles.cardDot} style={{ background: project.color, boxShadow: `0 0 12px ${project.color}` }} />
        {project.featured && <span className={styles.featuredBadge}>Featured</span>}
      </div>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>
      <div className={styles.cardTags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <div className={styles.cardLinks}>
        <a href={project.liveUrl} className={styles.cardLink} aria-label="View live">
          <ExternalLink size={15} /> Live
        </a>
        <a href={project.githubUrl} className={styles.cardLink} aria-label="View code">
          <Github size={15} /> Code
        </a>
      </div>
    </div>
  );
}
