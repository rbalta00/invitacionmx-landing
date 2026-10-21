import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Themes from './components/Themes';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SocialProof />
      <WhyUs />
      <HowItWorks />
      <Themes />
      <Features />
      <Pricing />
      <FAQ />
      <Guarantee />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
