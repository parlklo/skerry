import Link from "next/link"

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section - More compact height for homepage */}
      <section className="relative h-[700px] flex items-center py-4">
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-start">
            
            {/* Left: Hero Content - Compact version */}
            <div className="lg:col-span-2 space-y-4 max-w-3xl">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
                  <span className="text-white">Vi hjälper dig med</span><br />
                  <span className="text-amber-400">hela processen</span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed drop-shadow-lg max-w-2xl font-medium">
                  Från idé till bygglovsritning, projektering och utveckling.
                </p>
              </div>
              
              {/* Compact CTA - Phone number */}
              <div className="bg-black/20 backdrop-blur-md border border-white/30 p-3 rounded-2xl w-fit shadow-2xl">
                <a 
                  href="tel:+46768685902" 
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl text-base font-bold inline-block transition-all duration-300 transform hover:scale-105 text-center shadow-lg whitespace-nowrap flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Ring 0768 68 59 02
                </a>
              </div>
            </div>

            {/* Right: Compact Pricing Card */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm">
                
                {/* Compact pricing card */}
                <div className="bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl overflow-hidden shadow-2xl">
                  
                  {/* Compact Header with CAD icon */}
                  <div className="bg-slate-900 p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <h2 className="text-lg font-bold text-white">Bygglovsritningar</h2>
                      <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">CAD</div>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-slate-300 text-xs">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                      <span>SITAC-certifierad</span>
                      <span>•</span>
                      <span>Kontrollansvar</span>
                    </div>
                  </div>

                  {/* Compact pricing list */}
                  <div className="p-4 space-y-2">
                    
                    <div className="flex justify-between items-center py-2 px-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                      <div className="font-semibold text-slate-900 text-sm">1-25 kvm</div>
                      <div className="font-bold text-slate-900 text-sm">9 700 SEK</div>
                    </div>

                    <div className="flex justify-between items-center py-2 px-3 bg-blue-50 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors">
                      <div className="font-semibold text-blue-900 text-sm">26-70 kvm</div>
                      <div className="font-bold text-blue-900 text-sm">13 200 SEK</div>
                    </div>

                    <div className="flex justify-between items-center py-2 px-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                      <div className="font-semibold text-slate-900 text-sm">71-150 kvm</div>
                      <div className="font-bold text-slate-900 text-sm">19 200 SEK</div>
                    </div>

                    <div className="flex justify-between items-center py-2 px-3 bg-amber-50 rounded-xl border border-amber-200 hover:bg-amber-100 transition-colors">
                      <div className="font-semibold text-amber-900 text-sm">150+ kvm</div>
                      <div className="font-bold text-amber-800 text-sm">Offert</div>
                    </div>
                  </div>

                  {/* Compact footer with certification badge */}
                  <div className="bg-slate-50 border-t border-slate-200 p-3">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-xs">
                        <span className="font-semibold text-slate-900">Professionell kvalitet</span>
                        <div className="text-slate-600 text-xs">SC0477-11</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}