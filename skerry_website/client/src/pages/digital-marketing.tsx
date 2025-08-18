import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap,
  Search,
  Users,
  Eye,
  MousePointer,
  Sparkles,
  Globe,
  MessageSquare,
  Mail
} from "lucide-react";
import React from "react";

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Content */}
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="relative inline-block mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-skerry-orange-500 to-orange-500 rounded-full blur opacity-40 animate-pulse"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border-2 border-skerry-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wide shadow-xl">
                  <TrendingUp className="inline w-5 h-5 mr-2" />
                  Digital Marknadsföring
                </div>
              </div>
              
              <h1 className="font-black leading-[0.9] mb-8 text-white">
                <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-2">
                  Få fler kunder med
                </div>
                <div className="text-skerry-orange-400 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black">
                  smart marknadsföring
                </div>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl font-medium">
                Vi hjälper ditt företag att nå rätt kunder vid rätt tidpunkt med 
                <span className="text-skerry-orange-300 font-bold"> effektiv digital marknadsföring</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-skerry-orange-500 to-orange-500 hover:from-skerry-orange-600 hover:to-orange-600 text-white px-10 py-5 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl border-2 border-skerry-orange-400/20">
                    Kom igång nu
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-5 text-xl font-bold rounded-xl transition-all duration-300">
                  Läs mer om oss
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 text-base text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Skräddarsydda lösningar</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Transparent kommunikation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Personlig service</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-4 shadow-2xl border border-white/20">
                  <img 
                    src="/landingpage.png" 
                    alt="Digital marknadsföring mockup" 
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
                {/* Floating indicators */}
                <div className="absolute -bottom-6 -left-6 bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-black text-green-400 mb-1">Mer</div>
                    <div className="text-sm text-gray-300 font-medium">Synlighet online</div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-black text-skerry-orange-400 mb-1">Fler</div>
                    <div className="text-sm text-gray-300 font-medium">Potentiella kunder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Våra digitala marknadsföringstjänster
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Vi erbjuder kompletta lösningar för att driva trafik, generera leads och öka din försäljning online
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Google Ads */}
              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Google Ads</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Når kunder när de aktivt söker efter dina produkter eller tjänster. Betala endast för klick som verkligen räknas.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Sökannonsering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Shopping-kampanjer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Remarketing</span>
                  </li>
                </ul>
                <div className="text-center"></div>
              </div>

              {/* Meta Ads */}
              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Meta Ads</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Nå din målgrupp på Facebook och Instagram med visuellt engagerande annonser som skapar varumärkesmedvetenhet.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Facebook-annonsering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Instagram-kampanjer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Målgruppsanalys</span>
                  </li>
                </ul>
                <div className="text-center"></div>
              </div>

              {/* SEO */}
              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">SEO-Optimering</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Förbättra din synlighet i sökmotorerna och få organisk trafik som konverterar till betalande kunder.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Nyckelordsanalys</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Teknisk SEO</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Innehållsstrategi</span>
                  </li>
                </ul>
                <div className="text-center"></div>
              </div>

              {/* Analytics & Rapportering */}
              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Analytics & Rapporter</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Få djupa insikter om dina kampanjer och kunder med detaljerad analys och månatlig rapportering.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Månatliga rapporter</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">ROI-uppföljning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Kundinsikter</span>
                  </li>
                </ul>
                <div className="text-center"></div>
              </div>

              {/* Content Marketing */}
              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Content Marketing</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Engagera din målgrupp med värdefullt innehåll som bygger förtroende och driver konverteringar.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Bloggartiklar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Social media-innehåll</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Innehållsstrategi</span>
                  </li>
                </ul>
                <div className="text-center"></div>
              </div>

              {/* Email Marketing */}
              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Email Marketing</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Bygg starka kundrelationer och öka återkommande försäljning med personliga email-kampanjer.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Nyhetsbrev</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Automation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Segmentering</span>
                  </li>
                </ul>
                <div className="text-center"></div>
              </div>
            </div>
          </div>

          {/* Gemensam CTA under tjänster */}
          <div className="flex justify-center mb-20">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-skerry-orange-500 to-orange-500 hover:from-skerry-orange-600 hover:to-orange-600 text-white px-12 py-6 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl">
                Kontakta oss för offert
              </Button>
            </Link>
          </div>

          {/* Exempel på Google Ads Kampanj */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Exempel: Google Ads Kampanj
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Se vad du kan förvänta dig med en av våra Google Ads kampanjer
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-black/40 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-skerry-orange-500/20 rounded-full -mr-12 -mt-12"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-skerry-orange-500/20 rounded-full -ml-10 -mb-10"></div>
                
                <div className="relative z-10">
                  {/* Header with Target Icon */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white">Google Ads Kampanj</h3>
                      <p className="text-gray-300">Inkluderad Annonsbudget: <span className="text-skerry-orange-400 font-bold">1 500 SEK</span></p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-center mb-8 leading-relaxed">
                    Vi sätter upp kampanjen och arbetar för att hjälpa dig få nya kunder via din hemsida
                  </p>
                  
                  {/* Results Grid */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {/* Annonsvisningar */}
                    <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/10">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-2">3 000 - 8 000</div>
                      <div className="text-sm text-gray-300">Annonsvisningar</div>
                    </div>
                    
                    {/* Besökare */}
                    <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/10">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-2">50 - 100</div>
                      <div className="text-sm text-gray-300">Besökare till hemsida</div>
                    </div>
                    
                    {/* Nya kontakter */}
                    <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/10">
                      <div className="w-12 h-12 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-2">2 - 5</div>
                      <div className="text-sm text-gray-300">Nya kontakter</div>
                    </div>
                  </div>
                  
                  {/* Budget Info */}
                  <div className="text-center mb-6">
                    <div className="inline-block bg-skerry-orange-500/20 border border-skerry-orange-500/30 rounded-xl px-6 py-3">
                      <span className="text-skerry-orange-300 font-semibold">Med 1 500 SEK budget</span>
                    </div>
                  </div>
                  
                  {/* Disclaimer */}
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-black text-sm font-bold">!</span>
                      </div>
                      <div>
                        <h4 className="text-yellow-300 font-bold mb-2">Viktigt att komma ihåg</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Resultaten ovan är exempel baserade på branschsnitt. Verkliga resultat kan variera kraftigt 
                          beroende på bransch, konkurrens och kampanjoptimering. Inga garantier ges för specifika resultat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* CTA Section */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-black/40 to-gray-900/60 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-skerry-orange-500/20 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-skerry-orange-500/20 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-skerry-orange-500 rounded-full mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                  Intresserad av digital marknadsföring?
                </h2>
                
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-skerry-orange-500 to-orange-500 hover:from-skerry-orange-600 hover:to-orange-600 text-white px-12 py-4 rounded-xl text-xl font-bold">
                    Kontakta oss
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
} 