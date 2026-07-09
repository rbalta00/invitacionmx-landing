export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: 'No sabía ni por dónde empezar. Fue súper fácil. Mi invitación quedó hermosa y mis huéspedes la amaron.',
      author: 'María',
      location: 'Guanajuato',
    },
    {
      rating: 5,
      text: 'Todos mis amigas querían el link. La invitación se veía más cara de lo que pagué. ¡Muy recomendado!',
      author: 'Sofía',
      location: 'CDMX',
    },
    {
      rating: 5,
      text: 'El atención al cliente fue excelente. Me ayudó con cada detalle. ¡Mi XV fue perfecta!',
      author: 'Valentina',
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
            <div style={{
              color: 'var(--accent)',
              fontSize: '18px',
              marginBottom: '0.5rem',
            }}>
              {'⭐'.repeat(testimonial.rating)}
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
