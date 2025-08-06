import { Link, useLocation } from "wouter";
import { Linkedin, Instagram } from "lucide-react";
import { isBackgroundPage } from "@/lib/pageConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [location] = useLocation();
  
  // Check if current page should have transparent footer
  const isTransparentPage = isBackgroundPage(location);

  return (
    <footer className={`${isTransparentPage ? 'bg-transparent' : 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'} border-t border-white/10 mt-auto relative overflow-hidden`}>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex flex-col md:flex-row justify-between items-center gap-y-4 text-sm">
          {/* Logo & Brand */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-xl">
              <img src="/skerry logo.png" alt="Skerry Logo" className="h-7 w-7 object-contain brightness-0 invert drop-shadow-lg" />
            </div>
            <div>
              <div className="text-white font-bold text-lg" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>Skerry</div>
              <div className="text-white/60 text-xs" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>Digital partner åt småföretag</div>
            </div>
          </div>

          {/* Legal Links & Copyright */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <Link href="/allmanna-villkor">
              <button className="text-white/70 hover:text-white hover:text-skerry-orange-300 transition-all duration-300 font-medium px-2 py-1 rounded-lg hover:bg-white/10 text-xs" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>
                Allmänna villkor
              </button>
            </Link>
            <Link href="/integritetspolicy">
              <button className="text-white/70 hover:text-white hover:text-skerry-orange-300 transition-all duration-300 font-medium px-2 py-1 rounded-lg hover:bg-white/10 text-xs" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>
                Integritetspolicy
              </button>
            </Link>
            <div className="text-white/50 font-medium px-2 py-1 text-xs" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>
              <span>© {currentYear} Skerry</span>
            </div>

          </div>

          {/* Socials */}
          <div className="flex gap-2">
            <a 
              href="#" 
              aria-label="LinkedIn" 
              className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 text-white/70 hover:text-white hover:bg-skerry-orange-500/20 hover:border-skerry-orange-400/30 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Linkedin size={14} />
            </a>
            <a 
              href="#" 
              aria-label="Instagram" 
              className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 text-white/70 hover:text-white hover:bg-skerry-orange-500/20 hover:border-skerry-orange-400/30 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
} 