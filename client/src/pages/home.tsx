import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, UserRound, ArrowRight, Zap, CheckCircle, TrendingUp, Building2, Coffee, Wrench, Store, Scissors, Flower2, Car, Sparkles } from "lucide-react";
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
                <span className="text-skerry-orange-500">för tillväxt</span>
              </h1>
              <p className="text-xl sm:text-2xl text-warm-gray-600 mb-8 leading-relaxed max-w-2xl">
                Vi hjälper små företag att modernisera sin digitala närvaro med professionella webbplatser 
                och löpande underhåll. Kom ikapp digitalt och utveckla ditt lokala företag.
              </p>
              
              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-warm-gray-700">Professionella webbplatser som konverterar</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-warm-gray-700">Löpande underhåll</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-warm-gray-700">Mobilanpassad design</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-warm-gray-700">SEO-optimering</span>
                </div>
              </div>

              {/* Main CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link href="/services">
                  <Button className="group bg-skerry-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-skerry-orange-600 transition-all duration-200 hover:shadow-lg h-auto">
                    <Globe className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Se våra tjänster
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="group bg-warm-gray-900 text-warm-gray-50 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-warm-gray-800 transition-all duration-200 hover:shadow-lg h-auto">
                    <ArrowRight className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Kom igång
                  </Button>
                </Link>
              </div>

              {/* Value Proposition */}
              <div className="bg-warm-gray-100 rounded-2xl p-8 lg:p-12 border border-warm-gray-200">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-warm-gray-900">Redo att modernisera ditt företag?</h3>
                <p className="text-lg text-warm-gray-600 mb-6">
                  Låt inte en föråldrad digital närvaro hålla dig tillbaka. Vi skapar webbplatser som fungerar 
                  och underhåller dem så att du kan fokusera på det du gör bäst.
                </p>
                <div className="flex items-center text-warm-gray-600">
                  <TrendingUp className="text-skerry-orange-500 mr-2" size={20} />
                  <span className="font-semibold">I genomsnitt 40% ökning av kundförfrågningar</span>
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
                  <Globe className="text-white text-4xl" size={48} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators section */}
        <div className="mt-20">
          <p className="text-warm-gray-500 mb-8 text-center text-lg">Perfekt för små företag som:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Byggföretag</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Wrench className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Hantverkare</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Coffee className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Restauranger & Caféer</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Store className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Lokala tjänster</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Scissors className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Frisörer & Skönhet</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Nagelsalonger</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Flower2 className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Blombutiker</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-warm-gray-100 flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-skerry-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Car className="text-skerry-orange-500" size={24} />
              </div>
              <span className="text-warm-gray-700 font-medium">Transport & Logistik</span>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mt-20 relative">
          <h2 className="text-3xl font-bold text-center mb-8">Vårt Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Founder */}
            <Card ref={kasperCardRef} className="flex flex-col items-center p-8 relative">
              <CardHeader className="flex flex-col items-center">
                <div className="flex items-center justify-center w-28 h-28 rounded-full bg-skerry-orange-100 mb-4">
                  <UserRound className="text-skerry-orange-500" size={48} />
                </div>
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
                        Jag har en bakgrund inom företagsförvärv och affärsanalys, med fokus på teknikbolag men har också erfarenhet inom programmering och webbutveckling, och har jag byggt ett dussintals egna webbaserade projekt. Jag driver idag Skerry med målet att hjälpa mindre företag förbättra sin digitala närvaro – framför allt genom moderna, lättskötta hemsidor och smartare arbetsflöden.
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
            {/* Marketing */}
            <Card className="flex flex-col items-center p-8">
              <CardHeader className="flex flex-col items-center">
                <div className="flex items-center justify-center w-28 h-28 rounded-full bg-warm-gray-200 mb-4">
                  <UserRound className="text-warm-gray-500" size={48} />
                </div>
                <CardTitle className="text-center">Elin Nyström</CardTitle>
                <CardDescription className="text-center text-base mt-1">Marknadsföring & kundkontakt</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="text-center text-sm text-gray-600 mb-1">Kontakt: elinnystrom@skerry.ai</p>
                <p className="text-center text-sm text-transparent select-none">placeholder</p>
              </CardContent>
            </Card>
            {/* Sales */}
            <Card className="flex flex-col items-center p-8">
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
      </div>
    </div>
  );
}
