"use client";

// src/app/components/navbar.js
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent pt-6 pb-2 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/skerry logo.png" 
              alt="Skerry Logo"
              width={80}
              height={30}
              className="h-auto brightness-0 invert"
            />
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-12">
            <Link href="/" className="text-white hover:text-blue-200 transition-colors">
              Hem
            </Link>
            <Link href="/om-skerry" className="text-white hover:text-blue-200 transition-colors">
              Om Skerry
            </Link>
            <Link href="/kontakt" className="text-white hover:text-blue-200 transition-colors">
              Kontakt
            </Link>
          </div>
          
          {/* Mobile menu button - simplified with SVG hamburger icon */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu - simplified fixed overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-gray-900/95 flex flex-col items-center justify-center">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-center space-y-8 text-xl">
              <Link 
                href="/" 
                className="text-white hover:text-blue-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hem
              </Link>
              <Link 
                href="/om-skerry" 
                className="text-white hover:text-blue-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Om Skerry
              </Link>
              <Link 
                href="/kontakt" 
                className="text-white hover:text-blue-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;