export default function Themes() {
  const themes = [
    { name: 'Elegancia Morada', gradient: 'linear-gradient(135deg, #7F77DD 0%, #534AB7 100%)' },
    { name: 'Verde Esmeralda', gradient: 'linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%)' },
    { name: 'Coral Sunset', gradient: 'linear-gradient(135deg, #D85A30 0%, #993C1D 100%)' },
    { name: 'Rosa Romántico', gradient: 'linear-gradient(135deg, #D4537E 0%, #993556 100%)' },
    { name: 'Azul Profundo', gradient: 'linear-gradient(135deg, #378ADD 0%, #185FA5 100%)' },
    { name: 'Verde Menta', gradient: 'linear-gradient(135deg, #639922 0%, #3B6D11 100%)' },
    { name: 'Dorado Elegante', gradient: 'linear-gradient(135deg, #BA7517 0%, #854F0B 100%)' },
    { name: 'Rojo Pasión', gradient: 'linear-gradient(135deg, #E24B4A 0%, #A32D2D 100%)' },
    { name: 'Gris Moderno', gradient: 'linear-gradient(135deg, #888780 0%, #5F5E5A 100%)' },
    { name: 'Ámbar Cálido', gradient: 'linear-gradient(135deg, #EF9F27 0%, #BA7517 100%)' },
    { name: 'Cielo Claro', gradient: 'linear-gradient(135deg, #85B7EB 0%, #378ADD 100%)' },
    { name: 'Primavera Verde', gradient: 'linear-gradient(135deg, #97C459 0%, #639922 100%)' },
  ];

  return (
    <section id="temas" style={{
      background: 'var(--bg-white)',
      padding: '4rem 2rem',
      marginTop: '2rem',
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
          Elige tu Tema
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '2rem',
        }}>
          {themes.map((theme, idx) => (
            <div
              key={idx}
              style={{
                background: theme.gradient,
                borderRadius: '12px',
                padding: '2rem',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 500,
                textAlign: 'center',
                transition: 'transform 0.3s',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {theme.name}
            </div>
          ))}
        </div>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '14px',
        }}>
          ✨ Cada tema incluye: animaciones, música, abrir envelope, galería de fotos, lista de regalos, confirmación.
        </p>
      </div>
    </section>
  );
}
