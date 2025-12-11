'use client';

import { X, Linkedin, Instagram } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-80 md:h-90 lg:h-100 w-full flex items-end text-white overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg_video.mp4" type="video/mp4" />
      </video>

      {/* Fade Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[85%] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end pb-8 md:pb-12 text-center sm:text-left">
        
        {/* Left Text Section */}
        <div className="max-w-lg space-y-2 w-full sm:w-auto mx-auto sm:mx-0">
          <p 
            className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Share your{' '}
            <span
              style={{
                background: 'linear-gradient(to right, white, royalblue)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Event Insights
            </span>{' '}
            with Us
          </p>

          <p className="text-sm md:text-base text-gray-300 font-light max-w-md mx-auto sm:mx-0">
            Take a moment to help us build a powerful event management product.  
            Share your expectations and experiences in our survey so we can shape a better solution.
          </p>
        </div>

        {/* Social Links */}
        <div className="hidden sm:flex flex-col items-end space-y-2">
          <span className="text-sm text-gray-300 mr-1">Connect With Us</span>
          
          <div className="flex gap-2">
            <a
              href="https://x.com/sunajo_official"
              aria-label="Follow us on X"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-slate-900 transition-colors hover:bg-[#4169E1] hover:text-white"
            >
              <X className="w-4 h-4" />
            </a>
            
            <a
              href="https://www.linkedin.com/company/sunajo/"
              aria-label="Follow us on LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-slate-900 transition-colors hover:bg-[#4169E1] hover:text-white"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            <a
              href="https://www.instagram.com/sunajo.in/"
              aria-label="Follow us on Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-slate-900 transition-colors hover:bg-[#4169E1] hover:text-white"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');
      `}</style>
    </section>
  );
}
