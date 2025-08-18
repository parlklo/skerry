import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, CheckCircle, ArrowRight, Clock, Star, FileText, Lightbulb, Zap, Gift, Sparkles, Wrench, Search, CreditCard } from "lucide-react";
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

              
                            <h1 className="font-black leading-[0.85] mb-6 sm:mb-8 text-white">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3" style={{ textShadow: '0 8px 16px rgba(0, 0, 0, 0.8)' }}>
                  Vi bygger din hemsida <span className="text-skerry-orange-400" style={{ textShadow: '0 8px 16px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(255, 140, 0, 0.4)' }}>helt kostnadsfritt</span>
                </div>
              </h1>
              
                <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 leading-relaxed max-w-2xl font-medium" style={{ textShadow: '0 6px 12px rgba(0, 0, 0, 0.6)' }}>
                  Fyll i formuläret så bygger vi en färdig, professionell hemsida åt dig. 
                  <span className="text-skerry-orange-300 font-bold"> Du betalar bara om du är nöjd med resultatet.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => window.open('https://tally.so/r/w5gyeQ', '_blank', 'noopener,noreferrer')}
                    className="bg-gradient-to-r from-skerry-orange-500 to-orange-500 hover:from-skerry-orange-600 hover:to-orange-600 text-white px-6 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl border-2 border-skerry-orange-400/20"
              >
                <Gift className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-sm sm:text-base lg:text-lg">Skapa min kostnadsfria hemsida</span>
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
                </div>


              </div>

              {/* Right Content - Process Mockup */}
              <div className="lg:col-span-5">
                <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/20">
                  {/* Mock browser frame */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <div className="text-white font-semibold text-sm sm:text-lg">Så enkelt är det</div>
                    <div className="text-white/60 text-xs sm:text-sm">En snabb överblick över processen</div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    {/* Step 1 */}
                    <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">1</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-xs sm:text-sm font-medium">Formulär</div>
                        <div className="text-white/60 text-xs hidden sm:block">Berätta kort om ditt företag</div>
                      </div>
                      <ArrowRight className="text-white/40 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">2</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-xs sm:text-sm font-medium">Färdig hemsida</div>
                        <div className="text-white/60 text-xs hidden sm:block">Vi levererar en komplett hemsida för granskning</div>
                      </div>
                      <ArrowRight className="text-white/40 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">3</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-xs sm:text-sm font-medium">Godkännande</div>
                        <div className="text-white/60 text-xs hidden sm:block">Begär ändringar, godkänn eller tacka nej</div>
                      </div>
                      <ArrowRight className="text-white/40 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        </div>

                    {/* Step 4 */}
                    <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">4</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-xs sm:text-sm font-medium">Live & betala</div>
                        <div className="text-white/60 text-xs hidden sm:block">Gå live med din hemsida</div>
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
                    <span>Modern teknik & säkerhet</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-skerry-orange-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>Design baserad på dina önskemål</span>
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

          {/* Pricing Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ textShadow: '0 6px 12px rgba(0, 0, 0, 0.6)' }}>
                Transparent prissättning
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-skerry-orange-400 to-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Hemsida */}
              <div className="bg-black/60 backdrop-blur-3xl rounded-3xl p-8 shadow-2xl border border-white/30">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-skerry-orange-500/20 backdrop-blur-sm rounded-full mb-4 border border-skerry-orange-400/30">
                    <Globe className="w-8 h-8 text-skerry-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Hemsida</h3>
                  <div className="h-0.5 w-12 bg-white/50 mx-auto"></div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-4xl font-black text-white mb-1">Från 5 000 kr</div>
                  <div className="text-sm text-white/80 font-medium">exkl. moms • engångskostnad</div>
                  <div className="inline-block bg-skerry-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full mt-3 shadow-lg">
                    Slutpris beror på valda funktioner
                  </div>
                </div>

                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-skerry-orange-400" size={16} />
                    <span>5 sidor inkluderat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-skerry-orange-400" size={16} />
                    <span>Responsiv design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-skerry-orange-400" size={16} />
                    <span>SEO-optimerad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-skerry-orange-400" size={16} />
                    <span>Nöjdhetsgaranti</span>
                  </div>
                </div>
              </div>

              {/* Drift & Support */}
              <div className="bg-black/60 backdrop-blur-3xl rounded-3xl p-8 shadow-2xl border border-white/30">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 backdrop-blur-sm rounded-full mb-4 border border-green-400/30">
                    <Wrench className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Drift & Support</h3>
                  <div className="h-0.5 w-12 bg-white/50 mx-auto"></div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-4xl font-black text-white mb-1">180 – 380 kr</div>
                  <div className="text-sm text-white/80 font-medium">exkl. moms • per månad</div>
                  <div className="inline-block bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full mt-3 shadow-lg">
                    Beror på valt servicepaket
                  </div>
                </div>

                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span>Hosting & SSL-certifikat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span>Säkerhetskopior</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span>Övervakning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={16} />
                    <span>Teknisk support</span>
                  </div>
                </div>
              </div>

            </div>
          </div>          {/* Service Packages Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ textShadow: '0 6px 12px rgba(0, 0, 0, 0.6)' }}>
                Välj servicepaket
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-skerry-orange-400 to-orange-400 mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Basleverans */}
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <FileText className="text-white/90" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">Basleverans</div>
                    <div className="text-white/70 text-sm">Passiv hemsidaleverans</div>
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white mb-4">180 kr<span className="text-base font-medium text-white/60">/mån exkl. moms</span></div>
                <div className="text-white/70 text-sm italic mb-4">Passar dig som sällan gör ändringar och främst vill ha en trygg, snabb hemsida.</div>
                <ul className="space-y-3 text-white/80 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="text-green-400 mt-0.5" size={16} />Hosting, SSL och domänkoppling</li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-green-400 mt-0.5" size={16} />Övervakning & säkerhetskopior</li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-green-400 mt-0.5" size={16} />Support vid tekniska problem</li>
                </ul>
              </div>

              {/* Innehållsredigering */}
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Wrench className="text-white/90" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">Innehållsredigering</div>
                    <div className="text-white/70 text-sm">Redigera texter & bilder själv</div>
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white mb-4">380 kr<span className="text-base font-medium text-white/60">/mån exkl. moms</span></div>
                <div className="text-white/70 text-sm italic mb-4">Passar dig som vill ändra texter och bilder enkelt själv.</div>
                <ul className="space-y-3 text-white/80 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="text-green-400 mt-0.5" size={16} />Enkelt CMS för texter och bilder</li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-green-400 mt-0.5" size={16} />Uppdatera befintligt innehåll själv</li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-green-400 mt-0.5" size={16} />Större ändringar och nya sidor kräver hjälp</li>
                </ul>
              </div>

              {/* Skräddarsytt */}
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <CreditCard className="text-white/90" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">Skräddarsytt</div>
                    <div className="text-white/70 text-sm">Behöver du något annat?</div>
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white mb-4">Offert</div>
                <div className="text-white/70 text-sm italic mb-4">Har du särskilda behov eller funktioner?</div>
                <ul className="space-y-3 text-white/80 text-sm mb-6">
                  <li className="flex items-start gap-2"><CheckCircle className="text-green-400 mt-0.5" size={16} />Enkla tillägg och anpassningar</li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-green-400 mt-0.5" size={16} />Kontaktformulär och bokningssystem</li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-green-400 mt-0.5" size={16} />Personlig support och rådgivning</li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10">Prata med oss</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Section removed */}

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