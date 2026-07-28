'use client';

import { useEffect, useRef, useState } from 'react';

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)" style={{ marginRight: '2px' }}>
      <path d="M12 2l2.9 6.9L22 9.6l-5.4 4.9L18.2 22 12 18l-6.2 4 1.6-7.5L2 9.6l7.1-0.7z" />
    </svg>
  );
}

function Avatar({ slug, author }: { slug: string; author: string }) {
  const [photoOk, setPhotoOk] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const fail = () => setPhotoOk(false);
    if (el.complete && el.naturalWidth === 0) fail();
    el.addEventListener('error', fail);
    return () => el.removeEventListener('error', fail);
  }, []);

  return (
    <div style={{
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      background: 'var(--surface-light)',
      color: 'var(--primary-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      marginBottom: '0.75rem',
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      {photoOk ? (
        <img
          ref={imgRef}
          src={`/images/testimonials/${slug}.jpg`}
          alt={author}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        author.charAt(0)
      )}
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: 'No sabía ni por dónde empezar. Fue súper fácil. Mi invitación quedó hermosa y mis huéspedes la amaron.',
      author: 'María',
      slug: 'maria',
      location: 'Guanajuato',
    },
    {
      rating: 5,
      text: 'Todos mis amigas querían el link. La invitación se veía más cara de lo que pagué. ¡Muy recomendado!',
      author: 'Sofía',
      slug: 'sofia',
      location: 'CDMX',
    },
    {
      rating: 5,
      text: 'El atención al cliente fue excelente. Me ayudó con cada detalle. ¡Mi XV fue perfecta!',
      author: 'Valentina',
      slug: 'valentina',
      location: 'Jalisco',
    },
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
        Lo Que Dicen Nuestras Clientes
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
      }}>
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            style={{
              background: 'var(--bg-white)',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid var(--border)',
            }}
          >
            <Avatar slug={testimonial.slug} author={testimonial.author} />
            <div style={{
              display: 'flex',
              marginBottom: '0.5rem',
            }}>
              {Array.from({ length: testimonial.rating }).map((_, i) => <Star key={i} />)}
            </div>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              lineHeight: '1.6',
              fontStyle: 'italic',
            }}>
              "{testimonial.text}"
            </p>
            <p style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              margin: 0,
              fontWeight: 500,
            }}>
              {testimonial.author}, {testimonial.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
