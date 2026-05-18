import { useState } from 'react';
import { Check } from 'lucide-react';
import clsx from 'clsx';
import styles from '@/components/sections/PricingSection.module.css';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    desc: 'Perfect for solo developers and small experiments.',
    features: [
      '3 projects',
      '5GB storage',
      'Community support',
      'Basic analytics',
      'CI/CD pipelines',
    ],
    cta: 'Get started free',
    highlight: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    yearlyPrice: 19,
    desc: 'For growing teams who need more power and collaboration.',
    features: [
      'Unlimited projects',
      '100GB storage',
      'Priority support',
      'Advanced analytics',
      'CI/CD + Auto-deploy',
      'Team collaboration',
      'Custom domains',
    ],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 99,
    yearlyPrice: 79,
    desc: 'For large teams with advanced security and compliance needs.',
    features: [
      'Unlimited everything',
      '1TB storage',
      'Dedicated support',
      'AI-powered insights',
      'SSO / SAML',
      'Audit logs',
      'SLA guarantee',
      'Custom integrations',
    ],
    cta: 'Contact sales',
    highlight: false,
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Pricing</p>
          <h2 className={styles.title}>Simple, transparent pricing</h2>
          <p className={styles.subtitle}>Start for free. Scale as you grow. No surprise bills.</p>

          <div className={styles.toggle}>
            <span className={clsx(styles.toggleLabel, !yearly && styles.activeLabel)}>Monthly</span>
            <button
              className={clsx(styles.toggleBtn, yearly && styles.toggleBtnOn)}
              onClick={() => setYearly((v) => !v)}
              aria-label="Toggle billing period"
            >
              <span className={clsx(styles.toggleThumb, yearly && styles.toggleThumbOn)} />
            </button>
            <span className={clsx(styles.toggleLabel, yearly && styles.activeLabel)}>
              Yearly <span className={styles.saveBadge}>Save 30%</span>
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div key={plan.name} className={clsx(styles.card, plan.highlight && styles.highlight)}>
              {plan.highlight && <div className={styles.popularBadge}>Most Popular</div>}
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDesc}>{plan.desc}</p>
              <div className={styles.priceRow}>
                <span className={styles.currency}>$</span>
                <span className={styles.price}>{yearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                <span className={styles.period}>/mo</span>
              </div>
              {yearly && plan.monthlyPrice > 0 && (
                <p className={styles.billed}>Billed annually (${(yearly ? plan.yearlyPrice : plan.monthlyPrice) * 12}/yr)</p>
              )}
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <Check size={14} className={styles.check} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={clsx(styles.cta, plan.highlight && styles.ctaHighlight)}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
