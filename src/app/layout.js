// src/app/layout.js
import "./styles/globals.css";
import { Noto_Sans } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";


export const metadata = {
  title: "AI Produktivitetslösningar",
  description: "Vi hjälper ert företag att bli mer produktivt genom AI",
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="sv" className={notoSans.variable}>
      <body className="antialiased text-white min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
        <Footer />
        <Analytics /> {/* <-- Add this line here */}
      </body>
    </html>
  );
}