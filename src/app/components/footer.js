import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-t border-white/20 py-6 mt-auto w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Logo and links */}
          <div className="flex items-center space-x-8 mb-4 md:mb-0">
            {/* Logo */}
            <div className="w-14 h-14 flex items-center justify-center">
              <Link href="/">
                <Image 
                  src="/skerry logo.png" 
                  alt="Skerry Logo"
                  width={30}
                  height={30}
                  className="h-auto brightness-0 invert"
                  />
              </Link>
            </div>
            
            {/* Links */}
            <div className="flex space-x-6">
              <Link href="/about" className="text-white hover:text-blue-300 transition-colors">
                Om Skerry
              </Link>
              <Link href="/privacy-policy" className="text-white hover:text-blue-300 transition-colors">
                Integritetspolicy
              </Link>
            </div>
          </div>
          
          {/* Right side - Social media and copyright */}
          <div className="flex flex-col items-end">
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-2">
              <a 
                href="https://linkedin.com/company/skerry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/skerryai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            
            {/* Copyright */}
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} Skerry AB. Alla rättigheter reserverade.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;