import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Wrench, 
  Search, 
  PaintBucket, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  MessageCircle, 
  Building2, 
  Sun, 
  Sparkles, 
  Hammer, 
  Coffee, 
  Scissors, 
  Flower2, 
  Heart, 
  Sparkles as SparklesIcon,
  TrendingUp,
  Bot,
  Target,
  BarChart3,
  Users,
  Eye,
  MousePointer,
  Mail,
  Phone,
  Brain,
  Cpu,
  Network,
  Settings,
  Clock
} from "lucide-react";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    // Check if URL has #prisplaner hash
    if (window.location.hash === '#prisplaner') {
      // Find the element
      const element = document.getElementById('prisplaner');
      if (element) {
        // Add a small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // No hash - scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Content */}
          <div className="text-center mb-20">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Våra digitala tjänster
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Kompletta lösningar för att driva trafik, generera leads och öka din försäljning online
            </p>
          </div>

          {/* Services Overview */}
          <div className="mb-20">
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Website Development */}
                <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Professionell Hemsida</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Modern, responsiv webbplats som stärker ditt varumärke och konverterar besökare till kunder.
                  </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Responsiv design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">SEO-optimerad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Snabb leverans</span>
                  </li>
                </ul>
                <div className="text-center"></div>
                </div>

              {/* Digital Marketing */}
                <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Digital Marknadsföring</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Google Ads-kampanjer och digital marknadsföring som hjälper ditt företag att nå fler kunder.
                  </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Google Ads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Meta Ads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">SEO-optimering</span>
                  </li>
                </ul>
                <div className="text-center"></div>
              </div>

              {/* AI Automation */}
              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Agenter</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Intelligenta AI-assistenter som hanterar kundservice, telefonsamtal och e-post dygnet runt.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">24/7 tillgänglighet</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Naturliga konversationer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Automatisk lead-kvalificering</span>
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

              {/* Support & Hosting */}
                <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Drift & Support</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Säker hosting, kontinuerlig support och underhåll så din webbplats alltid fungerar optimalt.
                  </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Säker hosting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">24/7 övervakning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Kontinuerlig support</span>
                  </li>
                </ul>
                <div className="text-center"></div>
              </div>

              {/* Content Marketing */}
              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
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
                  Redo att komma igång?
                </h2>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Låt oss diskutera hur vi kan hjälpa ditt företag att växa med moderna digitala lösningar.
                </p>
                
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