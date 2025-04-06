// src/app/team/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';

const TeamPage = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Kasper Pärlklo",
      title: "Founder",
      image: "/Parlklo-Kasper-sd.jpg",
      bio: `
Jag läser just nu en master i ekonomi och finans vid HEC Paris och har en kandidatexamen i finans från University of Illinois at Chicago, där jag under fyra år kombinerade mina studier med att tävla som NCAA Division 1-tennisspelare.

Min bakgrund är inom finans, med fokus på tech M&A, där jag samarbetat med bolag inom mjukvara, automation och IT-tjänster. Erfarenheten sträcker sig från entreprenörsledda tillväxtbolag till större industrikoncerner. Tidigare har jag även arbetat inom equity capital markets, där jag stöttat bolag i kapitalresningar och börsförberedelser. Parallellt har jag byggt upp teknisk kompetens inom dataanalys och programmering genom både studier och egna projekt.
Under 2025 startade jag också en blogg om tech och AI, som ett sätt att hjälpa mig tänka klart och förstå det jag själv tycker är intressant.      `,
      email: "kasperparlklo@skerry.ai",
      phone: "+46 736 79 32 00",
      linkedin: "https://linkedin.com/in/kasperparlklo",
      blog: "https://www.kasperparlklo.com"
    }
  ];

  return (
    <main className="py-8 relative min-h-[calc(100vh-200px)]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Kontaktinformation</h1>
        
        {/* Contact Information Section */}
        <div className="bg-white/5 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
          <p className="mb-6">
            Har du frågor eller vill veta mer om hur Skerry kan hjälpa ditt företag?<br />
            Kontakta mig gärna via e-post eller telefon.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Kontaktuppgifter</h3>
              <p className="mb-1 text-gray-300 whitespace-nowrap">E-post: kasperparlklo@skerry.ai</p>
              <p className="text-gray-300 whitespace-nowrap">Telefon: +46 736 79 32 00</p>
            </div>
            <div className="md:col-start-3">
              <h3 className="text-lg font-medium mb-2">Adress</h3>
              <p className="mb-0.5 text-gray-300">Remote Office</p>
              <p className="text-gray-300">113 57 Stockholm</p>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((person) => (
              <div key={person.id} className="bg-white/5 rounded-lg p-6">
                <div 
                  className="cursor-pointer"
                  onClick={() => setSelectedPerson(person)}
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
                  <h3 className="text-xl font-medium">{person.name}</h3>
                  <p className="text-lg mb-4">{person.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedPerson && (
        <div 
          className="fixed inset-0 z-50 bg-gray-700/60 flex items-center justify-center px-4 py-10"
          onClick={() => setSelectedPerson(null)}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="relative max-w-lg w-full bg-white p-8 text-gray-900 shadow-xl rounded-lg max-h-[80vh] overflow-auto"
          >
            <div className="mb-6">
              <Image
                src={selectedPerson.image}
                alt={selectedPerson.name}
                width={400}
                height={400}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h2 className="text-2xl font-medium">{selectedPerson.name}</h2>
              <p className="text-xl text-gray-600">{selectedPerson.title}</p>
            </div>
            <div className="mb-6 text-gray-700">
              <p className="whitespace-pre-line">{selectedPerson.bio}</p>
            </div>
            <div>
              <a
                href={selectedPerson.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b border-gray-800 hover:border-gray-600 mr-4"
              >
                LinkedIn
              </a>
              <a
                href={selectedPerson.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b border-gray-800 hover:border-gray-600"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default TeamPage;
