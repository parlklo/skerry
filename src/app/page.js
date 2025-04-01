// src/app/page.js
const HomePage = () => {
  return (
    <main className="py-20">
      {/* Header with left alignment and controlled width */}
      <header className="max-w-2xl mb-16">
        <h1 className="text-2xl md:text-3xl font-semibold mb-14">
          Skerry gör ert företag smartare och mer produktivt – med hjälp av AI.
        </h1>
        
        <div className="space-y-4 text-base md:text-lg">
          <p>
            Artificiell intelligens omformar världen i en takt och omfattning som saknar motstycke bland tidigare teknologiska skiften. Den här transformationen omformar hur länder styrs, industrier opererar och företag byggs - och allt sker i ett rasande tempo.
          </p>
          <p>
            Med det sagt så är det i denna nya verklighet lättare än någonsin att bli föråldrad. Traditionella arbetssätt har tappat sin relevans, samtidigt som förändringens tempo gör det svårt att orientera sig, skapa överblick eller förstå i vilken riktning utvecklingen egentligen rör sig.
          </p>
          <p>
            Det är i den kontexten Skerry verkar. Skerry hjälper er att översätta AI-utvecklingen till konkreta arbetssätt och nya sätt att tänka – så att ert företag blir smartare. Att ha tillgång till AI som en del av sin kognitiva verktygslåda innebär att börja se möjligheter på nya sätt, ställa andra typer av frågor och angripa problem med ett nytt tempo och förhållningssätt. För AI handlar inte bara om nya verktyg, utan om ett nytt perspektiv - en mental omställning i hur man ser på produktivitet, processer och själva fundamentet för hur företag drivs.
          </p>
        </div>
      </header>
      
      {/* CTA Section - same width as header */}
      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Redo att transformera ert företag?
        </h2>
        <button
          className="px-6 py-3 rounded-md font-medium transition-colors hover:opacity-90 bg-white text-blue-900"
        >
          Kontakta oss
        </button>
      </section>
      
      {/* Footer - same width as header */}

    </main>
  );
};

export default HomePage;


