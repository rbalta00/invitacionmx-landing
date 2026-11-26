import { TESTIMONIOS } from '../lib/testimonios';

export default function Testimonios() {
  if (TESTIMONIOS.length === 0) return null;

  return (
    <section style={{
      background: 'var(--bg-white)',
      padding: '4rem 2rem',
      marginTop: '4rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 500,
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'var(--primary-dark)',
        }}>
          Lo que dicen las mamás que ya la pidieron
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {TESTIMONIOS.map((testimonio, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--surface-light)',
                borderRadius: '12px',
                padding: '2rem',
                border: '2px solid #DDBE86',
              }}
            >
              <p style={{
                fontSize: '15px',
                color: 'var(--text-primary)',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                fontStyle: 'italic',
              }}>
                &ldquo;{testimonio.texto}&rdquo;
              </p>
              <p style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--primary-dark)',
                margin: 0,
              }}>
                {testimonio.nombre}
              </p>
              <p style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                margin: 0,
              }}>
                {testimonio.evento}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
