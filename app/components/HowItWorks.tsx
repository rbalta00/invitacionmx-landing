export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Envías Mensaje',
      description: 'Contactas por WhatsApp eligiendo tu tema, tu paquete y las secciones que quieras incluir.',
    },
    {
      number: '02',
      title: 'Llenas tus Datos',
      description: 'Te mando tu link personal para que captures fecha, ceremonia, itinerario y subas tus fotos directo — sin escribir todo por WhatsApp.',
    },
    {
      number: '03',
      title: 'La Revisas',
      description: 'Con tus datos armo tu invitación y te mando una vista previa para que la revises y pidas los ajustes que necesites.',
    },
    {
      number: '04',
      title: 'Recibís tu Link',
      description: 'Una vez aprobada, te mando el link final para que lo compartas con tus 15 y huéspedes.',
    },
    {
      number: '05',
      title: '¡Listo!',
      description: 'Tus huéspedes ven la invitación en celular, confirman y ven lista de regalos.',
    },
  ];

  return (
    <section id="como-funciona" style={{
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
        ¿Cómo Funciona?
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
      }}>
        {steps.map((step, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontFamily: 'var(--font-display), Georgia, serif',
              fontStyle: 'italic',
              fontSize: '28px',
              color: 'var(--accent)',
              borderBottom: '1px solid var(--accent)',
              paddingBottom: '0.3rem',
              minWidth: '2.2ch',
            }}>
              {step.number}
            </div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 500,
              marginBottom: '0.5rem',
              color: 'var(--primary-dark)',
            }}>
              {step.title}
            </h3>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
            }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
