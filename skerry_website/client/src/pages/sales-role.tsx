import {
  ArrowLeft,
  CheckCircle,
  Brain,
  Clock,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

// Declare gtag for TypeScript
declare global {
  function gtag(...args: any[]): void;
}

export default function SalesRole() {
  const [, setLocation] = useLocation();

  const handleSalesApplyClick = () => {
    // Track conversion in Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'job_application', {
        event_category: 'career',
        event_label: 'sales_role_detail',
        value: 1
      });
    }
    // Open email client for sales role
    window.open('mailto:kasperparlklo@gmail.com?subject=Ansökan - Deltidsroll Försäljning&body=Hej Kasper,%0D%0A%0D%0AJag är intresserad av deltidsrollen inom försäljning.%0D%0A%0D%0AOm mig:%0D%0A[Berätta kort om dig själv]%0D%0A%0D%0AVarför jag skulle vara en bra match:%0D%0A[Dina tankar här]%0D%0A%0D%0AMvh,%0D%0A[Ditt namn]');
  };

  const backToOverview = () => {
    setLocation('/karriar');
  };

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
            <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mr-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Deltidsroll – Försäljning i ett nytt AI-konsultbolag
              </h1>
              <div className="flex items-center space-x-4 text-lg text-gray-300">
                <span className="flex items-center"><Clock className="w-5 h-5 mr-2" />Deltid</span>
                <span className="flex items-center"><MapPin className="w-5 h-5 mr-2" />Remote</span>
                <span className="flex items-center"><Brain className="w-5 h-5 mr-2" />AI-konsultbolag</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Role Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
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
          </div>
        </div>
      </div>
    </div>
  );
}
