interface FooterProps {
  tagline?: string;
  /** Línea(s) discreta(s) opcional(es) que mandan a otra página de evento (ej. home -> /bodas y
   *  /cumpleanos, o /bodas -> home) -- un solo objeto (como antes) o un arreglo de varios; sin
   *  esta prop no se muestra nada, igual que en el footer de siempre. */
  puente?: { texto: string; href: string } | Array<{ texto: string; href: string }>;
}

export default function Footer({
  tagline = 'Invitaciones XV profesionales diseñadas con amor. 💜',
  puente,
}: FooterProps = {}) {
  const year = new Date().getFullYear();
  const puentes = puente ? (Array.isArray(puente) ? puente : [puente]) : [];

  return (
    <footer style={{
      background: 'var(--primary-dark)',
      color: 'white',
      padding: '2rem',
      textAlign: 'center',
      fontSize: '14px',
      marginTop: '4rem',
    }}>
      <p style={{
        margin: 0,
      }}>
        © {year} Invitamx. {tagline}
      </p>
      <p style={{
        margin: '0.5rem 0 0',
        fontSize: '12px',
        opacity: 0.8,
      }}>
        Contacto: <a href="mailto:contacto@invitamx.app" style={{ color: 'white', textDecoration: 'underline' }}>contacto@invitamx.app</a>
      </p>
      {puentes.map((p) => (
        <p key={p.href} style={{ margin: '0.5rem 0 0', fontSize: '12px', opacity: 0.8 }}>
          <a href={p.href} style={{ color: 'white', textDecoration: 'underline' }}>{p.texto}</a>
        </p>
      ))}
      <p style={{
        margin: '0.5rem 0 0',
        fontSize: '12px',
        opacity: 0.8,
      }}>
        <a href="/privacidad" style={{ color: 'white', textDecoration: 'underline' }}>Privacidad</a>
        {' • '}
        <a href="/terminos" style={{ color: 'white', textDecoration: 'underline' }}>Términos</a>
      </p>
    </footer>
  );
}
