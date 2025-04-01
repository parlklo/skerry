// src/app/layout.js
import "./styles/globals.css";
import { Noto_Sans } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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
      <body className="antialiased bg-gradient-to-br from-blue-700 to-blue-950 text-white flex flex-col min-h-screen">
        <Navbar />
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}