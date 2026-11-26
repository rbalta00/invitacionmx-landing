export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Apartas tu fecha',
      description: 'Con el anticipo de tu plan: Básico $150, Estándar $250 o Premium $400. Sin anticipo no se agenda producción.',
    },
    {
      number: '02',
      title: 'Llenas tus datos',
      description: 'Te mando tu link personal para que captures fecha, ceremonia, itinerario y subas tus fotos directo, con calma y completos.',
    },
    {
      number: '03',
      title: 'Armamos tu invitación',
      description: 'En 24-48 horas con todo lo de tu plan.',
    },
    {
      number: '04',
      title: 'La revisas',
      description: 'Te mando la vista previa; tienes 2 rondas de ajustes incluidas dentro de los 7 días posteriores a la entrega.',
    },
    {
      number: '05',
      title: 'Recibes tu link',
      description: 'El link final para compartir con tus invitados: confirman asistencia, ven mesa de regalos y ubicación.',
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
        marginBottom: '0.75rem',
        color: 'var(--primary-dark)',
      }}>
        ¿Cómo Funciona?
      </h2>
      <p style={{
        textAlign: 'center',
        fontSize: '15px',
        color: 'var(--text-secondary)',
        marginBottom: '3rem',
      }}>
        ¿Y después de tu muestra? Así sigue tu compra:
      </p>
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
