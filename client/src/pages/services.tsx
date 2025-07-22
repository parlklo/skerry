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
             Digittala Tjänster<br />
            <span className="text-skerry-orange-500">Som Bara Fungerar</span>
          </h1>
          <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vi ser över din digital närvaro så att du kan 
            fokusera på att driva ditt företag.
          </p>
        </div>

        {/* Så fungerar det - 2x2 grid, ny text */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-warm-gray-100 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl font-bold mb-10 text-center text-warm-gray-900">Så fungerar det</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16 max-w-4xl mx-auto">
              {/* Steg 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">1</div>
                <div className="font-bold text-lg text-warm-gray-900 mb-2">Välj paket & betala</div>
                <div className="text-warm-gray-700 text-base max-w-xs">Välj det paket som passar dig bäst och betala smidigt online.</div>
              </div>
              {/* Steg 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">2</div>
                <div className="font-bold text-lg text-warm-gray-900 mb-2">Beskriv ditt företag</div>
                <div className="text-warm-gray-700 text-base max-w-xs">Du får ett formulär där du fyller i information om ditt företag.</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-16 gap-y-16 mt-16 max-w-6xl mx-auto">
              {/* Steg 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">3</div>
                <div className="font-bold text-lg text-warm-gray-900 mb-2">Vi skapar din webbplats</div>
                <div className="text-warm-gray-700 text-base max-w-xs">Vi designar och utvecklar din webbplats baserat på dina önskemål.</div>
              </div>
              {/* Steg 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">4</div>
                <div className="font-bold text-lg text-warm-gray-900 mb-2">Nöjdhetsgaranti</div>
                <div className="text-warm-gray-700 text-base max-w-xs">Vi visar din färdiga webbplats. Begär ändringar eller få pengarna tillbaka.</div>
              </div>
              {/* Steg 5 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">5</div>
                <div className="font-bold text-lg text-warm-gray-900 mb-2">Lansering & långsiktig support</div>
                <div className="text-warm-gray-700 text-base max-w-xs">Vi lanserar sidan och sköter hosting, support och underhåll.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vårt Startpaket */}
        <h2 id="prisplaner" className="text-3xl font-bold mb-8 text-center text-warm-gray-900">Vårt Startpaket</h2>
        <p className="text-center text-warm-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Komplett digital start för ditt lokala företag. Hemsida + Google Ads-kampanj som börjar generera kunder direkt.
        </p>

        <div className="mb-16">
          <div className="max-w-2xl mx-auto">
            {/* Startpaket */}
            <div className="bg-warm-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="flex items-center mb-4">
                <span className="bg-skerry-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Startpaket</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Hemsida + Annonskampanj</h3>
              
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
                  <span>Annonskampanj</span>
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
          </div>
          <div className="text-sm font-bold text-warm-gray-700 text-center mt-6">Alla priser är exklusive moms.</div>
        </div>

        {/* Detailed Breakdown of What's Included */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-warm-gray-900">Vad ingår i startpaketet?</h2>
            <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto">
              Detaljerad genomgång av vad du får för dina 7 800 SEK
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* What's Included */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-skerry-orange-500 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-warm-gray-900">Komplett leverans</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-orange-200">
                  <h4 className="font-bold text-lg mb-4 text-skerry-orange-600">Komplett hemsida:</h4>
                  <div className="space-y-2 text-warm-gray-700 text-sm">
                    <p>• Modern, responsiv design</p>
                    <p>• Kontaktformulär och telefonnummer</p>
                    <p>• SEO-optimerad för Google</p>
                    <p>• Snabb laddningstid</p>
                    <p>• Mobilanpassad</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-orange-200">
                  <h4 className="font-bold text-lg mb-4 text-skerry-orange-600">Google Ads-kampanj:</h4>
                  <div className="space-y-2 text-warm-gray-700 text-sm">
                    <p>• Professionell kampanjsetup</p>
                    <p>• 1 500 SEK annonsbudget inkluderad</p>
                    <p>• Lokala sökord för ditt område</p>
                    <p>• Spårning och optimering</p>
                    <p>• Månadsrapporter</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <h4 className="font-bold text-lg mb-4 text-green-600">Långsiktig support:</h4>
                  <div className="space-y-2 text-warm-gray-700 text-sm">
                    <p>• Teknisk support för hemsidan</p>
                    <p>• Hjälp med framtida kampanjer</p>
                    <p>• Rådgivning kring digital marknadsföring</p>
                    <p>• Ingen bindningstid</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Ads Mathematics */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <Search className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-warm-gray-900">Google Ads-mattematiken</h3>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mb-6">
                <h4 className="font-bold text-lg mb-4 text-blue-600">1 500 SEK annonsbudget ger dig:</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-warm-gray-700">Cirka 3 000-5 000 visningar</span>
                    <span className="font-bold text-blue-600">👁️</span>
                  </div>
                  <div className="text-center text-gray-400">⬇️</div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-warm-gray-700">150-300 klick till hemsidan</span>
                    <span className="font-bold text-blue-600">👆</span>
                  </div>
                  <div className="text-center text-gray-400">⬇️</div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-warm-gray-700">15-45 kontaktförfrågningar</span>
                    <span className="font-bold text-blue-600">📧</span>
                  </div>
                  <div className="text-center text-gray-400">⬇️</div>
                  <div className="flex items-center justify-between p-3 bg-green-100 rounded-lg border border-green-300">
                    <span className="text-warm-gray-700 font-semibold">3-8 nya uppdrag/kunder</span>
                    <span className="font-bold text-green-600">💰</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-green-200">
                <h4 className="font-bold text-lg mb-3 text-green-600">Konkret exempel - Byggentreprenör:</h4>
                <div className="space-y-2 text-warm-gray-700 text-sm">
                  <p>• <strong>3 nya uppdrag</strong> à 25 000 SEK = <strong>75 000 SEK</strong> i intäkter</p>
                  <p>• <strong>Investering:</strong> 7 800 SEK (hemsida + första kampanjen)</p>
                  <p>• <strong>Nettovinst:</strong> 67 200 SEK</p>
                </div>
                <div className="mt-4 p-4 bg-green-100 rounded-lg">
                  <p className="font-bold text-green-800 text-center">
                    ✅ 860% avkastning på investering
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Summary */}
          <div className="bg-warm-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Varför detta fungerar så bra</h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Kombinationen av en professionell hemsida som bygger förtroende + riktade Google Ads som för rätt kunder till dig = 
              en kraftfull motor för att generera nya uppdrag. Det här är inte bara en kostnad – det är en investering som betalar sig själv.
            </p>
          </div>
        </div>

        {/* Main Services */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-warm-gray-900">Vad som ingår i våra Tjänster</h2>
          <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto">
            Djupdykning i vad vi levererar och hur vi säkerställer kvalitet i varje steg.
          </p>H
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Website Creation */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-skerry-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Globe className="text-skerry-orange-500 text-2xl" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-warm-gray-900">Professionell Webbplatsutveckling</h3>
              <p className="text-warm-gray-600 mb-6 text-lg">
                Vi bygger moderna, professionella hemsidor som stärker ditt varumärke och hjälper dig nå fler kunder.
              </p>
              <ul className="space-y-3 text-warm-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Trygg, snabb hemsida byggd med modern teknik</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Design som matchar ditt varumärke och målgrupp</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Optimerad för att besökare ska höra av sig eller köpa</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Mobilanpassad och sökmotoroptimerad från start</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Nöjd-kund-garanti – annars får du pengarna tillbaka</span>
                </li>
              </ul>
              <div className="bg-warm-gray-50 rounded-xl p-4 border border-warm-gray-200">
                <div className="text-sm text-warm-gray-500 mb-2">Typisk projekttid</div>
                <div className="text-2xl font-bold text-skerry-orange-500">~1 vecka</div>
              </div>
            </div>
          </div>

          {/* Ongoing Maintenance */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="text-green-500 text-2xl" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-warm-gray-900">Löpande Underhåll & Support</h3>
              <p className="text-warm-gray-600 mb-6 text-lg">
                Vi säkerställer att din webbplats är snabb, säker och alltid tillgänglig genom vår moderna hosting-infrastruktur.
              </p>
              <ul className="space-y-3 text-warm-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Professionell hosting med automatisk skalning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>SSL-certifikat och säker domänhantering</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Globalt CDN-nätverk för snabb laddning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Kontinuerlig övervakning av prestanda och tillgänglighet</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Versionshantering med snabb återställning</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="text-sm text-green-700 mb-2">Support & tillgänglighet</div>
              <div className="text-2xl font-bold text-green-600">Tillgänglig support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}