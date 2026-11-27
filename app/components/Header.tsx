'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#porque', label: 'Por qué Invitamx' },
  { href: '#temas', label: 'Temas' },
  { href: '#planes', label: 'Planes' },
  { href: '#faq', label: 'FAQ' },
];

// Switcher entre las 3 landings de evento (home/XV, /bodas, /cumpleanos) -- antes la única forma
// de llegar de una a otra era un link chico en letra de 12px al fondo del footer, fácil de no
// ver. Vive aquí (Header, compartido por las 3 páginas) para que sea visible siempre, en
// cualquiera de las 3, sin tener que repetirlo página por página.
const TIPOS_EVENTO = [
  { href: '/', label: 'XV Años' },
  { href: '/bodas', label: 'Bodas' },
  { href: '/cumpleanos', label: 'Cumpleaños' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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

      <nav aria-label="Tipo de evento" style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap',
        marginTop: '0.75rem',
      }}>
        {TIPOS_EVENTO.map((t) => {
          const activo = pathname === t.href;
          return (
            <a
              key={t.href}
              href={t.href}
              style={{
                padding: '0.35rem 0.9rem',
                borderRadius: '999px',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid var(--primary)',
                color: activo ? 'white' : 'var(--primary-dark)',
                background: activo ? 'var(--primary)' : 'transparent',
              }}
            >
              {t.label}
            </a>
          );
        })}
      </nav>

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
