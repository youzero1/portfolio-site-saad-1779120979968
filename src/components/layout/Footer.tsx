import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import styles from '@/components/layout/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} Alex Morgan. Crafted with ❤️ and too much ☕</p>
        <div className={styles.social}>
          <a href="#" aria-label="GitHub" className={styles.socialLink}><Github size={18} /></a>
          <a href="#" aria-label="LinkedIn" className={styles.socialLink}><Linkedin size={18} /></a>
          <a href="#" aria-label="Twitter" className={styles.socialLink}><Twitter size={18} /></a>
          <a href="#" aria-label="Email" className={styles.socialLink}><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
