import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Themes from './components/Themes';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Themes />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Guarantee />
      <FinalCTA />
      <Footer />
    </>
  );
}
