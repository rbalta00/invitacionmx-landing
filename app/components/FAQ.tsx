export default function FAQ() {
  const faqs = [
    {
      question: '¿Cuánto tiempo tarda?',
      answer: 'Tú envías tus datos y fotos, y yo entrego tu invitación en 24-48 horas, en cualquier paquete.',
    },
    {
      question: '¿Puedo cambiar cosas después?',
      answer: 'Claro. Tienes 2 rondas de ajustes sin costo dentro de los primeros 7 días después de la entrega. Pasado ese periodo, cada ajuste adicional tiene un costo de $99-150 MXN.',
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
      answer: 'Sí. Viene incluido sin costo extra en el paquete Deluxe; en Básico y Premium está disponible como complemento a la carta.',
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
