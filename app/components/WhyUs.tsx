export default function WhyUs() {
  const columns = [
    {
      title: 'Plantilla gratis (Canva, Word...)',
      items: [
        { ok: false, text: 'Se ve igual a la de miles de personas más' },
        { ok: false, text: 'Tú armas todo a mano, sin ayuda' },
        { ok: false, text: 'Sin animaciones, música ni cuenta regresiva' },
        { ok: false, text: 'Sin confirmación de asistencia ni mesa de regalos' },
      ],
    },
    {
      title: 'Diseñador freelance',
      items: [
        { ok: false, text: 'Desde $2,000-5,000 MXN' },
        { ok: false, text: 'Tarda varios días o semanas' },
        { ok: false, text: 'Cada cambio extra suele tener costo' },
      ],
    },
    {
      title: 'Invitamx',
      highlight: true,
      items: [
        { ok: true, text: 'Diseño profesional, 13 temas a elegir' },
        { ok: true, text: 'Nosotros armamos todo, tú solo mandas tus datos' },
        { ok: true, text: 'Lista en 24-48 horas' },
        { ok: true, text: '2 rondas de ajustes incluidas' },
        { ok: true, text: 'Desde $499 MXN' },
      ],
    },
  ];

  return (
    <section id="porque" style={{
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
        ¿Por Qué Invitamx?
      </h2>
      <p style={{
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: '14px',
        marginBottom: '3rem',
        maxWidth: '560px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        No necesitas saber de diseño ni pagar precio de agencia para que la invitación de tu XV se vea como se merece.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px',
        alignItems: 'stretch',
      }}>
        {columns.map((col, idx) => (
          <div
            key={idx}
            style={{
              background: col.highlight ? 'linear-gradient(135deg, #8B2942 0%, #4A1226 100%)' : 'var(--bg-white)',
              borderRadius: '12px',
              padding: '1.75rem',
              border: col.highlight ? 'none' : '1px solid var(--border)',
              boxShadow: col.highlight ? '0 8px 24px rgba(74, 18, 38, 0.25)' : 'none',
              transform: col.highlight ? 'scale(1.03)' : 'scale(1)',
            }}
          >
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '1.25rem',
              color: col.highlight ? 'white' : 'var(--primary-dark)',
            }}>
              {col.title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {col.items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: '13px',
                    padding: '0.4rem 0',
                    color: col.highlight ? 'white' : 'var(--text-primary)',
                  }}
                >
                  <span style={{
                    color: item.ok ? (col.highlight ? '#FFD780' : 'var(--success)') : '#C9574A',
                    flexShrink: 0,
                    fontWeight: 700,
                  }}>
                    {item.ok ? '✓' : '✕'}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
