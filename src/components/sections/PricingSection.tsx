import { Check } from 'lucide-react';
import clsx from 'clsx';
import { pricingTiers } from '@/lib/data';
import styles from '@/components/sections/PricingSection.module.css';
import SectionHeader from '@/components/ui/SectionHeader';

export default function PricingSection() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          subtitle="No hidden fees. Cancel anytime."
        />
        <div className={styles.grid}>
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={clsx(styles.card, tier.highlighted && styles.highlighted)}
            >
              {tier.highlighted && <div className={styles.badge}>Most Popular</div>}
              <h3 className={styles.tierName}>{tier.name}</h3>
              <p className={styles.tierDesc}>{tier.description}</p>
              <div className={styles.priceRow}>
                <span className={styles.price}>{tier.price}</span>
                <span className={styles.period}>/{tier.period}</span>
              </div>
              <ul className={styles.features}>
                {tier.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <Check size={15} className={styles.check} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={clsx(styles.cta, tier.highlighted && styles.ctaHighlighted)}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
