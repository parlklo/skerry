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
                <span className="text-skerry-orange-500">för småföretag</span>
              </h1>
              <p className="text-xl sm:text-2xl text-warm-gray-600 mb-12 leading-relaxed max-w-2xl">
                Vi hjälper småföretag att växa digitalt – med hemsidor, digital marknadsföring och annan support.
              </p>

              {/* Enhanced CTA Section - Now the main focus */}
              <div className="bg-warm-gray-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden shadow-2xl max-w-2xl">
                {/* Speed banner matching home page */}
                <div className="absolute -top-1 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-center py-2 font-black text-sm tracking-wide">
                  ⚡ LEVERANS INOM CIRKA 1 VECKA ⚡
                </div>
                
                <div className="flex items-center mb-6 mt-8">
                  <span className="bg-skerry-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wide">Startpaket</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-white leading-tight">Hemsida + Google Ads-kampanj</h3>

                <div className="mb-10">
                  <span className="text-5xl sm:text-6xl font-black text-white">7 800 SEK</span>
                  <span className="text-xl ml-3 text-gray-300">exkl. moms</span>
                </div>
                <div className="flex justify-start">
                  <Link href="/services#prisplaner">
                    <Button className="group bg-skerry-orange-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-skerry-orange-400 transition-all duration-200 hover:shadow-2xl hover:shadow-skerry-orange-500/50 h-auto transform hover:scale-110 relative overflow-hidden">
                      <span className="relative z-10 flex items-center">
                        🚀 Starta mitt företags digitala resa
                        <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-skerry-orange-400 to-skerry-orange-600 opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element - Enhanced */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="relative">
              {/* Abstract geometric shapes for visual interest */}
              <div className="w-full h-96 relative">
                <div className="absolute top-4 right-4 w-24 h-24 bg-skerry-orange-200 rounded-2xl rotate-12"></div>
                <div className="absolute top-20 left-8 w-32 h-32 bg-warm-gray-200 rounded-3xl -rotate-6 hover:rotate-3 transition-transform duration-500"></div>
                <div className="absolute bottom-12 right-12 w-20 h-20 bg-skerry-orange-300 rounded-xl rotate-45"></div>
                <div className="absolute bottom-4 left-4 w-28 h-28 bg-warm-gray-300 rounded-2xl rotate-12 hover:-rotate-6 transition-transform duration-500"></div>
                {/* Central element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-skerry-orange-400 to-skerry-orange-600 rounded-3xl shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <img src="/skerry logo.png" alt="Skerry Logo" className="w-24 h-24 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Comparison - More Compact */}
        <div className="mt-16 mb-20">
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

              {/* Compact Table Rows */}
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
                    7 900 SEK
                  </div>
                  <div className="text-xs text-skerry-orange-600">Komplett paket</div>
                </div>
              </div>

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
                  <div className="text-lg font-semibold text-gray-800">Tillkommer extra</div>
                  <div className="text-xs text-gray-600">Setup + hantering kostar extra</div>
                </div>
                <div className="p-4 border-l border-gray-200 text-center bg-gradient-to-br from-skerry-orange-50 to-warm-orange-50 flex flex-col justify-center">
                  <div className="text-lg font-bold text-skerry-orange-800 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                    Inkluderat
                  </div>
                  <div className="text-xs text-skerry-orange-600">Setup + 1 500 SEK annonsbudget</div>
                </div>
              </div>

              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-all duration-200">
                <div className="p-4 flex items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg mr-3 flex items-center justify-center">
                      <span className="text-purple-600 text-sm">🚀</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Teknik</span>
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

              <div className="grid grid-cols-3 hover:bg-gray-50 transition-all duration-200">
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
                  <div className="text-xs text-skerry-orange-600">I linje med marknaden</div>
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

        {/* Trust indicators section - Enhanced with better visuals */}
        <div className="bg-gradient-to-br from-warm-gray-50 to-skerry-orange-50 rounded-3xl py-16 px-4 sm:px-8 mt-20 mb-8 border border-warm-gray-200">
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

        {/* Team section - Enhanced */}
        <div className="mt-20 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-warm-gray-900 mb-4">Vårt Team</h2>
            <div className="h-1 w-16 bg-skerry-orange-300 rounded-full mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Founder */}
            <Card ref={kasperCardRef} className="flex flex-col items-center p-8 relative max-w-sm hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-skerry-orange-200">
              <CardHeader className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src="/Kasper%20portratt%20bild.jpg"
                    alt="Kasper Pärlklo porträtt"
                    className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-skerry-orange-100"
                  />
                </div>
                <CardTitle className="text-center text-xl">Kasper Pärlklo</CardTitle>
                <CardDescription className="text-center text-base mt-1 text-skerry-orange-600 font-medium">Grundare</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="text-center text-sm text-gray-600 mb-3">Kontakt: kasperparlklo@skerry.ai</p>
                <button
                  className="mt-2 text-skerry-orange-600 hover:text-skerry-orange-700 hover:underline text-sm font-medium transition-colors"
                  onClick={() => setOpen(true)}
                >
                  Läs mer om Kasper →
                </button>
              </CardContent>
              {/* Modal för Kasper */}
              {open && (
                <>
                  {/* Overlay över kortet */}
                  <div className="absolute inset-0 bg-black/30 rounded-xl z-40 animate-fadeIn" onClick={() => setOpen(false)} />
                  {/* Modal ovanpå kortet */}
                  <div className="absolute left-1/2 top-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 animate-slideUp">
                    <div className="flex flex-col items-center p-8 relative bg-white rounded-xl shadow-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                      <button
                        className="absolute top-4 right-4 text-skerry-orange-500 hover:text-skerry-orange-700 text-2xl font-bold"
                        onClick={() => setOpen(false)}
                        aria-label="Stäng"
                      >
                        ×
                      </button>
                      <div className="flex flex-col items-center w-full">
                        <h3 className="text-xl font-bold text-center mb-2 text-skerry-orange-600">Om Kasper Pärlklo</h3>
                        <p className="text-center text-sm text-gray-600 leading-relaxed">
                          Kasper har en masterexamen från HEC Paris och har erfarenhet från dussintals webbprojekt i olika former. Målet med Skerry är att erbjuda den allra senaste tekniken till ett överkomligt pris för grupper som tidigare varit exkluderade från den här typen av tjänst – så att alla småföretag ska kunna konkurrera digitalt på lika villkor.
                        </p>
                      </div>
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
            <Card className="flex flex-col items-center p-8 relative max-w-sm hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-skerry-orange-200">
              <CardHeader className="flex flex-col items-center">
                <div className="flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-warm-gray-200 to-warm-gray-300 mb-4 ring-4 ring-warm-gray-100">
                  <UserRound className="text-warm-gray-500" size={52} />
                </div>
                <CardTitle className="text-center text-xl">Edward Leiman</CardTitle>
                <CardDescription className="text-center text-base mt-1 text-warm-gray-600 font-medium">Sälj & Affärsutveckling</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="text-center text-sm text-gray-600 mb-3">Kontakt: edwardleiman@skerry.ai</p>
                <p className="text-center text-sm text-transparent select-none">placeholder</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
