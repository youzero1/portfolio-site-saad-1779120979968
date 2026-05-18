import { testimonials } from '@/lib/data';
import styles from '@/components/sections/TestimonialsSection.module.css';
import SectionHeader from '@/components/ui/SectionHeader';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Testimonials"
          title="Loved by developers worldwide"
          subtitle="Don't take our word for it — here's what teams are saying."
        />
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card}>
              <p className={styles.content}>"{t.content}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
