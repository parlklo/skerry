import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, Wrench, Search, PaintBucket, Shield, Zap, CheckCircle, ArrowRight, MessageCircle, Building2 } from "lucide-react";
import { initiateBasicPlanPayment } from "@/lib/stripe";
import { useState, useEffect } from "react";

export default function Services() {
  const [isLoading, setIsLoading] = useState(false);

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
    }
  }, []); // Empty dependency array means this runs once when component mounts

  const handleBasicPlanClick = async () => {
    try {
      setIsLoading(true);
      await initiateBasicPlanPayment();
    } catch (error) {
      console.error('Failed to initiate payment:', error);
      // Här kan du lägga till felhantering, t.ex. visa en toast-notification
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-black mb-6 text-warm-gray-900">
            Digitala Tjänster<br />
            <span className="text-skerry-orange-500">Som Faktiskt Fungerar</span>
          </h1>
          <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vi skapar professionella webbplatser och hanterar allt det tekniska så att du kan 
            fokusera på att driva ditt företag. Ingen jargong, inga krångliga processer—bara resultat.
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

        {/* Våra Prisplaner */}
        <h2 id="prisplaner" className="text-3xl font-bold mb-8 text-center text-warm-gray-900">Våra Prisplaner</h2>
        <p className="text-center text-warm-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Alla våra paket innehåller både webbplatsutveckling och löpande support. Välj det paket som passar ditt företags behov bäst.
        </p>
        
        {/* Visual badges for Basic and Premium */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Basic badge */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-6 flex flex-col items-center text-center shadow-sm">
              <Wrench className="text-blue-400 mb-3" size={32} />
              <div className="font-bold text-blue-800 text-xl mb-2">Basic Paket</div>
              <div className="text-blue-700 text-base">🛠 För dig som sällan gör ändringar på hemsidan</div>
            </div>
            {/* Premium badge */}
            <div className="bg-orange-50 border border-skerry-orange-200 rounded-xl px-6 py-6 flex flex-col items-center text-center shadow-sm">
              <Zap className="text-skerry-orange-400 mb-3" size={32} />
              <div className="font-bold text-skerry-orange-800 text-xl mb-2">Premium Paket</div>
              <div className="text-skerry-orange-700 text-base">⚡️ För dig som ändrar innehållet flera gånger per månad</div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Package */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-6">
                <div className="text-sm font-semibold text-blue-500 uppercase tracking-wide mb-4">Basic Paket</div>
                
                {/* Webbplatsutveckling */}
                <div className="mb-4">
                  <div className="text-sm text-warm-gray-600 mb-2">Komplett hemsida</div>
                  <span className="text-3xl font-extrabold text-warm-gray-900">9 455 SEK</span>
                </div>
                
                <div className="border-t border-warm-gray-200 my-4"></div>
                
                {/* Support */}
                <div className="mb-4">
                  <div className="text-sm text-warm-gray-600 mb-2">Löpande support & hosting</div>
                  <div className="text-2xl font-bold text-warm-gray-900">445 SEK<span className="text-base font-normal text-warm-gray-500">/mån</span></div>
                </div>
                
                <div className="border-t border-warm-gray-200 my-4"></div>
              </div>
              
              <ul className="space-y-3 text-warm-gray-600 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Professionell webbplats med 5 sidor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>SEO-optimering</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Professionell hosting & drift</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>SSL-certifikat & säkerhet</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Automatiska backuper</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>3 enkla innehållsändringar per månad (text, bilder, listor etc.)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Teknisk support vid problem</span>
                </li>
                <li className="flex items-start">
                  <MessageCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Design & utökad funktionalitet vid behov (separat kostnad)</span>
                </li>
                <li className="flex items-start">
                  <Shield className="text-red-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Inga avancerade system (bokningssystem, e-handel, etc.)</span>
                </li>
              </ul>
              
              <Button 
                onClick={handleBasicPlanClick}
                disabled={isLoading}
                className="w-full bg-blue-500 text-white hover:bg-blue-600 h-auto py-3 text-base font-semibold rounded-xl"
              >
                {isLoading ? 'Laddar...' : 'Välj Basic Paket'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-skerry-orange-500 hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-6">
                <div className="text-sm font-semibold text-skerry-orange-500 uppercase tracking-wide mb-4">Premium Paket</div>
                
                {/* Webbplatsutveckling */}
                <div className="mb-4">
                  <div className="text-sm text-warm-gray-600 mb-2">Komplett hemsida</div>
                  <span className="text-3xl font-extrabold text-warm-gray-900">9 455 SEK</span>
                </div>
                
                <div className="border-t border-warm-gray-200 my-4"></div>
                
                {/* Support */}
                <div className="mb-4">
                  <div className="text-sm text-warm-gray-600 mb-2">Löpande support & hosting</div>
                  <div className="text-2xl font-bold text-warm-gray-900">945 SEK<span className="text-base font-normal text-warm-gray-500">/mån</span></div>
                </div>
                
                <div className="border-t border-warm-gray-200 my-4"></div>
              </div>
              
              <ul className="space-y-3 text-warm-gray-600 mb-8 flex-grow">
                <li className="flex items-start">
                  <Zap className="text-skerry-orange-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Allt i Basic Paket +</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Aktiv support & snabba svar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Uppdateringar av innehåll: priser, bilder, öppettider osv</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Enkla funktionsförbättringar</span>
                </li>
              </ul>
              
              <Link href="/contact">
                <Button className="w-full bg-skerry-orange-500 text-white hover:bg-skerry-orange-600 h-auto py-3 text-base font-semibold rounded-xl">
                  Välj Premium Paket
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="text-sm font-bold text-warm-gray-700 text-center mt-6">Alla priser är exklusive moms.</div>
        </div>

        {/* Main Services */}
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
              <div className="text-2xl font-bold text-green-600">Svar inom 24h</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}