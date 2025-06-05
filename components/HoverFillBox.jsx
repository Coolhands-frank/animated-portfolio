// components/HoverFillDiv.js
"use client"
import { motion } from 'motion/react';

const HoverFillDiv = ({ children, className }) => {
  return (
    <motion.div
      className={`relative overflow-hidden cursor-pointer ${className}`}
      whileHover="hovered"
      initial="initial"
    >
      {/* This is the div that will be filled */}
      <div className="relative z-10">
        {children}
      </div>

      {/* This is the pseudo-element acting as the fill */}
      <motion.div
        className="absolute inset-0 bg-red-500 z-0" // Adjust color as needed
        variants={{
          initial: { width: "0%" },
          hovered: { width: "100%" },
        }}
        transition={{
          duration: 0.4, // Adjust duration for desired speed
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default HoverFillDiv;