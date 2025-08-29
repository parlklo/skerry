import {
  ArrowLeft,
  CheckCircle,
  Briefcase,
  Clock,
  MapPin,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

// Declare gtag for TypeScript
declare global {
  function gtag(...args: any[]): void;
}

export default function JuniorContentCreator() {
  const [, setLocation] = useLocation();

  const handleApplyClick = () => {
    // Track conversion in Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'job_application', {
        event_category: 'career',
        event_label: 'junior_content_creator_detail',
        value: 1
      });
    }
    // Open Tally form in new tab/window
    window.open('https://karriar.skerry.ai/', '_blank');
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
            <div className="w-16 h-16 bg-skerry-orange-500 rounded-xl flex items-center justify-center mr-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Junior Content Creator
              </h1>
              <div className="flex items-center space-x-4 text-lg text-gray-300">
                <span className="flex items-center"><MapPin className="w-5 h-5 mr-2" />Remote</span>
                <span className="flex items-center"><Clock className="w-5 h-5 mr-2" />Deltid/Heltid</span>
                <span className="flex items-center"><Zap className="w-5 h-5 mr-2" />Junior nivå</span>
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
                  Som junior content creator hos Skerry kommer du att skapa engagerande innehåll för våra kunders digitala kanaler, 
                  utveckla Skerrys egen marknadsföring och hjälpa småföretag att växa genom smart, målgruppsfokuserat innehåll. 
                  Du får arbeta med varierande projekt från sociala medier-kampanjer och webbinnehåll till strategisk content planning 
                  och varumärkesbyggande. Rollen ger dig möjlighet att både utveckla dina kreativa färdigheter och lära dig hur moderna 
                  AI-verktyg kan förstärka content creation-processen, samtidigt som du får direkt påverkan på hur både våra kunder 
                  och Skerry som företag kommunicerar med sina målgrupper.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Dina arbetsuppgifter</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Skapa engagerande innehåll för olika digitala plattformar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Utveckla content marketing-strategier för kunder och Skerrys egen marknadsföring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Skriva engagerande texter och copy för digitala kanaler</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Samarbeta med vårt sälj- och marknadsföringsteam</span>
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
                    <span className="text-lg text-gray-700">Erfarenhet eller intresse för digitala marknadsföringskanaler</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Kreativitet och en känsla för design och text</span>
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
                    <span className="text-lg text-gray-700">Vara med i ett innovativt företag som ligger i framkant inom AI och automation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Flexibel arbetstid och möjlighet till remote work</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Arbeta med de senaste AI-verktygen för content creation och marknadsföring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Möjlighet att växa inom digital marknadsföring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Konkurrenskraftig ersättning baserad på resultat och bidrag</span>
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
          </div>
        </div>
      </div>
    </div>
  );
}
