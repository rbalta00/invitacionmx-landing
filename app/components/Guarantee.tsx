export default function Guarantee() {
  return (
    <section style={{
      maxWidth: '1000px',
      margin: '4rem auto',
      padding: '2rem',
      background: 'linear-gradient(135deg, #EEEDFE 0%, #F0E6FF 100%)',
      borderRadius: '12px',
      border: '2px solid #AFA9EC',
    }}>
      <div style={{
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 500,
          marginBottom: '1rem',
          color: 'var(--primary-dark)',
        }}>
          100% Satisfecho o Te Devolvemos el Dinero
        </h2>
        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          margin: 0,
          lineHeight: '1.6',
        }}>
          Si tu invitación no te encanta, devolvemos tu dinero sin preguntas. Así de seguro estamos de nuestro trabajo.
        </p>
      </div>
    </section>
  );
}
