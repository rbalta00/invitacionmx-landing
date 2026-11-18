'use client';

import { PLANES, planWhatsappMessage } from '../lib/planes';

export default function FinalCTA() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const handlePlanClick = (planId: (typeof PLANES)[number]['id']) => {
    const plan = PLANES.find((p) => p.id === planId);
    if (!plan) return;

    window.trackPlanEvent?.(plan.name, plan.price);

    const text = planWhatsappMessage(plan);
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleGeneralContact = () => {
    window.trackPlanEvent?.('Contacto general - Final CTA');

    const text = 'Hola, quiero consultarte sobre invitacionmx';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section style={{
      background: 'linear-gradient(135deg, #8B2942 0%, #4A1226 100%)',
      padding: '4rem 2rem',
      textAlign: 'center',
      marginTop: '4rem',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 500,
          marginBottom: '1rem',
          color: 'white',
        }}>
          ¿Listo para tu XV Perfecta?
        </h2>
        <p style={{
          fontSize: '16px',
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '2rem',
          lineHeight: '1.6',
        }}>
          Cuéntame qué plan te gusta y qué tema te enamoró. Yo me encargo del resto.
        </p>
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem',
        }}>
          {PLANES.map((plan) => (
            <button
              key={plan.id}
              onClick={() => handlePlanClick(plan.id)}
              style={{
                background: plan.isPopular ? 'var(--accent)' : 'white',
                color: plan.isPopular ? 'white' : 'var(--primary)',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              {plan.name} - ${plan.price}
            </button>
          ))}
        </div>
        <button
          onClick={handleGeneralContact}
          style={{
            background: 'white',
            color: 'var(--primary)',
            border: 'none',
            padding: '14px 40px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 500,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          Iniciar Conversación en WhatsApp 💬
        </button>
      </div>
    </section>
  );
}
