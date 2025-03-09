'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(at ${mousePosition.x}% ${mousePosition.y}%, rgb(124, 58, 237), rgb(72, 58, 237), rgb(16, 185, 129))`,
            `radial-gradient(at ${mousePosition.x}% ${mousePosition.y}%, rgb(16, 185, 129), rgb(72, 58, 237), rgb(124, 58, 237))`,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          filter: 'blur(100px)',
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
    </div>
  );
}; 