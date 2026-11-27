import type { Metadata } from 'next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Guarantee from '../components/Guarantee';
import Themes from '../components/Themes';
import HechaATuEstilo from '../components/HechaATuEstilo';
import WhyUs from '../components/WhyUs';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { MUESTRA_CUMPLEANOS_MENSAJE } from '../lib/whatsapp';

// Contexto agregado al mensaje de WhatsApp de cada botón de plan en esta página (Pricing y
// FinalCTA) -- nunca cambia el precio/contenido del plan, solo deja claro que es para un cumpleaños.
const CONTEXTO_PLAN_CUMPLEANOS = 'para mi invitación de cumpleaños';

// Foto del hero de cumpleaños (invitación de cumpleaños real a cuadro completo, sin mockup
// de celular) generada y subida a Cloudinary por Muse (2026-11-27), cloud dswrrm5u1.
// Es la portada de la muestra de cumpleaños niña (Valentina, 8 años), un diseño entregable.
const HERO_CUMPLEANOS_URL = 'https://res.cloudinary.com/dswrrm5u1/image/upload/v1795781329/jcphujfdtcbfuenubphj.jpg';

export const metadata: Metadata = {
  title: 'Invitamx — Invitaciones de Cumpleaños Digitales',
  description: 'Invitaciones de cumpleaños digitales e interactivas. Pide tu muestra gratis y mírala antes de pagar.',
  // Pisa el `keywords` del layout raíz (menciona "XV"/"quinceañera") -- Next.js hereda metadata
  // del padre si una ruta hija no la redeclara, así que sin esto se filtraría a /cumpleanos.
  keywords: 'invitaciones de cumpleaños, invitaciones digitales, invitación de cumpleaños interactiva, fiesta infantil, personalizado',
  alternates: {
    canonical: 'https://invitamx.app/cumpleanos',
  },
  openGraph: {
    title: 'Invitamx — Invitaciones de Cumpleaños Digitales',
    description: 'Invitaciones de cumpleaños digitales e interactivas. Pide tu muestra gratis y mírala antes de pagar.',
    type: 'website',
    url: 'https://invitamx.app/cumpleanos',
    siteName: 'Invitamx',
    images: [
      {
        url: HERO_CUMPLEANOS_URL,
        width: 1200,
        height: 630,
        alt: 'Ejemplo de invitación de cumpleaños digital de Invitamx',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invitamx — Invitaciones de Cumpleaños Digitales',
    description: 'Invitaciones de cumpleaños digitales e interactivas. Pide tu muestra gratis y mírala antes de pagar.',
  },
};

export default function CumpleanosPage() {
  return (
    <>
      <Header />
      <Hero
        titulo="Mira la invitación del cumpleaños antes de pagar un solo peso"
        subtitulo="Olvídate de imprimir invitaciones que se pierden o llegan arrugadas en la mochila. Nos dicen el nombre del festejado o la festejada, la fecha y el tema que les gustó, y les mandamos una muestra real de su invitación — interactiva, con animaciones, música y cuenta regresiva — sin costo y sin anticipo."
        whatsappMensaje={MUESTRA_CUMPLEANOS_MENSAJE}
        trackLabel="Hero CTA - Muestra gratis (cumpleaños)"
        imagenSrc={HERO_CUMPLEANOS_URL}
        altImagen="Ejemplo de invitación de cumpleaños"
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
              'El nombre del festejado o la festejada, la fecha del cumpleaños y el tema que les gustó (y una foto suya, si la tienen a la mano). Nada de formularios.',
          },
          {
            number: '03',
            title: 'Recibe el link de SU invitación',
            description:
              'Con su nombre y su foto, tal cual quedaría, para que la vean y la enseñen en casa antes de decidir.',
          },
        ]}
        garantiaExtra="Garantía Invitamx: primero ves la invitación del cumpleaños, ya con el nombre y la foto de tu festejado. Si la muestra no te convence, no pagas un solo peso — sin anticipo y sin compromiso."
      />
      <Themes
        catalogoUrl="https://invitaciones.invitamx.app/?catalog=true&evento=cumpleanos"
        tituloIframe="Catálogo de Temas de Cumpleaños en vivo"
      />
      <HechaATuEstilo whatsappMensaje="Hola, quiero mi invitación de cumpleaños a mi estilo" />
      <WhyUs subtitulo="No necesitas saber de diseño ni pagar precio de agencia para que la invitación del cumpleaños se vea como se merece." />
      <Features />
      <HowItWorks />
      <Pricing contexto={CONTEXTO_PLAN_CUMPLEANOS} />
      <FAQ />
      <FinalCTA
        titulo="¿Lista para ver la invitación del cumpleaños?"
        subtitulo="Pide tu muestra gratis: solo dinos el nombre del festejado o la festejada, la fecha y el tema que les enamoró. Te la mandamos sin costo y sin anticipo — el plan lo eliges después, cuando ya la viste."
        whatsappMensajeMuestra={MUESTRA_CUMPLEANOS_MENSAJE}
        garantiaCorta="Sin riesgo: primero la ves, luego decides."
        contexto={CONTEXTO_PLAN_CUMPLEANOS}
      />
      <Footer
        tagline="Invitaciones digitales profesionales diseñadas con amor. 💜"
        puente={{ texto: '¿Son XV años? Mira las invitaciones de XV →', href: '/' }}
      />
      <FloatingWhatsApp mensaje={MUESTRA_CUMPLEANOS_MENSAJE} />
    </>
  );
}
