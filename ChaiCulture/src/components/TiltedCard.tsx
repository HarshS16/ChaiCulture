import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltedCardProps {
  imageSrc: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  displayOverlayContent?: boolean;
  overlayContent?: React.ReactNode;
}

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText,
  containerHeight = '300px',
  containerWidth = '300px',
  imageHeight = '300px',
  imageWidth = '300px',
  rotateAmplitude = 12,
  scaleOnHover = 1.05,
  showMobileWarning = false,
  showTooltip = true,
  displayOverlayContent = false,
  overlayContent,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateXValue = (mouseY / (rect.height / 2)) * -rotateAmplitude;
    const rotateYValue = (mouseX / (rect.width / 2)) * rotateAmplitude;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className="relative perspective-1000"
      style={{
        width: containerWidth,
        height: containerHeight,
        perspective: '1000px',
      }}
    >
      <motion.div
        ref={cardRef}
        className="relative w-full h-full cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: isHovered ? scaleOnHover : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Card with golden border */}
        <div
          className="relative w-full h-full rounded-2xl overflow-hidden"
          style={{
            boxShadow: isHovered
              ? '0 25px 50px -12px rgba(191, 145, 51, 0.4), 0 0 40px rgba(191, 145, 51, 0.2)'
              : '0 10px 30px -10px rgba(0, 0, 0, 0.4)',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          {/* Golden border frame */}
          <div
            className="absolute inset-0 rounded-2xl z-10 pointer-events-none"
            style={{
              border: '2px solid',
              borderImage: 'linear-gradient(135deg, hsl(38, 70%, 50%), hsl(38, 80%, 65%), hsl(38, 60%, 35%)) 1',
              borderRadius: '1rem',
            }}
          />
          
          {/* Gradient border overlay */}
          <div 
            className="absolute inset-0 rounded-2xl z-10 pointer-events-none"
            style={{
              background: isHovered 
                ? 'linear-gradient(135deg, rgba(191, 145, 51, 0.3) 0%, transparent 50%, rgba(191, 145, 51, 0.3) 100%)'
                : 'transparent',
              transition: 'background 0.3s ease',
            }}
          />

          {/* Image */}
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover"
            style={{
              width: imageWidth,
              height: imageHeight,
            }}
          />

          {/* Overlay content */}
          {displayOverlayContent && overlayContent && (
            <motion.div
              className="absolute inset-0 flex items-end justify-center z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="w-full p-4"
                style={{
                  background: 'linear-gradient(to top, rgba(30, 20, 10, 0.95), rgba(30, 20, 10, 0.7), transparent)',
                }}
              >
                {overlayContent}
              </div>
            </motion.div>
          )}

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 z-30 pointer-events-none"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255, 215, 140, 0.15) 45%, rgba(255, 215, 140, 0.25) 50%, rgba(255, 215, 140, 0.15) 55%, transparent 60%)',
              transform: `translateX(${isHovered ? '100%' : '-100%'})`,
              transition: 'transform 0.6s ease',
            }}
          />
        </div>

        {/* Caption */}
        {captionText && showTooltip && (
          <motion.div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="px-4 py-2 rounded-lg text-sm font-medium"
              style={{
                background: 'linear-gradient(135deg, hsl(30, 40%, 12%), hsl(30, 30%, 18%))',
                border: '1px solid hsl(38, 30%, 25%)',
                color: 'hsl(38, 70%, 60%)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              {captionText}
            </div>
          </motion.div>
        )}

        {/* Mobile warning */}
        {showMobileWarning && (
          <div className="absolute top-2 right-2 md:hidden">
            <div
              className="px-2 py-1 rounded text-xs"
              style={{
                background: 'hsl(30, 40%, 12%)',
                color: 'hsl(38, 70%, 60%)',
                border: '1px solid hsl(38, 30%, 25%)',
              }}
            >
              Tap to interact
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
