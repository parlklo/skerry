import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, CheckCircle, ArrowRight, Clock, Star, FileText, Lightbulb, Zap, Gift, Sparkles, ChevronDown, Wrench, Search, CreditCard, X, Eye, Heart, Monitor } from "lucide-react";
import { BackgroundPage } from "@/components/BackgroundPage";
import React from "react";

export default function Website() {

  return (
    <BackgroundPage backgroundImage="/tranquilizing picture.png">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
                    {/* Hero Section with Visual Demo */}
          <div className="mb-20 animate-fade-in-up">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7">

              
                            <h1 className="font-black leading-[0.85] mb-8 text-white">
                <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-3" style={{ textShadow: '0 8px 16px rgba(0, 0, 0, 0.8)' }}>
                  Vi bygger din hemsida <span className="text-skerry-orange-400" style={{ textShadow: '0 8px 16px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(255, 140, 0, 0.4)' }}>helt kostnadsfritt</span>
                </div>
              </h1>
              
                <p className="text-xl sm:text-2xl text-white mb-12 leading-relaxed max-w-2xl font-medium" style={{ textShadow: '0 6px 12px rgba(0, 0, 0, 0.6)' }}>
                  Fyll i formuläret så bygger vi en färdig, professionell hemsida åt dig. 
                  <span className="text-skerry-orange-300 font-bold"> Du betalar bara om du är nöjd med resultatet.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => window.open('https://tally.so/r/w5gyeQ', '_blank', 'noopener,noreferrer')}
                    className="bg-gradient-to-r from-skerry-orange-500 to-orange-500 hover:from-skerry-orange-600 hover:to-orange-600 text-white px-10 py-5 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl border-2 border-skerry-orange-400/20"
              >
                <Gift className="mr-3 h-6 w-6" />
                <span>Skapa min kostnadsfria hemsida</span>
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
                </div>


              </div>

              {/* Right Content - Visual Demo */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                    
                    {/* Simple header */}
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-full flex items-center justify-center">
                        <Monitor className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Så fungerar vår gratis-tjänst</div>
                      </div>
                    </div>

                    {/* Clean process steps */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg border border-white/10">
                        <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                        <div className="text-white text-sm">Du fyller i formuläret</div>
                      </div>
                      
                      <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg border border-white/10">
                        <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                        <div className="text-white text-sm">Vi bygger din hemsida</div>
                      </div>
                      
                    </div>

                    {/* Step 3 - Decision Interface */}
                    <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-600">
                      <div className="text-center mb-3">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-7 h-7 bg-skerry-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                          <div className="text-white text-sm font-medium">Du bestämmer</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 mb-3 border border-white/10">
                          <div className="text-white text-sm font-medium mb-1">Din färdiga hemsida är klar!</div>
                          <div className="text-xs text-gray-400">Vad tycker du?</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-500/20 border border-green-400/50 rounded-lg p-3 text-center">
                          <Heart className="w-6 h-6 text-green-400 mx-auto mb-1" />
                          <div className="text-xs text-green-400 font-medium">Älskar den!</div>
                          <div className="text-xs text-white">→ Betala & gå live</div>
                        </div>
                        <div className="bg-red-500/20 border border-red-400/50 rounded-lg p-3 text-center">
                          <X className="w-6 h-6 text-red-400 mx-auto mb-1" />
                          <div className="text-xs text-red-400 font-medium">Inte nöjd</div>
                          <div className="text-xs text-white">→ Kostnadsfritt</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



                    

          {/* What's Included Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ textShadow: '0 6px 12px rgba(0, 0, 0, 0.6)' }}>
                Vad ingår i din hemsida?
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-skerry-orange-400 to-orange-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Professionell Webbplatsutveckling */}
              <div className="bg-black/30 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-skerry-orange-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 border border-skerry-orange-400/30">
                    <Globe className="text-skerry-orange-400" size={36} />
                </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Professionell Webbplatsutveckling</h4>
                  <p className="text-white/70 mb-6">
                    Modern, professionell hemsida som stärker ditt varumärke.
                  </p>
                </div>
                <ul className="space-y-3 text-white/80 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-skerry-orange-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>Trygg & snabb med modern teknik</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-skerry-orange-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>Design som matchar ditt varumärke</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-skerry-orange-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>Optimerad för konvertering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-skerry-orange-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>Mobilanpassad & SEO-optimerad</span>
                  </li>


                  <li className="flex items-start">
                    <CheckCircle className="text-skerry-orange-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>SEO-optimering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-skerry-orange-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>Nöjdhetsgaranti</span>
                  </li>
                </ul>
              </div>

              {/* Drift & Support */}
              <div className="bg-black/30 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-green-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                    <Wrench className="text-green-400" size={36} />
                </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Drift & Support</h4>
                  <p className="text-white/70 mb-6">
                    Säker hosting och support så din webbplats alltid fungerar.
                  </p>
                </div>
                <ul className="space-y-3 text-white/80 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>Professionell hosting & skalning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>SSL-certifikat & säkerhet</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>Globalt CDN för snabb laddning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>Kontinuerlig övervakning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>Automatiska säkerhetskopior</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>Support vid tekniska problem</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>



          {/* CTA Buttons Section */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Formulär CTA */}
            <div className="bg-black/30 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-skerry-orange-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 border border-skerry-orange-400/30">
                  <Gift className="text-skerry-orange-400" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Starta direkt
                </h3>
                <p className="text-white/70 mb-6">
                  Fyll i formuläret så bygger vi din hemsida kostnadsfritt
                </p>
              </div>
              <Button 
                onClick={() => window.open('https://tally.so/r/w5gyeQ', '_blank', 'noopener,noreferrer')}
                className="bg-gradient-to-r from-skerry-orange-500 to-orange-500 hover:from-skerry-orange-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl w-full"
              >
                <Gift className="mr-2 h-5 w-5" />
                Fyll i formuläret
              </Button>
            </div>

            {/* Kontakt CTA */}
            <div className="bg-black/30 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                  <ArrowRight className="text-green-400" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Har frågor?
                </h3>
                <p className="text-white/70 mb-6">
                  Kontakta oss för att diskutera ditt projekt
                </p>
              </div>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-skerry-orange-500 to-orange-500 hover:from-skerry-orange-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl w-full">
                  Kontakta oss
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

          </div>

      </div>
    </BackgroundPage>
  );
}