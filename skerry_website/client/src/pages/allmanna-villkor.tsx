export default function AlmannaVillkor() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black mb-6 text-warm-gray-900">
            Allmänna villkor
          </h1>
          <p className="text-sm text-warm-gray-500 mt-4">
            Senast uppdaterad: 23-07-2025
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-4">1. Tjänster</h2>
                <p className="text-warm-gray-700 leading-relaxed">
                  Skerry tillhandahåller webbutvecklingstjänster, inklusive design, utveckling och lansering av hemsidor. Hosting via tredjepartsleverantör ingår som en del av erbjudandet och är kopplad till en löpande månadsavgift. I den återkommande tjänsten kan även viss teknisk support, säkerhetsuppdateringar och innehållsändringar ingå, beroende på vald plan.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-4">2. Priser och betalning</h2>
                <p className="text-warm-gray-700 leading-relaxed">
                  Priser anges exklusive moms om inget annat anges. Engångsbelopp faktureras vid projektstart eller enligt särskild överenskommelse. Löpande tjänster debiteras månadsvis i förskott via angivet betalsätt (kort- eller autogiro via Stripe).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-4">3. Uppsägning och bindningstid</h2>
                <p className="text-warm-gray-700 leading-relaxed mb-4">
                  Löpande tjänster kan sägas upp med 30 dagars uppsägningstid. Uppsägningstid räknas från dagen då Skerry mottagit skriftligt besked via e-post. Tjänsten fortsätter till slutet av din nuvarande månad plus 30 dagar från uppsägningsdatum. Redan betalda avgifter återbetalas inte.
                </p>
                <div>
                  <h4 className="font-semibold mb-2 text-warm-gray-900">Datauttag:</h4>
                  <p className="text-warm-gray-700 leading-relaxed">
                    Efter uppsägning ges kunden 30 dagar att begära uttag av sitt innehåll.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-4">4. Kundens ansvar</h2>
                <p className="text-warm-gray-700 leading-relaxed mb-4">
                  Kunden ansvarar för att:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-warm-gray-700">
                  <li>Tillhandahålla korrekt material (texter, bilder och företagsuppgifter)</li>
                  <li>Kontrollera att slutprodukten motsvarar deras förväntningar</li>
                  <li>Säkerställa att innehållet på hemsidan inte strider mot svensk lag</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-4">5. Drift och underhåll</h2>
                <p className="text-warm-gray-700 leading-relaxed">
                  Skerry strävar efter hög tillgänglighet och säkerhet men kan inte garantera oavbruten drift. Driftstörningar kan förekomma vid exempelvis tekniska uppdateringar eller avbrott hos tredjepartsleverantörer. Skerry utför regelbundna säkerhetskopior men kunden ansvarar för att säkerställa att viktigt innehåll säkerhetskopieras separat.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-4">6. Äganderätt och licens</h2>
                <div className="space-y-4 text-warm-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2 text-warm-gray-900">Immateriella rättigheter:</h4>
                    <p className="leading-relaxed">
                      All källkod, struktur, mallar, designkomponenter och tekniska lösningar som utvecklats av Skerry förblir Skerrys egendom, om inte annat uttryckligen avtalats. Kunden erhåller en icke-exklusiv, icke-överlåtbar licens att använda den färdiga webbplatsen så länge avtalet är i kraft och betalning sker enligt överenskommelse.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-warm-gray-900">Kundens innehåll:</h4>
                    <p className="leading-relaxed">
                      Kunden äger samtliga rättigheter till det material som denne själv tillhandahåller, såsom logotyp, texter, bilder och övrigt innehåll. Skerry har rätt att använda detta material i syfte att skapa och underhålla webbplatsen, men förvärvar inga rättigheter till innehållet i sig.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-warm-gray-900">Begränsningar:</h4>
                    <p className="leading-relaxed">
                      Kunden får inte utan skriftligt medgivande kopiera, återanvända eller distribuera delar av webbplatsens kod eller design för andra syften än den avsedda webbplatsen.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-warm-gray-900">Vid uppsägning:</h4>
                    <p className="leading-relaxed">
                      När avtalet upphör förlorar kunden rätten att använda webbplatsen och all data raderas. Skerry förbehåller sig rätten att återanvända generella mallar eller kodkomponenter i andra projekt.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-4">7. Personuppgifter och GDPR</h2>
                <p className="text-warm-gray-700 leading-relaxed">
                  Skerry behandlar personuppgifter i enlighet med GDPR och svensk dataskyddslagstiftning. Personuppgifter som samlas in används endast för att fullgöra avtalet och tillhandahålla tjänster. Kunden har rätt att begära information om, rättelse av eller radering av sina personuppgifter. Mer information finns i vår integritetspolicy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-4">8. Ångerrätt</h2>
                <p className="text-warm-gray-700 leading-relaxed">
                  Konsumenter har 14 dagars ångerrätt från köpdatum enligt distansavtalslagen. Ångerrätten gäller inte om arbetet påbörjats på kundens uttryckliga begäran och kunden har bekräftat att ångerrätten därmed upphör.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-4">9. Support och responstider</h2>
                <p className="text-warm-gray-700 leading-relaxed mb-4">
                  Support tillhandahålls via e-post och telefon. Vi strävar efter att svara så snabbt vi kan på alla förfrågningar.
                </p>
                <div>
                  <h4 className="font-semibold mb-2 text-warm-gray-900">Akut support:</h4>
                  <p className="text-warm-gray-700 leading-relaxed">
                    Vid kritiska problem som påverkar webbplatsens tillgänglighet prioriterar vi dessa ärenden.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-4">10. Ändringar och tilläggsarbete</h2>
                <p className="text-warm-gray-700 leading-relaxed mb-4">
                  Den löpande månadsavgiften täcker hosting, drift, säkerhet och teknisk support. Alla innehållsändringar och uppdateringar av webbplatsen faktureras separat.
                </p>
                <div className="space-y-4 text-warm-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2 text-warm-gray-900">Ändringar och uppdateringar:</h4>
                    <p className="leading-relaxed mb-2">
                      Alla ändringar av innehåll, design eller funktionalitet faktureras enligt vår timdebitering på <strong>1 000 SEK per timme exklusive moms</strong>. Detta inkluderar men är inte begränsat till:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-3">
                      <li>Textändringar och innehållsuppdateringar</li>
                      <li>Bildbyten och nya bilder</li>
                      <li>Designjusteringar</li>
                      <li>Nya sidor eller funktioner</li>
                      <li>SEO-optimeringar</li>
                    </ul>
                    <p className="leading-relaxed">
                      <strong>Fakturering sker per påbörjad kvart (15 minuter)</strong> med en minimidebitering om 15 minuter per ärende. Ändringar ska begäras skriftligt via e-post och kostnadsförslag lämnas innan arbetet påbörjas vid större uppdrag.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-warm-gray-900">Godkännande av arbete:</h4>
                    <p className="leading-relaxed">
                      För arbete som överstiger 2 timmar lämnas kostnadsförslag innan arbetet påbörjas. Kunden ansvarar för att godkänna kostnaden skriftligt. Mindre ändringar (under 2 timmar) utförs direkt och faktureras enligt ovanstående.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-4">11. Ansvarsbegränsning</h2>
                <p className="text-warm-gray-700 leading-relaxed">
                  Skerry ansvarar inte för indirekta skador, utebliven vinst, dataförlust eller skador som uppstår till följd av tredje parts handlingar.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-4">12. Force Majeure</h2>
                <p className="text-warm-gray-700 leading-relaxed">
                  Skerry är inte ansvarig för förseningar eller bristande prestanda som orsakas av omständigheter utanför vårt rimliga inflytande, inklusive men inte begränsat till naturkatastrofer, krig, terrorism, pandemier, myndighetsbeslut, avbrott i telekommunikationer eller internet, eller fel hos tredjepartsleverantörer av hosting eller andra kritiska tjänster. Vid sådana omständigheter kan projektleveranser eller tjänster tillfälligt pausas utan att Skerry blir ersättningsskyldigt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-4">13. Konkurs och betalningsinställelse</h2>
                <p className="text-warm-gray-700 leading-relaxed">
                  Vid kundens konkurs, betalningsinställelse eller liknande upphör avtalet omedelbart. Skerry förbehåller sig rätten att begära säkerhet för framtida betalningar om kundens ekonomiska situation försämras väsentligt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-4">14. Ändringar av villkor</h2>
                <p className="text-warm-gray-700 leading-relaxed">
                  Skerry förbehåller sig rätten att uppdatera dessa villkor. Vid väsentliga förändringar meddelas kunden via e-post minst 30 dagar i förväg. Fortsatt användning av tjänsten efter meddelad ändring innebär att kunden accepterar de nya villkoren.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-warm-gray-900 mb-4">15. Tvist och tillämplig lag</h2>
                <p className="text-warm-gray-700 leading-relaxed">
                  Eventuella tvister regleras enligt svensk lag med Stockholms tingsrätt som första instans. Parterna förbinder sig att i första hand försöka lösa eventuella tvister genom förhandling.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-warm-gray-200">
                <p className="text-warm-gray-700 leading-relaxed font-medium">
                  <strong>Dessa villkor träder i kraft vid godkännande av offert eller vid första beställning och gäller till dess att nya villkor träder i kraft.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 