import { Code2, Palette, Zap, Globe } from 'lucide-react';
import styles from '@/components/sections/AboutSection.module.css';
import SectionHeader from '@/components/ui/SectionHeader';

const traits = [
  { icon: Code2, label: 'Clean Code', desc: 'Readable, maintainable, and scalable by design.' },
  { icon: Palette, label: 'UI/UX Focus', desc: 'Bridging design and engineering for pixel-perfect results.' },
  { icon: Zap, label: 'Performance', desc: 'Obsessed with speed, efficiency, and Core Web Vitals.' },
  { icon: Globe, label: 'Full-Stack', desc: 'Comfortable across the entire web stack.' },
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader eyebrow="About Me" title="The person behind the code" />

        <div className={styles.grid}>
          <div className={styles.textCol}>
            <p className={styles.lead}>
              I'm a full-stack developer with 6+ years of experience turning ideas into production-ready
              digital products. My passion lies at the intersection of engineering excellence and
              exceptional user experience.
            </p>
            <p className={styles.body}>
              When I'm not building web apps, you'll find me contributing to open-source projects,
              writing technical articles, or experimenting with the latest web technologies. I believe
              in continuous learning and love sharing knowledge with the community.
            </p>
            <p className={styles.body}>
              Based in San Francisco, CA — open to remote roles worldwide.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>6+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>40+</span>
                <span className={styles.statLabel}>Projects Shipped</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>15+</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
            </div>
          </div>

          <div className={styles.traitsCol}>
            {traits.map(({ icon: Icon, label, desc }) => (
              <div key={label} className={styles.trait}>
                <div className={styles.traitIcon}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className={styles.traitLabel}>{label}</h3>
                  <p className={styles.traitDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
