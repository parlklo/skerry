"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kontakta oss
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Behöver du bygglovsritningar eller projektering? Hör av dig så hjälper vi dig.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Skicka meddelande</CardTitle>
                  <p className="text-gray-600">
                    Fyll i formuläret så kontaktar vi dig
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Namn *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ditt namn"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Ditt telefonnummer"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="din@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Ämne</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Vad gäller ditt projekt?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Meddelande *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Berätta mer om ditt projekt..."
                        rows={6}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      style={{backgroundColor: '#16A34A'}}
                    >
                      {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
                    </Button>

                    {/* Status meddelanden */}
                    {submitStatus === 'success' && (
                      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-800 font-medium">
                          ✅ Tack! Ditt meddelande har skickats. Vi kontaktar dig inom kort.
                        </p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800 font-medium">
                          ❌ Något gick fel. Försök igen eller kontakta oss direkt via e-post.
                        </p>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Kontaktuppgifter</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 mt-1" style={{color: '#16A34A'}} />
                    <div>
                      <h3 className="font-semibold">Telefon</h3>
                      <p className="text-gray-600">+46 768 68 59 02</p>

                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 mt-1" style={{color: '#16A34A'}} />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@ark-kon.com</p>

                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 mt-1" style={{color: '#16A34A'}} />
                    <div>
                      <h3 className="font-semibold">Adress</h3>
                      <p className="text-gray-600">
                        Husmansvägen 11<br />
                        218 45 Vintrie
                      </p>
                    </div>
                  </div>

                  {/* Certifieringar - RISE i fokus */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <h3 className="font-medium text-slate-800 mb-4">Våra certifieringar</h3>
                    
                    {/* RISE i fokus - flyttad överst */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img 
                          src="/Rise certifikat Kontrollansvarig.png" 
                          alt="RISE" 
                          className="h-10 w-10 object-contain"
                        />
                        <div>
                          <div className="text-base font-bold text-green-800">RISE Nivå K</div>
                          <div className="text-sm text-green-600">Komplicerade konstruktioner</div>
                        </div>
                      </div>
                      <div className="text-sm text-slate-700 leading-relaxed">
                        Vår RISE-certifiering på nivå K utfärdas inom ramen för Swedac-systemet och innebär kvalifikation 
                        för komplicerade konstruktioner med högsta kvalitetsstandard.
                      </div>
                    </div>
                    
                    {/* Huvudcertifieringar - mindre framträdande */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white border border-slate-200 rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                        <img 
                          src="/SP Sitac.png" 
                          alt="SP SITAC" 
                          className="w-full h-10 object-contain mb-2"
                        />
                        <div className="text-xs font-medium text-slate-700">SITAC Certifierad</div>
                        <div className="text-xs text-slate-500">SC0477-11</div>
                      </div>
                      
                      <div className="bg-white border border-slate-200 rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                        <img 
                          src="/swedac.png" 
                          alt="Swedac" 
                          className="w-full h-10 object-contain mb-2"
                        />
                        <div className="text-xs font-medium text-slate-700">Swedac Ackrediterat</div>
                        <div className="text-xs text-slate-500">Kvalitetssäkring</div>
                      </div>
                    </div>
                    
                    <p className="text-xs text-slate-600">
                      Certifierade inom kontrollansvar, kvalitetssäkring och komplicerade konstruktioner
                    </p>
                  </div>
                </CardContent>
              </Card>


            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
