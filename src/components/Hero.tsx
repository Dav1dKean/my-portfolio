'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import StarsBackground from './StarsBackground';
import Image from 'next/image';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures video only renders after client-side mount
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen text-white bg-black overflow-hidden"
    >
      <StarsBackground />

      {/* Render video only after client mount to prevent hydration mismatch */}
      {isClient && (
        <div className="absolute z-10">
          <video
            src="/spinning_earth1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-64 h-64 object-contain mx-auto mb-4"
          />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-4"
      >
        <div className="flex justify-center -mt-30 mb-24">
          <Image
            src="/Kean.jpg"
            alt="My Profile"
            width={240}
            height={240}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4">Hi, I am David Vasquez</h1>
        <p className="text-lg md:text-xl text-gray-300">
          I built this website with Next.js, Tailwind, and animations.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" className="w-6 h-6 hover:scale-110 transition" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
          </a>
          <a href="mailto:youremail@example.com">
            <img src="/gmail.svg" alt="Email" className="w-6 h-6 hover:scale-110 transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
