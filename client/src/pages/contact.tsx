import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Calendar, Mail, MapPin, Clock } from "lucide-react";

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
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black mb-6 text-warm-gray-900">
            Let's talk about<br />
            <span className="text-skerry-orange-500">your project</span>
          </h1>
          <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to modernize your business online? Let's discuss your goals and 
            see how we can help you grow digitally.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-semibold text-warm-gray-700 mb-2">
                  Your Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-skerry-orange-500 focus:border-transparent transition-colors"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-semibold text-warm-gray-700 mb-2">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-skerry-orange-500 focus:border-transparent transition-colors"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-semibold text-warm-gray-700 mb-2">
                  Tell us about your business and project
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:ring-2 focus:ring-skerry-orange-500 focus:border-transparent transition-colors resize-none"
                  placeholder="What type of business do you run? What are you hoping to achieve with a new website? Any specific features you need?"
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-skerry-orange-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-skerry-orange-600 transition-colors h-auto"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Alternative Contact Options */}
          <div className="space-y-8">
            {/* Book Meeting */}
            <div className="bg-warm-gray-100 rounded-2xl p-8">
              <div className="mb-4">
                <Calendar className="text-skerry-orange-500 text-2xl mb-3" size={32} />
                <h3 className="text-xl font-bold text-warm-gray-900 mb-2">Prefer to talk directly?</h3>
                <p className="text-warm-gray-600 mb-4">
                  Schedule a free consultation to discuss your website needs and get personalized recommendations.
                </p>
              </div>
              <Button className="bg-warm-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-warm-gray-800 transition-colors">
                Book a Free Consultation
              </Button>
            </div>

            {/* Direct Contact */}
            <div className="bg-white rounded-2xl p-8 border border-warm-gray-200">
              <h3 className="text-xl font-bold text-warm-gray-900 mb-4">Or reach out directly</h3>
              <div className="space-y-3">
                <div className="flex items-center text-warm-gray-600">
                  <Mail className="mr-3 text-skerry-orange-500" size={20} />
                  <span>hello@skerry.co</span>
                </div>
                <div className="flex items-center text-warm-gray-600">
                  <MapPin className="mr-3 text-skerry-orange-500" size={20} />
                  <span>Remote, but happy to meet in person if you're nearby</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-start">
                <Clock className="text-green-500 mr-3 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-green-800 mb-1">Usually respond within 24 hours</div>
                  <div className="text-green-700 text-sm">Often much faster, but I want to give you a thoughtful response.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
