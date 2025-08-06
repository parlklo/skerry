import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, Wrench, Search, PaintBucket, Shield, Zap, CheckCircle, ArrowRight, MessageCircle, Building2, Sun, Sparkles, Hammer, Coffee, Scissors, Flower2, Heart, Sparkles as SparklesIcon } from "lucide-react";
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

        {/* Services Overview */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-6">
            Vad kan vi hjälpa dig med?
          </h2>
          <p className="text-xl text-warm-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Vi specialiserar oss på att hjälpa lokala företag att växa med moderna digitala lösningar. 
            Oavsett om du behöver en komplett digital start eller bara en del av våra tjänster.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-skerry-orange-50 to-orange-100 rounded-2xl p-8 border border-skerry-orange-200">
              <div className="w-16 h-16 bg-skerry-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-warm-gray-900 mb-4">Professionell Hemsida</h3>
              <p className="text-warm-gray-700 mb-6">
                Modern, responsiv webbplats som stärker ditt varumärke och konverterar besökare till kunder.
              </p>
              <div className="text-2xl font-bold text-skerry-orange-600">Från 6 000 SEK</div>
              <div className="text-sm text-warm-gray-500">exklusive moms</div>
          </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-warm-gray-900 mb-4">Digital Marknadsföring</h3>
              <p className="text-warm-gray-700 mb-6">
                Google Ads-kampanjer och digital marknadsföring som hjälper ditt företag att nå fler kunder.
              </p>
              <div className="text-2xl font-bold text-blue-600">Del av startpaket</div>
              <div className="text-sm text-warm-gray-500">eller separat offert</div>
                </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Wrench className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-warm-gray-900 mb-4">Drift & Support</h3>
              <p className="text-warm-gray-700 mb-6">
                Säker hosting, kontinuerlig support och underhåll så din webbplats alltid fungerar optimalt.
              </p>
              <div className="text-2xl font-bold text-green-600">180 SEK/mån</div>
              <div className="text-sm text-warm-gray-500">exklusive moms</div>
            </div>
          </div>
          
          <div className="mt-12">
            <Link href="/website">
              <Button className="bg-skerry-orange-500 hover:bg-skerry-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                Se vårt startpaket i detalj
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Competitive Comparison */}
        <div className="mt-20 mb-20" id="varfor-skerry">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-4">
              Varför välja <span className="text-skerry-orange-500">Skerry?</span>
            </h2>
            <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto">
              Jämför vårt erbjudande med traditionella webbyråer på marknaden
            </p>
          </div>

          {/* Compact Table Layout */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <div className="p-4"></div>
                <div className="p-4 text-center border-l border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800">Traditionella webbyråer</h3>
                  <p className="text-xs text-gray-600 mt-1">Vanliga marknadspriser</p>
                </div>
                <div className="p-4 text-center border-l border-gray-200 bg-gradient-to-br from-skerry-orange-100 to-warm-orange-100">
                  <h3 className="text-lg font-bold text-skerry-orange-800">Skerry</h3>
                  <p className="text-xs text-skerry-orange-600 mt-1">Modernt och effektivt</p>
                </div>
              </div>

              {/* Table Rows */}
              {/* Kostnad */}
              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-all duration-200">
                <div className="p-4 flex items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-lg mr-3 flex items-center justify-center">
                      <span className="text-green-600 text-sm">💰</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Kostnad</span>
                  </div>
                </div>
                <div className="p-4 border-l border-gray-200 text-center flex flex-col justify-center">
                  <div className="text-lg font-semibold text-gray-800">10 000+ SEK</div>
                  <div className="text-xs text-gray-600">För hemsidan</div>
                </div>
                <div className="p-4 border-l border-gray-200 text-center bg-gradient-to-br from-skerry-orange-50 to-warm-orange-50 flex flex-col justify-center">
                  <div className="text-lg font-bold text-skerry-orange-800 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                    7 800 SEK
                  </div>
                  <div className="text-xs text-skerry-orange-600">För hemsida + Marknadsföring</div>
                </div>
              </div>

              {/* Google Ads */}
              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-all duration-200">
                <div className="p-4 flex items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg mr-3 flex items-center justify-center">
                      <span className="text-yellow-600 text-sm">📢</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Google Ads</span>
                  </div>
                </div>
                <div className="p-4 border-l border-gray-200 text-center flex flex-col justify-center">
                  <div className="text-lg font-semibold text-gray-800">Kostar extra</div>
                  <div className="text-xs text-gray-600">Setup och kampanjhantering tillkommer</div>
                </div>
                <div className="p-4 border-l border-gray-200 text-center bg-gradient-to-br from-skerry-orange-50 to-warm-orange-50 flex flex-col justify-center">
                  <div className="text-lg font-bold text-skerry-orange-800 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                    Inkluderat
                  </div>
                  <div className="text-xs text-skerry-orange-600">Marknadsföringsmaterial + 1 500 SEK annonsbudget</div>
                </div>
              </div>

              {/* Leveranstid */}
              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-all duration-200">
                <div className="p-4 flex items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg mr-3 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">⏰</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Leveranstid</span>
                  </div>
                </div>
                <div className="p-4 border-l border-gray-200 text-center flex flex-col justify-center">
                  <div className="text-lg font-semibold text-gray-800">Varierande</div>
                  <div className="text-xs text-gray-600">Längre processer</div>
                </div>
                <div className="p-4 border-l border-gray-200 text-center bg-gradient-to-br from-skerry-orange-50 to-warm-orange-50 flex flex-col justify-center">
                  <div className="text-lg font-bold text-skerry-orange-800 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                    Cirka 1 vecka
                  </div>
                  <div className="text-xs text-skerry-orange-600">Effektiv process</div>
                </div>
              </div>

              {/* Support & Hosting */}
              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-all duration-200">
                <div className="p-4 flex items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg mr-3 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">🛠️</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Support & Hosting</span>
                  </div>
                </div>
                <div className="p-4 border-l border-gray-200 text-center flex flex-col justify-center">
                  <div className="text-lg font-semibold text-gray-800">150-300 SEK/mån</div>
                  <div className="text-xs text-gray-600">Vanliga marknadspriser</div>
                </div>
                <div className="p-4 border-l border-gray-200 text-center bg-gradient-to-br from-skerry-orange-50 to-warm-orange-50 flex flex-col justify-center">
                  <div className="text-lg font-bold text-skerry-orange-800">180 SEK/mån</div>
                  <div className="text-xs text-skerry-orange-600">Marknadsnivå</div>
                </div>
              </div>

              {/* Kvalitet & Design */}
              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-all duration-200">
                <div className="p-4 flex items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg mr-3 flex items-center justify-center">
                      <span className="text-purple-600 text-sm">🎨</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Kvalitet & Design</span>
                  </div>
                </div>
                <div className="p-4 border-l border-gray-200 text-center flex flex-col justify-center">
                  <div className="text-lg font-semibold text-gray-800">Varierande</div>
                  <div className="text-xs text-gray-600">Mallar och äldre system</div>
                </div>
                <div className="p-4 border-l border-gray-200 text-center bg-gradient-to-br from-skerry-orange-50 to-warm-orange-50 flex flex-col justify-center">
                  <div className="text-lg font-bold text-skerry-orange-800 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                    Senaste tekniken
                  </div>
                  <div className="text-xs text-skerry-orange-600">Modern, responsiv och skräddarsydd</div>
                </div>
              </div>

              {/* Personlig kontakt */}
              <div className="grid grid-cols-3 hover:bg-gray-50 transition-all duration-200">
                <div className="p-4 flex items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-rose-100 rounded-lg mr-3 flex items-center justify-center">
                      <span className="text-rose-600 text-sm">👥</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Personlig kontakt</span>
                  </div>
                </div>
                <div className="p-4 border-l border-gray-200 text-center flex flex-col justify-center">
                  <div className="text-lg font-semibold text-gray-800">Allmän kundtjänst</div>
                  <div className="text-xs text-gray-600">Standardiserade svar och processer</div>
                </div>
                <div className="p-4 border-l border-gray-200 text-center bg-gradient-to-br from-skerry-orange-50 to-warm-orange-50 flex flex-col justify-center">
                  <div className="text-lg font-bold text-skerry-orange-800 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                    Personlig service
                  </div>
                  <div className="text-xs text-skerry-orange-600">Tillgänglig kontakt</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-warm-gray-500">
              *Baserat på priser från svenska webbyråer som <a href="https://hemsidelab.se/vad-kostar-en-hemsida/" target="_blank" rel="noopener noreferrer" className="text-skerry-orange-500 hover:underline">Hemsidelab</a> (2024-2025)
            </p>
          </div>
        </div>

        {/* Trust indicators section */}
        <div className="bg-gradient-to-br from-warm-gray-50 to-skerry-orange-50 rounded-3xl py-16 px-4 sm:px-8 mb-20 border border-warm-gray-200" id="hjalper-smaforetag">
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="text-skerry-orange-500 mr-3 animate-pulse" size={32} />
              <span className="text-2xl sm:text-3xl font-extrabold text-warm-gray-900">Hjälper småföretag att växa:</span>
              <Sparkles className="text-skerry-orange-500 ml-3 animate-pulse" size={32} />
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-skerry-orange-300 to-skerry-orange-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Enhanced cards with better hover effects */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-skerry-orange-100 to-skerry-orange-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Hammer className="text-skerry-orange-500" size={26} />
              </div>
              <span className="text-warm-gray-700 font-medium">Byggentreprenör</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-skerry-orange-100 to-skerry-orange-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="text-skerry-orange-500" size={26} />
              </div>
              <span className="text-warm-gray-700 font-medium">Hantverkare</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-skerry-orange-100 to-skerry-orange-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Coffee className="text-skerry-orange-500" size={26} />
              </div>
              <span className="text-warm-gray-700 font-medium">Restauranger & Caféer</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-skerry-orange-100 to-skerry-orange-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <SparklesIcon className="text-skerry-orange-500" size={26} />
              </div>
              <span className="text-warm-gray-700 font-medium">Städfirmor</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-skerry-orange-100 to-skerry-orange-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Scissors className="text-skerry-orange-500" size={26} />
              </div>
              <span className="text-warm-gray-700 font-medium">Frisörer & Skönhet</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-skerry-orange-100 to-skerry-orange-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-skerry-orange-500" size={26} />
              </div>
              <span className="text-warm-gray-700 font-medium">Nagelsalonger</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-skerry-orange-100 to-skerry-orange-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Flower2 className="text-skerry-orange-500" size={26} />
              </div>
              <span className="text-warm-gray-700 font-medium">Blombutiker</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-skerry-orange-100 to-skerry-orange-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-skerry-orange-500" size={26} />
              </div>
              <span className="text-warm-gray-700 font-medium">Naprapat</span>
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