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
import { MUESTRA_BABY_SHOWER_MENSAJE } from '../lib/whatsapp';

// Contexto agregado al mensaje de WhatsApp de cada botón de plan en esta página (Pricing y
// FinalCTA) -- nunca cambia el precio/contenido del plan, solo deja claro que es para un baby shower.
const CONTEXTO_PLAN_BABY_SHOWER = 'para mi invitación de baby shower';

// Foto del hero de baby shower (portada de la muestra «Mateo» a cuadro completo, sin mockup de
// celular) subida a Cloudinary, cloud dswrrm5u1. Verificada antes de usarla.
const HERO_BABY_SHOWER_URL = 'https://res.cloudinary.com/dswrrm5u1/image/upload/v1795790185/s2l7iywwv43pmrnr3sci.jpg';

export const metadata: Metadata = {
  title: 'Invitamx — Invitaciones de Baby Shower Digitales',
  description: 'Invitaciones digitales de baby shower con muestra gratis: mírala con el nombre de tu bebé antes de pagar. Planes desde $299 MXN.',
  // Pisa el `keywords` del layout raíz (menciona "XV"/"quinceañera") -- Next.js hereda metadata
  // del padre si una ruta hija no la redeclara, así que sin esto se filtraría a /baby-shower.
  keywords: 'invitaciones de baby shower, invitaciones digitales, invitación de baby shower interactiva, baby shower, personalizado',
  alternates: {
    canonical: 'https://invitamx.app/baby-shower',
  },
  openGraph: {
    title: 'Invitamx — Invitaciones de Baby Shower Digitales',
    description: 'Invitaciones digitales de baby shower con muestra gratis: mírala con el nombre de tu bebé antes de pagar. Planes desde $299 MXN.',
    type: 'website',
    url: 'https://invitamx.app/baby-shower',
    siteName: 'Invitamx',
    images: [
      {
        url: HERO_BABY_SHOWER_URL,
        width: 1200,
        height: 630,
        alt: 'Ejemplo de invitación de baby shower digital de Invitamx',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invitamx — Invitaciones de Baby Shower Digitales',
    description: 'Invitaciones digitales de baby shower con muestra gratis: mírala con el nombre de tu bebé antes de pagar. Planes desde $299 MXN.',
  },
};

export default function BabyShowerPage() {
  return (
    <>
      <Header />
      <Hero
        titulo="Mira la invitación de tu baby shower antes de pagar un solo peso"
        subtitulo="Olvídate de imprimir invitaciones que se pierden o llegan arrugadas. Nos dices el nombre de tu bebé, la fecha y el tema que te gustó, y te mandamos una muestra real de tu invitación — interactiva, con animaciones, música y cuenta regresiva — sin costo y sin anticipo."
        whatsappMensaje={MUESTRA_BABY_SHOWER_MENSAJE}
        trackLabel="Hero CTA - Muestra gratis (baby shower)"
        imagenSrc={HERO_BABY_SHOWER_URL}
        altImagen="Ejemplo de invitación de baby shower"
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
              'El nombre de tu bebé, la fecha del baby shower y el tema que te gustó (y una foto tuya, si la tienes a la mano). Nada de formularios.',
          },
          {
            number: '03',
            title: 'Recibe el link de SU invitación',
            description:
              'Con el nombre de tu bebé y tu foto, tal cual quedaría, para que la veas y la enseñes antes de decidir.',
          },
        ]}
        garantiaExtra="Garantía Invitamx: primero ves la invitación de tu baby shower, ya con el nombre de tu bebé. Si la muestra no te convence, no pagas un solo peso — sin anticipo y sin compromiso."
      />
      <Themes
        catalogoUrl="https://invitaciones.invitamx.app/?catalog=true&evento=baby-shower"
        tituloIframe="Catálogo de temas de baby shower"
      />
      <HechaATuEstilo whatsappMensaje="Hola, quiero mi invitación de baby shower a mi estilo" />
      <WhyUs subtitulo="No necesitas saber de diseño ni pagar precio de agencia para que la invitación de tu baby shower se vea como se merece." />
      <Features />
      <HowItWorks />
      <Pricing contexto={CONTEXTO_PLAN_BABY_SHOWER} />
      <FAQ />
      <FinalCTA
        titulo="¿Lista para ver la invitación de tu baby shower?"
        subtitulo="Pide tu muestra gratis: solo dinos el nombre de tu bebé, la fecha y el tema que te enamoró. Te la mandamos sin costo y sin anticipo — el plan lo eliges después, cuando ya la viste."
        whatsappMensajeMuestra={MUESTRA_BABY_SHOWER_MENSAJE}
        garantiaCorta="Sin riesgo: primero la ves, luego decides."
        contexto={CONTEXTO_PLAN_BABY_SHOWER}
      />
      <Footer
        tagline="Invitaciones digitales profesionales diseñadas con amor. 💜"
        puente={{ texto: '¿Son XV años? Mira las invitaciones de XV años →', href: '/' }}
      />
      <FloatingWhatsApp mensaje={MUESTRA_BABY_SHOWER_MENSAJE} />
    </>
  );
}
