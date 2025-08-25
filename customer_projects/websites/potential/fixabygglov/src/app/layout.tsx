import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FixaBygglov - Arkitektur, Konstruktion & VVS | Malmö & Södra Sverige",
  description: "Professionella bygglovsritningar och projektering i Malmö och Södra Sverige. SITAC-certifierade konsulter inom arkitektur, konstruktion och VVS. Kontrollansvar och projektledning.",
  keywords: "bygglovsritningar malmö, bygglov skåne, arkitekt malmö, konstruktör södra sverige, kontrollansvarig malmö, projektering skåne, bygglovshandlingar, VVS projektering malmö",
  authors: [{ name: "FixaBygglov" }],
  creator: "FixaBygglov",
  publisher: "FixaBygglov",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
    yandex: '',
    other: {
      'msvalidate.01': '',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://fixabygglov.com',
    siteName: 'FixaBygglov',
    title: 'FixaBygglov - Bygglovsritningar Malmö & Södra Sverige',
    description: 'Professionella bygglovsritningar och projektering i Malmö och Södra Sverige. SITAC-certifierade konsulter inom arkitektur, konstruktion och VVS.',
    images: [{
      url: '/landing page lakehouse.svg',
      width: 1200,
      height: 630,
      alt: 'FixaBygglov - Bygglovsritningar Malmö & Södra Sverige',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FixaBygglov - Bygglovsritningar Malmö & Södra Sverige',
    description: 'Professionella bygglovsritningar och projektering i Malmö och Södra Sverige. SITAC-certifierade konsulter.',
    images: ['/landing page lakehouse.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "FixaBygglov",
              "description": "Professionella bygglovsritningar och projektering i Malmö och Södra Sverige. SITAC-certifierade konsulter inom arkitektur, konstruktion och VVS.",
              "url": "https://fixabygglov.com",
              "telephone": "+46768685902",
              "email": "info@ark-kon.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Husmansvägen 11",
                "postalCode": "218 45",
                "addressLocality": "Vintrie",
                "addressRegion": "Skåne",
                "addressCountry": "SE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "55.6050",
                "longitude": "13.0038"
              },
              "areaServed": [
                {
                  "@type": "Place",
                  "name": "Malmö"
                },
                {
                  "@type": "Place", 
                  "name": "Skåne"
                },
                {
                  "@type": "Place",
                  "name": "Södra Sverige"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Bygglovstjänster",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bygglovsritningar",
                      "description": "Professionella bygglovsritningar med kontrollansvar"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Kontrollansvar",
                      "description": "SITAC-certifierad kontrollansvarig för byggprojekt"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Fastighetsutveckling",
                      "description": "Planering och utveckling av fastighetsprojekt"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "VVS Projektering",
                      "description": "VVS- och ventilationsritningar för byggprojekt"
                    }
                  }
                ]
              },
              "openingHours": "Mo-Fr 08:00-17:00",
              "sameAs": [
                "https://fixabygglov.com"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* Global Background Image - covers entire page */}
        <div className="fixed inset-0 -z-10">
          <img 
            src="/landing page lakehouse.svg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Page content - flexible height */}
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
