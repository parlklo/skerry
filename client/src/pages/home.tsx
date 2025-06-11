import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, Wrench, ArrowRight, Zap, CheckCircle, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-8 lg:col-start-1">
            <div className="max-w-4xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 text-warm-gray-900">
                Your digital partner<br />
                <span className="text-skerry-orange-500">for growth</span>
              </h1>
              <p className="text-xl sm:text-2xl text-warm-gray-600 mb-8 leading-relaxed max-w-2xl">
                We help small businesses modernize their digital presence with professional websites 
                and ongoing maintenance. Catch up digitally and grow your local business.
              </p>
              
              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-warm-gray-700">Professional websites that convert</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-warm-gray-700">Ongoing maintenance included</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-warm-gray-700">Mobile-friendly design</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-warm-gray-700">Local SEO optimization</span>
                </div>
              </div>

              {/* Main CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link href="/services">
                  <Button className="group bg-skerry-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-skerry-orange-600 transition-all duration-200 hover:shadow-lg h-auto">
                    <Globe className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    See Our Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="group bg-warm-gray-900 text-warm-gray-50 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-warm-gray-800 transition-all duration-200 hover:shadow-lg h-auto">
                    <ArrowRight className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* Value Proposition */}
              <div className="bg-warm-gray-100 rounded-2xl p-8 lg:p-12 border border-warm-gray-200">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-warm-gray-900">Ready to modernize your business?</h3>
                <p className="text-lg text-warm-gray-600 mb-6">
                  Don't let outdated digital presence hold you back. We create websites that work 
                  and maintain them so you can focus on what you do best.
                </p>
                <div className="flex items-center text-warm-gray-600">
                  <TrendingUp className="text-skerry-orange-500 mr-2" size={20} />
                  <span className="font-semibold">Average 40% increase in customer inquiries</span>
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
        <div className="mt-20 text-center">
          <p className="text-warm-gray-500 mb-8">Perfect for small businesses like:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-warm-gray-600">
            <div>Construction Companies</div>
            <div>Restaurants & Cafés</div>
            <div>Local Services</div>
            <div>Trade Professionals</div>
          </div>
        </div>
      </div>
    </div>
  );
}
