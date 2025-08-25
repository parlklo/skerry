import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building, Home, Factory, MapPin } from "lucide-react"

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
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
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  category === "Alla" 
                    ? "bg-amber-500 hover:bg-amber-600 text-white shadow-lg transform hover:scale-105" 
                    : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="h-10 w-10 text-amber-400" />
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/30">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                  <div className="flex items-center text-sm text-white/70 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="text-sm font-medium text-amber-300 mb-2">
                    {project.type}
                  </div>
                  {project.service && (
                    <div className="text-xs bg-blue-500/20 backdrop-blur-sm text-blue-200 px-3 py-1 rounded-full border border-blue-300/30 mb-4 w-fit">
                      {project.service}
                    </div>
                  )}
                  <p className="text-white/80">
                    {project.description}
                  </p>
                </div>
              )
            })}
          </div>



          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
                Har du ett projekt i åtanke?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
                Låt oss hjälpa dig att förverkliga din vision. Vi erbjuder kostnadsfri konsultation och besöker dig på plats.
              </p>
              <Link 
                href="/kontakt"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
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
