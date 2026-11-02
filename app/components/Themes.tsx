'use client';

export default function Themes() {
  return (
    <section id="temas" style={{
      background: 'var(--bg-white)',
      padding: '4rem 2rem',
      marginTop: '2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 500,
          textAlign: 'center',
          marginBottom: '1rem',
          color: 'var(--primary-dark)',
        }}>
          Elige tu Tema
        </h2>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '14px',
          marginBottom: '2rem',
        }}>
          Explora el catálogo en vivo: cada tarjeta es una demo interactiva real de la invitación.
        </p>
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid var(--border)',
        }}>
          {/* Altura fija medida contra el catalogo real (scrollHeight ~4045px,
              2026-11-02) -- el iframe es de otro origen, no se puede leer su alto
              en vivo, asi que si el catalogo crece/encoge (mas/menos temas) hay
              que volver a medir y actualizar este numero para que no reaparezca
              un scroll interno. */}
          <iframe
            src="https://administradorinvitamx.vercel.app/?catalog=true"
            title="Catálogo de Temas XV en vivo"
            style={{
              width: '100%',
              height: '4100px',
              border: 'none',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  );
}
