'use client';

import { PLANES, planWhatsappMessage } from '../lib/planes';
import { MUESTRA_GRATIS_MENSAJE, WHATSAPP_NUMERO } from '../lib/whatsapp';

export default function FinalCTA() {
  const handlePlanClick = (planId: (typeof PLANES)[number]['id']) => {
    const plan = PLANES.find((p) => p.id === planId);
    if (!plan) return;

    window.trackPlanEvent?.(plan.name, plan.price);

    const text = planWhatsappMessage(plan);
    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleMuestraGratis = () => {
    window.trackPlanEvent?.('Muestra gratis - Final CTA');

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(MUESTRA_GRATIS_MENSAJE)}`;
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
          ¿Lista para ver la invitación de tu hija?
        </h2>
        <p style={{
          fontSize: '16px',
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '2rem',
          lineHeight: '1.6',
        }}>
          Pide tu muestra gratis: solo dime el nombre de la festejada, la fecha y el tema que te enamoró. Te la mando sin costo y sin anticipo — el plan lo eliges después, cuando ya la viste.
        </p>
        <button
          onClick={handleMuestraGratis}
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
            marginBottom: '2rem',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          Quiero mi muestra gratis
        </button>

        <p style={{
          fontSize: '13px',
          color: 'rgba(255,255,255,0.75)',
          marginBottom: '0.75rem',
        }}>
          ¿Ya viste tu muestra? Elige tu plan:
        </p>
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
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
      </div>
    </section>
  );
}
