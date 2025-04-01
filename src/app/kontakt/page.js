// src/app/kontakt/page.js
const ContactPage = () => {
  return (
    <main className="py-8">
      <h1 className="text-4xl font-bold mb-8">Kontakt</h1>
      
      <p className="max-w-md mb-6">
        Har du frågor eller vill veta mer om hur vi kan hjälpa ditt företag? Kontakta oss gärna via e-post eller
        telefon.
      </p>
      
      <div className="max-w-md bg-white rounded-lg p-6 text-gray-900 shadow-md">
        <h2 className="text-2xl font-medium mb-2">Kasper Pärlklo</h2>
        <p className="text-lg text-gray-600 mb-5">Founder</p>
        
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-gray-600 w-20">E-post:</span>
            <a href="mailto:kasperparlklo@skerry.ai" className="text-blue-800 hover:underline">
              kasperparlklo@skerry.ai
            </a>
          </div>
          
          <div className="flex items-start">
            <span className="text-gray-600 w-20">Telefon:</span>
            <a href="tel:+46701234567" className="text-blue-800 hover:underline">
              +46 70 123 45 67
            </a>
          </div>
          
          <div className="flex items-start">
            <span className="text-gray-600 w-20">Adress:</span>
            <div>
              <p>Kräftvägen 5</p>
              <p>181 29 Stockholm</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;