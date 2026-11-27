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
import { MUESTRA_PRIMERA_COMUNION_MENSAJE } from '../lib/whatsapp';

// Contexto agregado al mensaje de WhatsApp de cada botón de plan en esta página (Pricing y
// FinalCTA) -- nunca cambia el precio/contenido del plan, solo deja claro que es para una primera comunión.
const CONTEXTO_PLAN_PRIMERA_COMUNION = 'para mi invitación de primera comunión';

// Foto del hero de primera comunión (portada de la muestra «Fernanda» a cuadro completo, sin
// mockup de celular) subida a Cloudinary, cloud dswrrm5u1. Verificada antes de usarla.
const HERO_PRIMERA_COMUNION_URL = 'https://res.cloudinary.com/dswrrm5u1/image/upload/v1795788122/l9ny45yc3nqavrpdogds.jpg';

export const metadata: Metadata = {
  title: 'Invitamx — Invitaciones de Primera Comunión Digitales',
  description: 'Invitaciones digitales de primera comunión con muestra gratis: mírala con el nombre y la foto de tu hijo o hija antes de pagar. Planes desde $299 MXN.',
  // Pisa el `keywords` del layout raíz (menciona "XV"/"quinceañera") -- Next.js hereda metadata
  // del padre si una ruta hija no la redeclara, así que sin esto se filtraría a /primera-comunion.
  keywords: 'invitaciones de primera comunión, invitaciones digitales, invitación de primera comunión interactiva, primera comunión, personalizado',
  alternates: {
    canonical: 'https://invitamx.app/primera-comunion',
  },
  openGraph: {
    title: 'Invitamx — Invitaciones de Primera Comunión Digitales',
    description: 'Invitaciones digitales de primera comunión con muestra gratis: mírala con el nombre y la foto de tu hijo o hija antes de pagar. Planes desde $299 MXN.',
    type: 'website',
    url: 'https://invitamx.app/primera-comunion',
    siteName: 'Invitamx',
    images: [
      {
        url: HERO_PRIMERA_COMUNION_URL,
        width: 1200,
        height: 630,
        alt: 'Ejemplo de invitación de primera comunión digital de Invitamx',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invitamx — Invitaciones de Primera Comunión Digitales',
    description: 'Invitaciones digitales de primera comunión con muestra gratis: mírala con el nombre y la foto de tu hijo o hija antes de pagar. Planes desde $299 MXN.',
  },
};

export default function PrimeraComunionPage() {
  return (
    <>
      <Header />
      <Hero
        titulo="Mira la invitación de la primera comunión antes de pagar un solo peso"
        subtitulo="Olvídate de imprimir invitaciones que se pierden o se quedan olvidadas en un cajón. Nos dicen el nombre de su hijo o hija, la fecha y el tema que les gustó, y les mandamos una muestra real de su invitación — interactiva, con animaciones, música y cuenta regresiva — sin costo y sin anticipo."
        whatsappMensaje={MUESTRA_PRIMERA_COMUNION_MENSAJE}
        trackLabel="Hero CTA - Muestra gratis (primera comunión)"
        imagenSrc={HERO_PRIMERA_COMUNION_URL}
        altImagen="Ejemplo de invitación de primera comunión"
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
              'El nombre de su hijo o hija, la fecha de la primera comunión y el tema que les gustó (y una foto suya, si la tienen a la mano). Nada de formularios.',
          },
          {
            number: '03',
            title: 'Recibe el link de SU invitación',
            description:
              'Con su nombre y su foto, tal cual quedaría, para que la vean y la enseñen en casa antes de decidir.',
          },
        ]}
        garantiaExtra="Garantía Invitamx: primero ves la invitación de la primera comunión, ya con el nombre y la foto de tu hijo o hija. Si la muestra no te convence, no pagas un solo peso — sin anticipo y sin compromiso."
      />
      <Themes
        catalogoUrl="https://invitaciones.invitamx.app/?catalog=true&evento=primera-comunion"
        tituloIframe="Catálogo de temas de primera comunión"
      />
      <HechaATuEstilo whatsappMensaje="Hola, quiero mi invitación de primera comunión a mi estilo" />
      <WhyUs subtitulo="No necesitas saber de diseño ni pagar precio de agencia para que la invitación de la primera comunión se vea como se merece." />
      <Features />
      <HowItWorks />
      <Pricing contexto={CONTEXTO_PLAN_PRIMERA_COMUNION} />
      <FAQ />
      <FinalCTA
        titulo="¿Lista para ver la invitación de la primera comunión?"
        subtitulo="Pide tu muestra gratis: solo dinos el nombre de su hijo o hija, la fecha y el tema que les enamoró. Te la mandamos sin costo y sin anticipo — el plan lo eliges después, cuando ya la viste."
        whatsappMensajeMuestra={MUESTRA_PRIMERA_COMUNION_MENSAJE}
        garantiaCorta="Sin riesgo: primero la ves, luego decides."
        contexto={CONTEXTO_PLAN_PRIMERA_COMUNION}
      />
      <Footer
        tagline="Invitaciones digitales profesionales diseñadas con amor. 💜"
        puente={{ texto: '¿Son XV años? Mira las invitaciones de XV años →', href: '/' }}
      />
      <FloatingWhatsApp mensaje={MUESTRA_PRIMERA_COMUNION_MENSAJE} />
    </>
  );
}
