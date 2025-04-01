// src/app/components/navbar.js
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-transparent pt-6 pb-2">
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
            <Link href="/team" className="text-white hover:text-blue-200 transition-colors">
              Team
            </Link>
            <Link href="/kontakt" className="text-white hover:text-blue-200 transition-colors">
              Kontakt
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white border border-white/30 px-3 py-1 rounded hover:bg-white/10 transition-colors">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;