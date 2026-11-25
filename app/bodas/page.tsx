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
import { MUESTRA_BODA_MENSAJE } from '../lib/whatsapp';

// Contexto agregado al mensaje de WhatsApp de cada botón de plan en esta página (Pricing y
// FinalCTA) -- nunca cambia el precio/contenido del plan, solo deja claro que es para una boda.
const CONTEXTO_PLAN_BODA = 'para mi invitación de boda';

// Pendiente (brief "/bodas" 2026-11-25): Muse debe generar y subir a Cloudinary el mockup de
// celular con una invitación de boda real para el hero de esta página. Mientras eso no exista,
// se usa la misma foto del hero de XV como marcador -- nunca se inventa otra URL.
const HERO_BODAS_URL = '/images/hero/hero-invitation.jpg';

export const metadata: Metadata = {
  title: 'Invitamx — Invitaciones de Boda Digitales',
  description: 'Invitaciones de boda digitales e interactivas. Pide tu muestra gratis y mírala antes de pagar.',
  // Pisa el `keywords` del layout raíz (menciona "XV"/"quinceañera") -- Next.js hereda metadata
  // del padre si una ruta hija no la redeclara, así que sin esto se filtraría a /bodas.
  keywords: 'invitaciones de boda, invitaciones digitales, invitación de boda interactiva, diseño de boda, personalizado',
  alternates: {
    canonical: 'https://invitamx.app/bodas',
  },
  openGraph: {
    title: 'Invitamx — Invitaciones de Boda Digitales',
    description: 'Invitaciones de boda digitales e interactivas. Pide tu muestra gratis y mírala antes de pagar.',
    type: 'website',
    url: 'https://invitamx.app/bodas',
    siteName: 'Invitamx',
    images: [
      {
        url: HERO_BODAS_URL,
        width: 1200,
        height: 630,
        alt: 'Ejemplo de invitación de boda digital de Invitamx',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invitamx — Invitaciones de Boda Digitales',
    description: 'Invitaciones de boda digitales e interactivas. Pide tu muestra gratis y mírala antes de pagar.',
  },
};

export default function BodasPage() {
  return (
    <>
      <Header />
      <Hero
        titulo="Mira la invitación de tu boda antes de pagar un solo peso"
        subtitulo="Olvídate de imprimir cientos de invitaciones que terminan olvidadas en un cajón. Nos dicen los nombres de los novios, la fecha y el tema que les gustó, y les mandamos una muestra real de su invitación — interactiva, con animaciones, música y cuenta regresiva — sin costo y sin anticipo."
        whatsappMensaje={MUESTRA_BODA_MENSAJE}
        trackLabel="Hero CTA - Muestra gratis (bodas)"
        imagenSrc={HERO_BODAS_URL}
        altImagen="Ejemplo de invitación de boda"
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
              'Los nombres de los novios, la fecha de la boda y el tema que les gustó (y una foto suya, si la tienen a la mano). Nada de formularios.',
          },
          {
            number: '03',
            title: 'Recibe el link de SU invitación',
            description:
              'Con sus nombres y su foto, tal cual quedaría, para que la vean y la enseñen en casa antes de decidir.',
          },
        ]}
        garantiaExtra="Garantía Invitamx: primero ves la invitación de tu boda, ya con sus nombres y su foto. Si la muestra no te convence, no pagas un solo peso — sin anticipo y sin compromiso."
      />
      <Themes
        catalogoUrl="https://invitaciones.invitamx.app/?catalog=true&evento=boda"
        tituloIframe="Catálogo de Temas de Boda en vivo"
      />
      <HechaATuEstilo whatsappMensaje="Hola, quiero mi invitación de boda a mi estilo" />
      <WhyUs subtitulo="No necesitas saber de diseño ni pagar precio de agencia para que la invitación de tu boda se vea como se merece." />
      <Features />
      <HowItWorks />
      <Pricing contexto={CONTEXTO_PLAN_BODA} />
      <FAQ />
      <FinalCTA
        titulo="¿Lista para ver la invitación de tu boda?"
        subtitulo="Pide tu muestra gratis: solo dinos los nombres de los novios, la fecha y el tema que les enamoró. Te la mandamos sin costo y sin anticipo — el plan lo eligen después, cuando ya la vieron."
        whatsappMensajeMuestra={MUESTRA_BODA_MENSAJE}
        garantiaCorta="Sin riesgo: primero la ves, luego decides."
        contexto={CONTEXTO_PLAN_BODA}
      />
      <Footer tagline="Invitaciones digitales profesionales diseñadas con amor. 💜" />
      <FloatingWhatsApp mensaje={MUESTRA_BODA_MENSAJE} />
    </>
  );
}
