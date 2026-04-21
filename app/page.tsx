import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import HowItWorks from '@/components/HowItWorks';
import WhatYouGet from '@/components/WhatYouGet';
import Demos from '@/components/Demos';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <WhyUs />
      <HowItWorks />
      <WhatYouGet />
      <Demos />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
