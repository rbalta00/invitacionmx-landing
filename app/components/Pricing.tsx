'use client';

import { PLANES, ADDONS_GENERALES, planWhatsappMessage } from '../lib/planes';
import { WHATSAPP_NUMERO } from '../lib/whatsapp';

export default function Pricing() {
  const handlePlanClick = (planId: (typeof PLANES)[number]['id']) => {
    const plan = PLANES.find((p) => p.id === planId);
    if (!plan) return;

    window.trackPlanEvent?.(plan.name, plan.price);

    const text = planWhatsappMessage(plan);
    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

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
          {PLANES.map((plan) => (
            <div
              key={plan.id}
              style={{
                background: plan.isPopular ? 'linear-gradient(135deg, #8B2942 0%, #4A1226 100%)' : 'var(--surface-light)',
                borderRadius: '12px',
                padding: '2rem',
                border: plan.isPopular ? 'none' : '2px solid #DDBE86',
                textAlign: 'center',
                transform: plan.isPopular ? 'scale(1.05)' : 'scale(1)',
                position: 'relative',
                boxShadow: plan.isPopular ? '0 8px 24px rgba(74, 18, 38, 0.25)' : 'none',
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
                  MÁS POPULAR
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
                fontFamily: 'var(--font-display), Georgia, serif',
                color: plan.isPopular ? 'white' : 'var(--primary)',
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
              {plan.addOn && (
                <p style={{
                  fontSize: '12px',
                  fontStyle: 'italic',
                  textAlign: 'left',
                  marginBottom: '1.5rem',
                  color: plan.isPopular ? 'rgba(255,255,255,0.75)' : 'var(--text-secondary)',
                }}>
                  + {plan.addOn}
                </p>
              )}
              <button
                onClick={() => handlePlanClick(plan.id)}
                style={{
                  width: '100%',
                  background: plan.isPopular ? 'white' : 'white',
                  border: plan.isPopular ? 'none' : '1px solid #DDBE86',
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

        <div style={{
          marginTop: '3rem',
          padding: '1.75rem',
          background: 'var(--surface-light)',
          borderRadius: '12px',
          border: '1px solid var(--border)',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 600,
            marginBottom: '1rem',
            color: 'var(--primary-dark)',
            textAlign: 'center',
          }}>
            Complementos a la carta (disponibles en cualquier plan)
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 auto',
            maxWidth: '640px',
            fontSize: '14px',
            color: 'var(--text-primary)',
          }}>
            {ADDONS_GENERALES.map((addon, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  padding: '0.5rem 0',
                  borderBottom: idx < ADDONS_GENERALES.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <span>{addon.label}</span>
                <strong style={{ whiteSpace: 'nowrap', color: 'var(--primary)' }}>{addon.price}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
