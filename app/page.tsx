import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Themes from './components/Themes';
import HechaATuEstilo from './components/HechaATuEstilo';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonios from './components/Testimonios';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Foto del hero de la home (portada de la demo del tema Dorado Clásico, a cuadro completo)
// subida a Cloudinary por Muse (2026-11-25), cloud dswrrm5u1. Reemplaza a la foto corta que
// dejaba una banda vacía en el celular del hero.
const HERO_XV_URL = 'https://res.cloudinary.com/dswrrm5u1/image/upload/v1795663172/b1dmpnb4vqiiotnvnkah.jpg';

export default function Home() {
  return (
    <>
      <Header />
      <Hero imagenSrc={HERO_XV_URL} />
      <SocialProof />
      <Guarantee />
      <Themes />
      <HechaATuEstilo />
      <WhyUs />
      <Features />
      <HowItWorks />
      <Testimonios />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer puente={[
        { texto: '¿Es una boda? Mira las invitaciones de boda →', href: '/bodas' },
        { texto: '¿Es un cumpleaños? Mira las invitaciones de cumpleaños →', href: '/cumpleanos' },
      ]} />
      <FloatingWhatsApp />
    </>
  );
}
