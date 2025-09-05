import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Gift, 
  Sparkles, 
  Wrench, 
  CreditCard, 
  Mail,
  Lightbulb,
  Clock,
  Target,
  Building2,
  TrendingUp,
  Shield,
  Search,
  Smartphone,
  MapPin
} from "lucide-react";
import { BackgroundPage } from "@/components/BackgroundPage";
import { useUTM } from "@/hooks/use-utm";
import React, { useState } from "react";

// Declare gtag and gtag_report_conversion for TypeScript
declare global {
  function gtag(...args: any[]): void;
  function gtag_report_conversion(url?: string): boolean;
}

export default function DigitalBusinessStart() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  // UTM tracking
  const { utmParams, isLoaded } = useUTM();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/collect-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          campaign: 'new_website_2025',
          source: 'ny_hemsida_page',
          // Include UTM data
          utm_platform: utmParams.utm_platform,
          utm_content_type: utmParams.utm_content_type,
          utm_creator: utmParams.utm_creator
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Track conversion in Google Analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'lead', {
            event_category: 'email_signup',
            event_label: 'ny_hemsida_page',
            value: 1
          });
        }

        // Track Google Ads conversion for email signup
        if (typeof gtag_report_conversion !== 'undefined') {
          gtag_report_conversion();
        }
        
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Tack! Kolla din e-post för nästa steg.'
        });
        setEmail(''); // Reset form
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Ett fel uppstod. Försök igen senare.'
        });
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Ett fel uppstod. Kontrollera din internetanslutning och försök igen.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BackgroundPage backgroundImage="/tranquilizing picture.png">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
        {/* Hero Section - Hur vi bygger digital närvaro från grunden */}
        <div className="mb-20 animate-fade-in-up">
          <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-black text-white mb-6" style={{ textShadow: '0 8px 16px rgba(0, 0, 0, 0.8)' }}>
                Hur vi bygger <span className="text-skerry-orange-400">digital närvaro från grunden</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Vi hjälper lokala företag att synas bättre på Google och få fler kunder via sin hemsida. 
                Här är exakt hur vi gör det.
              </p>
              </div>

            <div className="space-y-8">
              {/* Steg 1 - Google Business Profile */}
              <div className="border-l-4 border-blue-400 pl-6 py-4">
                <h3 className="text-xl font-bold text-white mb-4">Steg 1: Google Business Profile</h3>
                <p className="text-gray-300 mb-4 leading-relaxed max-w-4xl">
                  Vi börjar med att optimera er Google Business Profile. De flesta företag har gamla, inaktiva profiler vilket är ett misstag - optimering av profilen är oftast det enklaste sättet att få nya kunder.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">Profil-optimering:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Fylla i alla tillgängliga fält komplett</li>
                      <li>• Alla era tjänster med lokala sökord</li>
                      <li>• Riktiga foton från er verksamhet</li>
                      <li>• Q&A-sektion så ni styr narrativet</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-3">Smart att tänka på:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Lägg upp nya foton varje månad</li>
                      <li>• Gör regelbundna inlägg om erbjudanden</li>
                      <li>• Svara på alla recensioner, även negativa</li>
                      <li>• Be kunder om recensioner direkt efter jobbet</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Steg 2 - Hemsida */}
              <div className="border-l-4 border-green-400 pl-6 py-4">
                <h3 className="text-xl font-bold text-white mb-4">Steg 2: Hemsida som konverterar besökare</h3>
                <p className="text-gray-300 mb-4 leading-relaxed max-w-4xl">
                  Sedan bygger vi en enkel, transparent och modern hemsida som konverterar besökare till kunder.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">Tekniska grunder:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Snabb laddning</li>
                      <li>• Tydlig kontaktinfo synlig direkt</li>
                      <li>• Inbäddad Google Maps för lokal koppling</li>
                      <li>• "Serving [lokala områden]" i footern</li>
                    </ul>
                  </div>
                    <div>
                    <h4 className="text-white font-medium mb-3">Lokal SEO som fungerar:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Fokus på "er tjänst + ert område"</li>
                      <li>• Naturliga referenser till lokala landmärken</li>
                      <li>• Skapa en "power page" för er viktigaste tjänst</li>
                      <li>• Glöm "bästa [tjänst] Sverige" - satsa lokalt</li>
                    </ul>
                    </div>
                  </div>

                  </div>

              {/* Steg 3 - Google Ads */}
              <div className="border-l-4 border-orange-400 pl-6 py-4">
                <h3 className="text-xl font-bold text-white mb-4">Steg 3: Google Ads (valfritt men rekommenderat)</h3>
                <p className="text-gray-300 mb-4 leading-relaxed max-w-4xl">
                  När hemsidan och Google Business Profile är optimerade börjar vi med riktade annonser som når lokala kunder som aktivt söker era tjänster.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                    <h4 className="text-white font-medium mb-3">Smart annonskörning:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Endast lokala sökningar inom rimligt avstånd</li>
                      <li>• Specifika sökord istället för generella</li>
                      <li>• Separata kampanjer för olika tjänster</li>
                      <li>• Telefonnummer-spårning så vi ser vad som fungerar</li>
                    </ul>
                  </div>
                    <div>
                    <h4 className="text-white font-medium mb-3">Kontinuerlig optimering:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Månatlig genomgång av vilka sökord som ger kunder</li>
                      <li>• Anpassar budget efter säsong och efterfrågan</li>
                      <li>• Testar olika budskap för att hitta vad som konverterar</li>
                      <li>• Fullständig transparens - ni ser exakt vart pengarna går</li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
          

          </div>
        </div>




        {/* Combined What's Included & Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ textShadow: '0 6px 12px rgba(0, 0, 0, 0.6)' }}>
              Vad ingår och vad kostar det?
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-skerry-orange-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Hemsida med detaljerad info */}
            <div className="bg-black/60 backdrop-blur-3xl rounded-3xl p-8 shadow-2xl border border-white/30">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-skerry-orange-500/20 backdrop-blur-sm rounded-full mb-4 border border-skerry-orange-400/30">
                  <Globe className="w-8 h-8 text-skerry-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Professionell hemsida</h3>
                <div className="h-0.5 w-12 bg-white/50 mx-auto"></div>
              </div>

              <div className="text-center mb-6">
                <div className="text-4xl font-black text-white mb-1">Från 5 000 kr</div>
                <div className="text-sm text-white/80 font-medium">exkl. moms • engångskostnad</div>
                <div className="inline-block bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full mt-3 shadow-lg">
                  Kostnadsfri byggning först!
                </div>
              </div>

              <div className="space-y-3 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-skerry-orange-400" size={16} />
                  <span>5 professionella sidor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-skerry-orange-400" size={16} />
                  <span>Modern teknik & säkerhet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-skerry-orange-400" size={16} />
                  <span>Design baserad på dina önskemål</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-skerry-orange-400" size={16} />
                  <span>Mobilanpassad & SEO-optimerad</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-skerry-orange-400" size={16} />
                  <span>Optimerad för konvertering</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-skerry-orange-400" size={16} />
                  <span>Nöjdhetsgaranti</span>
                </div>
              </div>
            </div>

            {/* Supportavtal med detaljerad info */}
            <div className="bg-black/60 backdrop-blur-3xl rounded-3xl p-8 shadow-2xl border border-white/30">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 backdrop-blur-sm rounded-full mb-4 border border-green-400/30">
                  <Wrench className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Drift & Support</h3>
                <div className="h-0.5 w-12 bg-white/50 mx-auto"></div>
              </div>

              <div className="text-center mb-6">
                <div className="text-4xl font-black text-white mb-1">Från 180 kr</div>
                <div className="text-sm text-white/80 font-medium">exkl. moms • per månad</div>
                <div className="inline-block bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-full mt-3 shadow-lg">
                  Beror på valt servicepaket
                </div>
              </div>

              <div className="space-y-3 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={16} />
                  <span>Professionell hosting & skalning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={16} />
                  <span>SSL-certifikat & säkerhet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={16} />
                  <span>Globalt CDN för snabb laddning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={16} />
                  <span>Kontinuerlig övervakning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={16} />
                  <span>Automatiska säkerhetskopior</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={16} />
                  <span>Support vid tekniska problem</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Praktiska tips sektion */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Konkreta tips för bättre lokal synlighet
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Oavsett om du jobbar med oss eller någon annan - här är vad som faktiskt fungerar för lokalföretag.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tip 1 */}
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <Smartphone className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Mobil-först tänk</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Majoriteten av lokala sökningar sker på mobilen. Din hemsida måste vara snabb och enkel att använda på telefon.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Google My Business</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Håll öppettider uppdaterade, svara på recensioner och lägg upp regelbundna inlägg. Gratis och effektivt.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <Search className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Lokala sökord</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Optimera för "din tjänst + ditt område". Inte bara "rörmokare" utan "rörmokare Södermalm".
              </p>
            </div>

            {/* Tip 4 */}
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <Star className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Recensioner</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Fråga nöjda kunder om recensioner. En handfull äkta recensioner slår hundra fejkade.
              </p>
            </div>

            {/* Tip 5 */}
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <Clock className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Snabb respons</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Svara på meddelanden inom några timmar. Kunder väljer ofta den som svarar först.
              </p>
            </div>

            {/* Tip 6 */}
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <TrendingUp className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Tålamod</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                SEO tar 3-6 månader att kicka in ordentligt. Räkna med långsiktigt arbete, inte snabba fixes.
              </p>
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
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Redo att starta ditt företag online?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Vi bygger din första professionella hemsida kostnadsfritt. Ingen risk - du betalar bara om du är nöjd.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="mailto:kasperparlklo@skerry.ai" className="flex items-center gap-2 bg-skerry-orange-500/20 hover:bg-skerry-orange-500/30 text-white px-6 py-3 rounded-lg transition-colors border border-skerry-orange-400/30">
                  <Mail className="w-4 h-4" />
                  <span>kasperparlklo@skerry.ai</span>
                </a>
                <div className="text-gray-400 text-sm">eller ring</div>
                <a href="tel:+46736793200" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors border border-white/20">
                  <span>📞</span>
                  <span>073-679 32 00</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </BackgroundPage>
  );
}
