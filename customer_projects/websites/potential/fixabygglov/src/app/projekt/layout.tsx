import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Referensprojekt - FixaBygglov | Malmö & Skåne",
  description: "Se våra genomförda bygglovsprojekt i Malmö och Skåne för Skanska, NCC, Veidekke och PEAB. Från passivhus till kommersiella komplex och kulturskyddade byggnader i Södra Sverige.",
  keywords: "bygglovsprojekt malmö, referensprojekt skåne, arkitekturprojekt södra sverige, bygglovsritningar exempel",
}

export default function ProjektLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
