import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | Invitamx',
  description: 'Aviso de privacidad de Invitamx: qué datos recabamos y para qué los usamos.',
};

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '3rem 2rem 4rem',
      }}>
        <h1 style={{ fontSize: '32px', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>
          Aviso de Privacidad
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Última actualización: 25 de noviembre de 2026
        </p>

        <p style={{ marginBottom: '1.5rem', fontSize: '14px', lineHeight: 1.7 }}>
          InvitaMX (invitamx.app), con domicilio en Puebla, Puebla, México, es responsable del
          tratamiento de tus datos personales, conforme a la Ley Federal de Protección de Datos
          Personales en Posesión de los Particulares.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          Datos que recabamos
        </h2>
        <ul style={{ fontSize: '14px', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
          <li>De contacto: tu nombre y tu número de WhatsApp.</li>
          <li>Del evento: nombre de la festejada o festejados, fecha, lugares de ceremonia y recepción, y los textos que nos pides incluir.</li>
          <li>Fotografías: las imágenes que nos envías para la invitación.</li>
          <li>De invitados: nombres de familias y número de pases, cuando contratas esa función.</li>
          <li>De pago: el pago se procesa a través de Mercado Pago; InvitaMX no recibe ni almacena los datos de tu tarjeta.</li>
        </ul>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          Fotografías de menores de edad
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          En eventos como XV años y cumpleaños infantiles, las fotografías de menores se utilizan
          únicamente con la autorización de la madre, el padre o el tutor que contrata el
          servicio, y solo para elaborar la invitación contratada.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          Para qué usamos tus datos (finalidades)
        </h2>
        <ul style={{ fontSize: '14px', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
          <li>Elaborar tu muestra gratuita y tu invitación digital.</li>
          <li>Enviarte tus links (muestra, revisión, invitación final y PDF, según tu plan).</li>
          <li>Operar los pases y el control de acceso de tu evento, si los contrataste.</li>
          <li>Gestionar tus pagos y darte atención por WhatsApp.</li>
        </ul>
        <p style={{ fontSize: '14px', lineHeight: 1.7, marginTop: '0.75rem' }}>
          No usamos tus datos para fines distintos a los anteriores, y no vendemos, rentamos ni
          compartimos tus datos personales con terceros con fines de publicidad.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          Transferencias
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Tus datos solo se comparten con los proveedores tecnológicos indispensables para operar
          el servicio (almacenamiento de imágenes y procesamiento de pagos), o cuando una
          autoridad lo requiera conforme a la ley.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          Cookies y herramientas de analítica
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Este sitio usa Meta Pixel (de Facebook/Instagram) y Google Analytics. Ambas herramientas
          colocan cookies en tu navegador y registran qué páginas visitas y en qué botones haces
          clic (por ejemplo, al elegir un plan o iniciar una conversación de WhatsApp), para que
          podamos medir el desempeño de nuestros anuncios y mejorar este sitio. No usamos esta
          información para identificarte personalmente fuera de esos fines.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          ¿Dónde se almacenan tus datos?
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Tus fotografías se almacenan con el proveedor Cloudinary. El resto de los datos de tu
          pedido (fecha, detalles del evento, confirmaciones de tus invitados) se almacenan con el
          proveedor Supabase. Ambos son proveedores externos que usamos únicamente para operar el
          servicio.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          Tus derechos (ARCO)
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Puedes ejercer tus derechos de Acceso, Rectificación, Cancelación y Oposición, así como
          revocar tu consentimiento, escribiéndonos al correo{' '}
          <a href="mailto:contacto@invitamx.app" style={{ color: 'var(--primary-dark)' }}>contacto@invitamx.app</a>{' '}
          o por WhatsApp al 221 744 5410. Responderemos en los plazos que marca la ley.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          Cambios a este aviso
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Cualquier cambio se publicará en invitamx.app. El uso del servicio después de un cambio
          implica su aceptación.
        </p>
      </main>
      <Footer />
    </>
  );
}
