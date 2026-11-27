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
import { MUESTRA_BAUTIZO_MENSAJE } from '../lib/whatsapp';

// Contexto agregado al mensaje de WhatsApp de cada botón de plan en esta página (Pricing y
// FinalCTA) -- nunca cambia el precio/contenido del plan, solo deja claro que es para un bautizo.
const CONTEXTO_PLAN_BAUTIZO = 'para mi invitación de bautizo';

// Foto del hero de bautizo (portada de la muestra «Santiago» a cuadro completo, sin mockup de
// celular) subida a Cloudinary, cloud dswrrm5u1. Verificada antes de usarla.
const HERO_BAUTIZO_URL = 'https://res.cloudinary.com/dswrrm5u1/image/upload/v1795786827/xrn51qlxmxwhjam3fn6a.jpg';

export const metadata: Metadata = {
  title: 'Invitamx — Invitaciones de Bautizo Digitales',
  description: 'Invitaciones digitales de bautizo con muestra gratis: mírala con el nombre y la foto de tu bebé antes de pagar. Planes desde $299 MXN.',
  // Pisa el `keywords` del layout raíz (menciona "XV"/"quinceañera") -- Next.js hereda metadata
  // del padre si una ruta hija no la redeclara, así que sin esto se filtraría a /bautizo.
  keywords: 'invitaciones de bautizo, invitaciones digitales, invitación de bautizo interactiva, bautizo, personalizado',
  alternates: {
    canonical: 'https://invitamx.app/bautizo',
  },
  openGraph: {
    title: 'Invitamx — Invitaciones de Bautizo Digitales',
    description: 'Invitaciones digitales de bautizo con muestra gratis: mírala con el nombre y la foto de tu bebé antes de pagar. Planes desde $299 MXN.',
    type: 'website',
    url: 'https://invitamx.app/bautizo',
    siteName: 'Invitamx',
    images: [
      {
        url: HERO_BAUTIZO_URL,
        width: 1200,
        height: 630,
        alt: 'Ejemplo de invitación de bautizo digital de Invitamx',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invitamx — Invitaciones de Bautizo Digitales',
    description: 'Invitaciones digitales de bautizo con muestra gratis: mírala con el nombre y la foto de tu bebé antes de pagar. Planes desde $299 MXN.',
  },
};

export default function BautizoPage() {
  return (
    <>
      <Header />
      <Hero
        titulo="Mira la invitación del bautizo antes de pagar un solo peso"
        subtitulo="Olvídate de imprimir invitaciones que se pierden o se quedan olvidadas en un cajón. Nos dicen el nombre del bebé, la fecha y el tema que les gustó, y les mandamos una muestra real de su invitación — interactiva, con animaciones, música y cuenta regresiva — sin costo y sin anticipo."
        whatsappMensaje={MUESTRA_BAUTIZO_MENSAJE}
        trackLabel="Hero CTA - Muestra gratis (bautizo)"
        imagenSrc={HERO_BAUTIZO_URL}
        altImagen="Ejemplo de invitación de bautizo"
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
              'El nombre del bebé, la fecha del bautizo y el tema que les gustó (y una foto suya, si la tienen a la mano). Nada de formularios.',
          },
          {
            number: '03',
            title: 'Recibe el link de SU invitación',
            description:
              'Con su nombre y su foto, tal cual quedaría, para que la vean y la enseñen en casa antes de decidir.',
          },
        ]}
        garantiaExtra="Garantía Invitamx: primero ves la invitación del bautizo, ya con el nombre y la foto de tu bebé. Si la muestra no te convence, no pagas un solo peso — sin anticipo y sin compromiso."
      />
      <Themes
        catalogoUrl="https://invitaciones.invitamx.app/?catalog=true&evento=bautizo"
        tituloIframe="Catálogo de temas de bautizo"
      />
      <HechaATuEstilo whatsappMensaje="Hola, quiero mi invitación de bautizo a mi estilo" />
      <WhyUs subtitulo="No necesitas saber de diseño ni pagar precio de agencia para que la invitación del bautizo se vea como se merece." />
      <Features />
      <HowItWorks />
      <Pricing contexto={CONTEXTO_PLAN_BAUTIZO} />
      <FAQ />
      <FinalCTA
        titulo="¿Lista para ver la invitación del bautizo?"
        subtitulo="Pide tu muestra gratis: solo dinos el nombre del bebé, la fecha y el tema que les enamoró. Te la mandamos sin costo y sin anticipo — el plan lo eliges después, cuando ya la viste."
        whatsappMensajeMuestra={MUESTRA_BAUTIZO_MENSAJE}
        garantiaCorta="Sin riesgo: primero la ves, luego decides."
        contexto={CONTEXTO_PLAN_BAUTIZO}
      />
      <Footer
        tagline="Invitaciones digitales profesionales diseñadas con amor. 💜"
        puente={{ texto: '¿Son XV años? Mira las invitaciones de XV años →', href: '/' }}
      />
      <FloatingWhatsApp mensaje={MUESTRA_BAUTIZO_MENSAJE} />
    </>
  );
}
