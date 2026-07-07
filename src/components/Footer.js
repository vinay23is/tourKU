import React from 'react';
import './Footer.css';
import kulogo from './kulogo.svg';

const columns = [
  {
    heading: 'The Route',
    links: [
      { label: 'Jayhawk Boulevard', href: '#tour-path' },
      { label: 'Memorial Campanile', href: '#tour-path' },
      { label: 'Allen Fieldhouse', href: '#tour-path' },
      { label: 'Mass Street', href: '#tour-path' },
    ],
  },
  {
    heading: 'Explore',
    links: [
      { label: 'The story', href: '#story' },
      { label: 'Featured landmarks', href: '#landmarks' },
      { label: 'Route map', href: '#route' },
      { label: 'Traditions', href: '#traditions' },
    ],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="footer__logo-link">
            <img src={kulogo} alt="" className="footer__logo" />
            <span>
              Tour<span className="footer__logo-accent">KU</span>
            </span>
          </a>
          <p className="footer__tagline">
            A self-guided walk from the top of Mount Oread down Jayhawk Boulevard and into
            downtown Lawrence.
          </p>
        </div>

        <nav className="footer__cols" aria-label="Footer">
          {columns.map((col) => (
            <div key={col.heading} className="footer__col">
              <h2 className="footer__col-title">{col.heading}</h2>
              {col.links.map((link) => (
                <a key={link.label} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>

      <div className="container footer__bar">
        <p className="footer__rights">
          TourKU — an independent, student-built campus tour concept. Not affiliated with the
          University of Kansas.
        </p>
        <p className="footer__made">Lawrence, Kansas</p>
      </div>
    </footer>
  );
}

export default Footer;
