import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-6">
            <div>
              <h3 className="text-lg font-bold text-white">
                FixaBygglov
              </h3>
              <p className="text-white/80 text-sm">
                Erfarna konsulter inom arkitektur, konstruktion och VVS.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <div className="flex items-center space-x-4 text-white/70">
              <a href="mailto:info@fixabygglov.com" className="hover:text-amber-400 transition-colors">
                info@fixabygglov.com
              </a>
              <span className="text-white/40">|</span>
              <a href="tel:+46768685902" className="hover:text-amber-400 transition-colors">
                +46 768 68 59 02
              </a>
            </div>
            <div className="text-white/50 text-xs">
              &copy; {new Date().getFullYear()} FixaBygglov. Alla rättigheter förbehållna.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}