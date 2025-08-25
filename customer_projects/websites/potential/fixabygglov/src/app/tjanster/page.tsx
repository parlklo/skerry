import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tjänster - FixaBygglov",
  description: "Vi erbjuder tjänster inom arkitektur, konstruktion, VVS, kontrollansvar, projektering och fastighetsutveckling. SITAC-certifierade konsulter.",
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

              {/* Client Logos */}
              <div>
                <p className="text-slate-400 text-sm font-medium mb-6 uppercase tracking-wider">
                  Projekt genomförda för branschledande företag
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
                  <img src="/skanska-logotype-skanska-logotype-2.png" alt="Skanska" className="h-8 object-contain filter brightness-0 invert justify-self-center" />
                  <img src="/NCC_(Unternehmen)_logo.svg.png" alt="NCC" className="h-8 object-contain filter brightness-0 invert justify-self-center" />
                  <img src="/Veidekke_logo.svg.png" alt="Veidekke" className="h-8 object-contain filter brightness-0 invert justify-self-center" />
                  <img src="/peab_logo.svg" alt="PEAB" className="h-8 object-contain filter brightness-0 invert justify-self-center" />
                </div>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="/tjanster 2.png" 
                  alt="Professionella bygglovstjänster" 
                  className="w-full max-w-md object-contain rounded-xl"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
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

              </div>
              
              {/* Pricing Table for Bygglov */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-slate-700">
                  Bygglovsritningar & Kontrollansvar
                </h3>
                <div className="space-y-4 flex-grow">
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-lg text-slate-700">1-25 kvm</span>
                    <span className="text-xl font-bold text-slate-800">9 700 SEK</span>
                  </div>
                  <div className="text-sm text-slate-500 mb-2">4 700 SEK + 4 500 SEK KA</div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-lg text-slate-700">26-70 kvm</span>
                    <span className="text-xl font-bold text-slate-800">13 200 SEK</span>
                  </div>
                  <div className="text-sm text-slate-500 mb-2">6 700 SEK + 6 500 SEK KA</div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-lg text-slate-700">71-150 kvm</span>
                    <span className="text-xl font-bold text-slate-800">19 200 SEK</span>
                  </div>
                  <div className="text-sm text-slate-500 mb-2">9 700 SEK + 9 500 SEK KA</div>
                  
                  <div className="flex justify-between items-center py-3">
                    <span className="text-lg text-slate-700">150+ kvm</span>
                    <span className="text-xl font-bold text-amber-600">Offert</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="/kontakt" 
                    className="w-full bg-slate-700 hover:bg-slate-800 text-white py-3 px-6 rounded-xl font-bold text-center block transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Kontakta oss för offert
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
                <h3 className="text-2xl font-bold mb-6 text-slate-700">
                  Fastighetsutveckling
                </h3>
                <div className="space-y-4 mb-6 text-slate-600 flex-grow">
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
                    className="w-full bg-slate-500 hover:bg-slate-600 text-white py-3 px-6 rounded-xl font-bold text-center block transition-all duration-300 transform hover:scale-105 shadow-lg"
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
              </div>
              
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-slate-700">
                  Kontrollansvar
                </h3>
                <div className="space-y-4 mb-6 text-slate-600 flex-grow">
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
                    className="w-full bg-slate-600 hover:bg-slate-700 text-white py-3 px-6 rounded-xl font-bold text-center block transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                <h3 className="text-2xl font-bold mb-6 text-slate-700">
                  VVS och konstruktion
                </h3>
                <div className="grid grid-cols-1 gap-2 text-sm mb-6 text-slate-600 flex-grow">
                  <div>• Detaljritningar (Väggar, tak & grund)</div>
                  <div>• Konstruktionsberäkningar</div>
                  <div>• Dimensionering</div>
                  <div>• Konstruktionsdokumentation</div>
                  <div>• Övriga konstruktionshandlingar</div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="/kontakt" 
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 px-6 rounded-xl font-bold text-center block transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                <h3 className="text-2xl font-bold mb-6 text-slate-700">
                  Extra tjänster
                </h3>
                <div className="grid grid-cols-1 gap-2 text-sm mb-6 text-slate-600 flex-grow">
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
                    className="w-full bg-slate-700 hover:bg-slate-800 text-white py-3 px-6 rounded-xl font-bold text-center block transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Kontakta oss för offert
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Projektledning */}
          <div className="bg-white border border-slate-200 rounded-3xl p-12 shadow-lg">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                Projektledningssystem
              </h2>
              <p className="text-xl mb-8 text-slate-700">
                Vårt effektiva projektledningssystem innebär att vi tar in offerter från alla konsulter och entreprenörer som behövs för ditt projekt.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Vi leder sedan ditt projekt i samråd med dig – från skisstadiet till färdigt projekt.
              </p>
              <a 
                href="/kontakt" 
                className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 rounded-xl text-lg font-bold inline-block transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Kontakta oss för offert
              </a>
            </div>
          </div>

        </div>
      </section>
      </div>
    </>
  )
}