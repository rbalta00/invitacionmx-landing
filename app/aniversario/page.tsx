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
import { MUESTRA_ANIVERSARIO_MENSAJE } from '../lib/whatsapp';

// Contexto agregado al mensaje de WhatsApp de cada botón de plan en esta página (Pricing y
// FinalCTA) -- nunca cambia el precio/contenido del plan, solo deja claro que es para un aniversario.
const CONTEXTO_PLAN_ANIVERSARIO = 'para mi invitación de aniversario';

// Portada de la muestra «Laura & Jorge» a cuadro completo (sin mockup de celular) subida a
// Cloudinary, cloud dswrrm5u1. Verificada antes de usarla.
const HERO_ANIVERSARIO_URL = 'https://res.cloudinary.com/dswrrm5u1/image/upload/v1795790885/cwtpaurdno6fzcozwhcj.jpg';

const TITULO_PAGINA = 'Invitamx — Invitaciones de Aniversario Digitales';
const DESCRIPCION_PAGINA =
  'Invitaciones digitales de aniversario de bodas con muestra gratis: mírala con sus nombres y su foto antes de pagar. Planes desde $299 MXN.';

export const metadata: Metadata = {
  title: TITULO_PAGINA,
  description: DESCRIPCION_PAGINA,
  // Pisa el `keywords` del layout raíz (menciona "XV"/"quinceañera") -- Next.js hereda metadata
  // del padre si una ruta hija no la redeclara, así que sin esto se filtraría a /aniversario.
  keywords: 'invitaciones de aniversario, invitaciones digitales, invitación de aniversario interactiva, aniversario, personalizado',
  alternates: {
    canonical: 'https://invitamx.app/aniversario',
  },
  openGraph: {
    title: TITULO_PAGINA,
    description: DESCRIPCION_PAGINA,
    type: 'website',
    url: 'https://invitamx.app/aniversario',
    siteName: 'Invitamx',
    images: [
      {
        url: HERO_ANIVERSARIO_URL,
        width: 1200,
        height: 630,
        alt: 'Ejemplo de invitación de aniversario digital de Invitamx',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITULO_PAGINA,
    description: DESCRIPCION_PAGINA,
  },
};

export default function AniversarioPage() {
  return (
    <>
      <Header />
      <Hero
        titulo="Mira la invitación de su aniversario antes de pagar un solo peso"
        subtitulo="Olvídate de imprimir invitaciones que se pierden o llegan arrugadas. Nos dicen sus nombres, la fecha y el tema que les gustó, y les mandamos una muestra real de su invitación — interactiva, con animaciones, música y cuenta regresiva — sin costo y sin anticipo."
        whatsappMensaje={MUESTRA_ANIVERSARIO_MENSAJE}
        trackLabel="Hero CTA - Muestra gratis (aniversario)"
        imagenSrc={HERO_ANIVERSARIO_URL}
        altImagen="Ejemplo de invitación de aniversario"
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
              'Sus nombres, la fecha del aniversario y el tema que les gustó (y una foto suya, si la tienen a la mano). Nada de formularios.',
          },
          {
            number: '03',
            title: 'Recibe el link de SU invitación',
            description:
              'Con sus nombres y su foto, tal cual quedaría, para que la vean y la enseñen en casa antes de decidir.',
          },
        ]}
        garantiaExtra="Garantía Invitamx: primero ven la invitación de su aniversario, ya con sus nombres y su foto. Si la muestra no les convence, no pagan un solo peso — sin anticipo y sin compromiso."
      />
      <Themes
        catalogoUrl="https://invitaciones.invitamx.app/?catalog=true&evento=aniversario"
        tituloIframe="Catálogo de temas de aniversario"
      />
      <HechaATuEstilo whatsappMensaje="Hola, quiero mi invitación de aniversario a mi estilo" />
      <WhyUs subtitulo="No necesitas saber de diseño ni pagar precio de agencia para que la invitación de su aniversario se vea como se merece." />
      <Features />
      <HowItWorks />
      <Pricing contexto={CONTEXTO_PLAN_ANIVERSARIO} />
      <FAQ />
      <FinalCTA
        titulo="¿Listos para ver la invitación de su aniversario?"
        subtitulo="Pide tu muestra gratis: solo dinos sus nombres, la fecha y el tema que les enamoró. Te la mandamos sin costo y sin anticipo — el plan lo eliges después, cuando ya la viste."
        whatsappMensajeMuestra={MUESTRA_ANIVERSARIO_MENSAJE}
        garantiaCorta="Sin riesgo: primero la ves, luego decides."
        contexto={CONTEXTO_PLAN_ANIVERSARIO}
      />
      <Footer
        tagline="Invitaciones digitales profesionales diseñadas con amor. 💜"
        puente={{ texto: '¿Son XV años? Mira las invitaciones de XV años →', href: '/' }}
      />
      <FloatingWhatsApp mensaje={MUESTRA_ANIVERSARIO_MENSAJE} />
    </>
  );
}
