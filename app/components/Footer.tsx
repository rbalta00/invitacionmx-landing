interface FooterProps {
  tagline?: string;
}

export default function Footer({
  tagline = 'Invitaciones XV profesionales diseñadas con amor. 💜',
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
