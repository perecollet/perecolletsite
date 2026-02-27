import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35, rootMargin: '-80px 0px 0px 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <a href="#hero" className="navbar-logo" onClick={closeMenu}>
        <span className="navbar-logo-bracket" aria-hidden="true">[</span>
        PCM
        <span className="navbar-logo-bracket" aria-hidden="true">]</span>
      </a>

      <ul className="navbar-links" role="list">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`navbar-link${activeSection === link.href.slice(1) ? ' navbar-link-active' : ''}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="navbar-hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <span className={`hamburger-bar${menuOpen ? ' bar-open-1' : ''}`} />
        <span className={`hamburger-bar${menuOpen ? ' bar-open-2' : ''}`} />
        <span className={`hamburger-bar${menuOpen ? ' bar-open-3' : ''}`} />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="navbar-mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`navbar-mobile-link${activeSection === link.href.slice(1) ? ' navbar-link-active' : ''}`}
                onClick={closeMenu}
              >
                <span className="mobile-link-prompt" aria-hidden="true">&gt;</span>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
