interface FooterProps {
  tagline?: string;
  /** Línea discreta opcional que manda a la otra página de evento (ej. home <-> /bodas) --
   *  sin esta prop no se muestra nada, igual que en el footer de siempre. */
  puente?: { texto: string; href: string };
}

export default function Footer({
  tagline = 'Invitaciones XV profesionales diseñadas con amor. 💜',
  puente,
}: FooterProps = {}) {
  const year = new Date().getFullYear();

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
      {puente && (
        <p style={{ margin: '0.5rem 0 0', fontSize: '12px', opacity: 0.8 }}>
          <a href={puente.href} style={{ color: 'white', textDecoration: 'underline' }}>{puente.texto}</a>
        </p>
      )}
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
