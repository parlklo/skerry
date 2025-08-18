import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Star, Gift, Mail } from "lucide-react";
import { BackgroundPage } from "@/components/BackgroundPage";
import React, { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

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
          campaign: 'free_website_2025',
          source: 'website_home' 
        }),
      });

      const data = await response.json();

      if (response.ok) {
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
    <BackgroundPage 
      backgroundImage="/landingpage.png"
      gradientOverlay={{
        primary: "bg-gradient-to-r from-black/75 via-black/55 to-black/35",
        secondary: "bg-gradient-to-t from-black/60 via-black/20 to-transparent"
      }}
    >
      <div className="flex items-start pt-8 md:pt-10 lg:pt-12 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content - Text */}
            <div className="lg:col-span-7 text-white animate-fade-in-up">
              <div className="max-w-2xl">
                {/* Main Headline - Exactly Two Lines */}
                <h1 className="font-black leading-[0.9] mb-6 sm:mb-8 text-shadow-xl">
                  <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl break-words" style={{ textShadow: '0 8px 16px rgba(0, 0, 0, 0.6)' }}>Digital partner åt</div>
                  <div className="text-orange-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl break-words drop-shadow-2xl font-black" style={{ textShadow: '0 8px 16px rgba(0, 0, 0, 0.6), 0 4px 8px rgba(255, 140, 0, 0.3)' }}>småföretag</div>
                </h1>
                
                {/* Description */}
                <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-10 leading-relaxed max-w-2xl font-medium text-shadow-xl" style={{ textShadow: '0 6px 12px rgba(0, 0, 0, 0.5)' }}>
                  Billigt, modernt och enkelt att komma igång
                </p>

                {/* Quick Trust Indicators */}
                <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-white animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both', textShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 drop-shadow-lg" />
                    <span className="font-medium">Hemsidor</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 drop-shadow-lg" />
                    <span className="font-medium">Digital marknadsföring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 drop-shadow-lg" />
                    <span className="font-medium">AI agenter</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Element/Card */}
            <div className="lg:col-span-5 lg:col-start-8 mt-8 lg:mt-0">
              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                {/* Floating Card */}
                <div className="bg-black/60 backdrop-blur-3xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/30">
                  {/* Header */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full mb-3 sm:mb-4 border border-white/30">
                      <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Kostnadsfri hemsida</h3>
                    <div className="h-0.5 w-12 bg-white/50 mx-auto"></div>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="text-3xl sm:text-4xl font-black text-white mb-1">0 SEK</div>
                    <div className="text-xs sm:text-sm text-white/80 font-medium">Du betalar bara om du är nöjd</div>
                    <div className="inline-block bg-skerry-orange-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 rounded-full mt-3 shadow-lg">
                      Leverans inom cirka 1 vecka
                    </div>
                  </div>

                  {/* What's included */}
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-white font-medium">Komplett responsiv hemsida</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-white font-medium">Baserat på dina önskemål</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-white font-medium">Professionell design</span>
                    </div>
                  </div>

                  {/* Email Collection Form */}
                  <div className="relative">
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                        <Input
                          type="email"
                          placeholder="din@email.se"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={isSubmitting}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/60 transition-colors text-white placeholder-white/60 text-sm"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting || !email.trim()}
                        className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/40 hover:border-white/60 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Skickar...' : 'Få ditt formulär →'}
                      </Button>
                    </form>

                    {/* Status Messages - Absolutely positioned to avoid layout shift */}
                    {submitStatus.type && (
                      <div className={`absolute top-full left-0 right-0 mt-2 p-3 rounded-lg text-sm z-10 ${
                        submitStatus.type === 'success' 
                          ? 'bg-green-500/20 text-green-300 border border-green-400/30' 
                          : 'bg-red-500/20 text-red-300 border border-red-400/30'
                      }`}>
                        {submitStatus.message}
                      </div>
                    )}
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundPage>
  );
} 