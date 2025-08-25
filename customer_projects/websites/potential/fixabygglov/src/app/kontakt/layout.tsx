import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt - FixaBygglov | Malmö & Skåne",
  description: "Kontakta oss för bygglovsritningar i Malmö och Skåne. Ring 0768 68 59 02 eller maila info@ark-kon.com. SITAC-certifierade konsulter inom arkitektur och kontrollansvar.",
  keywords: "kontakt bygglov malmö, bygglovsritningar skåne, arkitekt malmö kontakt, bygglovskonsult södra sverige",
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
