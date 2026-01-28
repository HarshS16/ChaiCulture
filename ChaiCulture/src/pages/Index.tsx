import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import SplashCursor from '@/components/SplashCursor';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const ctaRef = useRef<HTMLElement>(null);

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Smooth scroll behavior enhancement
    gsap.config({
      nullTargetWarn: false,
    });

    // Refresh ScrollTrigger after all content loads
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <SplashCursor />
      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar onNotifyClick={scrollToCTA} />
        <HeroSection />
        <ProductSection />
        <CTASection ref={ctaRef} />
        <Footer />
      </main>
    </>
  );
};

export default Index;

