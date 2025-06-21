import { Link } from "wouter";
import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-gray-50 border-t border-warm-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-y-6 text-sm">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/skerry logo.png" alt="Skerry Logo" className="h-8 w-8 object-contain" />
          </div>

          {/* Legal Links & Copyright */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <Link href="/allmanna-villkor">
              <button className="text-warm-gray-600 hover:text-warm-gray-900 transition-colors">
                Allmänna villkor
              </button>
            </Link>
            <Link href="/integritetspolicy">
              <button className="text-warm-gray-600 hover:text-warm-gray-900 transition-colors">
                Integritetspolicy
              </button>
            </Link>
            <div className="text-warm-gray-500">
              <span>© {currentYear} Skerry</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a href="#" aria-label="LinkedIn" className="text-warm-gray-500 hover:text-warm-gray-900 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="text-warm-gray-500 hover:text-warm-gray-900 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 