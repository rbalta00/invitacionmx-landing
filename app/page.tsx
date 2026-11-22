import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Themes from './components/Themes';
import HechaATuEstilo from './components/HechaATuEstilo';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SocialProof />
      <Guarantee />
      <Themes />
      <HechaATuEstilo />
      <WhyUs />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
