import { Quote } from 'lucide-react';
import styles from '@/components/sections/TestimonialsSection.module.css';

const testimonials = [
  {
    quote: "We cut our deployment time by 70% in the first month. This platform completely transformed how our team ships product.",
    name: 'Sarah Chen',
    title: 'CTO at Luminary',
    initials: 'SC',
    color: '#6c63ff',
  },
  {
    quote: "The analytics alone are worth it. We finally understand our users and can make data-driven decisions with confidence.",
    name: 'Marcus Williams',
    title: 'Head of Product at Nova',
    initials: 'MW',
    color: '#ff6b6b',
  },
  {
    quote: "Switching to this platform was the best decision we made. Our engineers are happier, and our users are too.",
    name: 'Priya Patel',
    title: 'Engineering Manager at Drift',
    initials: 'PP',
    color: '#43e97b',
  },
  {
    quote: "The collaboration features are incredible. Our remote team feels more connected than ever before.",
    name: 'James Torres',
    title: 'Founder at Stackr',
    initials: 'JT',
    color: '#f953c6',
  },
  {
    quote: "I evaluated 6 platforms before choosing this one. There's simply no competition when it comes to DX and reliability.",
    name: 'Lena Müller',
    title: 'Staff Engineer at Apex',
    initials: 'LM',
    color: '#56ccf2',
  },
  {
    quote: "The AI features save our team hours every week. It's like having an extra engineer who never sleeps.",
    name: 'David Kim',
    title: 'VP Engineering at Forge',
    initials: 'DK',
    color: '#ffd700',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Testimonials</p>
          <h2 className={styles.title}>Trusted by teams worldwide</h2>
          <p className={styles.subtitle}>Don't take our word for it — hear from the people building with us every day.</p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <Quote size={20} className={styles.quoteIcon} />
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}>
                  {t.initials}
                </div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
