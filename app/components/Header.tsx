'use client';

import { useState } from 'react';

const LINKS = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#porque', label: 'Por qué Invitamx' },
  { href: '#temas', label: 'Temas' },
  { href: '#planes', label: 'Planes' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      background: 'var(--bg-white)',
      borderBottom: '1px solid var(--border)',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{
          fontSize: '20px',
          fontWeight: 500,
          color: 'var(--primary)',
        }}>
          ✨ Invitamx
        </div>

        <nav className="header-nav-desktop" style={{
          display: 'flex',
          gap: '2rem',
          fontSize: '14px',
          color: 'var(--text-secondary)',
        }}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} style={{ color: 'inherit', cursor: 'pointer' }}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="header-nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: 'var(--primary-dark)',
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="header-nav-mobile" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1.5rem 0 0.5rem',
          fontSize: '15px',
          color: 'var(--text-secondary)',
        }}>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ color: 'inherit', cursor: 'pointer' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .header-nav-desktop { display: none !important; }
          .header-nav-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
