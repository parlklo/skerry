import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, UserRound, ArrowRight, Zap, CheckCircle, TrendingUp, Building2, Coffee, Wrench, Store, Scissors, Flower2, Car, Sparkles, Heart, Hammer, Sparkles as SparklesIcon } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import React, { useState, useRef } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const kasperCardRef = useRef(null);
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-8 lg:col-start-1">
            <div className="max-w-4xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 text-warm-gray-900">
                Din digitala partner<br />
                <span className="text-skerry-orange-500">för lokala företag</span>
              </h1>
              <p className="text-xl sm:text-2xl text-warm-gray-600 mb-12 leading-relaxed max-w-2xl">
                Vi hjälper små, lokala företag att växa digitalt – med hemsidor, digital marknadsföring och annan support.
              </p>

              {/* Enhanced CTA Section - Now the main focus */}
              <div className="bg-warm-gray-900 rounded-3xl p-10 mb-12 text-white relative overflow-hidden">
                {/* Speed banner matching home page */}
                <div className="absolute -top-1 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-center py-2 font-black text-sm tracking-wide">
                  ⚡ LEVERANS INOM CIRKA 1 VECKA ⚡
                </div>
                
                <div className="flex items-center mb-5 mt-7">
                  <span className="bg-skerry-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wide">Startpaket</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Hemsida + Google Ads-kampanj</h3>

                <div className="mb-7">
                  <span className="text-5xl sm:text-6xl font-black text-white">7 800 SEK</span>
                  <span className="text-xl ml-3 text-gray-300">exkl. moms</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  <Link href="/services#prisplaner">
                    <Button className="group bg-skerry-orange-500 text-white px-9 py-4 rounded-xl text-lg font-bold hover:bg-skerry-orange-600 transition-all duration-200 hover:shadow-lg h-auto">
                      🚀 Starta mitt företags digitala resa
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <div className="text-sm text-gray-300">
                    ✅ Pengar tillbaka om du inte är nöjd med hemsidan
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="relative">
              {/* Abstract geometric shapes for visual interest */}
              <div className="w-full h-96 relative">
                <div className="absolute top-4 right-4 w-24 h-24 bg-skerry-orange-200 rounded-2xl rotate-12"></div>
                <div className="absolute top-20 left-8 w-32 h-32 bg-warm-gray-200 rounded-3xl -rotate-6"></div>
                <div className="absolute bottom-12 right-12 w-20 h-20 bg-skerry-orange-300 rounded-xl rotate-45"></div>
                <div className="absolute bottom-4 left-4 w-28 h-28 bg-warm-gray-300 rounded-2xl rotate-12"></div>
                {/* Central element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-skerry-orange-400 to-skerry-orange-600 rounded-3xl shadow-xl flex items-center justify-center">
                  <img src="/skerry logo.png" alt="Skerry Logo" className="w-24 h-24 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Comparison */}
        <div className="mt-16 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-4">
              Varför välja <span className="text-skerry-orange-500">Skerry?</span>
            </h2>
            <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto">
              Jämför vårt erbjudande med traditionella webbyråer på marknaden
            </p>
          </div>

          {/* Table Layout */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <div className="p-8"></div>
                <div className="p-8 text-center border-l border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800">Traditionella webbyråer</h3>
                  <p className="text-sm text-gray-600 mt-2">Vanliga marknadspriser</p>
                </div>
                <div className="p-8 text-center border-l border-gray-200 bg-gradient-to-br from-skerry-orange-100 to-warm-orange-100 relative">
                  <h3 className="text-xl font-bold text-skerry-orange-800">Skerry</h3>
                  <p className="text-sm text-skerry-orange-600 mt-2">Modernt och effektivt</p>
                </div>
              </div>

              {/* Table Rows */}
              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-all duration-200">
                <div className="p-8 flex items-center">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl mr-4 flex items-center justify-center">
                      <span className="text-blue-600 text-lg">⏰</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">Leveranstid</span>
                  </div>
                </div>
                <div className="p-8 border-l border-gray-200 text-center flex flex-col justify-center">
                  <div className="text-xl font-semibold text-gray-800 mb-2">Varierande</div>
                  <div className="text-sm text-gray-600">Längre processer</div>
                  <div className="mt-3 flex justify-center">
                    <span className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 text-sm">⚠</span>
                    </span>
                  </div>
                </div>
                <div className="p-8 border-l border-gray-200 text-center bg-gradient-to-br from-skerry-orange-50 to-warm-orange-50 flex flex-col justify-center">
                  <div className="text-xl font-bold text-skerry-orange-800 mb-2">Cirka 1 vecka</div>
                  <div className="text-sm text-skerry-orange-600">Effektiv process</div>
                  <div className="mt-3 flex justify-center">
                    <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-all duration-200">
                <div className="p-8 flex items-center">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl mr-4 flex items-center justify-center">
                      <span className="text-green-600 text-lg">💰</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">Kostnad</span>
                  </div>
                </div>
                <div className="p-8 border-l border-gray-200 text-center flex flex-col justify-center">
                  <div className="text-xl font-semibold text-gray-800 mb-2">10 000+ SEK</div>
                  <div className="text-sm text-gray-600">För hemsidan</div>
                  <div className="mt-3 flex justify-center">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-500 text-sm">✕</span>
                    </span>
                  </div>
                </div>
                <div className="p-8 border-l border-gray-200 text-center bg-gradient-to-br from-skerry-orange-50 to-warm-orange-50 flex flex-col justify-center">
                  <div className="text-xl font-bold text-skerry-orange-800 mb-2">7 900 SEK</div>
                  <div className="text-sm text-skerry-orange-600">Komplett paket</div>
                  <div className="mt-3 flex justify-center">
                    <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-all duration-200">
                <div className="p-8 flex items-center">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl mr-4 flex items-center justify-center">
                      <span className="text-yellow-600 text-lg">📢</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">Google Ads</span>
                  </div>
                </div>
                <div className="p-8 border-l border-gray-200 text-center flex flex-col justify-center">
                  <div className="text-xl font-semibold text-gray-800 mb-2">Tillkommer extra</div>
                  <div className="text-sm text-gray-600">Setup + löpande hantering kostar extra</div>
                  <div className="mt-3 flex justify-center">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-500 text-sm">✕</span>
                    </span>
                  </div>
                </div>
                <div className="p-8 border-l border-gray-200 text-center bg-gradient-to-br from-skerry-orange-50 to-warm-orange-50 flex flex-col justify-center">
                  <div className="text-xl font-bold text-skerry-orange-800 mb-2">Inkluderat</div>
                  <div className="text-sm text-skerry-orange-600">Setup + 1 500 SEK annonsbudget ingår</div>
                  <div className="mt-3 flex justify-center">
                    <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-all duration-200">
                <div className="p-8 flex items-center">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl mr-4 flex items-center justify-center">
                      <span className="text-purple-600 text-lg">🚀</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">Teknik</span>
                  </div>
                </div>
                <div className="p-8 border-l border-gray-200 text-center flex flex-col justify-center">
                  <div className="text-xl font-semibold text-gray-800 mb-2">Varierande</div>
                  <div className="text-sm text-gray-600">Ibland mallar och äldre system</div>
                  <div className="mt-3 flex justify-center">
                    <span className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 text-sm">⚠</span>
                    </span>
                  </div>
                </div>
                <div className="p-8 border-l border-gray-200 text-center bg-gradient-to-br from-skerry-orange-50 to-warm-orange-50 flex flex-col justify-center">
                  <div className="text-xl font-bold text-skerry-orange-800 mb-2">Senaste tekniken</div>
                  <div className="text-sm text-skerry-orange-600">Modern, responsiv och skräddarsydd</div>
                  <div className="mt-3 flex justify-center">
                    <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 border-t border-gray-200 hover:bg-gray-50 transition-all duration-200">
                <div className="p-8 flex items-center">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl mr-4 flex items-center justify-center">
                      <span className="text-blue-600 text-lg">🛠️</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">Support & Hosting</span>
                  </div>
                </div>
                <div className="p-8 border-l border-gray-200 text-center flex flex-col justify-center">
                  <div className="text-xl font-semibold text-gray-800 mb-2">150-300 SEK/mån</div>
                  <div className="text-sm text-gray-600">Vanliga marknadspriser</div>
                  <div className="mt-3 flex justify-center">
                    <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-sm">-</span>
                    </span>
                  </div>
                </div>
                <div className="p-8 border-l border-gray-200 text-center bg-gradient-to-br from-skerry-orange-50 to-warm-orange-50 flex flex-col justify-center">
                  <div className="text-xl font-bold text-skerry-orange-800 mb-2">180 SEK/mån</div>
                  <div className="text-sm text-skerry-orange-600">I linje med marknaden</div>
                  <div className="mt-3 flex justify-center">
                    <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-sm">-</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-warm-gray-500">
              *Baserat på priser från svenska webbyråer som <a href="https://hemsidelab.se/vad-kostar-en-hemsida/" target="_blank" rel="noopener noreferrer" className="text-skerry-orange-500 hover:underline">Hemsidelab</a> (2024-2025)
            </p>
          </div>
        </div>

        {/* Trust indicators section - snyggare version */}
        <div className="bg-warm-gray-50 rounded-2xl py-16 px-4 sm:px-8 mt-20 mb-0">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center justify-center mb-3">
              <Sparkles className="text-skerry-orange-500 mr-2" size={28} />
              <span className="text-2xl sm:text-3xl font-extrabold text-warm-gray-900">Hjälper lokala företag att växa:</span>
            </div>
            <div className="h-1 w-16 bg-skerry-orange-200 rounded-full mt-2"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Korten för företagskategorierna, förbättrade */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Hammer className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Byggentreprenör</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Wrench className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Hantverkare</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Coffee className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Restauranger & Caféer</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <SparklesIcon className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Städfirmor</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Scissors className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Frisörer & Skönhet</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Nagelsalonger</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Flower2 className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Blombutiker</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Naprapat</span>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mt-20 relative">
          <h2 className="text-3xl font-bold text-center mb-8">Vårt Team</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Founder */}
            <Card ref={kasperCardRef} className="flex flex-col items-center p-8 relative max-w-sm">
              <CardHeader className="flex flex-col items-center">
                <img
                  src="/Kasper%20portratt%20bild.jpg"
                  alt="Kasper Pärlklo porträtt"
                  className="w-28 h-28 rounded-full object-cover mb-4"
                />
                <CardTitle className="text-center">Kasper Pärlklo</CardTitle>
                <CardDescription className="text-center text-base mt-1">Grundare</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="text-center text-sm text-gray-600 mb-1">Kontakt: kasperparlklo@skerry.ai</p>
                <button
                  className="mt-2 text-skerry-orange-600 hover:underline text-sm font-medium"
                  onClick={() => setOpen(true)}
                >
                  Läs mer om Kasper
                </button>
              </CardContent>
              {/* Modal för Kasper */}
              {open && (
                <>
                  {/* Overlay över kortet */}
                  <div className="absolute inset-0 bg-black/30 rounded-xl z-40 animate-fadeIn" onClick={() => setOpen(false)} />
                  {/* Modal ovanpå kortet */}
                  <div className="absolute left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 animate-slideUp">
                    <div className="bg-white rounded-2xl shadow-2xl border-2 border-skerry-orange-200 p-8 relative">
                      <button
                        className="absolute top-4 right-4 text-skerry-orange-500 hover:text-skerry-orange-700 text-2xl font-bold"
                        onClick={() => setOpen(false)}
                        aria-label="Stäng"
                      >
                        ×
                      </button>
                      <h3 className="text-2xl font-bold mb-4 text-skerry-orange-600">Om Kasper Pärlklo</h3>
                      <p className="text-gray-700 text-base leading-relaxed">
                        Jag har en bakgrund inom företagsförvärv och affärsanalys med fokus på teknikbolag, men har också erfarenhet av programmering och webbutveckling. Under de senaste åren har jag byggt ett flertal egna webbaserade projekt – från enkla hemsidor till mer avancerade projekt. Idag driver jag Skerry med målet att hjälpa mindre företag stärka sin digitala närvaro, framför allt genom moderna, lättskötta hemsidor och smartare sätt att arbeta.
                      </p>
                    </div>
                  </div>
                  {/* Animationer */}
                  <style>
                    {`
                      .animate-fadeIn {
                        animation: fadeIn 0.2s ease;
                      }
                      .animate-slideUp {
                        animation: slideUp 0.3s cubic-bezier(0.4,0,0.2,1);
                      }
                      @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                      }
                      @keyframes slideUp {
                        from { opacity: 0; transform: translate(-50%, 20%); }
                        to { opacity: 1; transform: translate(-50%, -50%); }
                      }
                    `}
                  </style>
                </>
              )}
            </Card>
            {/* Sales */}
            <Card className="flex flex-col items-center p-8 relative max-w-sm">
              <CardHeader className="flex flex-col items-center">
                <div className="flex items-center justify-center w-28 h-28 rounded-full bg-warm-gray-200 mb-4">
                  <UserRound className="text-warm-gray-500" size={48} />
                </div>
                <CardTitle className="text-center">Edward Leiman</CardTitle>
                <CardDescription className="text-center text-base mt-1">Sälj & Affärsutveckling</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="text-center text-sm text-gray-600 mb-1">Kontakt: edwardleiman@skerry.ai</p>
                <p className="text-center text-sm text-transparent select-none">placeholder</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section: Redo att Komma Igång? */}
        <div className="bg-skerry-orange-500 rounded-2xl p-8 lg:p-12 text-center mt-24 mb-0">
          <h3 className="text-3xl font-bold mb-4 text-white">Redo att växa digitalt?</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Låt oss hjälpa ditt lokala företag att synas online och få fler kunder genom vår kompletta digitala lösning.
          </p>
          <Link href="/services">
            <Button className="bg-white text-skerry-orange-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-warm-gray-50 transition-colors h-auto">
              Se startpaket & priser
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
