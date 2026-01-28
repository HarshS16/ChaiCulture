import { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import TiltedCard from './TiltedCard';
import productImage from '@/assets/product.jpg';

interface CTASectionProps {}

const CTASection = forwardRef<HTMLElement, CTASectionProps>((_, ref) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-royal opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-primary/5 blur-[80px] md:blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* TiltedCard Section - Hidden on small mobile, smaller on tablet */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 hidden sm:block"
          >
            <TiltedCard
              imageSrc={productImage}
              altText="Chai Culture Premium Tea"
              captionText="Premium Royal Chai"
              containerHeight="260px"
              containerWidth="220px"
              imageHeight="260px"
              imageWidth="220px"
              rotateAmplitude={10}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={
                <div className="text-center">
                  <p 
                    className="font-serif text-lg"
                    style={{ color: 'hsl(38, 70%, 60%)' }}
                  >
                    ✦ Premium Blend ✦
                  </p>
                  <p 
                    className="text-sm mt-1 font-light"
                    style={{ color: 'hsl(38, 35%, 80%)' }}
                  >
                    Crafted for Royalty
                  </p>
                </div>
              }
            />
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 via-transparent to-primary/30 rounded-3xl blur-sm" />
              
              <div className="relative bg-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header */}
                      <div className="text-center mb-4 sm:mb-6 md:mb-8">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: 'spring', delay: 0.2 }}
                          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6"
                        >
                          <Sparkles className="w-8 h-8 text-primary" />
                        </motion.div>

                        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-foreground">
                          Join the <span className="text-gradient-gold">Royal List</span>
                        </h2>
                        
                        <p className="text-foreground/60 font-light">
                          Be the first to experience the royal tradition. 
                          Get exclusive early access and special launch offers.
                        </p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full px-6 py-4 bg-input/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          />
                        </div>

                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-4 bg-primary text-primary-foreground font-sans font-medium tracking-wider uppercase rounded-xl hover:bg-primary/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
                        >
                          <AnimatePresence mode="wait">
                            {isSubmitting ? (
                              <motion.span
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center justify-center gap-2"
                              >
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                  className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                                />
                                Joining...
                              </motion.span>
                            ) : (
                              <motion.span
                                key="text"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                Join the Royal List
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      </form>

                      <p className="text-center text-muted-foreground text-sm mt-6">
                        We respect your privacy. No spam, ever.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, type: 'spring' }}
                      className="text-center py-8"
                    >
                      {/* Success animation */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="relative inline-flex items-center justify-center mb-6"
                      >
                        {/* Glow rings */}
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 1, repeat: 2 }}
                          className="absolute w-24 h-24 rounded-full border-2 border-primary"
                        />
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 2, opacity: 0 }}
                          transition={{ duration: 1, delay: 0.3, repeat: 2 }}
                          className="absolute w-24 h-24 rounded-full border border-primary/50"
                        />
                        
                        <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.4, type: 'spring' }}
                          >
                            <Check className="w-10 h-10 text-primary" strokeWidth={3} />
                          </motion.div>
                        </div>
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3"
                      >
                        You're on the <span className="text-gradient-gold">Royal List!</span>
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-foreground/60 font-light"
                      >
                        We'll notify you when Chai Culture launches. 
                        Get ready to experience the royal tradition.
                      </motion.p>

                      {/* Floating particles */}
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ 
                            opacity: 0, 
                            scale: 0,
                            x: 0,
                            y: 0,
                          }}
                          animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0.5],
                            x: (Math.random() - 0.5) * 200,
                            y: (Math.random() - 0.5) * 200,
                          }}
                          transition={{ 
                            delay: 0.3 + i * 0.1, 
                            duration: 1.5,
                            ease: 'easeOut',
                          }}
                          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-primary"
                          style={{ 
                            originX: 0.5,
                            originY: 0.5,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;

