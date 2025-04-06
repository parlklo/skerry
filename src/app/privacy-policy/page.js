import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Integritetspolicy för Skerry AB</h1>
        <p className="text-sm text-gray-300 mb-8">Senast uppdaterad: 1 april 2025</p>

        <div className="space-y-6 text-gray-200">
          <p>
            Skerry AB respekterar den personliga integriteten hos alla som besöker webbplatsen skerry.ai eller på annat sätt kommer i kontakt med bolaget. Denna integritetspolicy förklarar hur Skerry behandlar personuppgifter, vilka uppgifter som samlas in, i vilket syfte, och hur dessa uppgifter hanteras i enlighet med dataskyddsförordningen (GDPR).
          </p>

          <p>
            Skerry samlar i nuläget inte in någon information om besökare i marknadsförings- eller spårningssyfte genom cookies. Däremot används anonymiserad tracking för att förstå trafiken till webbplatsen. Denna lösning är cookiefri och samlar endast in anonymiserad teknisk information, såsom antal sidvisningar och besök per geografisk region, utan att identifiera enskilda användare.
          </p>

          <p>
            Om en person väljer att kontakta Skerry via e-post eller annan kommunikationskanal, kommer de uppgifter som tillhandahålls – exempelvis namn, e-postadress, företagsnamn och innehållet i meddelandet – att sparas i ett CRM-system. Syftet är att kunna föra en relevant och sammanhängande dialog över tid samt följa upp på affärsrelaterade förfrågningar. Skerry behandlar sådana uppgifter med stöd i berättigat intresse, och uppgifterna används inte i marknadsföringssyfte utan den kontaktades uttryckliga samtycke.
          </p>

          <p>
            Personuppgifter delas inte med tredje part, förutom i de fall där det är nödvändigt för teknisk drift – till exempel för att lagra kontaktuppgifter i ett externt CRM-system – eller där Skerry enligt lag är skyldig att lämna ut information. Alla underleverantörer är noggrant utvalda och åtar sig att behandla uppgifterna i enlighet med gällande dataskyddslagstiftning.
          </p>

          <p>
            Skerry lagrar personuppgifter endast så länge de är relevanta för det syfte de samlats in för. På begäran raderas uppgifter utan dröjsmål, förutsatt att det inte finns rättsliga skyldigheter att bevara dem.
          </p>

          <p>
            Alla individer vars uppgifter behandlas av Skerry har enligt GDPR rätt att begära tillgång till sina personuppgifter, att få felaktiga uppgifter rättade, att få uppgifter raderade, att invända mot behandlingen samt att begära dataportabilitet. Sådana förfrågningar kan skickas till kasperparlklo@skerry.ai och hanteras skyndsamt.
          </p>

          <p>
            Om integritetspolicyn uppdateras kommer detta att tydliggöras på webbplatsen. För frågor eller synpunkter rörande behandlingen av personuppgifter går det bra att kontakta:
          </p>

          <div className="mt-2 space-y-2">
            <p className="leading-none">Skerry AB</p>
            <p className="leading-none">Remote Office</p>
            <p className="leading-none">113 57 Stockholm</p>
            <p className="leading-none">E-post: kasperparlklo@skerry.ai</p>
          </div>
        </div>
      </div>
    </div>
  );
}