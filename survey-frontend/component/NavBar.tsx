'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => setIsMounted(true), []);

  // Scroll behavior for hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) setIsVisible(false);
        else setIsVisible(true);
      } else setIsVisible(true);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
    ${isVisible ? 'translate-y-0' : '-translate-y-full'}
    ${scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}
  `;

  const links = [
    { href: '/services', label: 'Our Services' },
    { href: '/capabilities', label: 'Our Capabilities' },
    { href: '/products', label: 'Our Products' },
    { href: '/careers', label: 'Careers' },
    { href: '/about', label: 'About Us' },
  ];

  return (
    <>
      <nav className={navClass}>
        <div className="mx-auto w-[90%] flex items-center justify-between px-3 sm:px-4 md:px-6 py-4">

          {/* Logo */}
          <a href="/" className="flex items-center z-[60]">
            <img
              src="/sunajo-removebg-preview.png"
              alt="Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </a>

        

          {/* Let's Talk Button (visible everywhere) */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="px-6 py-2 border border-white/30 rounded-full text-white text-sm hover:bg-white/10 transition md:block"
          >
            Let's Talk
          </a>
        </div>
      </nav>
    </>
  );
}
