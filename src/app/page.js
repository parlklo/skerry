import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="py-20">
      {/* Header with left alignment and controlled width */}
      <header className="max-w-2xl mb-12">
        <h1 className="text-2xl md:text-3xl font-semibold mb-14">
          Skerry gör ert företag smartare – med hjälp av AI.
        </h1>
        
        <div className="space-y-6 text-base md:text-lg">
          <p>
            Artificiell intelligens omformar världen i en takt och omfattning som saknar motstycke bland tidigare teknologiska skiften. Förändringen påverkar allt – från hur länder styrs till hur företag byggs – och allt sker i ett rasande tempo.
          </p>
          <p>
            Med det sagt så är det i denna nya verklighet lättare än någonsin att bli föråldrad. Traditionella arbetssätt har tappat sin relevans, samtidigt som förändringens höga tempo gör det svårt att navigera, skapa överblick och förstå utvecklingens riktning.
          </p>
          <p className="text-base md:text-lg">
          Det är i den här kontexten Skerry verkar och hjälper er att navigera det som just nu förändrar spelreglerna för både produktivitet och problemlösning. För att använda AI handlar inte bara om att införa nya verktyg – det kräver också ett nytt sätt att tänka och förhålla sig på. Det innebär att omvärdera arbetsprocesser, hur information struktureras och hur man fördelar tid mest effektivt.
          </p>
          <p>
          Det handlar med andra ord om ett perspektivskifte – en mental omställning som utmanar invanda roller, hur värde skapas och prioriteringar sätts.
          </p>
        </div>
      </header>
      
      {/* CTA Section - same width as header */}
      <section className="mt-6 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Redo att transformera ert företag?
        </h2>
        <Link href="/kontakt">
          <button
            className="px-6 py-3 rounded-md font-medium transition-colors hover:opacity-90 bg-white text-blue-900"
          >
            Ta kontakt 
          </button>
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
