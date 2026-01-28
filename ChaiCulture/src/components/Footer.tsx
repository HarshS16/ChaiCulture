import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import logo from '@/assets/logo.avif';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'X (Twitter)' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Tea leaf positions for floating animation
  const teaLeaves = [
    { left: '5%', delay: 0, size: 'w-6 h-6' },
    { left: '15%', delay: 1.5, size: 'w-4 h-4' },
    { left: '25%', delay: 0.8, size: 'w-5 h-5' },
    { left: '75%', delay: 2, size: 'w-5 h-5' },
    { left: '85%', delay: 0.5, size: 'w-6 h-6' },
    { left: '92%', delay: 1.2, size: 'w-4 h-4' },
  ];

  // Spice decorations data
  const spices = [
    { name: 'Cardamom', left: '8%', top: '20%' },
    { name: 'Cinnamon', right: '10%', top: '30%' },
    { name: 'Ginger', left: '12%', bottom: '25%' },
    { name: 'Clove', right: '8%', bottom: '20%' },
  ];

  return (
    <footer className="relative py-20 bg-brown-deep border-t border-primary/20 overflow-hidden">
      {/* Warm glowing orb effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      
      {/* Decorative top border with tea cup pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      
      {/* Floating tea leaves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {teaLeaves.map((leaf, i) => (
          <motion.div
            key={i}
            className={`absolute ${leaf.size} opacity-20`}
            style={{ left: leaf.left, bottom: '-20px' }}
            animate={{
              y: [0, -200, -400],
              x: [0, 20, -10, 15],
              rotate: [0, 180, 360],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 12,
              delay: leaf.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-primary w-full h-full">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.8 0 3.5-.5 5-1.3-1.8-1.2-3-3.3-3-5.7 0-3.9 3.1-7 7-7 .5 0 1 .1 1.5.2C21.5 5.5 17.2 2 12 2z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Steam wisps rising effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-8 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 rounded-full bg-gradient-to-t from-primary/20 to-transparent"
            style={{ height: `${40 + i * 10}px` }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -20, 0],
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Spice decorations - subtle icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cardamom - left side */}
        <motion.div
          className="absolute left-[5%] top-[15%] opacity-10"
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
            <ellipse cx="12" cy="12" rx="4" ry="7" />
            <path d="M12 5v14M9 8c1-1 5-1 6 0M9 16c1 1 5 1 6 0" />
          </svg>
        </motion.div>
        
        {/* Cinnamon stick - right side */}
        <motion.div
          className="absolute right-[8%] top-[25%] opacity-10"
          animate={{ rotate: [-15, -10, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="50" height="20" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
            <rect x="2" y="5" width="46" height="10" rx="5" />
            <line x1="10" y1="5" x2="10" y2="15" strokeOpacity="0.5" />
            <line x1="25" y1="5" x2="25" y2="15" strokeOpacity="0.5" />
            <line x1="40" y1="5" x2="40" y2="15" strokeOpacity="0.5" />
          </svg>
        </motion.div>

        {/* Ginger root - left bottom */}
        <motion.div
          className="absolute left-[10%] bottom-[20%] opacity-10"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="45" height="30" viewBox="0 0 45 30" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
            <path d="M5 15c5-5 10-3 15 0s15 3 20-2" strokeLinecap="round" />
            <path d="M10 15c2 5 8 8 12 5" strokeLinecap="round" />
            <path d="M25 13c3 6 10 5 12 2" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Star anise - right bottom */}
        <motion.div
          className="absolute right-[6%] bottom-[25%] opacity-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
            <polygon points="12,2 14,9 21,9 16,14 18,21 12,17 6,21 8,14 3,9 10,9" />
            <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.3" />
          </svg>
        </motion.div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col items-center text-center">
          {/* Decorative tea cup divider above logo */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/40" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary/60">
                <path d="M5 12h14M7 8h10c1 0 2 1 2 2v6c0 1-1 2-2 2H7c-1 0-2-1-2-2v-6c0-1 1-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M17 10h2c1 0 2 1 2 2s-1 2-2 2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M9 5c0 0 1-2 3-2s3 2 3 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
              </svg>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/40" />
            </div>
          </motion.div>

          {/* Logo with warm glow */}
          <motion.div variants={itemVariants} className="mb-6 relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150" />
            <img src={logo} alt="Chai Culture" className="h-16 relative z-10" />
          </motion.div>

          {/* Tagline with decorative quotes */}
          <motion.p
            variants={itemVariants}
            className="font-serif text-xl text-primary italic mb-4 relative"
          >
            <span className="absolute -left-6 -top-2 text-3xl text-primary/30">"</span>
            Brew the Royal Tradition
            <span className="absolute -right-6 bottom-0 text-3xl text-primary/30">"</span>
          </motion.p>

          {/* Tea brewing tip */}
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground/70 text-sm mb-8 max-w-md"
          >
            A perfect cup begins with patience — let the spices dance in simmering water
          </motion.p>

          {/* Social Links with enhanced styling */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-secondary/50 border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 relative group"
              >
                <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
                <social.icon className="w-5 h-5 relative z-10" />
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced Divider with tea leaf icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary/40">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.8 0 3.5-.5 5-1.3-1.8-1.2-3-3.3-3-5.7 0-3.9 3.1-7 7-7 .5 0 1 .1 1.5.2C21.5 5.5 17.2 2 12 2z" />
            </svg>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </motion.div>

          {/* Copyright */}
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-sm font-light"
          >
            © {new Date().getFullYear()} Chai Culture. All rights reserved.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground/60 text-xs mt-2 flex items-center gap-2"
          >
            Crafted with 
            <span className="text-primary">☕</span> 
            in India
          </motion.p>
        </div>
      </motion.div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </footer>
  );
};

export default Footer;
