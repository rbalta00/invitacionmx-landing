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
  pases: 'M4 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 000-4V7z',
  pdf: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M12 11v6 M9.5 14.5l2.5 2.5 2.5-2.5',
  diseno: 'M4 4h7v7H4zM13 4h7v4h-7zM13 11h7v9h-7zM4 14h7v6H4z',
  paleta: 'M12 2a10 10 0 100 20c1.5 0 2-1 2-2s-.5-1.5-.5-2.5S14 16 15 16h2a3 3 0 003-3c0-6-4-11-8-11zM7 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM11 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM16 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
  estadisticas: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
};

export default function Features() {
  const features = [
    { icon: ICONS.musica, title: 'Música Personalizada', description: 'Elige la canción perfecta para cuando se abra tu invitación. Incluida en los 3 planes.' },
    { icon: ICONS.apertura, title: 'Animación de Apertura a Elegir', description: 'Elige entre 5 animaciones al abrir tu invitación: sobre con sello de cera, cortina de gala, tarjeta, puertas de gala o destellos.' },
    { icon: ICONS.diseno, title: 'Diseños de Portada e Itinerario', description: 'La foto principal en 4 presentaciones (circular, arco, fondo completo o marco) y el programa del día en 3 diseños (clásico, editorial o minimalista).' },
    { icon: ICONS.paleta, title: 'Tu Tema, Tu Color y Tu Letra', description: 'Cualquiera de los temas se puede personalizar con otra paleta de colores y otras tipografías, sin perder el diseño que elegiste.' },
    { icon: ICONS.estadisticas, title: 'Sigue las Aperturas de tu Invitación', description: 'Desde tu propio link, ve cuántas veces se ha abierto tu invitación. Incluido en el plan Premium.', badge: 'Premium' },
    { icon: ICONS.galeria, title: 'Galería de Fotos', description: 'Sube tus fotos favoritas en alta calidad -- hasta 14 en el paquete Premium. Elige entre cuadrícula, carrusel o polaroid.' },
    { icon: ICONS.pases, title: 'Pases Personalizados por Familia', description: 'Cada familia recibe su propio link con su nombre y número de invitados asignado — tú controlas exactamente quién entra. Incluido sin costo en Premium (hasta 40 familias); disponible como complemento a la carta en Básico y Estándar.' },
    { icon: ICONS.confirmar, title: 'Confirmar Asistencia', description: 'Tus invitados confirman si van directo desde la invitación, y tú ves el conteo en vivo sin llevar la cuenta a mano.' },
    { icon: ICONS.regalos, title: 'Mesa de Regalos', description: 'Tus invitados ven la mesa de regalos y los datos bancarios, con un botón para copiar la CLABE sin batallar. Disponible desde el plan Estándar.' },
    { icon: ICONS.mapa, title: 'Mapa de Ubicación', description: 'Muestra ceremonia y recepción con GPS integrado.' },
    { icon: ICONS.reloj, title: 'Cuenta Regresiva', description: 'Los días, horas y minutos para el grande día.' },
    { icon: ICONS.vestimenta, title: 'Código de Vestimenta', description: 'Sugiere un color para que todos luzcan coordinados.' },
    { icon: ICONS.pdf, title: 'Descarga en PDF de Regalo', description: 'Además del link interactivo, te llevas un PDF de recuerdo. Incluido sin costo en el plan Premium; disponible como complemento (+$99 MXN) en Básico y Estándar.' },
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
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
            }}>
              {feature.title}
              {'badge' in feature && feature.badge && (
                <span style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  color: '#fff',
                  background: 'var(--accent)',
                  borderRadius: '999px',
                  padding: '2px 8px',
                }}>
                  {feature.badge}
                </span>
              )}
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
