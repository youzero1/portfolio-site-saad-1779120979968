import { testimonials } from '@/lib/data';
import styles from '@/components/sections/TestimonialsSection.module.css';
import SectionHeader from '@/components/ui/SectionHeader';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Testimonials"
          title="Loved by developers"
          subtitle="Don't take our word for it."
        />
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card}>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.author}>
                <div className={styles.authorAvatar} />
                <div>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorRole}>{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
