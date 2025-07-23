import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, Wrench, Search, PaintBucket, Shield, Zap, CheckCircle, ArrowRight, MessageCircle, Building2, Sun } from "lucide-react";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    // Check if URL has #prisplaner hash
    if (window.location.hash === '#prisplaner') {
      // Find the element
      const element = document.getElementById('prisplaner');
      if (element) {
        // Add a small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // No hash - scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-black mb-6 text-warm-gray-900">
             Digitala Lösningar för<br />
            <span className="text-skerry-orange-500">Lokala Företag</span>
          </h1>
          <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vi bygger hemsidor och hjälper till med digital marknadsföring som genererar riktiga kunder.
          </p>
        </div>

        {/* Startpaket Container */}
        <div className="bg-gradient-to-br from-skerry-orange-100 to-orange-200 rounded-3xl p-8 lg:p-12 mb-16 border-2 border-skerry-orange-300 shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-skerry-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold uppercase tracking-wide mb-6 shadow-lg">
              🚀 Vårt Startpaket
            </div>
            <h2 className="text-4xl font-bold text-warm-gray-900 mb-4">Allt du behöver för en digital start</h2>
            <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
              Hemsida, marknadsföring och support - en komplett lösning som får ditt företag online snabbt.
            </p>
          </div>

          {/* Så fungerar det - 2x2 grid, ny text */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
              <h3 className="text-2xl font-bold mb-10 text-center text-warm-gray-900">Så fungerar det</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16 max-w-4xl mx-auto">
                {/* Steg 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">1</div>
                  <div className="font-bold text-lg text-warm-gray-900 mb-2">Betala smidigt online</div>
                  <div className="text-warm-gray-700 text-base max-w-xs">Genomför ditt köp säkert via vår betalningslösning och kom igång direkt.</div>
                </div>
                {/* Steg 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">2</div>
                  <div className="font-bold text-lg text-warm-gray-900 mb-2">Beskriv ditt företag</div>
                  <div className="text-warm-gray-700 text-base max-w-xs">Du får ett formulär där du fyller i information om ditt företag och dina önskemål.</div>
                </div>
                {/* Steg 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">3</div>
                  <div className="font-bold text-lg text-warm-gray-900 mb-2">Godkänn hemsida & marknadsföring</div>
                  <div className="text-warm-gray-700 text-base max-w-xs">Vi visar hemsidan och Google Ads-kampanjen. Begär ändringar eller godkänn för lansering. Nöjdhetsgaranti ingår.</div>
                </div>
                {/* Steg 4 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">4</div>
                  <div className="font-bold text-lg text-warm-gray-900 mb-2">Webbplats live & kampanjaktivering</div>
                  <div className="text-warm-gray-700 text-base max-w-xs">Din hemsida går live och vi aktiverar Google Ads-kampanjen för att börja generera kunder.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vårt Startpaket */}
          <h3 id="prisplaner" className="text-3xl font-bold mb-8 text-center text-warm-gray-900">Pris & Innehåll</h3>

          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Startpaket - Now takes 50% width */}
              <div className="bg-warm-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="flex items-center mb-4">
                  <span className="bg-skerry-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Startpaket</span>
                </div>
                
                <h4 className="text-2xl font-bold mb-4 text-white">Hemsida + Google Ads Kampanj</h4>
                
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-white">7 800 SEK</span>
                  <span className="text-lg ml-2 text-gray-300">exkl. moms</span>
                </div>
                
                <div className="border-t border-gray-600 my-4"></div>

                {/* Support */}
                <div className="mb-6">
                  <div className="text-sm text-gray-300 mb-2">Löpande support & hosting</div>
                  <div className="text-xl font-bold text-white">180 SEK<span className="text-base font-normal text-gray-300">/mån</span></div>
                  <div className="text-sm text-gray-400">exkl. moms</div>
                </div>

                <div className="border-t border-gray-600 my-6"></div>
                
                <ul className="space-y-3 text-gray-200 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Professionell webbplats</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Google Ads-kampanj med annonsbudget</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>1 månads drift & support ingår</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>SEO-optimering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Professionell hosting & drift</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>SSL-certifikat & säkerhet</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Automatiska backuper</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>Teknisk support vid problem</span>
                  </li>
                </ul>
                
                <a 
                  href="https://buy.stripe.com/dRmaEYf8n6AQdBs8Cp9MY02" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full mb-4"
                >
                  <Button className="w-full bg-skerry-orange-500 text-white hover:bg-skerry-orange-600 h-auto py-3 text-base font-semibold rounded-xl">
                    🚀 Starta mitt företags digitala resa
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                
                <div className="text-sm text-gray-300 text-center">
                  ✅ Pengar tillbaka om du inte godkänner hemsidan
                </div>
                
                <div className="text-xs text-gray-400 text-center mt-2">
                  Alla priser är exklusive moms.
                </div>
              </div>

              {/* Google Ads Details - Now takes 50% width with harmonious design */}
              <div className="bg-white rounded-2xl p-8 border-2 border-skerry-orange-200 shadow-lg relative overflow-hidden flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <span className="bg-skerry-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Del av startpaketet</span>
                </div>
                
                <h4 className="text-2xl font-bold mb-4 text-warm-gray-900">Google Ads Kampanj</h4>
                
                {/* Budget Highlight - More Compressed */}
                <div className="relative mb-5">
                  <div className="bg-orange-500 rounded-2xl p-4 text-white relative overflow-hidden shadow-lg">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 bg-white bg-opacity-5 rounded-full -ml-6 -mb-6"></div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-white bg-opacity-25 rounded-full flex items-center justify-center mr-3">
                          <span className="text-lg">🎯</span>
                        </div>
                        <h5 className="text-lg font-bold text-white">Inkluderad Annonsbudget</h5>
                      </div>
                      <div className="text-2xl font-black mb-1 text-white">1 500 SEK</div>
                      <p className="text-white text-sm opacity-90">
                        Vi sätter upp kampanjen och arbetar för att hjälpa dig få nya kunder via din hemsida
                      </p>
                    </div>
                  </div>
                </div>

                {/* Results Dashboard - Compressed */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-base font-bold text-warm-gray-900">Förväntade Resultat</h5>
                    <div className="text-xs text-warm-gray-600 bg-warm-gray-100 px-2 py-1 rounded-full">
                      Med 1 500 SEK budget
                    </div>
                  </div>
                  
                  {/* Expanded Metric Cards */}
                  <div className="space-y-4">
                    {/* Impressions */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-300 h-20">
                      <div className="flex items-center justify-between h-full">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                            <span className="text-white text-lg">👁️</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-xl font-black text-blue-900 leading-tight">3 000 - 8 000</div>
                            <div className="text-sm font-medium text-blue-800">Annonsvisningar</div>
                          </div>
                        </div>
                        <div className="w-24 bg-blue-200 rounded-full h-2 ml-4 flex-shrink-0">
                          <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>
                    </div>

                    {/* Website Visits */}
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-300 h-20">
                      <div className="flex items-center justify-between h-full">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                            <span className="text-white text-lg">🌐</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-xl font-black text-green-900 leading-tight">50 - 100</div>
                            <div className="text-sm font-medium text-green-800">Besökare till hemsida</div>
                          </div>
                        </div>
                        <div className="w-24 bg-green-200 rounded-full h-2 ml-4 flex-shrink-0">
                          <div className="bg-green-600 h-2 rounded-full w-3/5"></div>
                        </div>
                      </div>
                    </div>

                    {/* Contacts */}
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-400 h-20">
                      <div className="flex items-center justify-between h-full">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                            <span className="text-white text-lg">📞</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-xl font-black text-amber-900 leading-tight">2 - 5</div>
                            <div className="text-sm font-medium text-amber-800">Nya kontakter</div>
                          </div>
                        </div>
                        <div className="w-24 bg-amber-200 rounded-full h-2 ml-4 flex-shrink-0">
                          <div className="bg-amber-600 h-2 rounded-full w-2/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compact Warning Design */}
                <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-3 mt-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 text-xs">⚠️</span>
                      </div>
                    </div>
                    <div className="ml-2">
                      <h6 className="text-xs font-bold text-red-900 mb-1">
                        Viktigt att komma ihåg
                      </h6>
                      <p className="text-xs text-red-800">
                        Resultaten ovan är exempel baserade på branschsnitt. Verkliga resultat kan variera kraftigt beroende på bransch, konkurrens och kampanjoptimering. <span className="font-semibold">Inga garantier ges för specifika resultat.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Services */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-warm-gray-900">Detaljerad översikt av startpaketet</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Website Creation */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-skerry-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="text-skerry-orange-500" size={28} />
                </div>
                <h4 className="text-xl font-bold text-warm-gray-900 mb-2">Professionell Webbplatsutveckling</h4>
                <p className="text-warm-gray-600 text-sm mb-4">
                  Modern, professionell hemsida som stärker ditt varumärke.
                </p>
              </div>
              <ul className="space-y-2 text-warm-gray-600 text-sm mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Trygg & snabb med modern teknik</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Design som matchar ditt varumärke</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Optimerad för konvertering</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Mobilanpassad & SEO-optimerad</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Nöjdhetsgaranti</span>
                </li>
              </ul>
            </div>

            {/* Google Ads Campaign */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Search className="text-blue-500" size={28} />
                </div>
                <h4 className="text-xl font-bold text-warm-gray-900 mb-2">Google Ads Kampanj</h4>
                <p className="text-warm-gray-600 text-sm mb-4">
                  Professionell annonskampanj som kan hjälpa dig nå fler kunder.
                </p>
              </div>
              <ul className="space-y-2 text-warm-gray-600 text-sm mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Professionell kampanjsetup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Anpassade sökord för ditt företag</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Anpassade annonstexter</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Målgruppsoptimering</span>
                </li>
              </ul>
            </div>

            {/* Ongoing Maintenance */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Wrench className="text-green-500" size={28} />
                </div>
                <h4 className="text-xl font-bold text-warm-gray-900 mb-2">Service & Support</h4>
                <p className="text-warm-gray-600 text-sm mb-4">
                  Säker hosting och support så din webbplats alltid fungerar.
                </p>
              </div>
              <ul className="space-y-2 text-warm-gray-600 text-sm mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Professionell hosting & skalning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>SSL-certifikat & säkerhet</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Globalt CDN för snabb laddning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Kontinuerlig övervakning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Versionshantering & backup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Custom Solutions CTA */}
        <div className="bg-gradient-to-r from-warm-gray-50 to-white rounded-2xl p-8 lg:p-12 border border-warm-gray-200 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <MessageCircle className="w-16 h-16 text-skerry-orange-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-warm-gray-900 mb-4">Behöver du något annat?</h2>
              <p className="text-lg text-warm-gray-600 mb-8">
                Vårt startpaket passar de flesta, men vi förstår att alla företag är unika. 
                Kanske behöver du bara en hemsida, enbart digital marknadsföring, eller en helt anpassad lösning?
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border border-warm-gray-200">
                <Globe className="w-8 h-8 text-skerry-orange-500 mx-auto mb-3" />
                <h3 className="font-bold text-warm-gray-900 mb-2">Bara Hemsida</h3>
                <p className="text-sm text-warm-gray-600">Professionell webbplats utan marknadsföring</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-warm-gray-200">
                <Search className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold text-warm-gray-900 mb-2">Bara Marknadsföring</h3>
                <p className="text-sm text-warm-gray-600">Google Ads & digital marknadsföring för befintlig hemsida</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-warm-gray-200">
                <Building2 className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-warm-gray-900 mb-2">Anpassad Lösning</h3>
                <p className="text-sm text-warm-gray-600">Skräddarsydd lösning för dina specifika behov</p>
              </div>
            </div>

            <Link href="/contact">
              <Button className="bg-warm-gray-900 text-white hover:bg-warm-gray-800 px-8 py-3 text-lg font-semibold rounded-xl">
                Kontakta oss för anpassad offert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}