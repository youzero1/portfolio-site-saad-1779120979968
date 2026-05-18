import { Github, Linkedin, Twitter, Mail, Zap } from 'lucide-react';
import styles from '@/components/layout/Footer.module.css';

const footerLinks = [
  {
    heading: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  },
  {
    heading: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press'],
  },
  {
    heading: 'Resources',
    links: ['Docs', 'API Reference', 'Status', 'Support'],
  },
  {
    heading: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Cookies'],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}><Zap size={16} /></div>
              <span className={styles.logoText}>Nexus<span className={styles.logoAccent}>AI</span></span>
            </div>
            <p className={styles.brandDesc}>
              The all-in-one platform for modern teams who ship with confidence.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="GitHub" className={styles.socialLink}><Github size={16} /></a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}><Linkedin size={16} /></a>
              <a href="#" aria-label="Twitter" className={styles.socialLink}><Twitter size={16} /></a>
              <a href="#" aria-label="Email" className={styles.socialLink}><Mail size={16} /></a>
            </div>
          </div>

          <div className={styles.links}>
            {footerLinks.map((col) => (
              <div key={col.heading} className={styles.linkCol}>
                <h4 className={styles.linkHeading}>{col.heading}</h4>
                <ul className={styles.linkList}>
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className={styles.link}>{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>&copy; {new Date().getFullYear()} NexusAI, Inc. All rights reserved.</p>
          <p className={styles.copy}>Crafted with ❤️ for builders everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
