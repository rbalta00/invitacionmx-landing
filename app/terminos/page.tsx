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
          Última actualización: 25 de noviembre de 2026
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '1rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          1. El servicio
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          InvitaMX elabora invitaciones digitales para XV años, bodas, cumpleaños, bautizos,
          primera comunión, graduaciones, baby showers y aniversarios, en los planes publicados
          en invitamx.app: Básico $299, Estándar $499 y Premium $799 MXN, más los complementos a
          la carta publicados (pases, PDF, QR de puerta, secciones y ajustes adicionales).
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          2. Muestra gratuita
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          La muestra gratuita tiene una vigencia de 5 días y se entrega con marca de agua. No
          implica compromiso de compra. Si contratas, se te envía el link permanente de la misma
          invitación.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          3. Anticipo
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Tu invitación se aparta y el trabajo de diseño inicia al registrarse el anticipo
          indicado para tu plan (vía link de pago de Mercado Pago). El anticipo no es
          reembolsable, porque el trabajo de diseño y armado inicia de inmediato.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          4. Revisión y ajustes
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Pagado el anticipo, recibes un link de revisión con vigencia de 7 días, sin marca de
          agua. Tu plan incluye 2 rondas de ajustes dentro de ese plazo; las rondas o ajustes
          adicionales tienen el costo publicado ($99).
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          5. Entrega final y liquidación
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          El link permanente de tu invitación — y el PDF, cuando tu plan o complemento lo incluye
          — se liberan al registrarse la liquidación total. Si el saldo no se cubre, la
          invitación puede pausarse (deja de mostrarse públicamente) hasta regularizar el pago,
          sin que ello genere reembolso del anticipo.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          6. Tiempos de entrega
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          La muestra y la primera revisión se entregan en 24 a 48 horas hábiles contadas a partir
          de que recibimos tus datos completos (y, para la invitación final, tus fotografías).
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          7. Contenido que nos entregas
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Tú eres responsable de la exactitud de los textos, fechas, horarios, direcciones y
          fotografías que nos entregas. Al enviarnos fotografías declaras tener autorización para
          usarlas; tratándose de menores de edad, declaras ser su madre, padre o tutor, o contar
          con su autorización.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          8. Pases y control de acceso
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Cuando contratas pases o QR de puerta, la lista de familias y cantidades la
          proporcionas tú; InvitaMX no se hace responsable de errores en los nombres o cantidades
          proporcionados por el cliente.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          9. Precios
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Los precios están en pesos mexicanos y pueden cambiar sin aviso para contrataciones
          nuevas. El precio y las condiciones de una invitación ya contratada se respetan.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          10. Disponibilidad
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          InvitaMX hará esfuerzos razonables por mantener la plataforma disponible. No somos
          responsables por fallas de servicios de terceros ajenos a nosotros (WhatsApp, la
          pasarela de pago, la conectividad de tus invitados).
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
          11. Ley aplicable
        </h2>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
          Estos términos se rigen por las leyes de México. Para cualquier controversia, las
          partes se someten a los tribunales de la ciudad de Puebla, Puebla.
        </p>

        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2.5rem' }}>
          Este documento es informativo y no sustituye asesoría legal profesional.
        </p>
      </main>
      <Footer />
    </>
  );
}
