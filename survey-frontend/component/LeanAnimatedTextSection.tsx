'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LeanAnimatedTextSection() {

  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  function TextGenerateEffect({ words, className, duration = 0.6, staggerDelay = 0.12 }: { words: string; className?: string; duration?: number; staggerDelay?: number }) {
    const splitWords = words.split(" ");
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: staggerDelay } }
        }}
      >
        {splitWords.map((w, i) => (
          <motion.span
            key={i}
            className="inline-block mr-1"
            variants={{
              hidden: { opacity: 0, y: 6 },
              visible: { opacity: 1, y: 0, transition: { duration } }
            }}
          >
            {w}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  const phrases = [
    "collaborate better",
    "engage actively",
    "discover events easily",
    "grow their clubs",
    "promote campus activities",
    "track participation streaks",
    "explore external opportunities",
    "experience smarter events"
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setIndex(prev => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full py-20 md:py-24 bg-black overflow-hidden flex justify-center items-center">

      {/* Animated background only on client */}
      {isClient && (
        <motion.div
          key="animated-bg"
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, #5B5FFF33 0%, transparent 70%)",
              "radial-gradient(circle at 80% 20%, #8488FF33 0%, transparent 70%)",
              "radial-gradient(circle at 50% 80%, #BFC2FF33 0%, transparent 70%)",
              "radial-gradient(circle at 20% 30%, #5B5FFF33 0%, transparent 70%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Glow layers */}
      {isClient && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative">
            <div className="absolute w-[45rem] h-[45rem] bg-gradient-to-b from-[#2A2C80]/40 to-transparent rounded-full blur-[180px]" />
            <div className="absolute w-[30rem] h-[30rem] bg-gradient-to-b from-[#4A4DFF]/30 to-transparent rounded-full blur-[140px]" />
            <div className="absolute w-[18rem] h-[18rem] bg-gradient-to-b from-[#8C8FFF]/60 to-transparent rounded-full blur-[100px]" />
          </div>
        </div>
      )}

      {/* Text */}
      <div className="relative z-10 text-center px-4">
        <p className="text-lg md:text-xl text-gray-300 font-light" style={{ fontFamily: '"Poppins", sans-serif' }}>
          Built to help students
        </p>

        <h3 className="text-2xl md:text-4xl font-medium mt-2 min-h-[48px]" style={{ fontFamily: '"Poppins", sans-serif' }}>
          <TextGenerateEffect words={phrases[index]} className="text-white" />
        </h3>
      </div>
    </section>
  );
}
