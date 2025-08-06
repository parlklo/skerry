import { Link, useLocation } from "wouter";
import { isBackgroundPage } from "@/lib/pageConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [location] = useLocation();
  
  // Check if current page should have transparent footer
  const isTransparentPage = isBackgroundPage(location);

  return (
    <footer className={`${isTransparentPage ? 'bg-transparent' : 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'} border-t border-white/10 mt-auto relative overflow-hidden`}>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex flex-col md:flex-row justify-between items-center gap-y-3 text-sm">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-xl">
                <img src="/skerry logo.png" alt="Skerry Logo" className="h-7 w-7 object-contain brightness-0 invert drop-shadow-lg" />
              </div>
              <div>
                <div className="text-white font-bold text-lg" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>Skerry</div>
                <div className="text-white/60 text-xs" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>Digital partner åt småföretag</div>
              </div>
            </div>
          </div>

          {/* Legal Links - Center */}
          <div className="flex flex-row items-center gap-x-8">
            <Link href="/allmanna-villkor">
              <button className="text-white/80 hover:text-white transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>
                Allmänna villkor
              </button>
            </Link>
            <Link href="/integritetspolicy">
              <button className="text-white/80 hover:text-white transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>
                Integritetspolicy
              </button>
            </Link>
          </div>

          {/* Copyright - Right aligned */}
          <div className="text-white/50 font-medium px-3 py-2" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>
            <span>© {currentYear} Skerry</span>
          </div>
        </div>

      </div>
    </footer>
  );
} 