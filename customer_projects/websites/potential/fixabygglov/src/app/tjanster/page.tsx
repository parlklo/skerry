import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tjänster - FixaBygglov | Malmö & Skåne",
  description: "Professionella bygglovstjänster i Malmö och Skåne. Bygglovsritningar, kontrollansvar, fastighetsutveckling och VVS-projektering. SITAC-certifierade konsulter för alla byggprojekt i Södra Sverige.",
  keywords: "bygglovsritningar malmö, kontrollansvarig skåne, fastighetsutveckling malmö, vvs projektering södra sverige, arkitekt malmö, sitac certifierad",
}

export default function TjansterPage() {
  return (
    <>
      {/* Tjänster page specific background - neutral */}
      <div className="fixed inset-0 bg-white -z-20"></div>
      
      <div className="min-h-screen">
      
      {/* Hero & Company Introduction Section */}
      <section className="pt-20 pb-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Company description */}
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                Professionella bygglovstjänster
              </h1>
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                FixaBygglov består av erfarna konsulter inom arkitektur, konstruktion och VVS med bred branschbakgrund från större konsultföretag.
              </p>

              
            </div>
            
            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="/architect desk.png" 
                  alt="Professionella bygglovstjänster" 
                  className="w-full max-w-md object-contain rounded-xl"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Service 1: Bygglov & Kontrollansvar */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg flex flex-col">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Projektering och bygglov
                </h2>
                <p className="text-lg text-slate-700 mb-6">
                  Oss kan du anlita för projektering och utredningar vad gäller nybyggnationer eller ombyggnationer, oavsett storlek. Vi har erfarna konsulter av projektering, både inom total- och generalentreprenad, som besitter expertis inom en rad olika områden.
                </p>
                <p className="text-slate-600 mb-6">
                  Vi erbjuder SITAC/certifierade kontrollansvariga med behörighetsnummer SC0477-11 där vi ser till att ditt projekt följer de lagkrav som finns. Hos oss får du hjälp med att få alla tillstånd, dokumentationer och ritningar som behövs för ny- och tillbyggnationer, samt ombyggnationer.
                </p>
                <div className="mt-auto">
                  <Link 
                    href="/projekt"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group"
                  >
                    Visa referensprojekt
                    <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

              </div>
              
              {/* Pricing Table for Bygglov */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg flex flex-col">
                <div className="flex items-start gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full mt-3" style={{backgroundColor: '#16A34A'}}></div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-700 mb-1">
                      Bygglovsritningar & Kontrollansvar
                    </h3>
                    <p className="text-xs text-slate-400">Alla priser exklusive moms</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <p className="text-base font-medium text-slate-600">Fast pris från:</p>
                </div>
                
                <div className="space-y-3 flex-grow">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <div>
                      <span className="text-lg text-slate-700 font-medium">1-25 kvm</span>
                      <div className="text-xs text-slate-500">4 700 + 4 500 SEK KA</div>
                    </div>
                    <span className="text-xl font-bold text-slate-800">9 700 SEK</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <div>
                      <span className="text-lg text-slate-700 font-medium">26-70 kvm</span>
                      <div className="text-xs text-slate-500">6 700 + 6 500 SEK KA</div>
                    </div>
                    <span className="text-xl font-bold text-slate-800">13 200 SEK</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <div>
                      <span className="text-lg text-slate-700 font-medium">71-150 kvm</span>
                      <div className="text-xs text-slate-500">9 700 + 9 500 SEK KA</div>
                    </div>
                    <span className="text-xl font-bold text-slate-800">19 200 SEK</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-lg text-slate-700 font-medium">150+ kvm</span>
                    <span className="text-xl font-bold" style={{color: '#16A34A'}}>Offert</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="/kontakt" 
                    className="w-fit mx-auto text-white py-3 px-8 rounded-xl font-bold text-center block transition-all duration-300 transform hover:scale-105 shadow-lg" style={{backgroundColor: '#16A34A'}}
                  >
                    Kontakta oss
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Fastighetsutveckling */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg flex flex-col">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Fastighetsutveckling
                </h2>
                <p className="text-lg text-slate-700 mb-6">
                  När det gäller fastighetsutveckling besöker vi alltid dig som beställare.
                </p>
                <p className="text-slate-600 mb-6 flex-grow">
                  Vi genomför planering, behovsanalyser och ger dig rådgivning. Vårt tillvägagångssätt är att vi gör snabba 3D-skisser samt genomför analyser av ytor, volymer och skuggor för att få fram den bästa och den mest hållbara lösningen för dig som kund.
                </p>
                <div className="mt-auto">
                  <Link 
                    href="/projekt"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group"
                  >
                    Visa referensprojekt
                    <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#16A34A'}}></div>
                  <h3 className="text-2xl font-bold text-slate-700">
                    Fastighetsutveckling
                  </h3>
                </div>
                <div className="space-y-3 mb-6 text-base text-slate-600 flex-grow">
                  <div>• Planering och behovsanalyser</div>
                  <div>• Snabba 3D-skisser</div>
                  <div>• Analyser av ytor och volymer</div>
                  <div>• Skuggstudier</div>
                  <div>• Hållbarhetsanalys</div>
                  <div>• Rådgivning genom hela processen</div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="/kontakt" 
                    className="w-fit mx-auto text-white py-3 px-8 rounded-xl font-bold text-center block transition-all duration-300 transform hover:scale-105 shadow-lg" style={{backgroundColor: '#16A34A'}}
                  >
                    Kontakta oss för offert
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: Kontrollansvar */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg flex flex-col">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Kontrollansvar
                </h2>
                <p className="text-lg text-slate-700 mb-6">
                  För alla byggnationer, vare sig det handlar om ombyggnation, tillbyggnation eller nybyggnation, krävs det att det finns en utsedd certifierad kontrollansvarig. Det är enligt Plan- och bygglagen, PBL.
                </p>
                <p className="text-slate-600 mb-6 flex-grow">
                  Vi är certifierade kontrollansvariga och tillhandahåller denna tjänst. När du anlitar oss hjälper vi dig att följa de lagkrav som finns för hållbarhet, säkerhet, tillgänglighet, energi och hygien. Det innebär att vi är ett stöd för byggherren och dig som beställare där vi utformar projektet samt anpassar en kontrollplan. Vi finns med på byggsamråd, följer upp hur bygget utvecklar sig och ser till att både lagstadgade krav och kontroller fullföljs.
                </p>
                <div className="mb-6">
                  <a 
                    href="https://ark-kon.com/files/PDF/36640-1637678407-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group"
                  >
                    Visa vårt SITAC-certifikat
                    <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#16A34A'}}></div>
                  <h3 className="text-2xl font-bold text-slate-700">
                    Kontrollansvar
                  </h3>
                </div>
                <div className="space-y-3 mb-6 text-base text-slate-600 flex-grow">
                  <div>• SITAC-certifierad kontrollansvarig</div>
                  <div>• Kontrollplan och uppföljning</div>
                  <div>• Byggsamråd och kvalitetskontroll</div>
                  <div>• Lagstadgade krav för hållbarhet</div>
                  <div>• Säkerhets- och tillgänglighetskontroll</div>
                  <div>• Energi- och hygienkrav</div>
                  <div>• Stöd genom hela byggprocessen</div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="/kontakt" 
                    className="w-fit mx-auto text-white py-3 px-8 rounded-xl font-bold text-center block transition-all duration-300 transform hover:scale-105 shadow-lg" style={{backgroundColor: '#16A34A'}}
                  >
                    Kontakta oss för offert
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4: VVS & Konstruktion */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg flex flex-col">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  VVS och konstruktion
                </h2>
                <p className="text-lg text-slate-700 mb-6">
                  För VVS och konstruktion krävs det kunskaper och samordning för att bygget ska följa de krav som finns och för att det ska bli hållbart.
                </p>
                <p className="text-slate-600 mb-6">
                  Vi har erfarna konsulter inom dessa branscher som arbetar tillsammans med arkitekten för att se till så att samtliga lösningar integreras i designen från början.
                </p>
                <p className="text-slate-600 flex-grow">
                  Om det finns önskemål från dig delger vi alla VVS- och ventilationsritningar, energiberäkningar, konstruktionslösningar och statiska beräkningar parallellt med när du får bygglovsritningarna.
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#16A34A'}}></div>
                  <h3 className="text-2xl font-bold text-slate-700">
                    VVS och konstruktion
                  </h3>
                </div>
                <div className="space-y-3 mb-6 text-base text-slate-600 flex-grow">
                  <div>• Detaljritningar (Väggar, tak & grund)</div>
                  <div>• Konstruktionsberäkningar</div>
                  <div>• Dimensionering</div>
                  <div>• Konstruktionsdokumentation</div>
                  <div>• Övriga konstruktionshandlingar</div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="/kontakt" 
                    className="w-fit mx-auto text-white py-3 px-8 rounded-xl font-bold text-center block transition-all duration-300 transform hover:scale-105 shadow-lg" style={{backgroundColor: '#16A34A'}}
                  >
                    Kontakta oss för offert
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Service 5: Extra tjänster */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg flex flex-col">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Extra tjänster
                </h2>
                <p className="text-lg text-slate-700 mb-6">
                  Utöver våra huvudtjänster erbjuder vi ett brett utbud av specialiserade tilläggstjänster för att komplettera ditt projekt.
                </p>

              </div>
              
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#16A34A'}}></div>
                  <h3 className="text-2xl font-bold text-slate-700">
                    Extra tjänster
                  </h3>
                </div>
                <div className="space-y-3 mb-6 text-base text-slate-600 flex-grow">
                  <div>• Detaljritningar (Väggar, tak & grund)</div>
                  <div>• Konstruktionsberäkningar</div>
                  <div>• Dimensionering</div>
                  <div>• Konstruktionsdokumentation</div>
                  <div>• Övriga konstruktionshandlingar</div>
                  <div>• Energiberäkning</div>
                  <div>• U-värdesberäkning</div>
                  <div>• Konstruktörsintyg</div>
                  <div>• Förenklade brandskyddsdokument</div>
                  <div>• Förenklade fuktsäkerhetsdokument</div>
                  <div>• 3D Visualisering</div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="/kontakt" 
                    className="w-fit mx-auto text-white py-3 px-8 rounded-xl font-bold text-center block transition-all duration-300 transform hover:scale-105 shadow-lg" style={{backgroundColor: '#16A34A'}}
                  >
                    Kontakta oss för offert
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Vårt arbetssätt */}
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-12 shadow-lg mb-20">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 text-slate-800">
                  Vårt arbetssätt
                </h2>
                <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                  Vårt effektiva projektledningssystem innebär att vi tar in offerter från alla konsulter och entreprenörer som behövs för ditt projekt. Vi leder sedan ditt projekt i samråd med dig – från skisstadiet till färdigt projekt.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Helhetslösning</h3>
                  <p className="text-slate-600">Vi samordnar konsulter och entreprenörer för ditt projekt</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Projektledning</h3>
                  <p className="text-slate-600">Vi leder projektet i samråd med dig</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Professionell försäkring</h3>
                  <p className="text-slate-600">Ansvarsförsäkring för våra tjänster och verksamhet</p>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://ark-kon.com/files/PDF/36640-1637678407-0.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group"
                >
                  Visa våra försäkringsuppgifter
                  <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Avslutande CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Redo att starta ditt byggprojekt?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Vi hjälper dig från skiss till färdigt projekt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/kontakt" 
                  className="text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg" style={{backgroundColor: '#16A34A'}}
                >
                  Kontakta oss för offert
                </a>
                <a 
                  href="/projekt" 
                  className="bg-white text-slate-800 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Se våra projekt
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
      </div>
    </>
  )
}