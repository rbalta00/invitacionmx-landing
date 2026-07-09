'use client';

export default function Hero() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const handleWhatsApp = () => {
    const text = 'Hola, quiero mi invitación XV';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section style={{
      background: 'linear-gradient(135deg, #f8f7fc 0%, #fef5f0 100%)',
      padding: '4rem 2rem',
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <h1 style={{
          marginBottom: '1rem',
          color: 'var(--primary-dark)',
        }}>
          Invitaciones XV Profesionales en Minutos
        </h1>
        <p style={{
          fontSize: '18px',
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          lineHeight: '1.6',
        }}>
          Diseña, personaliza y comparte invitaciones XV hermosas. Sin complicaciones. Sin código. Sin espera.
        </p>
        <button
          onClick={handleWhatsApp}
          style={{
            background: 'var(--primary)',
            color: 'white',
            border: 'none',
            padding: '14px 32px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 500,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(127, 119, 221, 0.3)',
            transition: 'all 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          Quiero Mi Invitación 🎉
        </button>
      </div>
    </section>
  );
}
