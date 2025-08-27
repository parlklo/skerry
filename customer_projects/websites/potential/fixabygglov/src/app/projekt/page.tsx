"use client"


import Link from "next/link"
import { Building, Home, Factory, MapPin } from "lucide-react"
import ServiceAreaMap from "@/components/ServiceAreaMap"
import { useState } from "react"

export default function ProjektPage() {
  const projects = [
    // Kommersiella projekt
    {
      title: "World Trade Center",
      location: "Lund",
      service: "Huvudarkitekt",
      description: "Kommersiellt center med moderna kontorslokaler.",
      icon: Building,
      category: "Kommersiellt"
    },
    {
      title: "Point Hyllie",
      location: "Malmö",
      service: "Deltagande arkitekt",
      description: "Modern kommersiell utveckling i Hyllie.",
      icon: Building,
      category: "Kommersiellt"
    },
    {
      title: "Parking House World Trade Center",
      location: "Lund",
      service: "Huvudarkitekt",
      description: "Parkeringshus kopplat till World Trade Center.",
      icon: Building,
      category: "Industri & Logistik"
    },
    // Hotellprojekt (Hotels Residential från portfolion)
    {
      title: "SAS Park Inn Hotel",
      location: "Malmö",
      service: "Deltagande arkitekt",
      description: "Modernt hotell i centrala Malmö.",
      icon: Building,
      category: "Hotell"
    },
    {
      title: "Kabbarp Orangerihousing",
      location: "Malmö",
      service: "Huvudarkitekt",
      description: "Innovativa bostäder med växthusintegrering.",
      icon: Home,
      category: "Hotell"
    },
    {
      title: "Flaggskep 6",
      location: "Malmö",
      service: "Huvudarkitekt",
      description: "Moderna bostäder i attraktivt läge.",
      icon: Home,
      category: "Hotell"
    },
    {
      title: "Kaptens Housing",
      location: "Malmö",
      service: "Deltagande arkitekt",
      description: "Bostadsprojekt med maritim anknytning.",
      icon: Home,
      category: "Hotell"
    },
    {
      title: "Radisson Blue Hotel",
      location: "Helsingborg",
      service: "Huvudarkitekt",
      description: "Lyxhotell med modern design i Helsingborg.",
      icon: Building,
      category: "Hotell"
    },
    {
      title: "Zero Energi Housing",
      location: "Glumslöv",
      service: "Deltagande arkitekt",
      description: "Energieffektiva bostäder med nollenergikoncept.",
      icon: Home,
      category: "Hotell"
    },
    // Bostadsprojekt (mindre egna projekt)
    {
      title: "Ringberga 7",
      location: "Malmö",
      type: "Fastighetsutveckling",
      service: "Fastighetsutveckling",
      description: "Utredning för utveckling av Ringberga 7 bestående av sex LSS-lägenheter samt tio radhus.",
      icon: Home,
      category: "Bostäder & Specialprojekt"
    },
    {
      title: "Passivhus",
      location: "Södra Sverige",
      type: "Nybyggnation",
      service: "Projektering och bygglov",
      description: "Nybyggnationer av passivhus med fokus på energieffektivitet.",
      icon: Home,
      category: "Bostäder & Specialprojekt"
    },
    {
      title: "Lågenergihus",
      location: "Södra Sverige",
      type: "Nybyggnation",
      service: "Projektering och bygglov",
      description: "Nybyggnationer av lågenergihus med optimal energiprestanda.",
      icon: Home,
      category: "Bostäder & Specialprojekt"
    },
    // Industri & Logistikprojekt
    {
      title: "Max Lab IV",
      location: "Lund",
      service: "Deltagande arkitekt",
      description: "Avancerat laboratorium för vetenskaplig forskning.",
      icon: Factory,
      category: "Industri & Logistik"
    },
    {
      title: "Menzies Aviation",
      location: "Malmö Airport",
      service: "Huvudarkitekt",
      description: "Logistik- och kontorsbyggnader för flygplatsverksamhet.",
      icon: Factory,
      category: "Industri & Logistik"
    },
    // Specialprojekt
    {
      title: "Kulturskyddade hus",
      location: "Södra Sverige",
      type: "Om- och tillbyggnation",
      service: "Projektering och bygglov",
      description: "Om- och tillbyggnationer av äldre och kulturskyddade hus med varsam hantering.",
      icon: Building,
      category: "Bostäder & Specialprojekt"
    },
    {
      title: "Gårdar till andligt centrum",
      location: "Södra Sverige",
      type: "Ombyggnation",
      service: "Fastighetsutveckling",
      description: "Ombyggnation av flera gårdar till andligt centrum.",
      icon: Building,
      category: "Bostäder & Specialprojekt"
    },
    {
      title: "Pensionat med verksamheter",
      location: "Södra Sverige", 
      type: "Ombyggnation",
      service: "Fastighetsutveckling",
      description: "Pensionat med tillhörande butik, konstnärsverkstad och övernattningslägenheter.",
      icon: Building,
      category: "Bostäder & Specialprojekt"
    }
  ]

  const categories = ["Alla", "Kommersiellt", "Hotell", "Bostäder & Specialprojekt", "Industri & Logistik"]
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
            <ServiceAreaMap />
            
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
                  {project.type && (
                    <div className="text-sm font-medium mb-2" style={{color: '#16A34A'}}>
                      {project.type}
                    </div>
                  )}
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
