"use client"


import Link from "next/link"
import Image from "next/image"
import { Building, Home, Factory, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import ServiceAreaMap from "@/components/ServiceAreaMap"
import { useState } from "react"

export default function ProjektPage() {
  const projects = [
    // Kabbarp projektet (behållen)
    {
      title: "Kabbarp Orangerihousing",
      location: "Malmö",
      service: "Huvudarkitekt",
      description: "Innovativa bostäder med växthusintegrering.",
      icon: Home,
      category: "Hotell",
      images: [
        "/Kabbarp Orangeri Bild 1.png",
        "/Kabbarp Orangeri Bild 2.png"
      ]
    },

    // Bostadsprojekt (mindre egna projekt)
    {
      title: "Ringberga 7",
      location: "Malmö",
      type: "Fastighetsutveckling",
      service: "Fastighetsutveckling",
      description: "Utredning för utveckling av Ringberga 7 bestående av sex LSS-lägenheter samt tio radhus.",
      icon: Home,
      category: "Bostäder & Specialprojekt",
      images: [
        "/Ringberga projekt 1.jpg",
        "/Ringberga projekt 2.jpg"
      ]
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
      title: "Menzies Aviation",
      location: "Malmö Airport",
      service: "Huvudarkitekt",
      description: "Logistik- och kontorsbyggnader för flygplatsverksamhet.",
      icon: Factory,
      category: "Industri & Logistik",
      images: ["/Menzies Aviation Malmo Airport.png"]
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

  const categories = ["Alla", "Hotell", "Bostäder & Specialprojekt", "Industri & Logistik"]
  const [activeCategory, setActiveCategory] = useState("Alla")
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({})
  
  // Project showcase images
  const designImages = [
    { src: "/cad design of house.png", title: "Tekniska ritningar" },
    { src: "/cad design of house 2.jpg", title: "Detaljerade planritningar" },
    { src: "/Kabbarp Orangeri Bild 1.png", title: "Genomfört projekt" }
  ]
  const [currentDesignImage, setCurrentDesignImage] = useState(0)

  const filteredProjects = activeCategory === "Alla" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">

      {/* Hero Section with Gallery */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl mb-6">
              Referensprojekt
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg">
              Vår erfarenhet sträcker sig från småskaliga ombyggnationer till stora kommersiella projekt
            </p>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold text-white mb-6">
                Professionell projektering
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Vi levererar kompletta bygglovshandlingar och tekniska ritningar för alla typer av byggprojekt.
              </p>
              <div className="space-y-4 text-white/80">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2"></div>
                  <span>CAD-ritningar och detaljerade planritningar</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2"></div>
                  <span>Bygglovshandlingar enligt gällande bestämmelser</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2"></div>
                  <span>Konstruktionsritningar och teknisk dokumentation</span>
                </div>
              </div>
            </div>
            
            {/* Right side - Image Slideshow */}
            <div className="relative">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl bg-white">
                <Image
                  src={designImages[currentDesignImage].src}
                  alt={designImages[currentDesignImage].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Navigation buttons */}
                <button
                  onClick={() => setCurrentDesignImage(prev => prev === 0 ? designImages.length - 1 : prev - 1)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
                >
                  <ChevronLeft className="h-5 w-5 text-slate-700" />
                </button>
                <button
                  onClick={() => setCurrentDesignImage(prev => (prev + 1) % designImages.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
                >
                  <ChevronRight className="h-5 w-5 text-slate-700" />
                </button>
                
                {/* Image title overlay */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium">{designImages[currentDesignImage].title}</span>
                </div>
              </div>
              
              {/* Dots indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {designImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDesignImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentDesignImage ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
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
              const hasImages = project.images && project.images.length > 0
              const currentImg = currentImageIndex[index] || 0
              
              const nextImage = () => {
                if (hasImages) {
                  setCurrentImageIndex(prev => ({
                    ...prev,
                    [index]: (currentImg + 1) % project.images.length
                  }))
                }
              }
              
              const prevImage = () => {
                if (hasImages) {
                  setCurrentImageIndex(prev => ({
                    ...prev,
                    [index]: currentImg === 0 ? project.images.length - 1 : currentImg - 1
                  }))
                }
              }
              
              return (
                <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {/* Image Section */}
                  {hasImages && (
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={project.images[currentImg]}
                        alt={`${project.title} - Bild ${currentImg + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Navigation buttons - only show if multiple images */}
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
                          >
                            <ChevronLeft className="h-4 w-4 text-slate-700" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
                          >
                            <ChevronRight className="h-4 w-4 text-slate-700" />
                          </button>
                          
                          {/* Image indicators */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                            {project.images.map((_, imgIndex) => (
                              <div
                                key={imgIndex}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                  imgIndex === currentImg ? 'bg-white' : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                  
                  {/* Content Section */}
                  <div className="p-6">
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
