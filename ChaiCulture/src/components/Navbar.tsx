import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '@/assets/logo.avif';

gsap.registerPlugin(ScrollTrigger);

interface NavbarProps {
  onNotifyClick: () => void;
}

const Navbar = ({ onNotifyClick }: NavbarProps) => {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // On mobile, scrolled navbar should be wider (92%), on desktop 60%
  const scrolledWidth = isMobile ? '92%' : '60%';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 md:px-0">
      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          width: isScrolled ? scrolledWidth : '100%',
          marginTop: isScrolled ? '0.5rem' : '0',
        }}
        className={`transition-all duration-700 ease-out ${
          isScrolled 
            ? 'py-2 md:py-2.5 rounded-full bg-brown-deep/95 backdrop-blur-md border border-primary/20 shadow-gold-glow' 
            : 'py-4 md:py-5 bg-transparent'
        }`}
      >
        <div className={`mx-auto flex items-center justify-between transition-all duration-700 ${
          isScrolled ? 'px-4 md:px-6' : 'container px-4 md:px-6'
        }`}>
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src={logo} 
              alt="Chai Culture" 
              className={`transition-all duration-500 ${isScrolled ? 'h-6 md:h-7' : 'h-8 md:h-10'}`}
            />
          </motion.div>

          {/* Coming Soon Badge - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden md:flex items-center"
          >
            <span className={`tracking-[0.3em] uppercase text-primary/80 font-sans font-light transition-all duration-500 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}>
              Coming Soon
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={onNotifyClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`bg-primary/10 border border-primary/40 rounded-full text-primary font-sans tracking-wider uppercase hover:bg-primary/20 hover:border-primary/60 transition-all duration-500 ${
              isScrolled ? 'px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs' : 'px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm'
            }`}
          >
            Notify Me
          </motion.button>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
