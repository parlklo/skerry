// src/app/components/navbar.js
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-transparent pt-6 pb-2 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center">
          <div>
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
          </div>
          
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
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white border border-white/30 px-3 py-1 rounded hover:bg-white/10 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            Menu
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 bg-gray-900/95 backdrop-blur-sm rounded-md shadow-lg z-50 border border-white/10 mx-4">
            <div className="flex flex-col py-3">
              <Link 
                href="/" 
                className="text-white hover:bg-white/10 px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hem
              </Link>
              <Link 
                href="/om-skerry" 
                className="text-white hover:bg-white/10 px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Om Skerry
              </Link>
              <Link 
                href="/kontakt" 
                className="text-white hover:bg-white/10 px-4 py-2"
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