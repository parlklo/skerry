import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, Wrench, Search, PaintBucket, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";

export default function Services() {
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

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-warm-gray-900">Våra Prisplaner</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-4">
                <div className="text-sm font-semibold text-skerry-orange-500 uppercase tracking-wide mb-2">Kom igång från</div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-3xl font-extrabold text-warm-gray-900">14 995 kr</span>
                  <span className="text-base text-warm-gray-500">engångsavgift</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-bold text-skerry-orange-500">495 kr</span>
                  <span className="text-base text-warm-gray-600">/mån i 3 månader</span>
                </div>
                <div className="text-sm text-warm-gray-500 mb-2">Därefter <span className="font-semibold text-warm-gray-700">995 kr/mån</span></div>
                <div className="inline-block bg-warm-gray-100 text-warm-gray-700 text-xs rounded px-2 py-1 mb-2">Ingen bindningstid</div>
              </div>
              <ul className="space-y-3 text-warm-gray-600 mb-8 mt-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Professionell webbplats med 5 sidor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Mobilanpassad design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Kontaktformulär</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Grundläggande SEO</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link href="/contact">
                  <Button className="w-full bg-skerry-orange-500 text-white hover:bg-skerry-orange-600 h-auto py-3 text-base font-semibold rounded-xl">
                    Välj Basic
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <div className="text-xs text-warm-gray-400 text-center mt-2">Inga dolda avgifter • Alltid support</div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-skerry-orange-500 hover:scale-105 transition-transform flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-skerry-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow">Mest populär</div>
              <div className="mb-4 mt-4">
                <div className="text-sm font-semibold text-skerry-orange-500 uppercase tracking-wide mb-2">Kom igång från</div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-3xl font-extrabold text-warm-gray-900">24 995 kr</span>
                  <span className="text-base text-warm-gray-500">engångsavgift</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-bold text-skerry-orange-500">995 kr</span>
                  <span className="text-base text-warm-gray-600">/mån i 3 månader</span>
                </div>
                <div className="text-sm text-warm-gray-500 mb-2">Därefter <span className="font-semibold text-warm-gray-700">1 995 kr/mån</span></div>
                <div className="inline-block bg-warm-gray-100 text-warm-gray-700 text-xs rounded px-2 py-1 mb-2">Ingen bindningstid</div>
              </div>
              <ul className="space-y-3 text-warm-gray-600 mb-8 mt-2">
                <li className="flex items-start">
                  <Zap className="text-skerry-orange-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Allt i Basic +</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Obegränsat antal sidor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Onlinebokningssystem</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Avancerad SEO & Analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Prioriterad support</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link href="/contact">
                  <Button className="w-full bg-skerry-orange-500 text-white hover:bg-skerry-orange-600 h-auto py-3 text-base font-semibold rounded-xl">
                    Välj Premium
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <div className="text-xs text-warm-gray-400 text-center mt-2">Inga dolda avgifter • Alltid support</div>
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
                Skräddarsydda webbplatser som ser professionella ut, laddar snabbt och konverterar besökare till kunder. 
                Designad specifikt för ditt företag och din bransch.
              </p>
              <ul className="space-y-3 text-warm-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Mobilanpassad design som fungerar på alla enheter</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Kontaktformulär och integration av onlinebokning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Professionell fotografering och innehållsskapande</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Lokal SEO-optimering för bättre synlighet</span>
                </li>
              </ul>
            </div>
            <div className="bg-warm-gray-50 rounded-xl p-4 border border-warm-gray-200">
              <div className="text-sm text-warm-gray-500 mb-2">Typisk projekttid</div>
              <div className="text-2xl font-bold text-skerry-orange-500">2-3 veckor</div>
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
                Din webbplats behöver regelbunden vård för att förbli säker, snabb och effektiv. 
                Vi hanterar allt tekniskt underhåll så att du slipper oroa dig för det.
              </p>
              <ul className="space-y-3 text-warm-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Regelbundna säkerhetsuppdateringar och backuper</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Innehållsuppdateringar och ändringar vid behov</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Prestandaövervakning och optimering</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Prioriterad support när du behöver hjälp</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="text-sm text-green-700 mb-2">Månadsunderhåll</div>
              <div className="text-2xl font-bold text-green-600">Alltid inkluderat</div>
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

        {/* CTA Section */}
        <div className="bg-skerry-orange-500 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Redo att Komma Igång?</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Låt oss diskutera ditt projekt och skapa en digital närvaro som får ditt företag att växa.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-skerry-orange-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-warm-gray-50 transition-colors h-auto">
              Få Din Kostnadsfria Konsultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}