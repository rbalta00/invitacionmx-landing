import type { Metadata } from 'next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Guarantee from '../components/Guarantee';
import Themes from '../components/Themes';
import HechaATuEstilo from '../components/HechaATuEstilo';
import WhyUs from '../components/WhyUs';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { MUESTRA_GRADUACION_MENSAJE } from '../lib/whatsapp';

// Contexto agregado al mensaje de WhatsApp de cada botón de plan en esta página (Pricing y
// FinalCTA) -- nunca cambia el precio/contenido del plan, solo deja claro que es para una graduación.
const CONTEXTO_PLAN_GRADUACION = 'para mi invitación de graduación';

// Foto del hero de graduación (portada de la muestra «Andrea» a cuadro completo) subida a
// Cloudinary, cloud dswrrm5u1. Verificada antes de usarla.
const HERO_GRADUACION_URL = 'https://res.cloudinary.com/dswrrm5u1/image/upload/v1795789330/jagtdbvsgqo9ce7yzj39.jpg';

export const metadata: Metadata = {
  title: 'Invitamx — Invitaciones de Graduación Digitales',
  description: 'Invitaciones digitales de graduación con muestra gratis: mírala con tu nombre y tu foto antes de pagar. Planes desde $299 MXN.',
  // Pisa el `keywords` del layout raíz (menciona "XV"/"quinceañera") -- Next.js hereda metadata
  // del padre si una ruta hija no la redeclara, así que sin esto se filtraría a /graduacion.
  keywords: 'invitaciones de graduación, invitaciones digitales, invitación de graduación interactiva, graduación, personalizado',
  alternates: {
    canonical: 'https://invitamx.app/graduacion',
  },
  openGraph: {
    title: 'Invitamx — Invitaciones de Graduación Digitales',
    description: 'Invitaciones digitales de graduación con muestra gratis: mírala con tu nombre y tu foto antes de pagar. Planes desde $299 MXN.',
    type: 'website',
    url: 'https://invitamx.app/graduacion',
    siteName: 'Invitamx',
    images: [
      {
        url: HERO_GRADUACION_URL,
        width: 1200,
        height: 630,
        alt: 'Ejemplo de invitación de graduación digital de Invitamx',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invitamx — Invitaciones de Graduación Digitales',
    description: 'Invitaciones digitales de graduación con muestra gratis: mírala con tu nombre y tu foto antes de pagar. Planes desde $299 MXN.',
  },
};

export default function GraduacionPage() {
  return (
    <>
      <Header />
      <Hero
        titulo="Mira tu invitación de graduación antes de pagar un solo peso"
        subtitulo="Olvídate de imprimir invitaciones que se pierden o llegan arrugadas. Nos dices tu nombre, la fecha y el tema que te gustó, y te mandamos una muestra real de tu invitación — interactiva, con animaciones, música y cuenta regresiva — sin costo y sin anticipo."
        whatsappMensaje={MUESTRA_GRADUACION_MENSAJE}
        trackLabel="Hero CTA - Muestra gratis (graduación)"
        imagenSrc={HERO_GRADUACION_URL}
        altImagen="Ejemplo de invitación de graduación"
      />
      <SocialProof />
      <Guarantee
        pasos={[
          {
            number: '01',
            title: 'Escríbenos por WhatsApp',
            description: 'Un mensaje y ya.',
          },
          {
            number: '02',
            title: 'Solo dinos 3 cosas',
            description:
              'Tu nombre, la fecha de la graduación y el tema que te gustó (y una foto tuya, si la tienes a la mano). Nada de formularios.',
          },
          {
            number: '03',
            title: 'Recibe el link de TU invitación',
            description:
              'Con tu nombre y tu foto, tal cual quedaría, para que la veas y la enseñes antes de decidir.',
          },
        ]}
        garantiaExtra="Garantía Invitamx: primero ves tu invitación de graduación, ya con tu nombre y tu foto. Si la muestra no te convence, no pagas un solo peso — sin anticipo y sin compromiso."
      />
      <Themes
        catalogoUrl="https://invitaciones.invitamx.app/?catalog=true&evento=graduacion"
        tituloIframe="Catálogo de temas de graduación"
      />
      <HechaATuEstilo whatsappMensaje="Hola, quiero mi invitación de graduación a mi estilo" />
      <WhyUs subtitulo="No necesitas saber de diseño ni pagar precio de agencia para que tu invitación de graduación se vea como se merece." />
      <Features />
      <HowItWorks />
      <Pricing contexto={CONTEXTO_PLAN_GRADUACION} />
      <FAQ />
      <FinalCTA
        titulo="¿Lista para ver tu invitación de graduación?"
        subtitulo="Pide tu muestra gratis: solo dinos tu nombre, la fecha y el tema que te enamoró. Te la mandamos sin costo y sin anticipo — el plan lo eliges después, cuando ya la viste."
        whatsappMensajeMuestra={MUESTRA_GRADUACION_MENSAJE}
        garantiaCorta="Sin riesgo: primero la ves, luego decides."
        contexto={CONTEXTO_PLAN_GRADUACION}
      />
      <Footer
        tagline="Invitaciones digitales profesionales diseñadas con amor. 💜"
        puente={{ texto: '¿Son XV años? Mira las invitaciones de XV años →', href: '/' }}
      />
      <FloatingWhatsApp mensaje={MUESTRA_GRADUACION_MENSAJE} />
    </>
  );
}
