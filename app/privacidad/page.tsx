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
          Última actualización: 31 de julio de 2026
        </p>

        <p style={{ marginBottom: '1.5rem', fontSize: '14px', lineHeight: 1.7 }}>
          Invitamx es un servicio de diseño de invitaciones digitales para fiestas de XV años.
          Este aviso explica, en términos simples, qué datos personales recabamos y para qué los
          usamos, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los
          Particulares (LFPDPPP).
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          ¿Qué datos recabamos?
        </h2>
        <ul style={{ fontSize: '14px', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
          <li>De quien contrata el servicio: nombre de la quinceañera, número de WhatsApp, fecha y detalles del evento (ceremonia, recepción, itinerario, padrinos), y las fotografías que nos comparta.</li>
          <li>De los invitados: nombre y respuesta de confirmación de asistencia (RSVP), capturados directo desde la invitación digital.</li>
          <li>De navegación en este sitio: datos generales de analítica (páginas vistas), si el sitio tiene activo Facebook Pixel o Google Analytics.</li>
        </ul>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          ¿Para qué los usamos?
        </h2>
        <ul style={{ fontSize: '14px', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
          <li>Diseñar, generar y entregar la invitación digital contratada.</li>
          <li>Comunicarnos contigo por WhatsApp sobre tu pedido (avances, pagos, ajustes).</li>
          <li>Llevar el registro de confirmaciones de asistencia de tus invitados, para que tú los veas.</li>
        </ul>
        <p style={{ fontSize: '14px', lineHeight: 1.7, marginTop: '0.75rem' }}>
          No vendemos ni compartimos tus datos personales con terceros para fines distintos a la
          prestación de este servicio.
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
          Puedes solicitar en cualquier momento Acceder, Rectificar o Cancelar tus datos
          personales, u Oponerte a su uso, contactándonos directamente por WhatsApp con el mismo
          número donde gestionaste tu pedido.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          Cambios a este aviso
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Podemos actualizar este aviso ocasionalmente. La fecha de la última actualización
          siempre aparece al inicio de esta página.
        </p>
      </main>
      <Footer />
    </>
  );
}
