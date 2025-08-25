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
      location: "Olika platser",
      type: "Nybyggnation",
      service: "Projektering och bygglov",
      description: "Nybyggnationer av passivhus med fokus på energieffektivitet.",
      icon: Home,
      category: "Bostäder"
    },
    {
      title: "Lågenergihus",
      location: "Olika platser",
      type: "Nybyggnation",
      service: "Projektering och bygglov",
      description: "Nybyggnationer av lågenergihus med optimal energiprestanda.",
      icon: Home,
      category: "Bostäder"
    },
    {
      title: "Kulturskyddade hus",
      location: "Olika platser",
      type: "Om- och tillbyggnation",
      service: "Projektering och bygglov",
      description: "Om- och tillbyggnationer av äldre och kulturskyddade hus med varsam hantering.",
      icon: Building,
      category: "Specialprojekt"
    },
    {
      title: "Gårdar till andligt centrum",
      location: "Olika platser",
      type: "Ombyggnation",
      service: "Fastighetsutveckling",
      description: "Ombyggnation av flera gårdar till andligt centrum.",
      icon: Building,
      category: "Specialprojekt"
    },
    {
      title: "Pensionat med verksamheter",
      location: "Olika platser", 
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





      {/* Projects Section */}
      <section className="py-16">
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
