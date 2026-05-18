import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import styles from '@/components/layout/Header.module.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={clsx(styles.header, scrolled && styles.scrolled)}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className={styles.logoMark}>A</span>
          <span className={styles.logoText}>Alex<span className={styles.logoAccent}>Morgan</span></span>
        </a>

        <nav className={clsx(styles.nav, menuOpen && styles.navOpen)}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              className={styles.navLink}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
          <a href="#contact" className={styles.navCta} onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>
            Hire Me
          </a>
        </nav>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
