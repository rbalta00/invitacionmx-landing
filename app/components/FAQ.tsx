export default function FAQ() {
  const faqs = [
    {
      question: '¿Cuánto tiempo tarda?',
      answer: 'Depende de tu plan. Básicamente tú envías tus datos y fotos, y yo entrego la invitación en 2-3 días hábiles.',
    },
    {
      question: '¿Puedo cambiar cosas después?',
      answer: 'Claro. En Plan Premium tienes 2 cambios incluidos. En Deluxe, cambios ilimitados.',
    },
    {
      question: '¿Funciona en todos los celulares?',
      answer: 'Sí, 100%. Se ve perfecto en iPhone, Android, tablet y computadora.',
    },
    {
      question: '¿Qué pasa si no envío fotos?',
      answer: 'No hay problema. Usamos fotos de ejemplo que se ven hermosas. Tú después cambias cuando quieras.',
    },
    {
      question: '¿Hay soporte después?',
      answer: 'Sí, te doy el link y te ayudo a compartirlo. Si hay dudas con tus huéspedes, yo te asesoro.',
    },
    {
      question: '¿Puedo descargar la invitación?',
      answer: 'Sí, en Premium y Deluxe. Tienes la opción de descargar como PDF.',
    },
  ];

  return (
    <section id="faq" style={{
      background: 'var(--bg-white)',
      padding: '4rem 2rem',
      marginTop: '4rem',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 500,
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'var(--primary-dark)',
        }}>
          Preguntas Frecuentes
        </h2>
        <div>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ marginBottom: '1.5rem' }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 500,
                marginBottom: '0.5rem',
                color: 'var(--primary-dark)',
              }}>
                {faq.question}
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                margin: 0,
                lineHeight: '1.6',
              }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
