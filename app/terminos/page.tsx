import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Invitamx',
  description: 'Términos y condiciones del servicio de invitaciones digitales de Invitamx.',
};

export default function TerminosPage() {
  return (
    <>
      <Header />
      <main style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '3rem 2rem 4rem',
      }}>
        <h1 style={{ fontSize: '32px', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>
          Términos y Condiciones
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Última actualización: 31 de julio de 2026
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '1rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          El servicio
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Invitamx diseña invitaciones digitales personalizadas para fiestas de XV años, en tres
          paquetes (Básico, Premium, Deluxe) con complementos opcionales. El pedido se realiza por
          WhatsApp: eliges tema, paquete y secciones, nos compartes tus datos y fotos, y entregamos
          tu invitación en 24–48 horas.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          Pagos
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Este sitio no procesa pagos en línea. Se solicita un anticipo del 50% para apartar tu
          fecha y comenzar el diseño; el 50% restante se cobra contra la entrega del link final.
          El cobro se hace de forma manual (transferencia bancaria o un link de pago que te
          compartimos por WhatsApp) — no se guarda ningún dato de tarjeta en este sitio.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          Ajustes y cambios
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Incluimos 2 rondas de ajustes sin costo dentro de los primeros 7 días después de la
          entrega. Pasado ese periodo, o después de la segunda ronda, cada ajuste adicional tiene
          un costo de $99–150 MXN.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          Cancelaciones y reembolsos
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Si tienes un problema con tu pedido, contáctanos por WhatsApp — lo resolvemos caso por
          caso. El anticipo cubre el tiempo de diseño ya invertido, así que no se reembolsa una
          vez iniciado el trabajo; si el problema es nuestro, lo corregimos sin costo.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          Contenido que nos compartes
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Tú conservas los derechos sobre las fotografías y textos que nos envíes para tu
          invitación. Nos das permiso para usarlos únicamente para diseñar y entregar tu
          invitación. El diseño de los temas, plantillas y la plataforma en sí son propiedad de
          Invitamx.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          Limitación de responsabilidad
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          El servicio se ofrece "tal cual". Hacemos nuestro mejor esfuerzo para que el link de tu
          invitación esté disponible en todo momento, pero no garantizamos disponibilidad
          ininterrumpida frente a fallas de terceros (hosting, WhatsApp, etc.) fuera de nuestro
          control.
        </p>

        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2.5rem' }}>
          Este documento es informativo y no sustituye asesoría legal profesional.
        </p>
      </main>
      <Footer />
    </>
  );
}
