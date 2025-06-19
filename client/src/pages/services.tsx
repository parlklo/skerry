import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, Wrench, Search, PaintBucket, Shield, Zap, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { initiateBasicPlanPayment } from "@/lib/stripe";
import { useState } from "react";

export default function Services() {
  const [isLoading, setIsLoading] = useState(false);

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
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-warm-gray-100 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl font-bold mb-10 text-center text-warm-gray-900">Så fungerar det</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16">
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
                <div className="text-warm-gray-700 text-base max-w-xs">Fyll i ett kort formulär så att vi lär känna ditt företag och dina önskemål.</div>
              </div>
              {/* Steg 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">3</div>
                <div className="font-bold text-lg text-warm-gray-900 mb-2">Förslag med nöjdhetsgaranti</div>
                <div className="text-warm-gray-700 text-base max-w-xs">Du får ett första utkast. Vi justerar tills du är helt nöjd – annars får du pengarna tillbaka.</div>
              </div>
              {/* Steg 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">4</div>
                <div className="font-bold text-lg text-warm-gray-900 mb-2">Lansering & långsiktig support</div>
                <div className="text-warm-gray-700 text-base max-w-xs">Vi lanserar sidan och ser till att allt fungerar som det ska, även framåt.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Våra Prisplaner */}
        <h2 className="text-3xl font-bold mb-8 text-center text-warm-gray-900">Våra Prisplaner</h2>
        {/* Visual badges for Basic and Premium */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Basic badge */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-6 flex flex-col items-center text-center shadow-sm">
              <Wrench className="text-blue-400 mb-3" size={32} />
              <div className="font-bold text-blue-800 text-xl mb-2">Basic</div>
              <div className="text-blue-700 text-base">🛠 För dig som sällan gör ändringar på hemsidan</div>
            </div>
            {/* Premium badge */}
            <div className="bg-orange-50 border border-skerry-orange-200 rounded-xl px-6 py-6 flex flex-col items-center text-center shadow-sm">
              <Zap className="text-skerry-orange-400 mb-3" size={32} />
              <div className="font-bold text-skerry-orange-800 text-xl mb-2">Premium</div>
              <div className="text-skerry-orange-700 text-base">⚡️ För dig som ändrar innehållet flera gånger per månad</div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-6">
                <div className="text-sm font-semibold text-skerry-orange-500 uppercase tracking-wide mb-4">Kom igång från</div>
                {/* Webbplatsutveckling */}
                <div className="mb-2">
                  <span className="inline-block bg-skerry-orange-100 text-skerry-orange-700 text-sm font-bold px-3 py-1 rounded mb-2">För webbplatsutveckling</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-4xl font-extrabold text-warm-gray-900">6 455 SEK</span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded ml-2">Rabatt!</span>
                </div>
                <div className="text-base text-warm-gray-400 mt-1 mb-1 line-through">Ord. pris 9 455 SEK</div>
                <div className="my-2 border-t border-warm-gray-100"></div>
                {/* Hosting, drift & support */}
                <div className="mb-2">
                  <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-3 py-1 rounded mb-2">För hosting, drift & support</span>
                </div>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-2xl font-bold text-green-500">Gratis</span>
                  <span className="text-base text-warm-gray-600">de första 3 månaderna</span>
                </div>
                <div className="text-sm text-warm-gray-500 mb-2 mt-3">Därefter <span className="font-semibold text-warm-gray-700">445 SEK/mån</span></div>
                <div className="my-2 border-t border-warm-gray-100"></div>
              </div>
              <ul className="space-y-3 text-warm-gray-600 mb-8 mt-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Professionell webbplats med 5 sidor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Drift & hosting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Mobilanpassad design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>SEO-optimering</span>
                </li>
                <li className="flex items-start">
                  <MessageCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Design & utökad funktionalitet vid behov (separat kostnad)</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Button 
                  onClick={handleBasicPlanClick}
                  disabled={isLoading}
                  className="w-full bg-skerry-orange-500 text-white hover:bg-skerry-orange-600 h-auto py-3 text-base font-semibold rounded-xl"
                >
                  {isLoading ? 'Laddar...' : 'Välj Basic'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="text-sm font-bold text-warm-gray-700 text-center mt-4">Alla priser är exklusive moms.</div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-skerry-orange-500 hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-6">
                <div className="text-sm font-semibold text-skerry-orange-500 uppercase tracking-wide mb-4">Kom igång från</div>
                {/* Webbplatsutveckling */}
                <div className="mb-2">
                  <span className="inline-block bg-skerry-orange-100 text-skerry-orange-700 text-sm font-bold px-3 py-1 rounded mb-2">För webbplatsutveckling</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-4xl font-extrabold text-warm-gray-900">6 455 SEK</span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded ml-2">Rabatt!</span>
                </div>
                <div className="text-base text-warm-gray-400 mt-1 mb-1 line-through">Ord. pris 9 455 SEK</div>
                <div className="my-2 border-t border-warm-gray-100"></div>
                {/* Hosting, drift & support */}
                <div className="mb-2">
                  <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-3 py-1 rounded mb-2">För hosting, drift & support</span>
                </div>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-2xl font-bold text-skerry-orange-500">495 SEK</span>
                  <span className="text-base text-warm-gray-600">de första 3 månaderna</span>
                </div>
                <div className="text-sm text-warm-gray-500 mb-2 mt-3">Därefter <span className="font-semibold text-warm-gray-700">945 SEK/mån</span></div>
                <div className="my-2 border-t border-warm-gray-100"></div>
              </div>
              <ul className="space-y-3 text-warm-gray-600 mb-8 mt-2">
                <li className="flex items-start">
                  <Zap className="text-skerry-orange-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Allt i Basic +</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Aktiv support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Möjlighet att uppdatera innehåll: priser, bilder, öppettider och enkla funktioner, osv</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link href="/contact">
                  <Button className="w-full bg-skerry-orange-500 text-white hover:bg-skerry-orange-600 h-auto py-3 text-base font-semibold rounded-xl">
                    Välj Premium
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <div className="text-sm font-bold text-warm-gray-700 text-center mt-4">Alla priser är exklusive moms.</div>
              </div>
            </div>
          </div>
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

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-warm-gray-900">Ytterligare Tjänster</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* SEO Optimization */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="text-blue-500" size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2 text-warm-gray-900">Lokal SEO</h4>
              <p className="text-warm-gray-600 text-sm">
                Hjälp kunder att hitta dig online med lokal sökoptimering och Google My Business-konfiguration.
              </p>
            </div>

            {/* Branding */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <PaintBucket className="text-purple-500" size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2 text-warm-gray-900">Varumärkesidentitet</h4>
              <p className="text-warm-gray-600 text-sm">
                Logotypdesign och varumärkesriktlinjer för att göra ditt företag professionellt och konsekvent.
              </p>
            </div>

            {/* Security */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-red-500" size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2 text-warm-gray-900">Säkerhet & Backup</h4>
              <p className="text-warm-gray-600 text-sm">
                Omfattande säkerhetsåtgärder och automatiska backuper för att skydda ditt företags data.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-warm-gray-100 rounded-2xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-warm-gray-900">Hur Vi Arbetar Tillsammans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="text-lg font-bold mb-2 text-warm-gray-900">Upptäcktsmöte</h4>
              <p className="text-warm-gray-600">
                Vi diskuterar ditt företag, mål och vad du behöver från din webbplats.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="text-lg font-bold mb-2 text-warm-gray-900">Design & Utveckling</h4>
              <p className="text-warm-gray-600">
                Vi skapar din webbplats och håller dig uppdaterad under hela processen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="text-lg font-bold mb-2 text-warm-gray-900">Lansering & Support</h4>
              <p className="text-warm-gray-600">
                Din webbplats går live och vi ger fortsatt support och underhåll.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 mb-16 border border-warm-gray-200">
          <blockquote className="text-2xl lg:text-3xl font-medium text-warm-gray-800 text-center leading-relaxed mb-6">
            "Vår nya webbplats har lockat fler kunder på 3 månader än vår gamla gjorde på 2 år. 
            Underhållstjänsten betyder att vi aldrig behöver oroa oss för tekniska problem."
          </blockquote>
          <div className="text-center">
            <div className="text-warm-gray-600">— Lokal Företagsägare</div>
          </div>
        </div>
      </div>
    </section>
  );
}