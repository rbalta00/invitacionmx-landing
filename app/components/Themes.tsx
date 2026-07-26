'use client';

export default function Themes() {
  const themes = [
    { id: 'dorado-clasico', nombre: 'Dorado Clásico ✨', primary: '#D4AF37', dark: '#2A2415' },
    { id: 'mariposas', nombre: 'Vuelo de Mariposas 🦋', primary: '#E0B0FF', dark: '#2D1D3A' },
    { id: 'floral-acuarela', nombre: 'Floral Acuarela 💐', primary: '#E2879F', dark: '#401B24' },
    { id: 'celestial', nombre: 'Místico Celestial 🌙', primary: '#87CEEB', dark: '#080C14' },
    { id: 'botanico', nombre: 'Eucalipto Botánico 🌿', primary: '#556B2F', dark: '#1C281F' },
    { id: 'glam-rose', nombre: 'Glam Rose Oro 💖', primary: '#B76E79', dark: '#3B2226' },
    { id: 'boho-chic', nombre: 'Rustique Boho Chic 🌾', primary: '#C27A5B', dark: '#361D13' },
    { id: 'princesa-elegante', nombre: 'Princesa Elegante 👑', primary: '#1A365D', dark: '#0F172A' },
    { id: 'marmol-oro', nombre: 'Mármol & Oro Geométrico 📐', primary: '#C59B27', dark: '#1A1A1A' },
    { id: 'neon', nombre: 'Ciber Cyber Neon ⚡', primary: '#FF007F', dark: '#05050B' },
    { id: 'coquette-pink', nombre: 'XV Coquette Listones Rose 🎀', primary: '#E45D8C', dark: '#472F35' },
    { id: 'coquette-luxe', nombre: 'XV Coquette Luxe 💎', primary: '#C66B8F', dark: '#1A1A1A' },
  ];

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
          marginBottom: '3rem',
          color: 'var(--primary-dark)',
        }}>
          Elige tu Tema
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '24px',
          marginBottom: '2rem',
        }}>
          {themes.map((theme, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: '150px',
                  height: '300px',
                  background: theme.dark,
                  borderRadius: '28px',
                  border: `3px solid ${theme.primary}`,
                  padding: '10px',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  position: 'relative',
                  transition: 'transform 0.3s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '44px',
                  height: '12px',
                  background: theme.dark,
                  border: `2px solid ${theme.primary}`,
                  borderRadius: '8px',
                  zIndex: 2,
                }} />
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  background: `url(/images/themes/${theme.id}.jpg) center / cover no-repeat, linear-gradient(135deg, ${theme.primary} 0%, ${theme.dark} 100%)`,
                }} />
              </div>
              <p style={{
                marginTop: '0.75rem',
                fontSize: '14px',
                fontWeight: 500,
                textAlign: 'center',
                color: 'var(--text-primary)',
              }}>
                {theme.nombre}
              </p>
            </div>
          ))}
        </div>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '14px',
        }}>
          ✨ Cada tema incluye: animaciones, música, abrir envelope, galería de fotos, lista de regalos, confirmación.
        </p>
      </div>
    </section>
  );
}
