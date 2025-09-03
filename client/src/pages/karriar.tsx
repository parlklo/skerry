import {
  Users,
  Briefcase,
  Clock,
  MapPin,
  Brain,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Declare gtag for TypeScript
declare global {
  function gtag(...args: any[]): void;
}

export default function Karriar() {
  const handleApplyClick = () => {
    // Track conversion in Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'job_application', {
        event_category: 'career',
        event_label: 'junior_content_creator',
        value: 1
      });
    }
    // Open Tally form in new tab/window
    window.open('https://karriar.skerry.ai/', '_blank');
  };

  const handleSalesApplyClick = () => {
    // Track conversion in Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'job_application', {
        event_category: 'career',
        event_label: 'sales_role',
        value: 1
      });
    }
    // Open email client for sales role
    window.open('mailto:kasperparlklo@gmail.com?subject=Ansökan - Deltidsroll Försäljning&body=Hej Kasper,%0D%0A%0D%0AJag är intresserad av deltidsrollen inom försäljning.%0D%0A%0D%0AOm mig:%0D%0A[Berätta kort om dig själv]%0D%0A%0D%0AVarför jag skulle vara en bra match:%0D%0A[Dina tankar här]%0D%0A%0D%0AMvh,%0D%0A[Ditt namn]');
  };

  const handleOpenApplicationClick = () => {
    // Track conversion in Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'job_application', {
        event_category: 'career',
        event_label: 'open_application',
        value: 1
      });
    }
    // Open email client for open application
    window.open('mailto:kasperparlklo@gmail.com?subject=Öppen ansökan - Skerry&body=Hej Kasper,%0D%0A%0D%0AJag är intresserad av att arbeta hos Skerry men ser ingen specifik roll som passar.%0D%0A%0D%0AOm mig:%0D%0A[Berätta om din bakgrund]%0D%0A%0D%0AVad jag kan bidra med:%0D%0A[Dina färdigheter och intressen]%0D%0A%0D%0AMvh,%0D%0A[Ditt namn]');
  };

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
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-skerry-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Junior Content Creator</h2>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Remote</span>
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />Deltid/Heltid</span>
                </div>
              </div>

              <p className="text-gray-700 text-center mb-6 leading-relaxed flex-grow">
                Skapa engagerande innehåll för kunders digitala kanaler, utveckla Skerrys egen marknadsföring och hjälp småföretag att växa genom smart, målgruppsfokuserat innehåll.
              </p>

              <div className="mt-auto">
                <Button 
                  onClick={handleApplyClick}
                  className="w-full bg-skerry-orange-500 hover:bg-skerry-orange-600 text-white py-3 text-lg font-semibold mb-3"
                >
                  Ansök nu
                </Button>
                <Link href="/karriar/junior-content-creator">
                  <Button 
                    variant="outline"
                    className="w-full py-3 text-sm"
                  >
                    Läs mer om rollen
                  </Button>
                </Link>
              </div>


            </div>

            {/* Job 2: Sales Role */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col h-full">
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

              <p className="text-gray-700 text-center mb-6 leading-relaxed flex-grow">
                Självständigt extrajobb inom försäljning parallellt med studier. Få praktisk erfarenhet av både försäljning och AI-verktyg.
              </p>

              <div className="mt-auto">
                <Button 
                  onClick={handleSalesApplyClick}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg font-semibold mb-3"
                >
                  Ansök nu
                </Button>
                <Link href="/karriar/sales">
                  <Button 
                    variant="outline"
                    className="w-full py-3 text-sm"
                  >
                    Läs mer om rollen
                  </Button>
                </Link>
              </div>


            </div>

            {/* Job 3: Open Application */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Öppen ansökan</h2>
                <div className="text-sm text-gray-600">
                  <span>Ser du inte en roll som passar?</span>
                </div>
              </div>

              <p className="text-gray-700 text-center mb-6 leading-relaxed flex-grow">
                Vi växer snabbt och är alltid intresserade av att träffa talangfulla personer. Har du färdigheter som skulle kunna passa Skerry?
              </p>

              <div className="space-y-3 mt-auto">
                <Button 
                  onClick={handleOpenApplicationClick}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 text-lg font-semibold"
                >
                  Ansök nu
                </Button>
                
                {/* Invisible spacer to match other cards */}
                <div className="h-10"></div>
              </div>


            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
