'use client';

import { WHATSAPP_NUMERO } from '../lib/whatsapp';

export default function HechaATuEstilo() {
  const handleWhatsApp = () => {
    const text = 'Hola, quiero mi invitación XV a mi estilo';
    window.trackPlanEvent?.('Hecha a Tu Estilo CTA');
    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const elecciones = [
    { label: 'Animación de apertura', count: '5 opciones' },
    { label: 'Diseño de portada', count: '4 opciones' },
    { label: 'Diseño del itinerario', count: '3 opciones' },
    { label: 'Diseño de la cuenta regresiva', count: '3 opciones' },
    { label: 'Estilo de galería de fotos', count: '3 opciones' },
    { label: 'Colores y tipografía', count: 'Libres' },
  ];

  return (
    <section id="a-tu-estilo" style={{
      background: 'var(--surface-light)',
      padding: '4rem 2rem',
      marginTop: '2rem',
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 500,
          marginBottom: '1rem',
          color: 'var(--primary-dark)',
        }}>
          Hecha a Tu Estilo
        </h2>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '15px',
          marginBottom: '2.5rem',
          maxWidth: '640px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.6',
        }}>
          Tu invitación no es una plantilla rígida. Eliges la animación de apertura, el diseño de la portada, el diseño del itinerario, los colores y la letra — nosotros lo armamos tal como lo pediste.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          textAlign: 'left',
          marginBottom: '2.5rem',
        }}>
          {elecciones.map((e, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-white)',
                borderRadius: '12px',
                padding: '1.1rem 1.25rem',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}
            >
              <span style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-primary)',
              }}>
                {e.label}
              </span>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--primary)',
                background: 'var(--surface-light)',
                border: '1px solid var(--border)',
                borderRadius: '999px',
                padding: '3px 10px',
                whiteSpace: 'nowrap',
              }}>
                {e.count}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={handleWhatsApp}
          style={{
            background: 'var(--primary)',
            color: 'white',
            border: 'none',
            padding: '14px 32px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 500,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(74, 18, 38, 0.25)',
            transition: 'all 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          Quiero Mi Invitación a Mi Estilo
        </button>
      </div>
    </section>
  );
}
