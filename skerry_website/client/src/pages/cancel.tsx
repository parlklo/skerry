import { Link } from "wouter";

export default function Cancel() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-4 text-red-600">Betalning avbruten</h1>
      <p className="text-lg mb-2 text-center max-w-xl">
        Du har avbrutit betalningen. Ingen debitering har skett.
      </p>
      <p className="text-md text-gray-600 mb-6 text-center max-w-xl">
        Om du vill försöka igen kan du gå tillbaka till våra tjänster.
      </p>
      <Link href="/services">
        <button className="bg-skerry-orange-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-skerry-orange-600 transition">Till tjänster</button>
      </Link>
    </div>
  );
} 