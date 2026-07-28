'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const [videoOk, setVideoOk] = useState(true);
  const [imageOk, setImageOk] = useState(true);
  const showMedia = videoOk || imageOk;
  const videoRef = useRef<HTMLVideoElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const fail = () => setVideoOk(false);
    if (el.error) fail();
    el.addEventListener('error', fail);
    return () => el.removeEventListener('error', fail);
  }, []);

  useEffect(() => {
    if (videoOk) return;
    const el = imgRef.current;
    if (!el) return;
    const fail = () => setImageOk(false);
    if (el.complete && el.naturalWidth === 0) fail();
    el.addEventListener('error', fail);
    return () => el.removeEventListener('error', fail);
  }, [videoOk]);

  const handleWhatsApp = () => {
    const text = 'Hola, quiero mi invitación XV';
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
        gridTemplateColumns: showMedia ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
        gap: '3rem',
        alignItems: 'center',
        textAlign: showMedia ? 'left' : 'center',
      }}>
        <div>
          <h1 style={{
            marginBottom: '1rem',
            color: 'var(--primary-dark)',
          }}>
            Invitaciones XV Profesionales, Hechas por Nosotros
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            lineHeight: '1.6',
          }}>
            Tú eliges el tema, el paquete y las secciones que quieras incluir. Nosotros diseñamos tu invitación XV, te la mandamos a revisión y la ajustamos hasta que quede perfecta.
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

        {videoOk && (
          <div style={{
            maxWidth: '380px',
            margin: '0 auto',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(74, 18, 38, 0.22)',
            overflow: 'hidden',
          }}>
            <video
              ref={videoRef}
              src="/videos/hero-demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/hero/hero-invitation.jpg"
              style={{
                width: '100%',
                display: 'block',
              }}
            />
          </div>
        )}

        {!videoOk && imageOk && (
          <div style={{
            maxWidth: '380px',
            margin: '0 auto',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(74, 18, 38, 0.22)',
            overflow: 'hidden',
          }}>
            <img
              ref={imgRef}
              src="/images/hero/hero-invitation.jpg"
              alt="Ejemplo de invitación XV"
              style={{
                width: '100%',
                display: 'block',
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
