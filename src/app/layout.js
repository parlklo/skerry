// src/app/layout.js
import "./styles/globals.css";
import { Noto_Sans } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";


export const metadata = {
  title: "Skerry",
  description: "Skerry hjälper organisationer att förstå AIs möjligheter genom ett skifte i både arbetssätt och tankesätt",
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