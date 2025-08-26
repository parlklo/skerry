"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building, Home, Factory, MapPin } from "lucide-react"
import { useState } from "react"

export default function ProjektPage() {
  const projects = [
    {
      title: "Kvarteret Björnen",
      location: "Centrala Malmö",
      type: "Ombyggnation",
      service: "Projektering och bygglov",
      description: "Ombyggnation av kvarteret Björnen i centrala Malmö.",
      icon: Building,
      category: "Kommersiellt"
    },
    {
      title: "Baltzar City",
      location: "Centrala Malmö", 
      type: "Nybyggnation",
      service: "Projektering och bygglov",
      description: "Nybyggnation av Baltzar City i centrala Malmö.",
      icon: Building,
      category: "Kommersiellt"
    },
    {
      title: "TNT Logistik- och kontorsbyggnader",
      location: "Sturups flygplats",
      type: "Nybyggnation",
      service: "Projektering och bygglov",
      description: "TNT:s logistik- och kontorsbyggnader vid Sturups flygplats.",
      icon: Building,
      category: "Kommersiellt"
    },
    {
      title: "Menzies Logistik- och kontorsbyggnader",
      location: "Sturups flygplats",
      type: "Nybyggnation",
      service: "Projektering och bygglov", 
      description: "Menzies logistik- och kontorsbyggnader vid Sturups flygplats.",
      icon: Building,
      category: "Kommersiellt"
    },
    {
      title: "Ringberga 7",
      location: "Malmö",
      type: "Fastighetsutveckling",
      service: "Fastighetsutveckling",
      description: "Utredning för utveckling av Ringberga 7 bestående av sex LSS-lägenheter samt tio radhus.",
      icon: Home,
      category: "Bostäder"
    },
    {
      title: "Passivhus",
      location: "Södra Sverige",
      type: "Nybyggnation",
      service: "Projektering och bygglov",
      description: "Nybyggnationer av passivhus med fokus på energieffektivitet.",
      icon: Home,
      category: "Bostäder"
    },
    {
      title: "Lågenergihus",
      location: "Södra Sverige",
      type: "Nybyggnation",
      service: "Projektering och bygglov",
      description: "Nybyggnationer av lågenergihus med optimal energiprestanda.",
      icon: Home,
      category: "Bostäder"
    },
    {
      title: "Kulturskyddade hus",
      location: "Södra Sverige",
      type: "Om- och tillbyggnation",
      service: "Projektering och bygglov",
      description: "Om- och tillbyggnationer av äldre och kulturskyddade hus med varsam hantering.",
      icon: Building,
      category: "Specialprojekt"
    },
    {
      title: "Gårdar till andligt centrum",
      location: "Södra Sverige",
      type: "Ombyggnation",
      service: "Fastighetsutveckling",
      description: "Ombyggnation av flera gårdar till andligt centrum.",
      icon: Building,
      category: "Specialprojekt"
    },
    {
      title: "Pensionat med verksamheter",
      location: "Södra Sverige", 
      type: "Ombyggnation",
      service: "Fastighetsutveckling",
      description: "Pensionat med tillhörande butik, konstnärsverkstad och övernattningslägenheter.",
      icon: Building,
      category: "Specialprojekt"
    }
  ]

  const categories = ["Alla", "Kommersiellt", "Bostäder", "Specialprojekt"]
  const [activeCategory, setActiveCategory] = useState("Alla")

  const filteredProjects = activeCategory === "Alla" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl mb-6">
            Referensprojekt
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg">
            Vår erfarenhet sträcker sig från småskaliga ombyggnationer till stora kommersiella projekt
          </p>
        </div>
      </section>





      {/* Service Area Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Vårt verksamhetsområde
          </h2>
          <p className="text-lg text-slate-700 mb-12 max-w-3xl mx-auto">
            Vi arbetar främst i Södra Sverige med fokus på Malmö och omkringliggande kommuner i Skåne.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Visual Coverage Illustration */}
            <div className="bg-gradient-to-br from-slate-50 to-green-50 border border-slate-200 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Central network visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main coverage circle */}
                  <div className="relative">
                    <div className="w-32 h-32 bg-green-100 rounded-full border-4 border-green-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <MapPin className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Surrounding location dots */}
                    {/* Top */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-4 h-4 bg-green-400 rounded-full shadow-md"></div>
                    </div>
                    
                    {/* Top Right */}
                    <div className="absolute -top-6 -right-6">
                      <div className="w-3 h-3 bg-green-400 rounded-full shadow-md"></div>
                    </div>
                    
                    {/* Right */}
                    <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                      <div className="w-4 h-4 bg-green-400 rounded-full shadow-md"></div>
                    </div>
                    
                    {/* Bottom Right */}
                    <div className="absolute -bottom-6 -right-6">
                      <div className="w-3 h-3 bg-green-400 rounded-full shadow-md"></div>
                    </div>
                    
                    {/* Bottom */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-4 h-4 bg-green-400 rounded-full shadow-md"></div>
                    </div>
                    
                    {/* Bottom Left */}
                    <div className="absolute -bottom-6 -left-6">
                      <div className="w-3 h-3 bg-green-400 rounded-full shadow-md"></div>
                    </div>
                    
                    {/* Left */}
                    <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
                      <div className="w-4 h-4 bg-green-400 rounded-full shadow-md"></div>
                    </div>
                    
                    {/* Top Left */}
                    <div className="absolute -top-6 -left-6">
                      <div className="w-3 h-3 bg-green-400 rounded-full shadow-md"></div>
                    </div>
                    
                    {/* Connection lines */}
                    <div className="absolute inset-0 opacity-30">
                      <svg className="w-full h-full" viewBox="0 0 128 128">
                        <circle cx="64" cy="64" r="50" fill="none" stroke="#16a34a" strokeWidth="1" strokeDasharray="3,3" />
                        <circle cx="64" cy="64" r="30" fill="none" stroke="#16a34a" strokeWidth="1" strokeDasharray="2,2" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Bottom indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-green-200 shadow-sm">
                    <span className="text-xs font-medium text-slate-700">Södra Sverige</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Coverage areas */}
            <div className="text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Primära verksamhetsområden</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#16A34A'}}></div>
                    <span className="text-slate-700">Malmö</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#16A34A'}}></div>
                    <span className="text-slate-700">Lund</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#16A34A'}}></div>
                    <span className="text-slate-700">Helsingborg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#16A34A'}}></div>
                    <span className="text-slate-700">Landskrona</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#16A34A'}}></div>
                    <span className="text-slate-700">Höganäs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#16A34A'}}></div>
                    <span className="text-slate-700">Ängelholm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#16A34A'}}></div>
                    <span className="text-slate-700">Vellinge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#16A34A'}}></div>
                    <span className="text-slate-700">Trelleborg</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-6 italic">
                Vi tar även uppdrag i andra delar av Södra Sverige efter överenskommelse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                  activeCategory === category
                    ? "text-white shadow-lg transform scale-105" 
                    : "bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-200 hover:border-slate-300"
                }`}
                style={activeCategory === category ? {backgroundColor: '#16A34A'} : undefined}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="h-10 w-10" style={{color: '#16A34A'}} />
                    <span className="text-xs bg-green-50 text-slate-700 px-3 py-1 rounded-full border border-green-200">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <div className="flex items-center text-sm text-slate-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" style={{color: '#16A34A'}} />
                    {project.location}
                  </div>
                  <div className="text-sm font-medium mb-2" style={{color: '#16A34A'}}>
                    {project.type}
                  </div>
                  {project.service && (
                    <div className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200 mb-4 w-fit">
                      {project.service}
                    </div>
                  )}
                  <p className="text-slate-700">
                    {project.description}
                  </p>
                </div>
              )
            })}
          </div>



          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white border border-slate-200 rounded-3xl p-12 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Har du ett projekt i åtanke?
              </h2>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                Behöver du bygglovsritningar eller projektering?
              </p>
              <Link 
                href="/kontakt"
                className="text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                style={{backgroundColor: '#16A34A'}}
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
