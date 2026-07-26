export default function HowItWorks() {
  const steps = [
    {
      number: '1️⃣',
      title: 'Envías Mensaje',
      description: 'Contactas por WhatsApp eligiendo tu tema, tu paquete y las secciones que quieras incluir.',
    },
    {
      number: '2️⃣',
      title: 'Yo Creo tu Invitación',
      description: 'Diseño tu invitación con tus fotos, datos y detalles especiales.',
    },
    {
      number: '3️⃣',
      title: 'La Revisas',
      description: 'Te mando una vista previa para que la revises y pidas los ajustes que necesites.',
    },
    {
      number: '4️⃣',
      title: 'Recibís tu Link',
      description: 'Una vez aprobada, te mando el link final para que lo compartas con tus 15 y huéspedes.',
    },
    {
      number: '5️⃣',
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
              width: '60px',
              height: '60px',
              background: 'var(--surface-light)',
              borderRadius: '50%',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
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
