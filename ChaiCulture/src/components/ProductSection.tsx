import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import productImage from '@/assets/product.jpg';

gsap.registerPlugin(ScrollTrigger);

const ProductSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    if (!section || !text || !image) return;

    const ctx = gsap.context(() => {
      // Text slide in animation
      gsap.fromTo(
        text.children,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'center center',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image fade and rise
      gsap.fromTo(
        image,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Parallax depth effect
      gsap.to('.parallax-bg', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const features = [
    { title: 'Authentic Spices', desc: 'Hand-selected cardamom, cinnamon, and ginger' },
    { title: 'Premium Quality', desc: 'Sourced from heritage tea gardens' },
    { title: 'Royal Recipe', desc: 'Inspired by royal Indian kitchens' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="parallax-bg absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div ref={textRef} className="order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-sans"
            >
              Introducing
            </motion.span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-foreground">
              The Royal
              <span className="text-gradient-gold block mt-1 md:mt-2">Chai Premix</span>
            </h2>

            <p className="text-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              A meticulously crafted blend that brings the grandeur of royal Indian tea 
              culture to your home. Each sip tells a story of heritage, warmth, and 
              uncompromising quality.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-1">{feature.title}</h4>
                    <p className="text-foreground/60 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Product Image */}
          <div ref={imageRef} className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              
              {/* Decorative border */}
              <div className="absolute -inset-4 border border-primary/20 rounded-3xl" />
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src={productImage}
                  alt="Chai Culture Premium Premix"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, type: 'spring' }}
                className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-primary text-primary-foreground px-4 py-2 md:px-6 md:py-3 rounded-full font-serif text-sm md:text-lg shadow-lg"
              >
                Coming Soon
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
