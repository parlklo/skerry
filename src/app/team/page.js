// src/app/team/page.js

'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const TeamPage = () => {
  const [selectedPersonId, setSelectedPersonId] = useState(null);
  const detailsRef = useRef(null);
  
  const teamMembers = [
    {
      id: 1,
      name: "Kasper Pärlklo",
      title: "Founder",
      image: "/Parlklo-Kasper-sd.jpg", // Uppdatera med korrekt bildsökväg
      bio: `
        Jag har en masterexamen i ekonomi och finans från HEC Paris. Tidigare har jag 
        en kandidatexamen i finans från USA, där jag även spelade Division 1-tennis. 
        Min karriär inkluderar erfarenhet inom equity capital markets och tech M&A i Sverige. 
        Vid sidan av studierna och karriären har jag drivit en blogg om tech och 
        entreprenörskap, samt deltagit i ett VC-scoutprogram.
      `,
      email: "kasper@skerry.ai",
      linkedin: "https://linkedin.com/in/kasperparlklo"
    }
  ];

  // Lägg till en event listener för att stänga detaljvyn när användaren klickar utanför
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedPersonId && detailsRef.current && !detailsRef.current.contains(event.target)) {
        setSelectedPersonId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedPersonId]);

  return (
    <main className="py-8 relative">
      {/* Overlay som visas när en person är vald */}
      {selectedPersonId && (
        <div className="fixed inset-0 bg-blue-900/70 z-10" onClick={() => setSelectedPersonId(null)}></div>
      )}
      
      <div className={`relative ${selectedPersonId ? 'z-20' : ''}`}>
        <h1 className="text-4xl font-bold mb-8">Möt teamet</h1>
        
        <p className="max-w-3xl mb-12">
          Välkommen till Skerry! Vi erbjuder stöd och investeringar till innovativa tech- och startupbolag. Kontakta
          oss gärna via vårt formulär för mer information.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((person) => (
            <div key={person.id} className="relative">
              {/* Porträtt och namn - alltid synliga */}
              <div 
                className="cursor-pointer"
                onClick={() => setSelectedPersonId(person.id)}
              >
                <div className="mb-4">
                  <Image 
                    src={person.image} 
                    alt={person.name}
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h2 className="text-xl font-medium">{person.name}</h2>
                <p className="text-lg">{person.title}</p>
              </div>
              
              {/* Detaljerad information - visas endast när personen är vald */}
              {selectedPersonId === person.id && (
                <div 
                  ref={detailsRef}
                  className="absolute top-0 left-0 bg-white rounded-lg p-8 text-gray-900 shadow-xl z-30"
                  style={{ width: 'calc(100% + 4rem)', marginLeft: '-2rem' }}
                >
                  <div className="mb-6">
                    <Image 
                      src={person.image} 
                      alt={person.name}
                      width={400}
                      height={400}
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-medium">{person.name}</h2>
                    <p className="text-xl text-gray-600">{person.title}</p>
                  </div>
                  
                  <div className="mb-6 text-gray-700">
                    <p className="mb-4">{person.bio}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p>{person.email}</p>
                    <a 
                      href={person.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block border-b border-gray-800 hover:border-gray-600"
                    >
                      LinkedIn
                    </a>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPersonId(null);
                    }}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    aria-label="Stäng"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TeamPage;
