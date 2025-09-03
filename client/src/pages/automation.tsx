import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Star, 
  Bot, 
  MessageSquare,
  Phone,
  Mail,
  Sparkles,
  Zap,
  Clock,
  Users,
  TrendingUp,
  Brain,
  Cpu,
  Network,
  Settings
} from "lucide-react";
import React from "react";

export default function Automation() {
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
                  <Bot className="inline w-5 h-5 mr-2" />
                  AI Agenter & Automation
        </div>
      </div>

              <h1 className="font-black leading-[0.9] mb-8 text-white">
                <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                  <span className="text-skerry-orange-400">Intelligent automation</span> för ditt företag
                </div>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl font-medium">
                Låt våra intelligenta AI-agenter hantera kundservice, telefonsamtal och e-post medan du fokuserar på att
                <span className="text-skerry-orange-300 font-bold"> växa ditt företag</span>
              </p>




            </div>

            {/* Right Content - AI Agent Demo */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                  {/* AI Assistant Interface */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-full flex items-center justify-center">
                          <Bot className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">AI-Agent</div>
                          <div className="text-green-400 text-sm">Online & Redo</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-sm">Aktiv</span>
                      </div>
                    </div>

                    {/* Conversation Example */}
                    <div className="space-y-3">
                      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                        <div className="flex items-start space-x-3">
                          <Users className="w-5 h-5 text-blue-400 mt-1" />
                          <div>
                            <div className="text-blue-400 text-sm font-medium mb-1">Kund</div>
                            <div className="text-white text-sm">"Hej, jag skulle vilja veta mer om era tjänster..."</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-skerry-orange-500/20 rounded-xl p-4 border border-skerry-orange-400/30">
                        <div className="flex items-start space-x-3">
                          <Bot className="w-5 h-5 text-skerry-orange-400 mt-1" />
                          <div>
                            <div className="text-skerry-orange-400 text-sm font-medium mb-1">AI-Agent</div>
                            <div className="text-white text-sm">"Hej! Jag hjälper gärna till. Vi erbjuder hemsidor, digital marknadsföring och AI-lösningar. Vad är du mest intresserad av?"</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Status indicators */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-800/30 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-green-400">✓</div>
                        <div className="text-xs text-gray-400">Redo att hjälpa</div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-skerry-orange-400">AI</div>
                        <div className="text-xs text-gray-400">Intelligent</div>
                      </div>
                    </div>
                  </div>
                </div>
                

              </div>
            </div>
          </div>

          {/* Problem/Challenge Section - Setting up the story */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Om du har dessa problem
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Många företag kämpar med samma utmaningar när det gäller kundkommunikation
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 text-center">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Långa väntetider</h3>
                <p className="text-gray-400 text-sm">Kunder väntar länge på svar via telefon, email och chat</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 text-center">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Överbelastad personal</h3>
                <p className="text-gray-400 text-sm">Teamet hinner inte med alla förfrågningar och missade möjligheter</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 text-center">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Missade affärer</h3>
                <p className="text-gray-400 text-sm">Potentiella kunder försvinner till konkurrenter som svarar snabbare</p>
              </div>
            </div>
          </div>



          {/* AI-tjänster som transformerar verksamheter - KEEPING THIS UNIQUE SECTION */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6" style={{ textShadow: '0 4px 16px rgba(0, 0, 0, 0.6)' }}>
                AI-tjänster som <span className="text-skerry-orange-400">transformerar</span> verksamheter
              </h2>

            </div>
            
            {/* Offset Grid Layout */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Chatbot Service - Large Card */}
              <div className="lg:row-span-2 bg-gradient-to-br from-skerry-orange-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl p-8 border border-skerry-orange-500/30 border-skerry-orange-500/30">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4 ">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI Chatbots</h3>
                    <p className="text-skerry-orange-300">Din digitala receptionist</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Intelligenta chatbots som hanterar kundförfrågningar med mänsklig precision. 
                  Svarar omedelbart, kvalificerar leads och bokar möten automatiskt.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-skerry-orange-400 mb-1">∞</div>
                    <div className="text-sm text-gray-400">Samtidiga samtal</div>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                    <div className="text-sm text-gray-400">Tillgänglighet</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Naturliga konversationer på svenska</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Automatisk lead-kvalificering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Integration med era system</span>
                  </li>
                </ul>

                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Investering</div>
                  <div className="text-3xl font-bold text-white mb-4">På förfrågan</div>
                  <Link href="/contact">
                    <Button className="bg-skerry-orange-500 hover:bg-skerry-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300">
                      Lär dig mer
                  </Button>
                  </Link>
                </div>
              </div>

              {/* Voice Agents */}
              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/20 border-skerry-orange-500/30">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 ">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Voice Agents</h3>
                    <p className="text-skerry-orange-300 text-sm">Intelligent telefonsupport</p>
                </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  AI-assistenter som hanterar telefonsamtal med mänsklig röst och naturlig konversation.
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Mänsklig röstsyntes</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Bokningshantering</span>
                  </li>
                </ul>

                <div className="text-center">
                  <div className="text-xl font-bold text-white">På förfrågan</div>
                </div>
              </div>

              {/* Email Automation */}
              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/20 border-skerry-orange-500/30">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 ">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Email Automation</h3>
                    <p className="text-skerry-orange-300 text-sm">Smart kommunikation</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Automatiserad e-posthantering som svarar personligt och följer upp leads intelligent.
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Personliga svar</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Smart uppföljning</span>
                  </li>
                </ul>

                <div className="text-center">
                  <div className="text-xl font-bold text-white">På förfrågan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Varför AI-agenter är framtiden - KEEPING THIS UNIQUE SECTION */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              
              {/* Left - Content */}
              <div className="lg:col-span-3">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-8" style={{ textShadow: '0 4px 16px rgba(0, 0, 0, 0.6)' }}>
                  Varför <span className="text-skerry-orange-400">automation</span> är framtiden?
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 ">
                      <Clock className="w-8 h-8 text-white" />
        </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Kontinuerlig drift</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        Automatiserade processer arbetar oavbrutet, processerar data och hanterar uppgifter 
                        medan ditt team fokuserar på strategiskt arbete.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 ">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Självförbättrande system</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        Intelligenta algoritmer optimerar arbetsflöden baserat på data, 
                        lär sig mönster och förbättrar effektiviteten över tid.
                      </p>
                      </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-16 h-16 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 ">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Skalbar effektivitet</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        Automatisera 1 eller 1000 processer samtidigt utan ökade kostnader. 
                        Perfekt för snabb tillväxt och ökade krav.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Visual */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-skerry-orange-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Cpu className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Automation fördelar</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="text-center p-4 bg-black/30 rounded-xl border border-gray-700">
                        <div className="text-sm text-gray-400 mb-2">Effektivitetsökning</div>
                        <div className="text-2xl font-bold text-skerry-orange-400">Betydande</div>
                      </div>
                      
                      <div className="text-center p-4 bg-black/30 rounded-xl border border-gray-700">
                        <div className="text-sm text-gray-400 mb-2">Tidsbesparingar</div>
                        <div className="text-2xl font-bold text-green-400">Stora</div>
                      </div>
                      
                      <div className="text-center p-4 bg-black/30 rounded-xl border border-gray-700">
                        <div className="text-sm text-gray-400 mb-2">ROI potential</div>
                        <div className="text-2xl font-bold text-skerry-orange-400">Hög</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 bg-skerry-orange-500 text-white p-3 rounded-xl shadow-xl">
                    <Network className="w-6 h-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-skerry-orange-500 text-white p-3 rounded-xl shadow-xl">
                    <Settings className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* CTA Section - Enhanced Storytelling */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-black/40 to-gray-900/60 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-skerry-orange-500/20 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-skerry-orange-500/20 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-skerry-orange-500 rounded-full mb-6">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                  Intresserad av automation?
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