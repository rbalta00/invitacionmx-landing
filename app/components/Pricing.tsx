'use client';

export default function Pricing() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const handlePlanClick = (plan: string, price: string) => {
    const text = `Hola, quiero el Plan ${plan} - $${price}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const plans = [
    {
      name: 'Básico',
      price: '499',
      subtitle: 'Perfecto para empezar',
      features: [
        '4 fotos en galería',
        '12 temas a elegir',
        'Link compartible por WhatsApp',
      ],
      seccionesTitulo: 'Incluye estas secciones:',
      secciones: [
        'Pantalla de apertura',
        'Portada principal',
        'Cuenta regresiva',
        'Mensaje de bienvenida',
        'Ubicación de ceremonia',
        'Ubicación de recepción',
        'Itinerario del día',
        'Código de vestimenta',
        'Galería de fotos',
        'Confirmación de asistencia (RSVP)',
        'Mensaje de cierre',
      ],
    },
    {
      name: 'Premium',
      price: '799',
      subtitle: 'El más elegido',
      isPopular: true,
      features: [
        '8 fotos en galería',
        '12 temas a elegir',
        'Descargar PDF de la invitación',
      ],
      seccionesTitulo: 'Todo lo del Básico, más:',
      secciones: [
        'Padres y padrinos',
        'Mesa de regalos y datos bancarios',
        'Hashtag de Instagram',
        'Agregar evento a calendario',
      ],
    },
    {
      name: 'Deluxe',
      price: '1,199',
      subtitle: 'Todo incluido',
      features: [
        '14 fotos en galería',
        '12 temas a elegir',
        'Soporte prioritario',
      ],
      seccionesTitulo: 'Todo lo del Premium, más:',
      secciones: [
        'Pases digitales personalizados por familia (nombre + número de invitados asignados)',
      ],
    },
  ];

  return (
    <section id="planes" style={{
      background: 'var(--bg-white)',
      padding: '4rem 2rem',
      marginTop: '4rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 500,
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'var(--primary-dark)',
        }}>
          Elige tu Plan
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {plans.map((plan, idx) => (
            <div
              key={idx}
              style={{
                background: plan.isPopular ? 'linear-gradient(135deg, #7F77DD 0%, #534AB7 100%)' : 'var(--surface-light)',
                borderRadius: '12px',
                padding: '2rem',
                border: plan.isPopular ? 'none' : '2px solid #AFA9EC',
                textAlign: 'center',
                transform: plan.isPopular ? 'scale(1.05)' : 'scale(1)',
                position: 'relative',
                boxShadow: plan.isPopular ? '0 8px 24px rgba(127, 119, 221, 0.2)' : 'none',
              }}
            >
              {plan.isPopular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--accent)',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 500,
                }}>
                  ⭐ MÁS POPULAR
                </div>
              )}
              <h3 style={{
                fontSize: '18px',
                fontWeight: 500,
                marginBottom: '1rem',
                color: plan.isPopular ? 'white' : 'var(--primary-dark)',
              }}>
                {plan.name}
              </h3>
              <div style={{
                fontSize: '32px',
                fontWeight: 500,
                color: plan.isPopular ? 'white' : '#534AB7',
                marginBottom: '0.5rem',
              }}>
                ${plan.price}
              </div>
              <p style={{
                fontSize: '13px',
                color: plan.isPopular ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)',
                marginBottom: '1.5rem',
              }}>
                {plan.subtitle}
              </p>
              <ul style={{
                textAlign: 'left',
                fontSize: '14px',
                listStyle: 'none',
                padding: 0,
                marginBottom: '1rem',
                color: plan.isPopular ? 'white' : 'var(--text-primary)',
              }}>
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} style={{ padding: '0.5rem 0' }}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <p style={{
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                marginBottom: '0.5rem',
                color: plan.isPopular ? 'rgba(255,255,255,0.85)' : 'var(--text-secondary)',
              }}>
                {plan.seccionesTitulo}
              </p>
              <ul style={{
                textAlign: 'left',
                fontSize: '13px',
                listStyle: 'none',
                padding: 0,
                marginBottom: '1.5rem',
                color: plan.isPopular ? 'white' : 'var(--text-primary)',
              }}>
                {plan.secciones.map((seccion, seccionIdx) => (
                  <li key={seccionIdx} style={{ padding: '0.25rem 0' }}>
                    • {seccion}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePlanClick(plan.name, plan.price)}
                style={{
                  width: '100%',
                  background: plan.isPopular ? 'white' : 'white',
                  border: plan.isPopular ? 'none' : '1px solid #AFA9EC',
                  padding: '10px',
                  borderRadius: '6px',
                  color: plan.isPopular ? 'var(--primary)' : 'var(--primary-dark)',
                  fontWeight: plan.isPopular ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                Elegir Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
