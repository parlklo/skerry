import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Success() {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    // Hämta session ID från URL för verifiering
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');
    if (sessionId) {
      setSessionId(sessionId);
      // Här kan du lägga till ytterligare verifiering mot din backend om nödvändigt
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-4 text-green-700">Tack för din beställning!</h1>
      <p className="text-lg mb-2 text-center max-w-xl">
        Vi har tagit emot din betalning och påbörjar nu arbetet med din beställning.
        Du får snart ett bekräftelsemail med mer information.
      </p>
      {sessionId && (
        <p className="text-sm text-gray-500 mb-4">
          Beställningsnummer: {sessionId.slice(-8)}
        </p>
      )}
      <p className="text-md text-gray-600 mb-6 text-center max-w-xl">
        Om du har några frågor är du alltid välkommen att kontakta oss.
      </p>
      <Link href="/">
        <button className="bg-skerry-orange-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-skerry-orange-600 transition">Till startsidan</button>
      </Link>
    </div>
  );
} 