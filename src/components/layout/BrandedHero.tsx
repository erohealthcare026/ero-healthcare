"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

interface BrandedHeroProps {
  title: string | React.ReactNode;
  subtitle: string;
  image: string;
  gifOverlay?: string;
  isSplit?: boolean;
  height?: string;
  action?: React.ReactNode;
  titleClassName?: string;
  animateLogoColors?: boolean;
}

export function BrandedHero({
  subtitle,
  image,
  gifOverlay,
  isSplit = false,
  height = "h-[450px] lg:h-[550px]",
  action,
  titleClassName = "text-4xl md:text-5xl lg:text-6xl font-black",
  animateLogoColors = false,
}: BrandedHeroProps) {
  return (
    <section
      className={`relative w-full ${height} overflow-hidden bg-navy flex items-center pt-20`}
    >
      {/* Base Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Optional Animated GIF Overlay */}
      {gifOverlay && (
        <div className="absolute inset-0 z-10 opacity-30 mix-blend-overlay">
          <img
            src={gifOverlay}
            alt="Animation"
            className="w-full h-full object-cover scale-110"
          />
        </div>
      )}

      {/* Animated logo color matching backdrop */}
      {animateLogoColors && (
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {/* Animated Blob 1 (Blue #0c5597) */}
          <motion.div
            animate={{
              x: ["-20%", "25%", "-20%"],
              y: ["-20%", "20%", "-20%"],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-40 -left-40 size-[35rem] bg-[#0c5597] rounded-full blur-[120px] opacity-40 mix-blend-screen"
          />
          {/* Animated Blob 2 (Teal #4bbac3) */}
          <motion.div
            animate={{
              x: ["25%", "-15%", "25%"],
              y: ["20%", "-20%", "20%"],
              scale: [1.2, 0.9, 1.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-40 -right-40 size-[35rem] bg-[#4bbac3] rounded-full blur-[120px] opacity-35 mix-blend-screen"
          />
          {/* Animated Blob 3 (Green #78bb30) */}
          <motion.div
            animate={{
              x: ["-10%", "20%", "-10%"],
              y: ["15%", "-20%", "15%"],
              scale: [0.9, 1.2, 0.9],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/4 -translate-y-1/2 size-[30rem] bg-[#78bb30] rounded-full blur-[130px] opacity-25 mix-blend-screen"
          />
          <div 
            className="absolute inset-0 opacity-40 mix-blend-overlay animate-logo-gradient"
            style={{
              background: "linear-gradient(-45deg, rgba(12, 85, 151, 0.6), rgba(75, 186, 195, 0.5), rgba(120, 187, 48, 0.4), rgba(12, 85, 151, 0.6))",
              backgroundSize: "400% 400%",
            }}
          />
        </div>
      )}

      {/* Design Overlays */}
      {isSplit ? (
        <>
          {/* Diagonal Split Layout (Reference Image Style) */}
          <div
            className="absolute inset-0 z-20 bg-gradient-to-r from-primary via-primary/95 to-transparent hidden lg:block"
            style={{ clipPath: "polygon(0 0, 55% 0, 40% 100%, 0% 100%)" }}
          />
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-primary/90 to-primary/40 lg:hidden" />
        </>
      ) : (
        /* Immersive Dark Gradient */
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
      )}

      <Container className="relative z-30">
        <div
          className={`${isSplit ? "max-w-2xl" : "max-w-4xl mx-auto text-center"} text-white space-y-6`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={titleClassName}
          >
            
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p
              className={`text-lg lg:text-xl text-slate-100/90 leading-relaxed font-medium drop-shadow-md ${!isSplit && "max-w-xl mx-auto"}`}
            >
              {subtitle}
            </p>
          </motion.div>

          {action && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-4"
            >
              {action}
            </motion.div>
          )}
        </div>
      </Container>

      {/* Responsive Branded Border */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-secondary to-transparent z-40" />
    </section>
  );
}
