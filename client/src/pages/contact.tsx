import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, MapPin, Clock, Globe, Phone, UserRound } from "lucide-react";
import { Link } from "wouter";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isKasperModalOpen, setIsKasperModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('Form submitted!', formData); // Debug log
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      console.log('Sending to API...'); // Debug log
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response:', response); // Debug log
      const data = await response.json();
      console.log('Response data:', data); // Debug log

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Meddelandet har skickats!'
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Ett fel uppstod. Försök igen senare.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Ett fel uppstod. Kontrollera din internetanslutning och försök igen.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-black mb-6 text-white" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.6)' }}>
              Låt oss prata om<br />
              <span className="text-skerry-orange-400">ditt projekt</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>
              Har du frågor om våra tjänster eller vill diskutera ditt projekt? 
              Skicka ett meddelande så återkommer vi så snart som möjligt.
            </p>
          </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
            <form className="space-y-6" onSubmit={handleSubmit} method="POST" noValidate>
              {/* Status Messages */}
              {submitStatus.type && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <div>
                <Label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Ditt Namn
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-skerry-orange-500 focus:border-skerry-orange-400 transition-colors text-white placeholder-white/60"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  E-postadress
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-skerry-orange-500 focus:border-skerry-orange-400 transition-colors text-white placeholder-white/60"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Meddelande
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-skerry-orange-500 focus:border-skerry-orange-400 transition-colors resize-none text-white placeholder-white/60"
                  placeholder="Berätta kort om vad du vill diskutera eller ställ dina frågor här..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-skerry-orange-500 to-orange-500 hover:from-skerry-orange-600 hover:to-orange-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl h-auto disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? 'Skickar...' : 'Skicka Meddelande'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Kontakta oss direkt</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="mr-3 text-skerry-orange-400" size={20} />
                  <span>kasperparlklo@skerry.ai</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="mr-3 text-skerry-orange-400" size={20} />
                  <span>+46 73 679 32 00</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="mr-3 text-skerry-orange-400" size={20} />
                  <span>Stockholm, Sverige</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
              <div className="flex items-start">
                <Clock className="text-green-400 mr-3 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-green-300 mb-1">Svarar vanligtvis inom 24 timmar</div>
                  <div className="text-green-200 text-sm">Vi återkommer till dig så snart som möjligt.</div>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-skerry-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-skerry-orange-400/30">
              <div className="text-white">
                <div className="font-semibold mb-2">Redo att komma igång?</div>
                <div className="text-sm mb-3 text-gray-300">
                  Om du redan vet vad du vill ha och är redo att börja, kan du kolla våra prisplaner och komma igång direkt.
                </div>
                <Link href="/services#prisplaner">
                  <Button variant="ghost" className="text-skerry-orange-300 hover:text-skerry-orange-200 text-sm p-0 h-auto hover:bg-transparent">
                    Se prisplaner →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mt-20 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.6)' }}>Vårt Team</h2>
            <div className="h-1 w-16 bg-skerry-orange-400 rounded-full mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Founder */}
            <Card className="flex flex-col items-center p-8 relative max-w-sm bg-black/30 backdrop-blur-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:border-skerry-orange-400/50 shadow-xl">
              <CardHeader className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src="/Kasper%20portratt%20bild.jpg"
                    alt="Kasper Pärlklo porträtt"
                    className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-skerry-orange-100"
                  />
                </div>
                <CardTitle className="text-center text-xl text-white">Kasper Pärlklo</CardTitle>
                <CardDescription className="text-center text-base mt-1 text-skerry-orange-400 font-medium">Grundare</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="text-center text-sm text-gray-300 mb-3">Kontakt: kasperparlklo@skerry.ai</p>
                <button
                  className="mt-2 text-skerry-orange-400 hover:text-skerry-orange-300 hover:underline text-sm font-medium transition-colors"
                  onClick={() => setIsKasperModalOpen(true)}
                >
                  Läs mer om Kasper →
                </button>
              </CardContent>
              {/* Modal för Kasper */}
              {isKasperModalOpen && (
                <>
                  {/* Overlay över kortet */}
                  <div className="absolute inset-0 bg-black/30 rounded-xl z-40 animate-fadeIn" onClick={() => setIsKasperModalOpen(false)} />
                  {/* Modal ovanpå kortet */}
                  <div className="absolute left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 animate-slideUp">
                    <div className="flex flex-col items-center p-8 relative bg-white rounded-xl shadow-2xl border-2 border-transparent max-w-sm mx-auto">
                      <button
                        className="absolute top-4 right-4 text-skerry-orange-500 hover:text-skerry-orange-700 text-2xl font-bold"
                        onClick={() => setIsKasperModalOpen(false)}
                        aria-label="Stäng"
                      >
                        ×
                      </button>
                      <div className="flex flex-col items-center w-full">
                        <h3 className="text-xl font-bold text-center mb-2 text-skerry-orange-600">Om Kasper Pärlklo</h3>
                        <p className="text-center text-sm text-gray-600 leading-relaxed">
                          Kasper har en masterexamen från HEC Paris och har erfarenhet från dussintals webbprojekt i olika former. Målet med Skerry är att erbjuda professionella webbtjänster till marknadens bästa pris för mindre företagare som tidigare kanske inte känt att det varit värt investeringen.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Card>
            {/* Sales */}
            <Card className="flex flex-col items-center p-8 relative max-w-sm bg-black/30 backdrop-blur-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:border-skerry-orange-400/50 shadow-xl">
              <CardHeader className="flex flex-col items-center">
                <div className="flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 mb-4 ring-4 ring-white/20">
                  <UserRound className="text-gray-400" size={52} />
                </div>
                <CardTitle className="text-center text-xl text-white">Edward Leiman</CardTitle>
                <CardDescription className="text-center text-base mt-1 text-gray-300 font-medium">Sälj & Affärsutveckling</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="text-center text-sm text-gray-300 mb-3">Kontakt: edwardleiman@skerry.ai</p>
                <p className="text-center text-sm text-transparent select-none">placeholder</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
