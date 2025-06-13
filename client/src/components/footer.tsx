import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="w-full bg-warm-gray-50 border-t border-warm-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-warm-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} Skerry. Alla rättigheter förbehållna.
        </div>
        <div className="text-sm text-warm-gray-500 text-center md:text-right">
          <a href="/privacy" className="hover:text-skerry-orange-500 transition-colors underline">Integritetspolicy</a>
        </div>
      </div>
    </footer>
  );
} 