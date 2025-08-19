import {
  Users,
  ExternalLink,
  Briefcase,
  Clock,
  MapPin,
  Zap,
  Target,
  CheckCircle,
  Mail,
  TrendingUp,
  Brain,
  Send,
  ChevronDown,
  ChevronUp,
  X,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Karriar() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleApplyClick = () => {
    // Open Tally form in new tab/window
    window.open('https://karriar.skerry.ai/', '_blank');
  };

  const handleSalesApplyClick = () => {
    // Open email client for sales role
    window.open('mailto:kasperparlklo@gmail.com?subject=Ansökan - Deltidsroll Försäljning&body=Hej Kasper,%0D%0A%0D%0AJag är intresserad av deltidsrollen inom försäljning.%0D%0A%0D%0AOm mig:%0D%0A[Berätta kort om dig själv]%0D%0A%0D%0AVarför jag skulle vara en bra match:%0D%0A[Dina tankar här]%0D%0A%0D%0AMvh,%0D%0A[Ditt namn]');
  };

  const handleOpenApplicationClick = () => {
    // Open email client for open application
    window.open('mailto:kasperparlklo@gmail.com?subject=Öppen ansökan - Skerry&body=Hej Kasper,%0D%0A%0D%0AJag är intresserad av att arbeta hos Skerry men ser ingen specifik roll som passar.%0D%0A%0D%0AOm mig:%0D%0A[Berätta om din bakgrund]%0D%0A%0D%0AVad jag kan bidra med:%0D%0A[Dina färdigheter och intressen]%0D%0A%0D%0AMvh,%0D%0A[Ditt namn]');
  };

  const viewRole = (roleId: string) => {
    setSelectedRole(roleId);
    // Smooth scroll to top when viewing a role
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToOverview = () => {
    setSelectedRole(null);
  };

  // Render role detail view if a role is selected
  if (selectedRole) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Role Detail Header */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Button 
                onClick={backToOverview}
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tillbaka till alla roller
              </Button>
            </div>
            
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-6 ${
                selectedRole === 'content-creator' ? 'bg-skerry-orange-500' :
                selectedRole === 'sales' ? 'bg-blue-500' : 'bg-gray-600'
              }`}>
                {selectedRole === 'content-creator' && <Briefcase className="w-8 h-8 text-white" />}
                {selectedRole === 'sales' && <Brain className="w-8 h-8 text-white" />}
                {selectedRole === 'open' && <Send className="w-8 h-8 text-white" />}
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {selectedRole === 'content-creator' && 'Junior Content Creator'}
                  {selectedRole === 'sales' && 'Deltidsroll – Försäljning i ett nytt AI-konsultbolag'}
                  {selectedRole === 'open' && 'Öppen ansökan'}
                </h1>
                <div className="flex items-center space-x-4 text-lg text-gray-300">
                  {selectedRole === 'content-creator' && (
                    <>
                      <span className="flex items-center"><MapPin className="w-5 h-5 mr-2" />Remote/Hybrid</span>
                      <span className="flex items-center"><Clock className="w-5 h-5 mr-2" />Heltid</span>
                      <span className="flex items-center"><Zap className="w-5 h-5 mr-2" />Junior nivå</span>
                    </>
                  )}
                  {selectedRole === 'sales' && (
                    <>
                      <span className="flex items-center"><Clock className="w-5 h-5 mr-2" />Deltid</span>
                      <span className="flex items-center"><MapPin className="w-5 h-5 mr-2" />Remote</span>
                      <span className="flex items-center"><Brain className="w-5 h-5 mr-2" />AI-konsultbolag</span>
                    </>
                  )}
                  {selectedRole === 'open' && (
                    <span>Ser du inte en roll som passar? Hör av dig ändå!</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Role Content */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              {selectedRole === 'content-creator' && (
                <div className="space-y-8">
                  <div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Som junior content creator hos Skerry kommer du att skapa engagerande innehåll för våra kunders digitala kanaler 
                      och hjälpa småföretag att växa genom smart, målgruppsfokuserat innehåll.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Dina arbetsuppgifter</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Skapa innehåll för sociala medier (Instagram, Facebook, LinkedIn)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Utveckla content marketing-strategier för våra kunder</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Skriva engagerande texter och copy för digitala kanaler</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Samarbeta med vårt design- och marknadsföringsteam</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Analysera och optimera innehållsprestanda</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Vi söker dig som har</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Passion för content creation och digital marknadsföring</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Grundläggande kunskaper inom sociala medier</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Kreativitet och en känsla för design och text</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Utmärkt svenska i tal och skrift</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Strukturerad och kan arbeta självständigt</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Vad vi erbjuder</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Flexibel arbetstid och möjlighet till remote work</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Möjlighet att växa inom digital marknadsföring</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Utbildning och kompetensutveckling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Arbeta med spännande och varierande projekt</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Kreativ och stöttande arbetsmiljö</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-8">
                    <Button 
                      onClick={handleApplyClick}
                      className="w-full bg-skerry-orange-500 hover:bg-skerry-orange-600 text-white py-4 text-xl font-semibold"
                    >
                      Ansök nu
                    </Button>
                  </div>
                </div>
              )}

              {selectedRole === 'sales' && (
                <div className="space-y-8">
                  <div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Jag söker en eller två personer som vill ha ett självständigt extrajobb inom försäljning, 
                      parallellt med studier eller annat arbete. Vi hjälper småföretag att ta nästa steg i sin digitalisering – 
                      genom hemsidor, annonsering och automation med modern teknik. Det här är en väldigt bra chans att få 
                      praktisk erfarenhet av både försäljning och de senaste AI-verktygen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Om rollen</h3>
                    <p className="text-lg text-gray-700 mb-6">Rollen handlar om att identifiera och ta kontakt med potentiella kunder. Du kommer att:</p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Göra kommersiell research för att hitta relevanta företag att kontakta</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Ta första kontakt via telefon eller mejl</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Boka in och följa upp möten med intresserade företag</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Dokumentera dina insikter från marknaden, som i sin tur driver vår produkt- och säljstrategi</span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 mt-6">
                      Du får samtidigt en inblick i hur vi jobbar med AI och automation i vår säljprocess – 
                      och möjlighet att vara med och påverka hur den förbättras.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Vem du är</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700"><strong>Kommunikativ och lyhörd.</strong> Du gillar att prata med människor och vet hur man bygger förtroende – genom att lyssna, ställa rätt frågor och anpassa dig efter situationen.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700"><strong>Teknikintresserad.</strong> Du vill förstå hur AI och automation kan användas för att skapa konkret värde i vardagen.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700"><strong>Självständig med integritet.</strong> Du tar ansvar, är uthållig och gör det du säger att du ska göra – även när det inte ger omedelbar utdelning.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700"><strong>Prestigelös och nyfiken.</strong> Du är öppensinnad och drivs av att förstå hur saker faktiskt fungerar.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Vad vi erbjuder</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700"><strong>Lärande i framkant:</strong> Praktisk erfarenhet av modern AI- och automationsteknik i en kommersiell kontext</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700"><strong>Flexibilitet:</strong> Deltid, remote, upplägg som passar din vardag</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700"><strong>Kompensation:</strong> Provisionsbaserad ersättning – du får bra betalt utifrån konkreta resultat</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-8">
                    <Button 
                      onClick={handleSalesApplyClick}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 text-xl font-semibold"
                    >
                      Ansök nu
                    </Button>
                  </div>
                </div>
              )}

              {selectedRole === 'open' && (
                <div className="space-y-8">
                  <div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Vi växer snabbt och är alltid intresserade av att träffa talangfulla personer, även om vi inte har 
                      en specifik roll utannonserad just nu. Har du färdigheter inom design, utveckling, marknadsföring, 
                      projektledning eller annat som skulle kunna passar Skerry? Skicka en öppen ansökan så hör vi av oss 
                      när något intressant dyker upp.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Vad vi letar efter</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Passion för teknik och digitala lösningar</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Vilja att hjälpa småföretag att växa</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Självständighet och initiativförmåga</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Intresse för att lära och utvecklas</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-8">
                    <Button 
                      onClick={handleOpenApplicationClick}
                      className="w-full bg-gray-600 hover:bg-gray-700 text-white py-4 text-xl font-semibold"
                    >
                      Ansök nu
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default overview view
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Content */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-skerry-orange-500 rounded-full mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Karriär hos Skerry
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Vi hjälper småföretag att växa digitalt. Vill du vara med?
            </p>
          </div>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Jobs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Job 1: Content Creator */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 h-fit">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-skerry-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Junior Content Creator</h2>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Remote/Hybrid</span>
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />Heltid</span>
                </div>
              </div>

              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Skapa engagerande innehåll för våra kunders digitala kanaler och hjälp småföretag att växa genom smart, målgruppsfokuserat innehåll.
              </p>

              <div className="space-y-3 mb-6">
                <Button 
                  onClick={handleApplyClick}
                  className="w-full bg-skerry-orange-500 hover:bg-skerry-orange-600 text-white py-3 text-lg font-semibold"
                >
                  Ansök nu
                </Button>
                <Button 
                  onClick={() => viewRole('content-creator')}
                  variant="outline"
                  className="w-full py-3 text-sm"
                >
                  Läs mer om rollen
                </Button>
              </div>


            </div>

            {/* Job 2: Sales Role */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 h-fit">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Deltidsroll – Försäljning</h2>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />Deltid</span>
                  <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Remote</span>
                </div>
              </div>

              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Självständigt extrajobb inom försäljning parallellt med studier. Få praktisk erfarenhet av både försäljning och AI-verktyg.
              </p>

              <div className="space-y-3 mb-6">
                <Button 
                  onClick={handleSalesApplyClick}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg font-semibold"
                >
                  Ansök nu
                </Button>
                <Button 
                  onClick={() => viewRole('sales')}
                  variant="outline"
                  className="w-full py-3 text-sm"
                >
                  Läs mer om rollen
                </Button>
              </div>


            </div>

            {/* Job 3: Open Application */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 h-fit">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Öppen ansökan</h2>
                <div className="text-sm text-gray-600">
                  <span>Ser du inte en roll som passar?</span>
                </div>
              </div>

              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Vi växer snabbt och är alltid intresserade av att träffa talangfulla personer. Har du färdigheter som skulle kunna passa Skerry?
              </p>

              <div className="space-y-3 mb-6">
                <Button 
                  onClick={handleOpenApplicationClick}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 text-lg font-semibold"
                >
                  Ansök nu
                </Button>
                <Button 
                  onClick={() => viewRole('open')}
                  variant="outline"
                  className="w-full py-3 text-sm"
                >
                  Läs mer om rollen
                </Button>
              </div>


            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
