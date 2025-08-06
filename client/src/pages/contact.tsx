import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock, Phone, UserRound } from "lucide-react";
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
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-black mb-6 text-white" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.6)' }}>
              Låt oss prata om<br />
              <span className="text-skerry-orange-400">ditt projekt</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>
              Har du frågor om våra tjänster eller vill diskutera ditt projekt? 
              Skicka ett meddelande så återkommer vi så snart som möjligt.
            </p>
          </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Skicka meddelande</h2>
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
          <div className="lg:col-span-2 space-y-6">
            {/* Team Section */}
            <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-6 text-center">Teamet bakom Skerry</h3>
              <div className="flex gap-4 justify-center">
                {/* Kasper */}
                <div className="text-center">
                  <div className="relative mb-3 mx-auto w-16 h-16">
                    <img
                      src="/Kasper%20portratt%20bild.jpg"
                      alt="Kasper Pärlklo"
                      className="w-16 h-16 rounded-xl object-cover shadow-lg ring-2 ring-skerry-orange-400/50"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-white font-semibold text-xs mb-1">Kasper Pärlklo</div>
                  <div className="text-skerry-orange-300 text-xs">Founder</div>
                </div>

                {/* Edward */}
                <div className="text-center">
                  <div className="relative mb-3 mx-auto w-16 h-16">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-skerry-orange-500 to-orange-600 flex items-center justify-center shadow-lg ring-2 ring-skerry-orange-400/50">
                      <UserRound className="text-white" size={24} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-white font-semibold text-xs mb-1">Edward Leiman</div>
                  <div className="text-skerry-orange-300 text-xs">Sälj & Affärsutveckling</div>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Kontaktinfo</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="mr-3 text-skerry-orange-400 flex-shrink-0" size={18} />
                  <span className="text-sm">kasperparlklo@skerry.ai</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="mr-3 text-skerry-orange-400 flex-shrink-0" size={18} />
                  <span className="text-sm">+46 73 679 32 00</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="mr-3 text-skerry-orange-400 flex-shrink-0" size={18} />
                  <span className="text-sm">Stockholm, Sverige</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-green-500/20 backdrop-blur-sm rounded-2xl p-5 border border-green-400/30">
              <div className="flex items-start">
                <Clock className="text-green-400 mr-3 mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <div className="font-semibold text-green-300 mb-1 text-sm">Svar inom 24h</div>
                  <div className="text-green-200 text-xs">Vi återkommer snabbt</div>
                </div>
              </div>
            </div>




          </div>
        </div>


      </div>
    </section>
    </div>
  );
}


