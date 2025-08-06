import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, CheckCircle, ArrowRight, Clock, Star, FileText, Lightbulb, Zap, Gift, Sparkles, ChevronDown, Wrench, Search, CreditCard, X, Eye, Heart, Monitor } from "lucide-react";
import { BackgroundPage } from "@/components/BackgroundPage";
import React, { useState } from "react";

export default function Website() {
  const [isFormVisible, setIsFormVisible] = useState(false);

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
                onClick={() => setIsFormVisible(!isFormVisible)}
                    className="bg-gradient-to-r from-skerry-orange-500 to-orange-500 hover:from-skerry-orange-600 hover:to-orange-600 text-white px-10 py-5 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl border-2 border-skerry-orange-400/20"
              >
                {isFormVisible ? (
                  <>
                    <span>Dölj formulär</span>
                    <ChevronDown className="ml-3 h-6 w-6 rotate-180" />
                  </>
                ) : (
                  <>
                        <Gift className="mr-3 h-6 w-6" />
                        <span>Skapa min kostnadsfria hemsida</span>
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </>
                )}
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

          {/* Tally Form Section */}
          {isFormVisible && (
            <div className="mb-20 animate-fade-in-up">
              <div className="bg-gradient-to-br from-skerry-orange-500/90 to-orange-500/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-orange-300/50 relative overflow-hidden max-w-5xl mx-auto">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-5 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 border border-white/30">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                      Beställ din kostnadsfria hemsida
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                      Berätta om ditt företag så bygger vi en komplett hemsida åt dig. Du betalar bara om du är nöjd med resultatet.
                    </p>
                  </div>
                  
                  {/* Embedded Tally Form */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/50">
                    <iframe
                      src="https://tally.so/embed/w5gyeQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                      width="100%"
                      height="800"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      title="Projektinfo för er nya hemsida"
                      className="rounded-2xl"
                    />
                  </div>
                  
                  {/* Alternative link */}
                  <div className="text-center mt-6">
                    <p className="text-sm text-white/80 mb-4">
                      Har du problem med formuläret? Öppna det i ett nytt fönster:
                    </p>
                    <a 
                      href="https://tally.so/r/w5gyeQ" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white hover:text-orange-200 font-medium transition-colors bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/30 hover:border-white/50"
                    >
                      Öppna formulär i nytt fönster
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Startpaket Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-black/40 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-skerry-orange-500/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center bg-skerry-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold uppercase tracking-wide mb-6 shadow-lg">
                    🚀 Vårt Startpaket
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4" style={{ textShadow: '0 6px 12px rgba(0, 0, 0, 0.6)' }}>
                    Allt du behöver för en digital start
                  </h2>
                  <p className="text-lg text-white/80 max-w-2xl mx-auto">
                    Hemsida, marknadsföring och support - en komplett lösning som får ditt företag online snabbt.
                  </p>
                </div>

                {/* Så fungerar det - 2x2 grid */}
                <div className="max-w-6xl mx-auto mb-16">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
                    <h3 className="text-2xl font-bold mb-10 text-center text-white">Så fungerar det</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16 max-w-4xl mx-auto">
                      {/* Steg 1 */}
                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">1</div>
                        <div className="font-bold text-lg text-white mb-2">Betala smidigt online</div>
                        <div className="text-white/70 text-base max-w-xs">Genomför ditt köp säkert via vår betalningslösning och kom igång direkt.</div>
                      </div>
                      {/* Steg 2 */}
                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">2</div>
                        <div className="font-bold text-lg text-white mb-2">Beskriv ditt företag</div>
                        <div className="text-white/70 text-base max-w-xs">Du får ett formulär där du fyller i information om ditt företag och dina önskemål.</div>
                      </div>
                      {/* Steg 3 */}
                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">3</div>
                        <div className="font-bold text-lg text-white mb-2">Godkänn hemsida & marknadsföring</div>
                        <div className="text-white/70 text-base max-w-xs">Vi visar hemsidan och Google Ads-kampanjen. Begär ändringar eller godkänn för lansering. Nöjdhetsgaranti ingår.</div>
                      </div>
                      {/* Steg 4 */}
                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow">4</div>
                        <div className="font-bold text-lg text-white mb-2">Webbplats live & kampanjaktivering</div>
                        <div className="text-white/70 text-base max-w-xs">Din hemsida går live och vi aktiverar Google Ads-kampanjen för att börja generera kunder.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pris & Innehåll */}
                <h3 className="text-3xl font-bold mb-8 text-center text-white">Pris & Innehåll</h3>

                <div className="mb-16">
                  <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Startpaket - Enhanced dark styling */}
                    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-2xl backdrop-blur-sm">
                      {/* Animated gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-skerry-orange-500/20 via-orange-500/15 to-skerry-orange-500/20 opacity-0 animate-gradient-shift rounded-2xl"></div>
                      
                      {/* Professional header with orange accent */}
                      <div className="border-l-4 border-skerry-orange-500 pl-6 mb-4 relative z-10">
                        <span className="inline-block bg-skerry-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wide mb-3 shadow-lg">
                          Startpaket
                        </span>
                        <h4 className="text-2xl font-bold mb-2 text-white">Hemsida + Google Ads Kampanj</h4>
                      </div>
                      
                      {/* Price with lines above and below */}
                      <div className="mb-4 relative z-10">
                        <div className="border-t border-gray-500 mb-3"></div>
                        <div className="mb-3">
                          <span className="text-4xl font-extrabold text-white">7 800 SEK</span>
                          <span className="text-lg ml-2 text-gray-300">exkl. moms</span>
                        </div>
                        <div className="border-t border-gray-500 mb-3"></div>
                      </div>

                      {/* Support */}
                      <div className="mb-4 relative z-10">
                        <div className="text-sm text-gray-300 mb-1">Löpande drift & hosting</div>
                        <div className="text-xl font-bold text-white">180 SEK<span className="text-base font-normal text-gray-300">/mån</span></div>
                        <div className="text-sm text-gray-400">exkl. moms</div>
                      </div>

                      <div className="border-t border-gray-600 my-4 relative z-10"></div>
                      
                      <ul className="space-y-2 text-gray-200 mb-5 relative z-10">
                        <li className="flex items-start">
                          <CheckCircle className="text-skerry-orange-400 mr-3 mt-1 flex-shrink-0" size={16} />
                          <span className="text-sm">Professionell webbplats</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-skerry-orange-400 mr-3 mt-1 flex-shrink-0" size={16} />
                          <span className="text-sm">Google Ads-kampanj med annonsbudget</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-skerry-orange-400 mr-3 mt-1 flex-shrink-0" size={16} />
                          <span className="text-sm">1 månads drift & hosting ingår</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-skerry-orange-400 mr-3 mt-1 flex-shrink-0" size={16} />
                          <span className="text-sm">SEO-optimering</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-skerry-orange-400 mr-3 mt-1 flex-shrink-0" size={16} />
                          <span className="text-sm">Professionell hosting & drift</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-skerry-orange-400 mr-3 mt-1 flex-shrink-0" size={16} />
                          <span className="text-sm">SSL-certifikat & säkerhet</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-skerry-orange-400 mr-3 mt-1 flex-shrink-0" size={16} />
                          <span className="text-sm">Automatiska säkerhetskopior</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-skerry-orange-400 mr-3 mt-1 flex-shrink-0" size={16} />
                          <span className="text-sm">Teknisk support vid problem</span>
                        </li>
                      </ul>
                      
                      <a 
                        href="https://buy.stripe.com/dRmaEYf8n6AQdBs8Cp9MY02" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block w-full mb-4 relative z-10"
                      >
                        <Button className="w-full bg-gradient-to-r from-skerry-orange-500 to-orange-500 text-white hover:from-skerry-orange-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 h-auto py-3 text-base font-semibold rounded-xl border-2 border-skerry-orange-400/50 hover:shadow-skerry-orange-500/50">
                          Beställ ditt startpaket
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </a>
                      
                      <div className="text-sm text-gray-300 text-center relative z-10 mb-3">
                        ✅ Pengar tillbaka om du inte godkänner hemsidan
                      </div>
                      
                      <div className="text-xs text-gray-400 text-center relative z-10">
                        Alla priser är exklusive moms.
                      </div>
                    </div>

                    {/* Google Ads Details */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-skerry-orange-300/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden flex flex-col h-full">
                      {/* Subtle background animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-skerry-orange-500/10 via-orange-500/5 to-skerry-orange-500/10 opacity-50 animate-gradient-shift rounded-2xl"></div>
                      
                      <div className="flex items-center mb-3 relative z-10">
                        <span className="bg-gradient-to-r from-skerry-orange-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">Del av startpaketet</span>
                      </div>
                      
                      <h4 className="text-2xl font-bold mb-3 text-white relative z-10">Google Ads Kampanj</h4>
                      
                      {/* Budget Highlight */}
                      <div className="relative mb-4 z-10">
                        <div className="bg-gradient-to-r from-orange-500 to-skerry-orange-500 rounded-2xl p-4 text-white relative overflow-hidden shadow-xl border border-orange-400/50">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                          <div className="absolute bottom-0 left-0 w-12 h-12 bg-white bg-opacity-5 rounded-full -ml-6 -mb-6"></div>
                          <div className="relative z-10">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 bg-white bg-opacity-25 rounded-full flex items-center justify-center mr-3">
                                <span className="text-lg">🎯</span>
                              </div>
                              <h5 className="text-lg font-bold text-white">Inkluderad Annonsbudget</h5>
                            </div>
                            <div className="text-2xl font-black mb-1 text-white">1 500 SEK</div>
                            <p className="text-white text-sm opacity-90">
                              Vi sätter upp kampanjen och arbetar för att hjälpa dig få nya kunder via din hemsida
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Results Dashboard */}
                      <div className="flex-1 relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <h5 className="text-base font-bold text-white">Exempel på resultat</h5>
                          <div className="text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded-full">
                            Med 1 500 SEK budget
                          </div>
                        </div>
                        
                        {/* Enhanced Metric Cards */}
                        <div className="space-y-3">
                          {/* Impressions */}
                          <div className="bg-gradient-to-br from-skerry-orange-600/30 to-orange-700/40 border border-skerry-orange-500/40 rounded-xl p-4 h-20">
                            <div className="flex items-center justify-between h-full">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-skerry-orange-600 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                                  <span className="text-white text-base">👁️</span>
                                </div>
                                <div className="flex-1">
                                  <div className="text-lg font-black text-white leading-tight">3 000 - 8 000</div>
                                  <div className="text-xs font-medium text-gray-300">Annonsvisningar</div>
                                </div>
                              </div>
                              <div className="w-20 bg-skerry-orange-900/50 rounded-full h-2 ml-3 flex-shrink-0">
                                <div className="bg-skerry-orange-400 h-2 rounded-full w-4/5"></div>
                              </div>
                            </div>
                          </div>

                          {/* Website Visits */}
                          <div className="bg-gradient-to-br from-warm-gray-600/30 to-warm-gray-700/40 border border-warm-gray-500/40 rounded-xl p-4 h-20">
                            <div className="flex items-center justify-between h-full">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-warm-gray-600 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                                  <span className="text-white text-base">🌐</span>
                                </div>
                                <div className="flex-1">
                                  <div className="text-lg font-black text-white leading-tight">50 - 100</div>
                                  <div className="text-xs font-medium text-gray-300">Besökare till hemsida</div>
                                </div>
                              </div>
                              <div className="w-20 bg-warm-gray-900/50 rounded-full h-2 ml-3 flex-shrink-0">
                                <div className="bg-warm-gray-400 h-2 rounded-full w-3/5"></div>
                              </div>
                            </div>
                          </div>

                          {/* Contacts */}
                          <div className="bg-gradient-to-br from-green-600/30 to-green-700/40 border border-green-500/40 rounded-xl p-4 h-20">
                            <div className="flex items-center justify-between h-full">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                                  <span className="text-white text-base">📞</span>
                                </div>
                                <div className="flex-1">
                                  <div className="text-lg font-black text-white leading-tight">2 - 5</div>
                                  <div className="text-xs font-medium text-gray-300">Nya kontakter</div>
                                </div>
                              </div>
                              <div className="w-20 bg-green-900/50 rounded-full h-2 ml-3 flex-shrink-0">
                                <div className="bg-green-400 h-2 rounded-full w-2/5"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Warning Design */}
                      <div className="bg-yellow-900/40 border-l-4 border-yellow-500 rounded-r-lg p-3 mt-4 relative z-10">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="w-6 h-6 bg-yellow-800/50 rounded-full flex items-center justify-center">
                              <span className="text-yellow-400 text-sm">⚠️</span>
                            </div>
                          </div>
                          <div className="ml-2">
                            <h6 className="text-xs font-bold text-yellow-300 mb-1">
                              Viktigt att komma ihåg
                            </h6>
                            <p className="text-xs text-yellow-200 leading-relaxed">
                              Resultaten ovan är exempel baserade på branschsnitt. Verkliga resultat kan variera kraftigt beroende på bransch, konkurrens och kampanjoptimering. <span className="font-semibold">Inga garantier ges för specifika resultat.</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>





          {/* Final CTA Section */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Redo för din kostnadsfria hemsida?
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Vi bygger en komplett hemsida åt dig, helt kostnadsfritt. Du betalar bara om du är nöjd med resultatet – ingen risk för dig.
              </p>
              
              <Button 
                onClick={() => setIsFormVisible(true)}
                className="bg-gradient-to-r from-skerry-orange-500 to-orange-500 hover:from-skerry-orange-600 hover:to-orange-600 text-white px-12 py-6 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl mb-6"
              >
                <Gift className="mr-3 h-6 w-6" />
                Beställ min kostnadsfria hemsida
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <div className="flex flex-wrap justify-center gap-6 text-base text-white/90" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>100% kostnadsfri hemsida först</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Ingen bindningstid</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Snabb leverans</span>
                </div>
              </div>
            </div>
          </div>

      </div>
    </BackgroundPage>
  );
} 