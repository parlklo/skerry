const PrivacyPolicyPage = () => {
    return (
      <main className="py-8">
        <h1 className="text-3xl font-bold mb-8">Integritetspolicy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="mb-6">
            Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduktion</h2>
          <p>
            Välkommen till Skerry AB:s ("vi", "vår", "oss") integritetspolicy. Din integritet är viktig för oss, och vi är engagerade i att skydda och respektera din personliga information.
          </p>
          <p>
            Denna policy beskriver hur vi samlar in, använder och skyddar personuppgifter när du använder vår webbplats (skerry.ai) och våra tjänster. Vi följer dataskyddsförordningen (GDPR) och andra tillämpliga dataskyddslagar.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information vi samlar in</h2>
          <p>Vi kan samla in följande typer av information:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Kontaktinformation (namn, e-postadress, telefonnummer, företagsnamn)</li>
            <li>Teknisk information (IP-adress, webbläsartyp, enhetsinformation)</li>
            <li>Användningsinformation (hur du interagerar med vår webbplats och tjänster)</li>
            <li>Kommunikation (e-post, telefonsamtal, mötesanteckningar)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Hur vi använder din information</h2>
          <p>Vi använder din information för att:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Tillhandahålla och förbättra våra tjänster</li>
            <li>Kommunicera med dig om våra tjänster</li>
            <li>Svara på dina förfrågningar och frågor</li>
            <li>Analysera och förbättra vår webbplats och tjänster</li>
            <li>Uppfylla våra juridiska skyldigheter</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Delning av information</h2>
          <p>
            Vi delar inte dina personuppgifter med tredje parter utan ditt samtycke, förutom i följande situationer:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Med tjänsteleverantörer som hjälper oss att driva vår verksamhet</li>
            <li>När det krävs enligt lag eller för att skydda våra rättigheter</li>
            <li>Vid en företagstransaktion, som en fusion eller försäljning av tillgångar</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Dataskydd</h2>
          <p>
            Vi implementerar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot oavsiktlig förlust, obehörig åtkomst eller olaglig behandling.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Dina rättigheter</h2>
          <p>Enligt GDPR har du följande rättigheter:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Rätt till tillgång till dina personuppgifter</li>
            <li>Rätt till rättelse av felaktiga uppgifter</li>
            <li>Rätt till radering ("rätten att bli bortglömd")</li>
            <li>Rätt till begränsning av behandling</li>
            <li>Rätt till dataportabilitet</li>
            <li>Rätt att invända mot behandling</li>
          </ul>
          <p>
            För att utöva dessa rättigheter, vänligen kontakta oss på <a href="mailto:privacy@skerry.ai" className="text-blue-300 hover:underline">privacy@skerry.ai</a>.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies</h2>
          <p>
            Vår webbplats använder cookies för att förbättra din upplevelse. Du kan ställa in din webbläsare att avvisa cookies, men detta kan begränsa din användning av vissa funktioner på vår webbplats.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Ändringar i denna policy</h2>
          <p>
            Vi kan uppdatera denna integritetspolicy från tid till annan. Vi kommer att meddela dig om väsentliga ändringar genom att publicera den nya policyn på vår webbplats.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Kontakta oss</h2>
          <p>
            Om du har frågor om denna integritetspolicy eller hur vi hanterar dina personuppgifter, vänligen kontakta oss på:
          </p>
          <p className="mt-4">
            Skerry AB<br />
            Kräftvägen 5<br />
            181 29 Stockholm<br />
            E-post: <a href="mailto:privacy@skerry.ai" className="text-blue-300 hover:underline">privacy@skerry.ai</a>
          </p>
        </div>
      </main>
    );
  };
  
  export default PrivacyPolicyPage;