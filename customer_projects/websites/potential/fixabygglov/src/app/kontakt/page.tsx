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

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      style={{backgroundColor: '#16A34A'}}
                    >
                      {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
                    </button>

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
                          ❌ Något gick fel. Försök igen eller ring oss på +46 768 68 59 02.
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

                  {/* Modern architectural illustration */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="bg-gradient-to-br from-green-50 to-slate-50 rounded-xl p-6">
                      <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-xs">
                          <svg className="w-full h-24" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Simple house illustration */}
                            <g opacity="0.7">
                              {/* House base */}
                              <rect x="60" y="35" width="80" height="40" fill="#16A34A" rx="2" />
                              {/* Roof */}
                              <polygon points="55,35 100,15 145,35" fill="#064e3b" />
                              {/* Door */}
                              <rect x="90" y="50" width="12" height="25" fill="white" rx="1" />
                              {/* Windows */}
                              <rect x="70" y="45" width="12" height="12" fill="white" rx="1" />
                              <rect x="118" y="45" width="12" height="12" fill="white" rx="1" />
                              {/* Chimney */}
                              <rect x="120" y="20" width="8" height="15" fill="#064e3b" />
                            </g>
                            
                            {/* Decorative elements */}
                            <g opacity="0.4">
                              {/* Trees */}
                              <circle cx="30" cy="55" r="12" fill="#16A34A" />
                              <rect x="28" y="60" width="4" height="15" fill="#065f46" />
                              
                              <circle cx="170" cy="50" r="10" fill="#16A34A" />
                              <rect x="168" y="55" width="4" height="20" fill="#065f46" />
                              
                              {/* Ground line */}
                              <line x1="10" y1="75" x2="190" y2="75" stroke="#16A34A" strokeWidth="2" opacity="0.3" />
                            </g>
                          </svg>
                          
                          {/* Text below illustration */}
                          <div className="text-center mt-3">
                            <div className="text-sm font-medium text-slate-700">
                              Vi hjälper dig med ditt byggprojekt
                            </div>
                            <div className="text-xs text-slate-500 mt-1">
                              Från idé till färdig ritning
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
