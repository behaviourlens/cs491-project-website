import { useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { project } from '../data/project';
import styles from './Header.module.css';

const navLinks = [
  { href: '#project', label: 'Project' },
  { href: '#team', label: 'Team' },
  { href: '#documents', label: 'Documents' },
  { href: '#repositories', label: 'Repositories' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  // Scroll to the section without adding the #fragment to the URL.
  const handleNavClick = (event) => {
    event.preventDefault();
    closeMenu();

    const id = event.currentTarget.getAttribute('href').slice(1);
    const target = id === 'top' ? null : document.getElementById(id);

    if (!target) {
      window.scrollTo({ top: 0 });
      return;
    }

    target.scrollIntoView();
    // Move keyboard focus to the section, as native anchor navigation would.
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && menuOpen) {
      closeMenu();
      toggleRef.current?.focus();
    }
  };

  return (
    <header className={styles.header} onKeyDown={handleKeyDown}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href="#top" onClick={handleNavClick}>
          {project.name}
        </a>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="site-nav"
          className={`${styles.nav} ${menuOpen ? styles.open : ''}`}
          aria-label="Main"
        >
          <ul role="list" className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
