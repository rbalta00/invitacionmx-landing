'use client';

export default function FinalCTA() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const handleWhatsApp = (plan: string) => {
    const text = `Hola, quiero el Plan ${plan}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section style={{
      background: 'linear-gradient(135deg, #7F77DD 0%, #534AB7 100%)',
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
          <button
            onClick={() => handleWhatsApp('Básico $499')}
            style={{
              background: 'white',
              color: 'var(--primary)',
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
            Básico - $499
          </button>
          <button
            onClick={() => handleWhatsApp('Premium $799')}
            style={{
              background: 'var(--accent)',
              color: 'white',
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
            Premium - $799 ⭐
          </button>
          <button
            onClick={() => handleWhatsApp('Deluxe $1,199')}
            style={{
              background: 'white',
              color: 'var(--primary)',
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
            Deluxe - $1,199
          </button>
        </div>
        <button
          onClick={() => {
            const text = 'Hola, quiero consultarte sobre invitacionmx';
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
          }}
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
