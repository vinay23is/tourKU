import React, { useEffect, useState } from 'react';
import './Navbar.css';
import kulogo from './kulogo.svg';

const links = [
  { href: '#story', label: 'The Story' },
  { href: '#tour-path', label: 'Tour Path' },
  { href: '#landmarks', label: 'Landmarks' },
  { href: '#route', label: 'Route' },
  { href: '#traditions', label: 'Traditions' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Main">
        <a href="#top" className="navbar__brand" onClick={close}>
          <img src={kulogo} alt="" className="navbar__logo" />
          <span className="navbar__wordmark">
            Tour<span className="navbar__wordmark-accent">KU</span>
          </span>
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>

        <ul id="primary-nav" className={`navbar__menu ${open ? 'navbar__menu--open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link" onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta-item">
            <a href="#tour-path" className="cta cta--primary navbar__cta" onClick={close}>
              Start the tour
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
