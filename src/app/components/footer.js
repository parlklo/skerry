import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-t border-white/20 py-4 mt-auto w-full bg-grey-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side: Logo and Privacy Policy */}
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 flex items-center justify-center">
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
            <Link href="/privacy-policy" className="text-white hover:text-blue-300 transition-colors">
              Integritetspolicy
            </Link>
          </div>

          {/* Right side: Social Media and Copyright */}
          <div className="flex items-center gap-6">
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/skerry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

            </div>
            <div className="text-white/70 text-sm">
              © {new Date().getFullYear()} Skerry
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;