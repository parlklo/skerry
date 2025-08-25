import Link from "next/link"

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section - Generous height for better proportions */}
      <section className="relative min-h-[85vh] flex items-center py-8 lg:py-12">
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            
            {/* Left: Hero Content - Enhanced version */}
            <div className="lg:col-span-2 space-y-8 max-w-4xl">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                  <span className="text-white">Vi hjälper dig med</span><br />
                  <span style={{color: '#16A34A'}}>hela byggprocessen</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed drop-shadow-lg max-w-3xl font-medium">
                  Vi erbjuder allt som krävs för byggprojekt – bygglovsritningar, kontrollansvar, konstruktions- och VVS-ritningar samt energiberäkningar.
                </p>
              </div>
              
              {/* Enhanced CTA - Phone number */}
              <div className="bg-black/20 backdrop-blur-md border border-white/30 p-4 lg:p-6 rounded-2xl w-fit shadow-2xl">
                <a 
                  href="tel:+46768685902" 
                  className="text-white px-8 py-4 lg:px-10 lg:py-5 rounded-xl text-lg lg:text-xl font-bold inline-block transition-all duration-300 transform hover:scale-105 text-center shadow-lg whitespace-nowrap flex items-center gap-3"
                  style={{backgroundColor: '#16A34A'}}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Ring 0768 68 59 02
                </a>
              </div>
            </div>

            {/* Right: Enhanced Pricing Card */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                
                {/* Minimalistisk miljövänlig pricing card */}
                <div className="bg-white border border-slate-200 shadow-xl">
                  
                  {/* Enkel naturlig header */}
                  <div className="p-6 bg-slate-50 border-b border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 rounded-full" style={{backgroundColor: '#16A34A'}}></div>
                      <h2 className="text-lg font-bold text-slate-900">Bygglovsritningar</h2>
                    </div>
                    <p className="text-sm text-slate-600">Professionella ritningar med kontrollansvar</p>
                  </div>

                  {/* Clean prislista */}
                  <div className="p-6 space-y-4">
                    
                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                      <div className="font-medium text-slate-700">1-25 kvm</div>
                      <div className="font-bold text-slate-900">9 700 SEK</div>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                      <div className="font-medium text-slate-700">26-70 kvm</div>
                      <div className="font-bold text-slate-900">13 200 SEK</div>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                      <div className="font-medium text-slate-700">71-150 kvm</div>
                      <div className="font-bold text-slate-900">19 200 SEK</div>
                    </div>

                    <div className="flex justify-between items-center py-3">
                      <div className="font-medium text-slate-700">150+ kvm</div>
                      <div className="font-bold text-slate-900">Offert</div>
                    </div>
                  </div>

                  {/* Naturlig footer */}
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-500">Alla priser exkl moms</div>
                      <a 
                        href="/tjanster" 
                        className="text-sm font-medium hover:underline flex items-center gap-1"
                        style={{color: '#16A34A'}}
                      >
                        Se mer info
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
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