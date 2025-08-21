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
                  Väx ditt företag med smart
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black">
                  <span className="text-skerry-orange-400">marknadsföring</span>
                </div>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl font-medium">
                Vi hjälper ditt företag att nå rätt kunder vid rätt tidpunkt med 
                <span className="text-skerry-orange-300 font-bold"> effektiv digital marknadsföring</span>
              </p>



              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 text-base text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Mätbara resultat</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Lokal expertis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Allt innehåll inkluderat</span>
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Google Ads */}
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Google Ads</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Sökannonsering, Shopping-kampanjer och Remarketing för direkta resultat.
                </p>
              </div>

              {/* Meta Ads */}
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Meta Ads</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Facebook & Instagram-annonser för ökad varumärkesmedvetenhet och reach.
                </p>
              </div>

              {/* SEO */}
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">SEO-Optimering</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Förbättra synlighet i sökmotorer med teknisk SEO och innehållsstrategi.
                </p>
              </div>

              {/* Analytics */}
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Analytics & Rapporter</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Detaljerad analys och månatlig rapportering för alla digitala kampanjer.
                </p>
              </div>

              {/* Content Marketing */}
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Content Marketing</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Bloggartiklar, social media-innehåll och strategisk innehållsplanering.
                </p>
              </div>

              {/* Email Marketing */}
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Email Marketing</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Nyhetsbrev, automation och segmentering för starkare kundrelationer.
                </p>
              </div>
            </div>
          </div>

          {/* CTA under marknadsföringstjänster */}
          <div className="flex justify-center mb-32">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-skerry-orange-500 to-orange-500 hover:from-skerry-orange-600 hover:to-orange-600 text-white px-12 py-6 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl">
                Kontakta oss för offert
              </Button>
            </Link>
          </div>

          {/* Visual Separator */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-2">
                    <div className="w-2 h-2 bg-skerry-orange-500 rounded-full mx-auto mb-2"></div>
                    <div className="w-4 h-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mx-auto opacity-60"></div>
                    <div className="w-2 h-2 bg-skerry-orange-500 rounded-full mx-auto mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Partner Section */}
          <div id="social-media" className="mb-20">
            <div className="text-center mb-16">
              <div className="relative inline-block mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-40 animate-pulse"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border-2 border-pink-500 text-white px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wide shadow-xl">
                  <Sparkles className="inline w-5 h-5 mr-2" />
                  Social Media Partner
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Vi tar hand om era sociala medier
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Perfekt för små och lokala företagare som vill växa online men inte har tid att ta hand om sociala medier själva. 
                Vi startar eller tar över era Instagram, TikTok och andra kanaler och skapar professionellt innehåll som engagerar er målgrupp.
              </p>
              
              {/* ARR Benefits */}
              <div className="flex flex-wrap justify-center gap-6 text-base text-gray-300 mb-12">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Månatlig prenumeration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Kontinuerlig tillväxt</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Professionellt innehåll</span>
                </div>
              </div>
            </div>
            
            {/* Package Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              
              {/* Starter Package */}
              <div className="bg-gradient-to-br from-black/40 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/20 rounded-full -mr-10 -mt-10"></div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <p className="text-gray-300 mb-6">Perfekt för att komma igång</p>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-black text-white mb-2">
                      2 995 <span className="text-lg font-normal text-gray-300">SEK/mån</span>
                    </div>
                    <div className="text-sm text-gray-400">exkl. moms</div>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">1 plattform (t.ex. Instagram, TikTok)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">4 inlägg per månad</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">2 posts + 2 reels/videos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Innehållsstrategi + SEO</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Community management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Månatlig rapport</span>
                    </li>
                  </ul>
                  
                  <div className="mt-auto">
                    <Link href="/contact">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold transition-all duration-300">
                        Välj Starter
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Pro Package */}
              <div className="bg-gradient-to-br from-black/40 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-skerry-orange-500 hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-20 h-20 bg-skerry-orange-500/20 rounded-full -mr-10 -mt-10"></div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                  <p className="text-gray-300 mb-6">För seriös tillväxt</p>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-black text-white mb-2">
                      4 995 <span className="text-lg font-normal text-gray-300">SEK/mån</span>
                    </div>
                    <div className="text-sm text-gray-400">exkl. moms</div>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-skerry-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">2 plattformar (t.ex. Instagram, TikTok)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-skerry-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">8 inlägg per månad</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-skerry-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">4 posts + 4 reels/videos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-skerry-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Innehållsstrategi + SEO</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-skerry-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Community management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-skerry-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Månatlig rapport</span>
                    </li>
                  </ul>
                  
                  <div className="mt-auto">
                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-skerry-orange-500 to-orange-500 hover:from-skerry-orange-600 hover:to-orange-600 text-white py-3 rounded-xl font-bold transition-all duration-300">
                        Välj Pro
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Premium Package */}
              <div className="bg-gradient-to-br from-black/40 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full -mr-10 -mt-10"></div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                  <p className="text-gray-300 mb-6">Maximal exponering</p>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-black text-white mb-2">
                      7 995 <span className="text-lg font-normal text-gray-300">SEK/mån</span>
                    </div>
                    <div className="text-sm text-gray-400">exkl. moms</div>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">3+ plattformar (t.ex. Instagram, TikTok, Facebook)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">16 inlägg per månad</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">8 posts + 8 premium reels/videos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Innehållsstrategi + SEO</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Community management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Månatlig rapport</span>
                    </li>
                  </ul>
                  
                  <div className="mt-auto">
                    <Link href="/contact">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-bold transition-all duration-300">
                        Välj Premium
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Description - Updated with strategy workshop first */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Så här fungerar vårt Social Media partnerskap
                </h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  En strukturerad process som säkerställer att vi levererar rätt innehåll för era mål
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Strategiformulär</h4>
                  <p className="text-sm text-gray-300">Vi skickar ut ett formulär där ni definierar era mål: öka närvaro, få fler kunder, visa nya produkter/tjänster etc.</p>
                </div>
                
                <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Innehållsproduktion</h4>
                  <p className="text-sm text-gray-300">Vi producerar professionellt innehåll baserat på er strategi - bilder, videos, texter och grafik.</p>
                </div>
                
                <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Publicering & Community</h4>
                  <p className="text-sm text-gray-300">Vi publicerar enligt schema och hanterar er community - kommentarer, meddelanden och engagemang.</p>
                </div>
                
                <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">Analys & Optimering</h4>
                  <p className="text-sm text-gray-300">Månadsrapporter med insikter, resultat och kontinuerlig optimering av strategin.</p>
                </div>
              </div>
            </div>


          </div>




          {/* Final CTA Section */}
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