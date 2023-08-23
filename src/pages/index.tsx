import About from '@/components/About';
import Features from '@/components/Features';
import Features2 from '@/components/Features2';
import Footer from '@/components/Footer';
import Footer2 from '@/components/Footer2';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Package from '@/components/Package';

export default function Home() {
  return (
    <div className="font-monda overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Features2 />
      <Package />
      <Footer />
      <Footer2 />
    </div>
  );
}
