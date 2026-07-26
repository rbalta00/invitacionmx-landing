'use client';

export default function Features() {
  const features = [
    { icon: '🎵', title: 'Música Personalizada', description: 'Elige la canción perfecta para cuando se abra tu invitación.' },
    { icon: '🎬', title: 'Animación de Apertura', description: 'Sorprende a tus huéspedes con una animación especial al abrir.' },
    { icon: '📸', title: 'Galería de Fotos', description: 'Sube hasta 14 fotos tuyas en alta calidad. Se ven perfectas.' },
    { icon: '📋', title: 'Confirmar Asistencia', description: 'Tus huéspedes confirman si van directo desde la invitación.' },
    { icon: '🎁', title: 'Lista de Regalos', description: 'Tus huéspedes pueden ver y comprometerse con los regalos.' },
    { icon: '📍', title: 'Mapa de Ubicación', description: 'Muestra ceremonia y recepción con GPS integrado.' },
    { icon: '⏰', title: 'Cuenta Regresiva', description: 'Los días, horas y minutos para el grande día.' },
    { icon: '👗', title: 'Código de Vestimenta', description: 'Sugiere un color para que todos luzcan coordinados.' },
    { icon: '📱', title: '100% Mobile', description: 'Se ve perfecto en cualquier celular, tablet o computadora.' },
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
            <div style={{ fontSize: '32px', marginBottom: '1rem' }}>
              {feature.icon}
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
