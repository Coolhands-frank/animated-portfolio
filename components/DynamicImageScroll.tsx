'use client';

import { motion } from "motion/react";
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

function ScrollImage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or nothing while waiting for client-side mount
    return null;
  }

  const currentImage = theme === 'dark' ? "/scroll.png" : "/scroll-black.png";

  return (
    <Image
      src={currentImage}
      alt="Scroll Image"
      width={50} // Adjust as needed
      height={50} // Adjust as needed
      className="bg-transparent m-auto"
    />
  );
}

export default ScrollImage;