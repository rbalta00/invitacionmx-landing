interface PasoMuestra {
  number: string;
  title: string;
  description: string;
}

interface GuaranteeProps {
  titulo?: string;
  pasos?: PasoMuestra[];
  piePromesa?: string;
  pieAjustes?: string;
  /** Párrafo de garantía ("Garantía Invitamx: ..."), default = la de XV de la home; /bodas pasa
   *  su propia versión para novios. */
  garantiaExtra?: string;
}

const PASOS_DEFAULT: PasoMuestra[] = [
  {
    number: '01',
    title: 'Escríbenos por WhatsApp',
    description: 'Un mensaje y ya.',
  },
  {
    number: '02',
    title: 'Solo dinos 3 cosas',
    description:
      'El nombre de la festejada, la fecha del evento y el tema que te gustó (y su foto, si la tienes a la mano). Nada de formularios.',
  },
  {
    number: '03',
    title: 'Recibe el link de SU invitación',
    description:
      'Con su nombre y su foto, tal cual quedaría, para que la veas y la enseñes en casa antes de decidir.',
  },
];

export default function Guarantee({
  titulo = 'La Ves Antes de Pagar: Tu Muestra Gratis',
  pasos = PASOS_DEFAULT,
  piePromesa = 'Sin anticipo · Sin formulario · Sin compromiso · Muestra vigente por 5 días · Se arma con el plan Estándar, para que la veas completa',
  pieAjustes = 'Y una vez que compras, tienes 2 rondas de ajustes incluidas, dentro de los 7 días posteriores a la entrega, para dejarla exactamente como la quieres.',
  garantiaExtra = 'Garantía Invitamx: primero ves la invitación de tu hija, ya con su nombre y su foto. Si la muestra no te convence, no pagas un solo peso — sin anticipo y sin compromiso.',
}: GuaranteeProps = {}) {
  return (
    <section style={{
      maxWidth: '1000px',
      margin: '4rem auto',
      padding: '2rem',
      background: 'linear-gradient(135deg, #F3E6D3 0%, #F8ECD9 100%)',
      borderRadius: '12px',
      border: '2px solid #DDBE86',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 500,
          marginBottom: '2rem',
          color: 'var(--primary-dark)',
        }}>
          {titulo}
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginBottom: '2rem',
      }}>
        {pasos.map((paso) => (
          <div key={paso.number} style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 0.75rem',
              fontFamily: 'var(--font-display), Georgia, serif',
              fontStyle: 'italic',
              fontSize: '24px',
              color: 'var(--accent)',
              borderBottom: '1px solid var(--accent)',
              paddingBottom: '0.3rem',
              minWidth: '2.2ch',
            }}>
              {paso.number}
            </div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 500,
              marginBottom: '0.5rem',
              color: 'var(--primary-dark)',
            }}>
              {paso.title}
            </h3>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              margin: 0,
            }}>
              {paso.description}
            </p>
          </div>
        ))}
      </div>

      <p style={{
        textAlign: 'center',
        fontSize: '14px',
        color: 'var(--primary-dark)',
        fontWeight: 500,
        margin: '0 0 1rem',
      }}>
        {piePromesa}
      </p>

      <p style={{
        textAlign: 'center',
        fontSize: '13px',
        color: 'var(--text-secondary)',
        margin: garantiaExtra ? '0 0 1rem' : 0,
        lineHeight: '1.6',
      }}>
        {pieAjustes}
      </p>

      {garantiaExtra && (
        <p style={{
          textAlign: 'center',
          fontSize: '13px',
          color: 'var(--primary-dark)',
          fontWeight: 500,
          margin: 0,
          lineHeight: '1.6',
        }}>
          {garantiaExtra}
        </p>
      )}
    </section>
  );
}
