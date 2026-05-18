import { Check } from 'lucide-react';
import { pricingPlans } from '@/lib/data';
import styles from '@/components/sections/PricingSection.module.css';
import SectionHeader from '@/components/ui/SectionHeader';
import clsx from 'clsx';

export default function PricingSection() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          subtitle="Choose the plan that fits your team. Upgrade or downgrade anytime."
        />
        <div className={styles.grid}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={clsx(styles.card, plan.highlighted && styles.highlighted)}
            >
              {plan.highlighted && (
                <div className={styles.badge}>Most Popular</div>
              )}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                {plan.period && <span className={styles.period}>{plan.period}</span>}
              </div>
              <p className={styles.desc}>{plan.description}</p>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <Check size={15} className={styles.check} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={clsx(styles.cta, plan.highlighted && styles.ctaHighlighted)}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
