'use client';

function FeatureIcon({ path }: { path: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

const ICONS = {
  musica: 'M9 18V5l12-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zm12-2a3 3 0 11-6 0 3 3 0 016 0z',
  apertura: 'M4 6h16M4 12h16M4 18h16',
  galeria: 'M3 5h18v14H3zM8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM21 16l-5-4-4 3-3-2-5 4',
  confirmar: 'M9 12l2 2 4-4M4 5h16v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z',
  regalos: 'M20 12v8H4v-8M2 7h20v5H2zM12 22V7M12 7c-1.5 0-4-1-4-3s2-3 4 0c2-3 4-1 4 3-1.5 0-4 0-4 0z',
  mapa: 'M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12zM12 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
  reloj: 'M12 22a10 10 0 100-20 10 10 0 000 20zM12 6v6l4 2',
  vestimenta: 'M8 4l4 2 4-2 3 4-3 2v10H8V10L5 8z',
  movil: 'M7 3h10a1 1 0 011 1v16a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2',
};

export default function Features() {
  const features = [
    { icon: ICONS.musica, title: 'Música Personalizada', description: 'Elige la canción perfecta para cuando se abra tu invitación.' },
    { icon: ICONS.apertura, title: 'Animación de Apertura', description: 'Sorprende a tus huéspedes con una animación especial al abrir.' },
    { icon: ICONS.galeria, title: 'Galería de Fotos', description: 'Sube hasta 14 fotos tuyas en alta calidad. Se ven perfectas.' },
    { icon: ICONS.confirmar, title: 'Confirmar Asistencia', description: 'Tus huéspedes confirman si van directo desde la invitación.' },
    { icon: ICONS.regalos, title: 'Lista de Regalos', description: 'Tus huéspedes pueden ver y comprometerse con los regalos.' },
    { icon: ICONS.mapa, title: 'Mapa de Ubicación', description: 'Muestra ceremonia y recepción con GPS integrado.' },
    { icon: ICONS.reloj, title: 'Cuenta Regresiva', description: 'Los días, horas y minutos para el grande día.' },
    { icon: ICONS.vestimenta, title: 'Código de Vestimenta', description: 'Sugiere un color para que todos luzcan coordinados.' },
    { icon: ICONS.movil, title: '100% Mobile', description: 'Se ve perfecto en cualquier celular, tablet o computadora.' },
  ];

  return (
    <section style={{
      maxWidth: '1200px',
      margin: '4rem auto',
      padding: '0 2rem',
    }}>
      <h2 style={{
        fontSize: '28px',
        fontWeight: 500,
        textAlign: 'center',
        marginBottom: '3rem',
        color: 'var(--primary-dark)',
      }}>
        Lo que Incluye Tu Invitación
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
      }}>
        {features.map((feature, idx) => (
          <div
            key={idx}
            style={{
              background: 'var(--bg-white)',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid var(--border)',
              transition: 'box-shadow 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)')}
            onMouseOut={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            <div style={{ marginBottom: '1rem' }}>
              <FeatureIcon path={feature.icon} />
            </div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 500,
              marginBottom: '0.5rem',
              color: 'var(--primary-dark)',
            }}>
              {feature.title}
            </h3>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
            }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
