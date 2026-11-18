'use client';

import { useRef, useState } from 'react';

export default function Hero() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  // No hay video real todavía (public/videos/hero-demo.mp4 no existe en este
  // repo -- daría 404). Mientras no se produzca uno, el hero muestra solo la
  // foto de respaldo, con su propio fallback a layout centrado si tampoco
  // esa imagen cargara.
  const [imageOk, setImageOk] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleWhatsApp = () => {
    const text = 'Hola, quiero mi invitación XV';
    window.trackPlanEvent?.('Hero CTA');
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section style={{
      background: 'linear-gradient(135deg, #FAF3EA 0%, #F8EAD8 100%)',
      padding: '4rem 2rem',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: imageOk ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
        gap: '3rem',
        alignItems: 'center',
        textAlign: imageOk ? 'left' : 'center',
      }}>
        <div>
          <h1 style={{
            marginBottom: '1rem',
            color: 'var(--primary-dark)',
          }}>
            La Invitación XV que No Se Ve de Plantilla Gratis
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            lineHeight: '1.6',
          }}>
            Olvídate de pelear con Canva o pagar de más por un diseñador. Nos mandas tus datos y fotos por WhatsApp, nosotros armamos tu invitación interactiva — con animaciones, música y cuenta regresiva — y te la entregamos lista en 24-48 horas, con 2 rondas de ajustes incluidas dentro de los primeros 7 días.
          </p>
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
            Quiero Mi Invitación
          </button>
        </div>

        {imageOk && (
          <div style={{ maxWidth: '300px', margin: '0 auto' }}>
            <div style={{
              position: 'relative',
              background: 'var(--primary-dark)',
              borderRadius: '44px',
              padding: '14px',
              boxShadow: '0 20px 40px rgba(74, 18, 38, 0.3)',
            }}>
              <div style={{
                position: 'absolute',
                top: '14px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90px',
                height: '22px',
                background: 'var(--primary-dark)',
                borderRadius: '0 0 16px 16px',
                zIndex: 2,
              }} />
              <div style={{
                borderRadius: '30px',
                overflow: 'hidden',
                aspectRatio: '9 / 18',
                background: '#FAF3EA',
              }}>
                <img
                  ref={imgRef}
                  src="/images/hero/hero-invitation.jpg"
                  alt="Ejemplo de invitación XV"
                  onError={() => setImageOk(false)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
