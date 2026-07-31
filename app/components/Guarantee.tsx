export default function Guarantee() {
  return (
    <section style={{
      maxWidth: '1000px',
      margin: '4rem auto',
      padding: '2rem',
      background: 'linear-gradient(135deg, #F3E6D3 0%, #F8ECD9 100%)',
      borderRadius: '12px',
      border: '2px solid #DDBE86',
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
          Ajustamos Hasta que Quede Perfecta
        </h2>
        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          margin: 0,
          lineHeight: '1.6',
        }}>
          Antes de comprometerte, puedes ver una muestra con tus propios datos. Y una vez que compras, tienes 2 rondas de ajustes sin costo para dejarla exactamente como la quieres.
        </p>
      </div>
    </section>
  );
}
