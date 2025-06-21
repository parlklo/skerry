import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock, Globe, Phone } from "lucide-react";
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
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black mb-6 text-warm-gray-900">
            Låt oss prata om<br />
            <span className="text-skerry-orange-500">ditt projekt</span>
          </h1>
          <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto leading-relaxed">
            Har du frågor om våra tjänster eller vill diskutera ditt projekt? 
            Skicka ett meddelande så återkommer vi så snart som möjligt.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200">
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
                <Label htmlFor="name" className="block text-sm font-semibold text-warm-gray-700 mb-2">
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
                  className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-skerry-orange-500 focus:border-transparent transition-colors"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-semibold text-warm-gray-700 mb-2">
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
                  className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-skerry-orange-500 focus:border-transparent transition-colors"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-semibold text-warm-gray-700 mb-2">
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
                  className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-skerry-orange-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Berätta kort om vad du vill diskutera eller ställ dina frågor här..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-skerry-orange-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-skerry-orange-600 transition-colors h-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Skickar...' : 'Skicka Meddelande'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white rounded-2xl p-8 border border-warm-gray-200">
              <h3 className="text-xl font-bold text-warm-gray-900 mb-4">Kontakta oss direkt</h3>
              <div className="space-y-3">
                <div className="flex items-center text-warm-gray-600">
                  <Mail className="mr-3 text-skerry-orange-500" size={20} />
                  <span>kasperparlklo@skerry.ai</span>
                </div>
                <div className="flex items-center text-warm-gray-600">
                  <Phone className="mr-3 text-skerry-orange-500" size={20} />
                  <span>+46 73 679 32 00</span>
                </div>
                <div className="flex items-center text-warm-gray-600">
                  <MapPin className="mr-3 text-skerry-orange-500" size={20} />
                  <span>Stockholm, Sverige</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-start">
                <Clock className="text-green-500 mr-3 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-green-800 mb-1">Svarar vanligtvis inom 24 timmar</div>
                  <div className="text-green-700 text-sm">Vi återkommer till dig så snart som möjligt.</div>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="text-blue-800">
                <div className="font-semibold mb-2">Redo att komma igång?</div>
                <div className="text-sm mb-3">
                  Om du redan vet vad du vill ha och är redo att börja, kan du kolla våra prisplaner och komma igång direkt.
                </div>
                <Link href="/services#prisplaner">
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 text-sm p-0 h-auto hover:bg-transparent">
                    Se prisplaner →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
