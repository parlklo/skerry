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
        <div className="bg-gradient-to-br from-warm-gray-50 to-warm-gray-100 rounded-3xl p-8 lg:p-12 mb-16 border border-warm-gray-200">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-skerry-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
              🚀 Vårt Startpaket
            </div>
            <h2 className="text-3xl font-bold text-warm-gray-900 mb-4">Allt du behöver för en digital start</h2>
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
                  <div className="text-warm-gray-700 text-base max-w-xs">Vi visar hemsidan och Google Ads-kampanjen. Begär ändringar eller godkänn för lansering. Nöjdhetsgaranti.</div>
                </div>
                {/* Steg 4 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">4</div>
                  <div className="font-bold text-lg text-warm-gray-900 mb-2">Lansering + Google Ads startar</div>
                  <div className="text-warm-gray-700 text-base max-w-xs">Din hemsida går live och vi aktiverar Google Ads-kampanjen för att börja generera kunder.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vårt Startpaket */}
          <h3 id="prisplaner" className="text-3xl font-bold mb-8 text-center text-warm-gray-900">Pris & Innehåll</h3>
          <p className="text-center text-warm-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Komplett digital start för ditt lokala företag. Hemsida + Google Ads-kampanj som börjar generera kunder direkt.
          </p>

          <div className="mb-16">
            <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {/* Startpaket - Takes 60% width */}
              <div className="lg:col-span-3 bg-warm-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
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
                  ✅ Pengar tillbaka om du inte är nöjd med hemsidan
                </div>
              </div>

              {/* Google Ads Details - Takes 40% width */}
              <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <Search className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-bold text-warm-gray-900">Google Ads Kampanj</h4>
                </div>
                
                <p className="text-warm-gray-600 mb-6 text-sm">
                  Annonsbudget ingår för att generera dina första kunder direkt.
                </p>

                {/* Redesigned Results Preview */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
                  <div className="text-center mb-6">
                    <h5 className="font-bold text-lg text-blue-800">Vad 1 500 SEK kan förväntas generera</h5>
                  </div>
                  
                  {/* Visual Funnel */}
                  <div className="relative">
                    {/* Step 1 - Impressions */}
                    <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-blue-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">👁️</span>
                          </div>
                          <div>
                            <div className="font-bold text-purple-700">3 000-8 000 visningar</div>
                            <div className="text-xs text-gray-600">Din annons visas för potentiella kunder</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow & Percentage */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        CTR: 2-5% klickar
                      </div>
                    </div>

                    {/* Step 2 - Clicks */}
                    <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-blue-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">👆</span>
                          </div>
                          <div>
                            <div className="font-bold text-blue-700">50-100 klick</div>
                            <div className="text-xs text-gray-600">Besökare till din hemsida</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow & Percentage */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Konvertering: 2-5% hör av sig
                      </div>
                    </div>

                    {/* Step 3 - Leads */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 shadow-sm border border-green-200">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-sm">📞</span>
                        </div>
                        <div>
                          <div className="font-bold text-green-700">2-5 nya kontakter</div>
                          <div className="text-xs text-gray-600">Potentiella kunder som hör av sig</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Summary */}
                  <div className="mt-6 text-center">
                    <div className="bg-white/50 rounded-lg p-3 border border-blue-200">
                      <div className="text-xs text-blue-700">
                        📊 <strong>Baserat på branschstandarder för lokala företag</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm font-bold text-warm-gray-700 text-center mt-6">Alla priser är exklusive moms.</div>
          </div>

          {/* Main Services */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-warm-gray-900">Detaljerad Översikt</h3>
            <p className="text-lg text-warm-gray-600 max-w-3xl mx-auto">
              Exakt vad som ingår i startpaketet och vad du kan förvänta dig.
            </p>
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
              <div className="bg-warm-gray-50 rounded-lg p-3 border border-warm-gray-200 text-center">
                <div className="text-xs text-warm-gray-500">Projekttid</div>
                <div className="text-lg font-bold text-skerry-orange-500">~1 vecka</div>
              </div>
            </div>

            {/* Google Ads Campaign */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Search className="text-blue-500" size={28} />
                </div>
                <h4 className="text-xl font-bold text-warm-gray-900 mb-2">Google Ads Kampanj</h4>
                <p className="text-warm-gray-600 text-sm mb-4">
                  Professionell annonskampanj som genererar kunder direkt.
                </p>
              </div>
              <ul className="space-y-2 text-warm-gray-600 text-sm mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Kampanjsetup av experter</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>1 500 SEK annonsbudget ingår</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Lokala sökord för ditt område</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Anpassade annonstexter</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <span>Optimering första månaden</span>
                </li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 text-center">
                <div className="text-xs text-blue-700">Förväntad måluppfyllelse</div>
                <div className="text-lg font-bold text-blue-600">2-5 nya kontakter</div>
                <div className="text-xs text-blue-600">från 1 500 SEK budget</div>
              </div>
            </div>

            {/* Ongoing Maintenance */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Wrench className="text-green-500" size={28} />
                </div>
                <h4 className="text-xl font-bold text-warm-gray-900 mb-2">Löpande Service & Support</h4>
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
              <div className="bg-green-50 rounded-lg p-3 border border-green-200 text-center">
                <div className="text-xs text-green-700">Support & tillgänglighet</div>
                <div className="text-lg font-bold text-green-600">24/7 övervakning</div>
              </div>
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