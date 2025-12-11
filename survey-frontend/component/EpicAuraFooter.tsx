'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <footer className="relative w-full py-10 bg-black text-white overflow-hidden">

      {isClient && (
        <motion.div
          key="footer-bg"
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 15% 30%, #5B5FFF33 0%, transparent 70%)",
              "radial-gradient(circle at 75% 25%, #9093FF33 0%, transparent 70%)",
              "radial-gradient(circle at 50% 85%, #BFC2FF33 0%, transparent 70%)",
              "radial-gradient(circle at 15% 30%, #5B5FFF33 0%, transparent 70%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {isClient && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative">
            <div className="absolute w-[40rem] h-[40rem] bg-gradient-to-b from-[#2A2C80]/35 to-transparent rounded-full blur-[180px]" />
            <div className="absolute w-[30rem] h-[30rem] bg-gradient-to-b from-[#4A4DFF]/25 to-transparent rounded-full blur-[140px]" />
            <div className="absolute w-[18rem] h-[18rem] bg-gradient-to-b from-[#8C8FFF]/40 to-transparent rounded-full blur-[100px]" />
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <a href="/" className="flex justify-center mb-4">
          <img
            src="/sunajo-removebg-preview.png"
            alt="Logo"
            width={120}
            height={120}
            className="object-contain opacity-90 hover:opacity-100 transition"
          />
        </a>

        <p
          className="text-gray-300 max-w-md mx-auto text-sm md:text-base"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          Delivering next generation solutions with clarity, precision and innovation.
        </p>

        <div className="flex justify-center gap-5 mt-8">
          {[ 
            { icon: <Instagram size={20} />, link: "https://www.instagram.com/sunajo.in/" },
            { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/company/sunajo/" },
            { icon: <Twitter size={20} />, link: "https://x.com/sunajo_official" }
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/20 transition"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-white/10 my-8"></div>

        <p
          className="text-gray-400 text-xs md:text-sm"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          © {new Date().getFullYear()} Sunajo. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
